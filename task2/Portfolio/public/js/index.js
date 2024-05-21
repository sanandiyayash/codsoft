
function downloadResume() {
    // window.location.href = "../pdf/resume.pdf";
    window.open("../pdf/resume.pdf", "_blank");
};
let navLinks = document.querySelector('.nav-links');
let menuIcon = document.querySelector('.menu-icon');
let menuClose = document.querySelector('.menu-close');
let body = document.querySelector('body');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuClose.style.display = 'initial';
    menuIcon.style.display = 'none';

});
menuClose.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuClose.style.display = 'none';
    menuIcon.style.display = 'initial';

})


const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};
//nav
ScrollReveal().reveal(".logo", {
    distance: "30px",
    origin: "left",
    duration: 1000,

});

if (window.innerWidth > 850) {
    ScrollReveal().reveal('.nav-links', {
        distance: '30px',
        origin: 'right',
        duration: 1000,
        delay: 200,
    });
}
if (window.innerWidth < 850) {


    ScrollReveal().reveal(".menu-icon", {
        distance: "30px",
        origin: "right",
        duration: 1000,
        delay: 200,

    });
}



///index content
ScrollReveal().reveal(".p-s", {
    ...scrollRevealOption,

});
ScrollReveal().reveal(".content h1", {
    ...scrollRevealOption,
    delay: 100,
});
ScrollReveal().reveal(".text-color-p", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".name", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".p-stack", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".buttons", {
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".illustration", {
    ...scrollRevealOption, origin: "right",
    delay: 150,

});

//about

ScrollReveal().reveal(".about h1", {
    ...scrollRevealOption,
    delay: 500,

});
ScrollReveal().reveal(".about-p1", {
    ...scrollRevealOption,
    delay: 1000,

});
ScrollReveal().reveal(".about-p2", {
    ...scrollRevealOption,
    delay: 1200,

});
ScrollReveal().reveal(".tech-stack", {
    ...scrollRevealOption,
    delay: 1600,

});

//projects
ScrollReveal().reveal(".projects-section h1", {
    ...scrollRevealOption,

});
ScrollReveal().reveal(".project-card", {
    ...scrollRevealOption,
    delay: 500,
    origin: 'left'
});
ScrollReveal().reveal(".icons", {
    ...scrollRevealOption,
    delay: 800,
    origin: 'right'
});

//experiance
ScrollReveal().reveal(".experience-section h1", {
    ...scrollRevealOption,

});
ScrollReveal().reveal(".experience-card", {
    ...scrollRevealOption,
    delay: 500

});

//contact
ScrollReveal().reveal(".contact-title", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".contact-info", {
    ...scrollRevealOption,
    delay: 400,
});
ScrollReveal().reveal(".socials h2", {
    ...scrollRevealOption,
    delay: 800,
});
ScrollReveal().reveal(".s-i-1", {
    ...scrollRevealOption,
    delay: 1200,
    origin: 'left'
});
ScrollReveal().reveal(".s-i-2", {
    ...scrollRevealOption,
    delay: 1600,
});
ScrollReveal().reveal(".s-i-3", {
    ...scrollRevealOption,
    delay: 2000,
    origin: 'right'
});
ScrollReveal().reveal(".contact-card", {
    ...scrollRevealOption,
    delay: 2400,
});




