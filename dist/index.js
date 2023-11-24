"use strict";
let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");
let slide = document.querySelectorAll(".slide");
let slides = Array.from(slide);
prev.forEach((e) => {
    e.addEventListener("click", function () {
        slide.forEach((e, i) => {
            if (!e.classList.contains("!hidden") && i - 1 > -1) {
                slide.forEach((e) => {
                    e.classList.add("!hidden");
                });
                slides[i - 1].classList.remove("!hidden");
            }
        });
    });
});
next.forEach((e) => {
    e.addEventListener("click", function () {
        slide.forEach((e, i) => {
            if (!e.classList.contains("!hidden") && i + 1 < slides.length) {
                slide.forEach((e) => {
                    e.classList.add("!hidden");
                });
                slides[i + 1].classList.remove("!hidden");
            }
        });
    });
});
