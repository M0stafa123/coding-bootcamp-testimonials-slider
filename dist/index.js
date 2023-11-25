"use strict";
let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");
let slide = document.querySelectorAll(".slide");
let slides = Array.from(slide);
slides[0].style.transform = "translateX(0%)";
prev.forEach((e) => {
    e.addEventListener("click", function () {
        let currentSlide = document.querySelector(".active-slide");
        if (currentSlide && currentSlide.previousElementSibling) {
            let prevSlide = currentSlide.previousElementSibling;
            currentSlide.style.transform = "translateX(-110%)";
            currentSlide.classList.remove("active-slide");
            prevSlide.style.transform = "translateX(0%)";
            prevSlide.classList.add("active-slide");
        }
    });
});
next.forEach((e) => {
    e.addEventListener("click", function () {
        let currentSlide = document.querySelector(".active-slide");
        if (currentSlide && currentSlide.nextElementSibling) {
            let nextSlide = currentSlide.nextElementSibling;
            currentSlide.style.transform = "translateX(110%)";
            currentSlide.classList.remove("active-slide");
            nextSlide.style.transform = "translateX(0%)";
            nextSlide.classList.add("active-slide");
        }
    });
});
