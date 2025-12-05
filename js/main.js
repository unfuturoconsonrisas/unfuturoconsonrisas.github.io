/* js/main.js
   Comportamiento general: inic AOS, formulario, scroll suave, pequeñas animaciones.
*/

/* Inicializa AOS si está incluido */
document.addEventListener('DOMContentLoaded', function(){
  if (window.AOS) {
    AOS.init({ duration: 700, once: true });
  }

  // Fade-in suave al cargar la página
  document.body.style.opacity = 0;
  setTimeout(()=> {
    document.body.style.transition = "opacity 400ms ease-in";
    document.body.style.opacity = 1;
  }, 50);

  // Scroll suave para anclas internas con offset (si existe header sticky)
  const OFFSET = 70;
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const target = document.querySelector(targetId);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    })
  });

  // Validación y envío del formulario de contacto (front-end demo)
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function(e){
      e.preventDefault();
      const name = document.getElementById('name');
      const email = document.getElementById('email');
      const message = document.getElementById('message');

      // limpieza visual
      [name,email,message].forEach(i => i.classList.remove('input-error'));

      let valid = true;
      if (!name.value.trim()) { name.classList.add('input-error'); valid = false; }
      if (!email.value.trim() || !/^\S+@\S+\.\S+$/.test(email.value)) { email.classList.add('input-error'); valid = false; }
      if (!message.value.trim()) { message.classList.add('input-error'); valid = false; }

      if (!valid) {
        // mensaje simple; puedes mostrar un modal o toast más elegante
        alert('Por favor completa correctamente los campos requeridos.');
        return;
      }

      // Simula envío
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.disabled = true;
        const original = btn.textContent;
        btn.textContent = 'Enviando...';
        setTimeout(()=>{
          alert(`Gracias ${name.value}. Hemos recibido tu mensaje.`);
          form.reset();
          btn.disabled = false;
          btn.textContent = original;
        }, 1200);
      }
    });
  }

  // Pequeñas interacciones: tarjetas elevan al hover (si existen)
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseenter', ()=> {
      card.style.transform = 'translateY(-6px)';
      card.style.boxShadow = '0 10px 30px rgba(18,20,24,0.08)';
    });
    card.addEventListener('mouseleave', ()=> {
      card.style.transform = '';
      card.style.boxShadow = '';
    });
  });
});
