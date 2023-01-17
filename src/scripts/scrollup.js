window.addEventListener("scroll", function() {
    const scrollUp = document.querySelector('.scrollup');
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
})