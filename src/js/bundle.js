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


var activitiesSwiper = new Swiper(".testimonials", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 10000,
    },
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

locations.forEach(function (element, index) {
    let locationData = element.querySelector(locationDataClass);
    element.addEventListener("mouseover", function () {
        locationDataTarget.innerHTML = locationData.innerHTML;
    });

    element.addEventListener("mouseout", function () {
        locationDataTarget.innerHTML =
            "<p>Hover Over Province for more information</p>";
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
const submenu = document.querySelector('.mobile-navigation li.has-sub-menu a')

function closeSubMenu() {
    const openEl = document.querySelector('.mobile-navigation ul.navigation__sub-menu.expanded')
    // close all expanded menus
    if(openEl) {
        openEl.classList.remove('expanded')
    }
}
if(menuIcon) {
    menuIcon.addEventListener('click', function (e) {
        e.preventDefault()
        closeSubMenu();
        this.classList.toggle('mobile-menu-open');
        mobileNavigation.classList.toggle('mobile-menu-open');
    })
}

if(submenu) {
    submenu.addEventListener('click', function(e) {
        e.preventDefault();
        // expand this el
        const { target: { nextElementSibling: { classList } } } = e
        classList.toggle('expanded')
        e.stopPropagation()
    })
}

// activities
const activity_titles = document.querySelectorAll("a.activity__title")
const expandActivity = e => {
    e.preventDefault()
    const {
        target:{
            parentElement: {
                children,
                nextElementSibling
            }
        }
    } = e
    const [title, spanEl] = children
    spanEl.classList.toggle('active')
    nextElementSibling.classList.toggle('active')
    spanEl.innerHTML = nextElementSibling.classList.contains('active')
    ? "Hide Details"
    : "More Details"
}
activity_titles.forEach(item => item.addEventListener('click', expandActivity))