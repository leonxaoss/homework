// Секундомер
// На странице после загрузки идет отсчет секунд
//
// * сделать старт секундомера по клику на кнопку

window.addEventListener('load', function () {

    const btnStart = document.querySelector('.btn_start');
    const time = document.querySelector('.time');
    let count = 0;

    function startSec(){
        if(count === 0){
            count = 1;
            setInterval(function() {
                time.innerText = ''+ count++ +'';
            }, 1000);
        }
    }

    btnStart.addEventListener('click', startSec);






    // const btnStart = document.querySelector('.btn_start');
    // const btnStop = document.querySelector('.btn_stop');
    // const btnClear = document.querySelector('.btn_clear');
    // const time = document.querySelector('.time');
    // let sec;
    // let count = 0;
    //
    // function startSec(){
    //     if(count === 0){
    //         count = 1;
    //         sec = setInterval(function() {
    //             time.innerText = ''+ count++ +'';
    //         }, 1000);
    //     } else{
    //         clearSec();
    //     }
    // }
    //
    // function stopSec(){
    //     clearInterval(sec);
    // }
    //
    // function clearSec(){
    //     // stopSec();
    //     count = 0;
    //     time.innerText = ''+ count +'';
    // }
    //
    // btnStart.addEventListener('click', startSec);
    // btnStop.addEventListener('click', stopSec);
    // btnClear.addEventListener('click', clearSec);

});
