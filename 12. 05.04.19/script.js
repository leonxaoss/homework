window.addEventListener('load', function () {

    const btnAdd = document.querySelector('.btn_add');
    const input = document.querySelector('.input');
    const output = document.querySelector('.block_output');
    const btnHide = document.querySelector('.btn_hide');
    const btnDone = document.querySelectorAll('.btn_done');
    const btnClose = document.querySelectorAll('.btn_close');

    function clickDone(){
        const parentLi = this.closest('li');
        parentLi.classList.toggle('li_done');

        if(btnHide.classList.contains('btn_hide--active')){
            parentLi.classList.add('li_hide');
        }
    }

    function clickClose(){
        this.closest('li').remove();
    }

    btnDone.forEach(function (item) {
        item.addEventListener('click', clickDone)
    });

    btnClose.forEach(function (item) {
        item.addEventListener('click', clickClose)
    });

    btnAdd.addEventListener('click', function () {

        if(input.value !== ''){

            let li = document.createElement('li');
            let span = document.createElement('span');
            let createBtnDone = document.createElement('button');
            let createBtnClose = document.createElement('button');
            let div = document.createElement('div');

            createBtnDone.classList.add('btn_done');
            createBtnClose.classList.add('btn_close');
            div.classList.add('btn_cont');
            span.textContent = input.value;

            div.appendChild(createBtnDone);
            div.appendChild(createBtnClose);
            li.appendChild(span);
            li.appendChild(div);

            createBtnDone.addEventListener('click', clickDone);

            createBtnClose.addEventListener('click', clickClose);

            output.appendChild(li);
            input.value = '';
            input.focus();
            input.classList.remove('input--false');

        } else{
            input.focus();
            input.classList.add('input--false');
        }

    });

    btnHide.addEventListener('click', function () {
        this.classList.toggle('btn_hide--active');
        for(let i = 0; i < output.children.length; i++){
            if(output.children[i].classList.contains('li_done')){
                output.children[i].classList.toggle('li_hide');
            }
        }
    });


    // з використанням делегування

    // const btnAdd = document.querySelector('.btn_add');
    // const input = document.querySelector('.input');
    // const output = document.querySelector('.block_output');
    // const btnHide = document.querySelector('.btn_hide');

    // btnAdd.addEventListener('click', function () {
    //     if(input.value !== ''){
    //         let li = document.createElement('li');
    //         let span = document.createElement('span');
    //         let btnDone = document.createElement('button');
    //         let btnClose = document.createElement('button');
    //         let div = document.createElement('div');
    //
    //         btnDone.classList.add('btn_done');
    //         btnClose.classList.add('btn_close');
    //         div.classList.add('btn_cont');
    //         span.textContent = input.value;
    //
    //         div.appendChild(btnDone);
    //         div.appendChild(btnClose);
    //         li.appendChild(span);
    //         li.appendChild(div);
    //
    //         output.appendChild(li);
    //         input.value = '';
    //         input.focus();
    //         input.classList.remove('input--false');
    //     } else{
    //         input.focus();
    //         input.classList.add('input--false');
    //     }
    // });
    //
    // output.addEventListener('click', function (event) {
    //     let target = event.target;
    //
    //     if(target.classList.contains('btn_done')){
    //         const parentLi = target.closest('li');
    //         parentLi.classList.toggle('li_done');
    //
    //         if(btnHide.classList.contains('btn_hide--active')){
    //             parentLi.classList.add('li_hide');
    //         }
    //     }
    //     if(target.classList.contains('btn_close')){
    //         target.closest('li').remove();
    //     }
    // });
    //
    // btnHide.addEventListener('click', function () {
    //     this.classList.toggle('btn_hide--active');
    //     for(let i = 0; i < output.children.length; i++){
    //         if(output.children[i].classList.contains('li_done')){
    //             output.children[i].classList.toggle('li_hide');
    //         }
    //     }
    // });

});






