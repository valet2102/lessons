document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest('.side-bar__button')) {
        document.documentElement.classList.toggle('side-bar-open');
        e.preventDefault();
    }

})