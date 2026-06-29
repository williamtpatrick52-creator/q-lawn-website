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