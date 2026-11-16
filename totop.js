(function(){
  var css = '.totop{position:fixed;right:clamp(16px,3vw,28px);bottom:clamp(16px,3vw,28px);z-index:60;width:48px;height:48px;border-radius:50%;border:0;background:#173a2e;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 10px 24px -8px rgba(21,25,26,.45);opacity:0;visibility:hidden;transform:translateY(12px);transition:opacity .3s,transform .3s,visibility .3s,background .2s}'
    + '.totop.on{opacity:1;visibility:visible;transform:none}'
    + '.totop:hover{background:#245443}'
    + '.totop:focus-visible{outline:2px solid #245443;outline-offset:3px}'
    + '.totop svg{width:20px;height:20px;fill:none;stroke:currentColor;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round}'
    + '@media print{.totop{display:none}}';
  var st = document.createElement('style');
  st.textContent = css;
  document.head.appendChild(st);
  var b = document.createElement('button');
  b.type = 'button';
  b.className = 'totop';
  b.setAttribute('aria-label', 'Voltar ao topo');
  b.title = 'Voltar ao topo';
  b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
  b.addEventListener('click', function(){
    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({top: 0, behavior: reduce ? 'auto' : 'smooth'});
  });
  document.body.appendChild(b);
  var tick = false;
  function upd(){ b.classList.toggle('on', window.scrollY > 600); tick = false; }
  window.addEventListener('scroll', function(){ if(!tick){ tick = true; requestAnimationFrame(upd); } }, {passive: true});
  upd();
})();
