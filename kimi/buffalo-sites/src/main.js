import { initModel } from './models.js';

document.querySelectorAll('.model-canvas').forEach(initModel);

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach((el, index) => {
  el.style.transitionDelay = `${(index % 3) * 90}ms`;
  revealObserver.observe(el);
});

document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => document.querySelector(button.dataset.scroll)?.scrollIntoView({ behavior: 'smooth' }));
});

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', event => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - .5;
      const y = (event.clientY - rect.top) / rect.height - .5;
      card.style.transform = `perspective(1000px) rotateX(${-y * 2.5}deg) rotateY(${x * 2.5}deg) translateY(-3px)`;
    });
    card.addEventListener('pointerleave', () => { card.style.transform = ''; });
  });
}

document.querySelectorAll('.weekend-filter button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.weekend-filter button').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
  });
});

let cartCount = 0;
function toast(message) {
  const item = document.createElement('div');
  item.textContent = message;
  Object.assign(item.style, { position:'fixed', zIndex:200, top:'24px', left:'50%', transform:'translateX(-50%)', background:'#293b2e', color:'#fff', padding:'13px 22px', borderRadius:'5px', fontSize:'12px', boxShadow:'0 8px 30px #0003' });
  document.body.appendChild(item);
  setTimeout(() => item.remove(), 2200);
}
document.querySelectorAll('.add-button').forEach(button => {
  button.addEventListener('click', () => {
    cartCount += 1;
    const count = document.querySelector('.weekend-bag span');
    if (count) count.textContent = cartCount;
    button.textContent = '✓ 已加入清单';
    toast('好心情已加入周末清单');
  });
});
document.querySelectorAll('.heart').forEach(heart => heart.addEventListener('click', () => {
  heart.textContent = heart.textContent === '♡' ? '♥' : '♡';
  heart.style.color = heart.textContent === '♥' ? '#d85e3b' : '';
}));
document.querySelector('.weekend-newsletter form')?.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  toast('订阅成功，下一封山野来信见！');
});
