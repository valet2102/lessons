document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest('.header__burger-button')) {
        document.documentElement.classList.toggle('menu-open');
        e.preventDefault();
    }


})



document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest('.header__button')) {
        document.documentElement.classList.toggle('search-open');
        e.preventDefault();
    }

})




