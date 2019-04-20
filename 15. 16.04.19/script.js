function hoverBlock(selector, changeClass) {
    const sel = document.querySelector(selector);

    sel.addEventListener( 'mouseover',  function () {
        this.classList.add(changeClass);
    });
    sel.addEventListener( 'mouseout',  function () {
        this.classList.remove(changeClass);
    });
}

hoverBlock('.img_container img', 'rotate');
