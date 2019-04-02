// Создать массив объектов. В каждом объекте должа содержаться информация о человеке: имя, пол, год рождения. Объектов должно быть 5-10.
//
// 1) посчитать средний возраст
//
// 2) отпределить представителей какого пола больше
//
// вывести ответы в консоль


    let arr = [
        {
            name : 'Denis',
            sex : 'men',
            born : 1988
        },
        {
            name : 'Olga',
            sex : 'women',
            born : 1995
        },
        {
            name : 'Ira',
            sex : 'women',
            born : 1999
        },
        {
            name : 'Viktor',
            sex : 'men',
            born : 1981
        },
        {
            name : 'Anna',
            sex : 'women',
            born : 2000
        },
        {
            name : 'Oleksandr',
            sex : 'men',
            born : 1958
        },
        {
            name : 'Yulia',
            sex : 'women',
            born : 1994
        },
        {
            name : 'Oksana',
            sex : 'women',
            born : 1991
        },
    ];

// 1) посчитать средний возраст

    let currentDate = new Date().getFullYear();
    let countYear = 0;
    let yearSum = 0;

// 2) отпределить представителей какого пола больше

    let countWomen = 0;
    let countMen = 0;


    for(let i = 0; i < arr.length; i++){

        if(arr[i].born){
            countYear++;
            yearSum += (currentDate - arr[i].born);
        }

        if(arr[i].sex === 'women'){
            countWomen++
        } else {
            if(arr[i].sex === 'men'){
                countMen++
            }
        }

    }

    console.log('Средний возраст - ' + (yearSum/countYear));

    if(countWomen < countMen){
        console.log('Мужчин больше, их - ' + countMen + ', а женщин - ' + countWomen);
    } else{
        if(countWomen > countMen){
            console.log('Женщин больше, их - ' + countWomen + ', а мужчин - ' + countMen);
        }
        else{
            console.log('Идеально (поровну), женщин - ' + countWomen + ' и мужчин - ' + countMen);
        }
    }