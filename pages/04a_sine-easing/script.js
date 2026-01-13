import gsap from "gsap";

const button = document.querySelector('.scroll-to-top');

let floatingTween = null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        button.classList.add('show');

        if (!floatingTween) {
            floatingTween = gsap.to(button, {
                y: -10,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.out'
            });
        }
    } else {
        button.classList.remove('show');

        if (floatingTween) {
            floatingTween.kill();
            floatingTween = null;
            gsap.set(button, { y: 0 });
        }
    }
});

button.addEventListener('mouseenter', () => {
    gsap.to(button, {
        scale: 1.1,
        duration: 0.2
    });
});

button.addEventListener('mouseleave', () => {
    gsap.to(button, {
        scale: 1,
        duration: 0.2
    });
});

button.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
