// Вам нужно сделать конструктор сущности Студент.
//
// У Студента есть имя, фамилия, год рождения — это свойства.
// Есть массив с оценками, это тоже свойство. И есть
// возможность получить возраст студента и его
// средний бал — это методы.
//
// Еще у всех Студентов есть по массиву одинаковой
// длины, в нем 25 элементов, изначально он не
// заполнен, но на 25 элементов. Это массив
// в котором отмечается посещаемость, каждый
// раз когда мы вызываем метод .present() на
// очередное пустое место в массив записывается
// true, когда вызываем .absent() — записывается false.
// Предусмотрите какую нибудь защиту от того чтоб в
// массиве посещаемости не могло быть более 25 записей.
// Массив это свойство, present и absent — методы.
//
// Ну и последний метод: .summary(),
// он проверяет среднюю оценку, и среднее
// посещение(количество Посещений/количество Занятий),
// и если средняя оценка больше 90 а среднее посещение
// больше 0.9, то метод summary, возвращает строку
// "Ути какой молодчинка!", если одно из этих значений
// меньше, то — "Норм, но можно лучше",
// если оба ниже — "Редиска!".
//
// Ну и не забудьте после того как напишите
// замечательный конструктор, создать пару
// экземпляров(конкретных студентов) и
// подергать методы.

function Student(firstName, lastName, born) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.born = born;
    this.mark = [];
    this.attendance = new Array(25);
}

Student.prototype.age = function () {
    return new Date().getFullYear() - this.born;
};

Student.prototype.midBal = function () {
    let sum = this.mark.reduce(function (sum, item) {
        return sum + item;
    });
    return sum/this.mark.length
};

Student.prototype.present = function () {
    for (let i = 0; i < this.attendance.length; i++){
        if(this.attendance[i] === undefined){
            this.attendance[i] = true;
            break;
        }
    }
};

Student.prototype.absent = function () {
    for (let i = 0; i < this.attendance.length; i++){
        if(this.attendance[i] === undefined){
            this.attendance[i] = false;
            break;
        }
    }
};

Student.prototype.summary = function () {
    const mid = this.midBal();
    let countPresent = 0;

    for (let i = 0; i < this.attendance.length; i++){
        if(this.attendance[i] === true){
            countPresent++
        }
    }

    const present = countPresent/this.attendance.length;

    if(mid > 90 && present > 0.9){
        return "Ути какой молодчинка!";
    } else if(mid > 90 || present > 0.9){
        return "Норм, но можно лучше";
    } else {
        return "Редиска!"
    }
};

// Leonid

const studentLeonid = new Student('Leonid', 'Korzhak', 1991);

for(let i = 0; i < 27; i++){
    studentLeonid.mark.push(Math.floor(Math.random() * (100 - 85)+ 85));
}

for(let i = 0; i < 23; i++){
    studentLeonid.present();
}
studentLeonid.absent();
studentLeonid.absent();
studentLeonid.absent();

console.log('Возраст', studentLeonid.age());
console.log('Средний бал', studentLeonid.midBal());
console.log(studentLeonid.summary());
console.log(studentLeonid);

// Denis
const studentDenis = new Student('Denis', 'Vodonaev', 1988);

for(let i = 0; i < 25; i++){
    studentDenis.mark.push(Math.floor(Math.random() * (100 - 80)+ 80));
}

studentDenis.absent();
for(let i = 0; i < 22; i++){
    studentDenis.present();
}
studentDenis.absent();
studentDenis.absent();
studentDenis.absent();

console.log('Возраст', studentDenis.age());
console.log('Средний бал', studentDenis.midBal());
console.log(studentDenis.summary());
console.log(studentDenis);

// Oleksandr

const studentOleksandr = new Student('Oleksandr', 'Lapai', 1990);

for(let i = 0; i < 24; i++){
    studentOleksandr.mark.push(Math.floor(Math.random() * (100 - 85)+ 85));
}

for(let i = 0; i < 22; i++){
    studentOleksandr.present();
}

studentOleksandr.absent();
studentOleksandr.absent();
studentOleksandr.absent();
studentOleksandr.absent();

console.log('Возраст', studentOleksandr.age());
console.log('Средний бал', studentOleksandr.midBal());
console.log(studentOleksandr.summary());
console.log(studentOleksandr);








