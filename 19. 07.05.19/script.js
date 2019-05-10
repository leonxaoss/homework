// Домашка починається з 146 рядка

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

Student.prototype.presentMid = function () {
    let countPresent = 0;

    for (let i = 0; i < this.attendance.length; i++){
        if(this.attendance[i] === true){
            countPresent++
        }
    }

    return countPresent/this.attendance.length;
};

Student.prototype.summary = function () {
    const mid = this.midBal();
    const midPres = this.presentMid();

    if(mid > 90 && midPres > 0.9){
        return "Ути какой молодчинка!";
    } else if(mid > 90 || midPres > 0.9){
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
console.log(studentLeonid.presentMid());
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
console.log(studentDenis.presentMid());
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
console.log(studentOleksandr.presentMid());
console.log(studentOleksandr);


// Создать конструктор массива, который будет содержать объекты
// из прошлого задания на прототипы.
//
// Массивы созданные с помощью этого конструктора
// должны содержать следующие методы:
//
// .attendance — если вызывается без аргумента, то возвращает
// среднюю посещаемость группы за одно занятие;
// если с аргументом — строкой содержащей фамилию
// одного из студентов, то возвращает его
// место в рейтинге посещаемости
//
// .performance — то же самое, но с оценками

function StudentArr(){}

StudentArr.prototype = Array.prototype;

StudentArr.prototype.attendance = function (lastName) {

    function sortPresent(studentA, studentB) {
        return studentB.presentMid() - studentA.presentMid();
    }

    if(lastName){
        let pos = 0;

        this.sort(sortPresent);

        this.forEach(function (item, i) {
            if (item.lastName === lastName){
                return pos = i + 1;
            }
        });

        return pos;
    } else {
        let sum = 0;

        this.forEach(function (item) {
            sum += item.presentMid()
        });

        return sum/this.length
    }
};

StudentArr.prototype.performance  = function (lastName) {

    function sortBal(studentA, studentB) {
        return studentB.midBal() - studentA.midBal();
    }

    if(lastName){
        let pos = 0;

        this.sort(sortBal);

        this.forEach(function (item, i) {
            if (item.lastName === lastName){
                return pos = i + 1;
            }
        });

        return pos;
    } else {
        let sum = 0;

        this.forEach(function (item) {
            sum += item.midBal();
        });

        return sum/this.length
    }

};

const studentList = new StudentArr();
const korzhak = 'Korzhak';

studentList.push(studentLeonid);
studentList.push(studentDenis);
studentList.push(studentOleksandr);

console.log('==================================================================');
console.log(studentList);
console.log('Место в рейтенге по посещаемости студента '+ korzhak + ' -', studentList.attendance(korzhak));
console.log('Средняя посещаемость группы за одно занятие - ', studentList.attendance());
console.log('Место в рейтенге по оценкам студента '+ korzhak + ' -', studentList.performance(korzhak));
console.log('Средний бал группы за одно занятие - ', studentList.performance());
