$(document).ready(function(){

    const inputEnter = $('.input_enter');
    const blockOutput = $('.block_output');
    const strLocal = 'strToDo';

    function toggleLocalStorage(){
        localStorage.setItem(strLocal, blockOutput[0].innerHTML);
        if(!blockOutput.children().length){
            localStorage.removeItem(strLocal);
        }
    }

    function createItem(){
        blockOutput[0].innerHTML = localStorage.getItem(strLocal);
    }

    if(!localStorage.getItem(strLocal) && blockOutput.children().length){
        toggleLocalStorage();
    } else {
        createItem();
    }

    // localStorage.clear();

    $('.btn_add').on('click', function () {
        const value = inputEnter.val();

        if(value !== ''){
            inputEnter.removeClass('input_enter--false').val('').focus();
            blockOutput.append($('<li><span>' + value + '</span><div class="btn_cont"><button class="btn_done"></button><button class="btn_close"></button></div></li>'));

            toggleLocalStorage()
        } else{
            inputEnter.addClass('input_enter--false').focus();
        }
    });

    $('.btn_hide').on('click', function () {
        $(this).toggleClass('btn_hide--active');
        blockOutput.toggleClass('block_output--hide');
    });

    blockOutput.on('click', '.btn_done', function () {
        $(this).closest('li').toggleClass('li_done');
        toggleLocalStorage();
    });

    blockOutput.on('click', '.btn_close', function () {
        $(this).closest('li').remove();
        toggleLocalStorage();
    });

});
