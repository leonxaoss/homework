// Валютный калькулятор, ajax
const input = document.querySelector('.enter');
const btn = document.querySelector('button');
const result = document.querySelector('.container p');
const currency = document.querySelector('select');
const description = document.querySelector('.description');

const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.send();

xhr.addEventListener('readystatechange', function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText);

        data.forEach( item => {
            const option = document.createElement('option');
            const p = document.createElement('p');

            option.textContent = item.cc;
            option.value = item.rate;
            option.title = item.txt;
            currency.appendChild(option);
            p.textContent = item.cc + ' - ' + item.txt;
            description.appendChild(p);
        });
    }
});

btn.addEventListener('click', function () {
    const valutInputs = document.querySelectorAll('.check_block input');
    const check = [].find.call(valutInputs,  item => item.checked === true);

    result.textContent = (+input.value * +currency.value * +check.value);
});

