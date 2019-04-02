const tabBtn = document.querySelectorAll('.tab_btn__btn');
const tabContent = document.querySelectorAll('.tab_box__content');



tabBtn.forEach(function (item, i) {
    if(i === 0){
        item.classList.add('tab_btn__btn--active')
    }
    item.dataset.btn = ''+ (i + 1) +'';
    console.log(item);
});


tabBtn.forEach(function (item, i, arr) {

    item.addEventListener('click', function () {
        arr.forEach(function (item) {
            item.classList.remove('tab_btn__btn--active')
        });
        this.classList.add('tab_btn__btn--active');
        let btnAtr = +item.dataset.btn;
        tabContent.forEach(function (item) {
            item.classList.remove('tab_box__content--active');
            let contAtr = +item.dataset.content;
            if(btnAtr === contAtr){
                item.classList.add('tab_box__content--active')
            }
        })

    })
});




