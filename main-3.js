document.querySelectorAll('.dropdown-link').forEach((elem) => {
    elem.addEventListener('click', function(e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#','');
        document.querySelectorAll('.dropdown-link').forEach(
            (element) => element.classList.remove('active')
        );
        document.querySelectorAll('.cart__container').forEach(
            (el) => el.classList.add('hide')
        );
        elem.classList.add('active');
        document.getElementById(id).classList.remove('hide');
    });
  });


!function(){"use strict";document.addEventListener("click",function(t){const e=t.target.closest("[data-easy-toggle]");if(e){t.preventDefault();let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");try{document.querySelectorAll("[data-easy-toggle]").forEach(t=>{t.hasAttribute("data-easy-parallel")||t===e||document.querySelector(t.getAttribute("data-easy-toggle")).classList.remove(t.getAttribute("data-easy-class"))}),document.querySelector(a).classList.toggle(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}}if(!e){let e=document.querySelectorAll("[data-easy-rcoe]");Array.from(e).forEach.call(e,function(e){let a=e.getAttribute("data-easy-toggle"),s=e.getAttribute("data-easy-class");if(!t.target.closest(a))try{document.querySelector(a).classList.remove(s)}catch(t){console.warn("EasyToggler.js : Блок "+a+" не существует")}})}})}();




$(document).ready(function() {
    $('.header__mobile__menu').click(function(event) {
      $('.header__mobile__menu, .header__menu').toggleClass('active');
    });
});
