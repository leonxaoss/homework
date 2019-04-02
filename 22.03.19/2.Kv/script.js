// Счетчики
// 5 квадратов внутри каждого из которых
// изначально вписана
// цифра 0, при клике на любой квадрат
// цифра в нем увеличивается на один
//
// * сделать чтоб внутри квадратов были кнопки +/-

// const btnPlus = document.querySelectorAll('.btn_plus');
// const btnMinus = document.querySelectorAll('.btn_minus');

// btnPlus.forEach(function (item) {
//
//     const parent = item.parentNode;
//     parent.dataset.step = '0';
//
//     console.dir(parent);
//
//     item.addEventListener('click', function () {
//         let step = +this.parentNode.dataset.step + 1;
//
//         this.parentNode.dataset.step = step.toString();
//         this.parentNode.children[1].innerText = ''+ step +'';
//
//
//         // const cop = this.parentNode.children;
//         // for(let i = 0; i < cop.length; i++){
//         //     if(cop[i].classList.contains('count')){
//         //         cop[i].innerText = ''+ step +'';
//         //     }
//         // }
//     })
//
// });

// btnMinus.forEach(function (item) {
//
//     item.addEventListener('click', function () {
//         let step = +this.parentNode.dataset.step - 1;
//
//         this.parentNode.dataset.step = step.toString();
//         this.parentNode.children[1].innerText = ''+ step +'';
//
//
//         // const cop = this.parentNode.children;
//         // for(let i = 0; i < cop.length; i++){
//         //     if(cop[i].classList.contains('count')){
//         //         cop[i].innerText = ''+ step +'';
//         //     }
//         // }
//     })
// });


const block = document.querySelectorAll('.block');

function Counter(item){
    let counter = 0;

    this.countPlus = function () {
        counter++;
        item.children[1].innerText = ''+ counter +'';
    };
    this.countMinus = function () {
        counter--;
        item.children[1].innerText = ''+ counter +'';
    };
}

block.forEach(function (item) {
    const count = new Counter(item);
    item.addEventListener('click', function (event) {
        let target = event.target;
        while (target !== this) {
            if (target.classList.contains('btn_plus')) {
                count.countPlus();
                return;
            } else if(target.classList.contains('btn_minus')){
                count.countMinus();
                return;
            } else{
                target = target.parentNode;
            }
        }
    })
});
