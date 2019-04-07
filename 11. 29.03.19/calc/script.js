// Валютный калькулятор

const input = document.querySelector('.enter');
const btn = document.querySelector('button');
const result = document.querySelector('p');
const currency = document.querySelector('select');


btn.addEventListener('click', function () {
    result.textContent = ''+ (+input.value * +currency.value) +'';
});
