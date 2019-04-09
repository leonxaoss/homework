window.addEventListener('load', function () {


    const btnAdd = document.querySelector('.btn_add');
    const input = document.querySelector('.input_enter');
    const output = document.querySelector('.block_output');
    const btnHide = document.querySelector('.btn_hide');

    btnAdd.addEventListener('click', function () {
        if(input.value !== ''){
            let li = document.createElement('li');
            let span = document.createElement('span');
            let btnDone = document.createElement('button');
            let btnClose = document.createElement('button');
            let div = document.createElement('div');

            btnDone.classList.add('btn_done');
            btnClose.classList.add('btn_close');
            div.classList.add('btn_cont');
            span.textContent = input.value;

            div.appendChild(btnDone);
            div.appendChild(btnClose);
            li.appendChild(span);
            li.appendChild(div);
            output.appendChild(li);

            input.value = '';
            input.focus();
            input.classList.remove('input_enter--false');
        } else{
            input.focus();
            input.classList.add('input_enter--false');
        }
    });

    output.addEventListener('click', function (event) {

        let target = event.target;

        if(target.classList.contains('btn_done')){
            target.closest('li').classList.toggle('li_done');
        }

        if(target.classList.contains('btn_close')){
            target.closest('li').remove();
        }
    });

    btnHide.addEventListener('click', function () {
        this.classList.toggle('btn_hide--active');
        output.classList.toggle('block_output--hide')
    });

});






