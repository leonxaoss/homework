// Валютный калькулятор

const input = document.querySelector('.enter');
const btn = document.querySelector('button');
const result = document.querySelector('p');
const currency = document.querySelector('select');
const buy = document.querySelector('#buy');
const sell = document.querySelector('#sell');

// console.dir(buy);
// console.dir(sell);


btn.addEventListener('click', function () {
    if(buy.checked){
        result.textContent = ''+ (+input.value * +currency.value) +'';
    }
    if(sell.checked){
        for(let i = 0; i < currency.children.length; i++){
            if(+currency.value === +currency.children[i].value){
                result.textContent = ''+ (+input.value * +currency.children[i].dataset.content) +'';
            }
        }
    }
});
