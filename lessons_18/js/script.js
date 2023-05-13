document.addEventListener("click", function (e) {
    const targetElement = e.target;

    if (targetElement.closest('.header__menu-icon')) {
        document.documentElement.classList.toggle('menu-open');
        e.preventDefault();
    }

})

document.addEventListener("click", function (f) {
    const targetElement = f.target;

    if (targetElement.closest('.header__item_inspiration')) {
        document.documentElement.classList.toggle('sub-menu-open_inspiration');
        e.preventDefault();
    }

})

document.addEventListener("click", function (f) {
    const targetElement = f.target;

    if (targetElement.closest('.header__item_blog')) {
        document.documentElement.classList.toggle('sub-menu-open_blog');
        e.preventDefault();
    }

})