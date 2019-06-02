window.addEventListener('load', function () {


    const btnAdd = document.querySelector('.btn_add');
    const input = document.querySelector('.input_enter');
    const output = document.querySelector('.block_output');
    const btnHide = document.querySelector('.btn_hide');

    let arrLoc = [];

    function writeToLocalSt(){
        localStorage.setItem('MyArr', JSON.stringify(arrLoc));
    }

    // let template = '<li id="{{id}}" class="{{done}}"><span>{{content}}</span><div class="btn_cont"><button class="btn_done"></button><button class="btn_close"></button></div></li>';
    const template = document.querySelector('.template').innerHTML;

    function render(elem) {

        // 1. Створення елементів

        // const li = document.createElement('li');
        // const span = document.createElement('span');
        // const btnDone = document.createElement('button');
        // const btnClose = document.createElement('button');
        // const div = document.createElement('div');
        //
        // btnDone.classList.add('btn_done');
        // btnClose.classList.add('btn_close');
        // div.classList.add('btn_cont');
        // span.textContent = elem.content;
        //
        // if(elem.done){
        //     li.classList.add('li_done');
        // }
        //
        // li.id = '' + elem.id + '';
        //
        // div.appendChild(btnDone);
        // div.appendChild(btnClose);
        // li.appendChild(span);
        // li.appendChild(div);
        // output.appendChild(li);

        // 2. Шаблон

        // output.innerHTML = output.innerHTML + template.replace('{{id}}', elem.id).replace('{{done}}', elem.done ? 'li_done' : '').replace('{{content}}', elem.content);

        // 3. Бібліотека для роботи з шаблонами mustache

        Mustache.parse(template);

        const rendered = Mustache.render(template, {
            id: elem.id,
            content: elem.content,
            done: function () {
                return elem.done ? 'li_done' : ''
            }
        });

        output.innerHTML = output.innerHTML + rendered;
    }

    btnAdd.addEventListener('click', function () {
        if(input.value !== ''){

            const elem = {
                id: new Date().getTime(),
                content: input.value,
                done: false
            };

            arrLoc.push(elem);

            render(elem);

            writeToLocalSt();

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

            let elem = arrLoc.find(function (item) {
               return item.id === +target.closest('li').id;
            });

            elem.done = !elem.done;

            writeToLocalSt();
        }

        if(target.classList.contains('btn_close')){

            let index = arrLoc.findIndex(function (item) {
                return item.id === +target.closest('li').id;
            });

            arrLoc.splice(index, 1);

            target.closest('li').remove();

            if(JSON.stringify(arrLoc) !== '[]'){
                writeToLocalSt()
            } else {
                localStorage.removeItem('MyArr');
            }
        }
    });

    btnHide.addEventListener('click', function () {
        this.classList.toggle('btn_hide--active');
        output.classList.toggle('block_output--hide')
    });


    if(localStorage.MyArr){
        arrLoc = JSON.parse(localStorage.getItem('MyArr'));

        arrLoc.forEach(function (item) {
            render(item)
        });
    }
});






