export function animationUpElements(baseClass: string, suffix: string) {
    const elements = document.querySelectorAll<HTMLElement>(`.${baseClass}`);
    const animationTriggeredClass = `${baseClass}-triggered`;

    function addAnimationClass(el: HTMLElement) {
        el.classList.add(`${baseClass}${suffix}`, animationTriggeredClass);
    }

    function handleElementAnimation(el: HTMLElement) {
        const isAnimationTriggered = el.classList.contains(animationTriggeredClass);

        if (!isAnimationTriggered && window.scrollY > el.offsetTop) {
            addAnimationClass(el);
        }
    }

    function handleScroll() {
        elements.forEach((el) => {
            handleElementAnimation(el);
        });
    }

    function handleInitialAnimations() {
        elements.forEach((el) => {
            handleElementAnimation(el);
        });
    }

    if (elements.length > 0) {
        handleInitialAnimations();

        window.addEventListener("scroll", handleScroll);
    }
}



export function animationElements() {
    const  elements = document.querySelectorAll<HTMLElement>('[data-animation]')
    
    const windowTopOnLoad = window.scrollY + (window.innerHeight * 4) / 4
    if (elements) {
        elements.forEach((el) => {
            if (windowTopOnLoad > el.offsetTop) {
                el.classList.add('animation')
            } else {
                el.classList.remove('animation')
            }
        })
        window.onscroll = () => {
            const windowTop = window.scrollY + (window.innerHeight * 4) / 4
            elements.forEach((el) => {
                if (windowTop > el.offsetTop) {
                    el.classList.add('animation')
                }
            })
        }
    }
}