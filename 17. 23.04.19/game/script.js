// Сделать игру
// случайным образом задаются координаты клада
// при клике на карту рассчитывается расстояние
// от места клика до места клада
// в зависимости от расстояния выводятся
// комментарии: горячо, тепло, холодно
// если пользователь кликнул на сам клад
// или в непосредственной близости от него –
// игра завершается победой


const $map = document.querySelector('.map_container img');
const coorX = Math.floor(Math.random() * ($map.offsetWidth - 2)+ 2);
const coorY = Math.floor(Math.random() * ($map.offsetHeight - 2)+ 2);

$map.addEventListener('click', function (event) {
    const a = coorX - event.offsetX;
    const b = coorY - event.offsetY;
    const res = Math.sqrt(a * a + b * b);

    if(res < 30){
        alert('Ура клад найден');
    } else if(res < 100){
        alert('Горячо');
    } else if(res < 170){
        alert('Тепло');
    } else if(res < 220){
        alert('Холодно');
    } else {
        alert('Очень Холодно');
    }

    // switch (true) {
    //     case res < 30: alert('Ура клад найден');
    //         break;
    //     case res < 100 : alert('Горячо');
    //         break;
    //     case res < 170 : alert('Тепло');
    //         break;
    //     case res < 220 : alert('Холодно');
    //         break;
    //     case res > 220 : alert('Очень холодно');
    //         break;
    // }
});
