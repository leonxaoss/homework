function createSelect(selector) {
    const container = document.querySelector('.container');
    const item = document.querySelector(selector);
    const opt = item.options;

    const selCont = document.createElement('div');
    const selHead = document.createElement('div');
    const ul = document.createElement('ul');

    selCont.classList.add('select_container');
    selHead.classList.add('select_head');
    ul.classList.add('select_list');

    selCont.appendChild(selHead);
    selCont.appendChild(ul);


    for (let i = 0; i < opt.length; i++) {
        const li = document.createElement('li');

        li.classList.add('list_item');
        li.dataset.value = ''+ i +'';
        // li.dataset.value = ''+ opt[i].textContent +'';
        li.textContent = opt[i].textContent;
        ul.appendChild(li);
    }

    container.appendChild(selCont);

    selCont.addEventListener('click', function (event) {
        let target = event.target;

        if(target.classList.contains('list_item')){
            if (!target.classList.contains('list_item--select')) {
                target.classList.add('list_item--select');

                const selected = document.createElement('div');
                const span = document.createElement('span');
                const btnClose = document.createElement('button');

                selected.classList.add('selected_el');
                selected.dataset.value = ''+ target.dataset.value +'';
                btnClose.classList.add('select_close');
                btnClose.textContent = 'x';
                span.textContent = ''+ target.textContent +'';

                selected.appendChild(span);
                selected.appendChild(btnClose);
                selHead.appendChild(selected);
            } else {
                target.classList.remove('list_item--select');

            }

        }
        if(target.classList.contains('select_head')){
            ul.classList.toggle('select_list--open');
        }
        if(target.classList.contains('select_close')){

            target.closest('.selected_el').remove();
        }
    });

    document.addEventListener('click', function (event) {
        const target = event.target;
        if(!target.closest('.select_container')){
            ul.classList.remove('select_list--open');
        }
        // while (target !== this) {
        //     if (target.classList.contains('select_container')) {
        //         // console.log(target);
        //         console.log(true);
        //         return;
        //     }
        //     target = target.parentNode;
        // }
    })
}

createSelect('#select');
