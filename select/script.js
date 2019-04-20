function createSelect(selector, placeholder, selectorAppen) {
    var container = document.querySelector(selectorAppen);
    var select = document.querySelector(selector);
    var opt = select.options;

    var selCont = document.createElement('div');
    var selHead = document.createElement('div');
    var ul = document.createElement('ul');
    var plaCont = document.createElement('span');

    selCont.classList.add('select_container');
    selHead.classList.add('select_head');
    ul.classList.add('select_list');
    plaCont.classList.add('select_placeholder');
    plaCont.textContent = placeholder;

    selHead.appendChild(plaCont);
    selCont.appendChild(selHead);
    selCont.appendChild(ul);


    for (var i = 0; i < opt.length; i++) {
        var li = document.createElement('li');

        li.classList.add('list_item');
        // li.dataset.value = ''+ i +'';
        li.dataset.value = ''+ opt[i].textContent +'';
        li.textContent = opt[i].textContent;
        ul.appendChild(li);
    }

    container.appendChild(selCont);

    selCont.addEventListener('click', function (event) {
        var target = event.target;

        if(target.classList.contains('list_item')){
            if (!target.classList.contains('list_item--select')) {
                target.classList.add('list_item--select');

                var selected = document.createElement('div');
                var span = document.createElement('span');
                var btnClose = document.createElement('div');

                selected.classList.add('selected_el');
                selected.dataset.value = ''+ target.dataset.value +'';
                btnClose.classList.add('select_close');
                btnClose.textContent = 'x';
                span.textContent = ''+ target.textContent +'';

                selected.appendChild(span);
                selected.appendChild(btnClose);
                selHead.appendChild(selected);

                for (i = 0; i < opt.length; i++) {
                    if(selected.dataset.value === opt[i].value){
                        opt[i].selected = true;
                    }
                }

                if(selHead.children.length > 1){
                    plaCont.remove()
                }

            } else {
                target.classList.remove('list_item--select');
                selHead.childNodes.forEach(function (item) {
                    if(item.dataset.value === target.dataset.value){
                        item.remove();
                    }
                    for (i = 0; i < opt.length; i++) {
                        if(item.dataset.value === opt[i].value){
                            opt[i].selected = false;
                        }
                    }
                });
                if(selHead.children.length < 1){
                    selHead.appendChild(plaCont);
                }

            }

        }
        if((target.classList.contains('select_head') || target.closest('.select_head')) && !target.classList.contains('select_close')){
            selHead.classList.toggle('select_head--open');
            ul.classList.toggle('select_list--open');
        }
        if(target.classList.contains('select_close')){
            target.closest('.selected_el').remove();
            ul.childNodes.forEach(function (item) {
                if(item.dataset.value === target.parentNode.dataset.value){
                    item.classList.remove('list_item--select');
                }
            });
            for (i = 0; i < opt.length; i++) {
                if(target.parentNode.dataset.value === opt[i].value){
                    opt[i].selected = false;
                }
            }
            if(selHead.children.length === 0){
                selHead.appendChild(plaCont);
            }
            event.stopPropagation();
        }
    });
    document.addEventListener('click', function (event) {
        var target = event.target;
        if(!target.closest('.select_container')){
            ul.classList.remove('select_list--open');
            selHead.classList.remove('select_head--open');
        }
    });
    select.classList.add('select_none');
}


createSelect('#select', 'Выберите тип', '.container');
