
// const menuBtn= document.querySelector(".menu-btn"); 
// const navigation= document.querySelector(".navigation");

 // menuBtn.addEventListener("click", () => {
   // menuBtn.classList.toggle("active");
  // navigation.classList.toggle("active");
 // });

//for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".slide");

var sliderNav = function(manual){
    btns.forEach((btn) =>{
        btn.classList.remove("active");
    }  );

 
    slides.forEach((slide) =>{
        slide.classList.remove("active");
    }  );


    btns[manual].classList.add("active")
    slides[manual].classList.add("active")
}

btns.forEach(( btn, i) => {
    btn.addEventListener("click", () => {
        sliderNav(i);

    });
});






let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navigation= document.querySelector(".navigation");

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navigation.classList.remove('active');
    loginForm.classList.remove('active');

}

menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navigation.classList.toggle('active');
});

formBtn.addEventListener('click', () =>{
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () =>{
    loginForm.classList.remove('active');
});