'use strict';

// navbar variables
const nav = document.querySelector('.mobile-nav');
const navMenuBtn = document.querySelector('.nav-menu-btn');
const navCloseBtn = document.querySelector('.nav-close-btn');


// navToggle function
const navToggleFunc = function() { nav.classList.toggle('active'); }

navMenuBtn.addEventListener('click', navToggleFunc);
navCloseBtn.addEventListener('click', navToggleFunc);



// theme toggle variables
const themeBtn = document.querySelectorAll('.theme-btn');


for (let i = 0; i < themeBtn.length; i++) {

    themeBtn[i].addEventListener('click', function() {

        // toggle `light-theme` & `dark-theme` class from `body`
        // when clicked `theme-btn`
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');

        for (let i = 0; i < themeBtn.length; i++) {

            // When the `theme-btn` is clicked,
            // it toggles classes between `light` & `dark` for all `theme-btn`.
            themeBtn[i].classList.toggle('light');
            themeBtn[i].classList.toggle('dark');

        }

    })

}

// pdf geter

document.getElementById("downloadBtn").addEventListener("click", function() {
    // PDF file path
    var pdfUrl = 'https://freemasontanzania.org/Journey.pdf';

    // Create an anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;

    // download attribute and filename
    link.download = 'Journey.pdf';

    // element Append the anchor to the body
    document.body.appendChild(link);

    // Trigger event click
    link.click();

    // Clean up
    document.body.removeChild(link);
});