var btn = document.querySelector('.btn_calc');
var input1 = document.querySelector('.input_num1');
var input2 = document.querySelector('.input_num2');
var result = document.querySelector('.res');

btn.addEventListener('click', function () {
    var num1 = input1.value;
    var num2 = input2.value;

    var myHeaders = new Headers({"Content-Type": "application/json"});

    fetch('calc', {
        method: 'POST',
        headers: myHeaders,
        body: JSON.stringify({
            num1: num1,
            num2: num2
        })
    }).then(function (res) {
        return res.json();
    }).then(function (res) {
        result.textContent = res.data.res;
    })
});
