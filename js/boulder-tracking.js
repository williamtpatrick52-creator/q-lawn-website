// Q Lawn — custom boulder interest-test tracking.
//
// Measures: (1) homepage boulder-section clicks, (2) visits to /custom-boulders with where the visitor
// came from (homepage vs search vs direct), (3) clicks on individual concept images / styles.
//
// Analytics provider: the site had NO analytics installed when this was built (audited 2026-10-12).
// This file is GA4-ready. Paste the GA4 Measurement ID below (looks like "G-XXXXXXXXXX") and the
// gtag library is loaded and every event is forwarded. While it is empty, nothing is loaded, no
// request leaves the page, and events are only kept in window.qlEvents (visible in the console).
var QL_GA_ID = "G-G7FX3B3JQ4";   // Q Lawn Landscaping GA4 property (web stream https://qlawnlandscaping.com/)

(function () {
  var q = window.qlEvents = window.qlEvents || [];
  var gaReady = false;

  function loadGA(id) {
    if (!/^G-[A-Z0-9]{6,}$/.test(id)) return;
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    var s = document.createElement("script");
    s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + id;
    document.head.appendChild(s);
    window.gtag("js", new Date());
    window.gtag("config", id, { anonymize_ip: true });
    gaReady = true;
  }

  function track(name, props) {
    var ev = { event: name, ts: new Date().toISOString(), page: location.pathname, props: props || {} };
    q.push(ev);
    if (window.console && console.debug) console.debug("[ql-track]", name, ev.props);
    if (gaReady && typeof window.gtag === "function") { try { window.gtag("event", name, ev.props); } catch (e) {} }
    if (typeof window.QL_ANALYTICS_SEND === "function") { try { window.QL_ANALYTICS_SEND(name, ev.props); } catch (e) {} }
  }
  window.qlTrack = track;

  // Where did this visit come from? ?ref=home / ?ref=home-footer are set on the homepage links;
  // otherwise classify by the HTTP referrer (search engine, another site, or direct/none).
  function entrySource() {
    var qs = new URLSearchParams(location.search);
    var ref = (qs.get("ref") || "").toLowerCase();
    var via = (qs.get("via") || "").toLowerCase().slice(0, 40);
    if (ref.indexOf("home") === 0) return { entry_source: "homepage", ref: ref, via: via || "unknown" };
    var r = (document.referrer || "").toLowerCase();
    if (!r) return { entry_source: "direct", ref: "" };
    if (r.indexOf(location.hostname) !== -1) return { entry_source: "site", ref: "" };
    if (/google\.|bing\.|duckduckgo\.|yahoo\.|ecosia\.|brave\./.test(r)) return { entry_source: "search", ref: "" };
    return { entry_source: "referral", ref: r.slice(0, 80) };
  }

  loadGA(QL_GA_ID);

  // Click hooks: any element with data-track="event_name" (+ data-track-label / data-track-style).
  // For a plain link click (same tab, no modifier keys) navigation is held until GA confirms the hit,
  // max 300 ms, so the homepage section click is not lost when the page unloads.
  document.addEventListener("click", function (e) {
    var el = e.target.closest && e.target.closest("[data-track]");
    if (!el) return;
    var props = { label: el.getAttribute("data-track-label") || (el.textContent || "").trim().slice(0, 60) };
    var style = el.getAttribute("data-track-style"); if (style) props.concept = style;
    var href = el.getAttribute("href"); if (href) props.href = href;
    var navigates = el.tagName === "A" && href && !/^#/.test(href) && el.target !== "_blank" &&
                    e.button === 0 && !(e.metaKey || e.ctrlKey || e.shiftKey || e.altKey);
    if (navigates) {
      // carry the clicked tile into the destination URL (?via=...), so the landing page's
      // boulder_page_view records which homepage element was clicked even if this beacon is lost
      var dest = new URL(el.href, location.href);
      dest.searchParams.set("via", props.label.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40));
      props.transport_type = "beacon";
      if (gaReady) {
        e.preventDefault();
        var done = false, go = function () { if (!done) { done = true; window.location.href = dest.href; } };
        props.event_callback = go;
        setTimeout(go, 300);
      } else {
        el.href = dest.href;
      }
    }
    track(el.getAttribute("data-track"), props);
  }, true);

  // Page-view hook: boulder page only (GA4 also records its own page_view automatically).
  if (document.body && document.body.getAttribute("data-page") === "boulders") {
    track("boulder_page_view", entrySource());
  }

  // Lightbox for concept / style photos. Opening one is the tracked click above.
  var lb = document.getElementById("lb");
  if (lb) {
    var img = lb.querySelector("img"), cap = lb.querySelector(".lb-cap");
    document.querySelectorAll("[data-lb-src]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        img.src = btn.getAttribute("data-lb-src"); img.alt = btn.getAttribute("data-lb-alt") || "";
        cap.textContent = btn.getAttribute("data-lb-cap") || "";
        lb.classList.add("open"); document.body.style.overflow = "hidden";
      });
    });
    function close() { lb.classList.remove("open"); document.body.style.overflow = ""; }
    lb.addEventListener("click", close);
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") close(); });
  }
})();
