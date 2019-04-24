import Swiper from "swiper";
import lightbox from "iframe-lightbox";
var mySwiper = new Swiper(".slider", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    },
    // Navigation arrows
    navigation: {
        nextEl: ".slider-control-button--next",
        prevEl: ".slider-control-button--prev"
    },
    effect: "coverflow",
    autoplay: {
        delay: 5000
    }
});

var activitiesSwiper = new Swiper(".activities-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        768: {
            slidesPerView: 1,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".slider-control-button--next",
        prevEl: ".slider-control-button--prev"
    }
});

/* locations hover */

let locations = document.querySelectorAll(".location"),
    locationDataClass = ".location__data",
    locationDataTarget = document.querySelector(".details-placeholder");
// location.addEventListener('mouseover', function () {
//     console.log('Oh okay!');
// })

locations.forEach(function (element, index) {
    let locationData = element.querySelector(locationDataClass);
    element.addEventListener("mouseover", function () {
        locationDataTarget.innerHTML = locationData.innerHTML;
        // locationDataTarget.innerHTML = '';
    });

    element.addEventListener("mouseout", function () {
        locationDataTarget.innerHTML =
            "<p>Hover Over Province for more information</p>";
        // locationDataTarget.innerHTML = '';
    });
});

[].forEach.call(
    document.getElementsByClassName("iframe-lightbox-link"),
    function (el) {
        el.lightbox = new IframeLightbox(el);
    }
);


/* menu */

const menuIcon = document.querySelector('.menu-icon');
const mobileNavigation = document.querySelector('.mobile-navigation');

menuIcon.addEventListener('click', function (e) {
    this.classList.toggle('mobile-menu-open');
    mobileNavigation.classList.toggle('mobile-menu-open');
})