
/*
    WAQAS RABI — CENTRAL WEBSITE

    Lightweight progressive enhancement.
    The website remains fully functional without JavaScript.
*/

(() => {

    "use strict";


    // ----------------------------------
    // Dynamic copyright year
    // ----------------------------------

    const yearElement = document.querySelector("#year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    // ----------------------------------
    // Enable CSS entrance animations
    // only after JavaScript is available
    // ----------------------------------

    document.documentElement.classList.add("js-ready");


})();
