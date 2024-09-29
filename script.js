/* Animacion header */

const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.style.opacity = '0.7'; 
        } else {
            header.style.opacity = '1'; 
        }
    });

    header.addEventListener('mouseenter', () => {
        header.style.opacity = '1'; 
    });

    header.addEventListener('mouseleave', () => {
        if (window.scrollY > 0) {
            header.style.opacity = '0.7';
        }
    });