(function(){
  const burger = document.querySelector('[data-burger]');
  const panel  = document.querySelector('[data-mobile-panel]');
  if(!burger || !panel) return;

  function setOpen(isOpen){
    burger.setAttribute('aria-expanded', String(isOpen));
    panel.classList.toggle('show', isOpen);
    document.body.classList.toggle('no-scroll', isOpen);
  }

  burger.addEventListener('click', () => {
    const isOpen = burger.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);
  });

  // Close when clicking a menu link
  panel.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if(a) setOpen(false);
  });

  // Close with ESC
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') setOpen(false);
  });
})();
(function(){
  const el = document.getElementById('rotating-word');
  if(!el) return;

  const words = ['אתה','את','המשפחה שלך'];
  let w = 0;
  let i = 0;
  let deleting = false;

  const typeSpeed = 85;
  const deleteSpeed = 55;
  const holdMs = 900;

  function tick(){
    const word = words[w];
    if(!deleting){
      i++;
      el.textContent = word.slice(0, i);
      if(i >= word.length){
        deleting = true;
        setTimeout(tick, holdMs);
        return;
      }
      setTimeout(tick, typeSpeed);
    }else{
      i--;
      el.textContent = word.slice(0, i);
      if(i <= 0){
        deleting = false;
        w = (w + 1) % words.length;
        setTimeout(tick, 250);
        return;
      }
      setTimeout(tick, deleteSpeed);
    }
  }
  tick();
})();
