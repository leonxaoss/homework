// Есть список с десятком элементов, над ним находится
// инпут, в него можно вписать текст, по мере в
// вода в списке должны оставаться только
// пункты которые содержат то что ввели,
// остальные скрываются
//
// Большие/маленькие буквы игнорируются

const enter = document.querySelector('.input_enter');
const blockSearch = document.querySelectorAll('.block_search li');

enter.addEventListener('input', function () {
    const value = this.value.toLowerCase();

    blockSearch.forEach(function (item) {
        item.textContent.toLowerCase().indexOf(value) !== -1 ? item.hidden = false : item.hidden = true;
    })
});
