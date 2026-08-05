// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const t=document.querySelector(a.getAttribute('href'));
    if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}
  });
});
// Hamburger toggle
const ham=document.querySelector('.hamburger');
const mm=document.getElementById('mm9');
if(ham&&mm){
  ham.setAttribute('aria-label','Toggle navigation');
  ham.setAttribute('aria-expanded','false');
  ham.setAttribute('role','button');
  ham.setAttribute('tabindex','0');
  function toggleMenu(){
    const open=mm.style.display==='flex';
    mm.style.display=open?'none':'flex';
    ham.setAttribute('aria-expanded',String(!open));
  }
  ham.addEventListener('click',toggleMenu);
  ham.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();toggleMenu();}});
  // Close menu when clicking a link inside it
  mm.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mm.style.display='none';ham.setAttribute('aria-expanded','false');}));
  // Close on outside click
  document.addEventListener('click',e=>{if(!ham.contains(e.target)&&!mm.contains(e.target)){mm.style.display='none';ham.setAttribute('aria-expanded','false');}});
}

// Netlify Forms: submit via fetch so a captured lead lands on the custom
// thank-you page instead of the browser navigating to a POST endpoint (a
// native POST to the static /thank-you.html path returned a Netlify 404).
// The static form keeps its data-netlify + hidden form-name attributes, so
// Netlify still detects and records the submission; this only controls where
// the visitor is sent afterward. Runs only after HTML5 required-validation passes.
const estForm=document.querySelector('form[name="free-estimate"]');
if(estForm){
  estForm.addEventListener('submit',e=>{
    e.preventDefault();
    const dest=estForm.getAttribute('action')||'/thank-you.html';
    const body=new URLSearchParams(new FormData(estForm)).toString();
    fetch('/',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body})
      .then(()=>window.location.assign(dest))
      .catch(()=>window.location.assign(dest));
  });
}