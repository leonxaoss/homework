class Hamburger {
    constructor(...args) {
        this.Arr = args;
    }

    static SIZE_SMALL = {
        prise: 50,
        calories: 20
    };

    static SIZE_BIG = {
        prise: 100,
        calories: 40
    };

    static STUFFING_CHEESE = {
        prise: 10,
        calories: 20
    };

    static STUFFING_SALATE = {
        prise: 20,
        calories: 5
    };

    static STUFFING_POTATOES = {
        prise: 15,
        calories: 10
    };

    static TOPPING_SAUCE = {
        prise: 15,
        calories: 0
    };

    static TOPPING_MAYO = {
        prise: 20,
        calories: 5
    };

    addTopping (...args) {
        args.forEach( (item) => {
            this.Arr.push(item);
        });
    };

    calculatePrice () {
        return this.Arr.reduce( (sum, curr) => {
            return sum + curr.prise;
        }, 0)
    };

    calculateCalories () {
        return this.Arr.reduce( (sum, curr) => {
            return sum + curr.calories;
        }, 0)
    };
}

// маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

// добавка из майонеза
hamburger.addTopping(Hamburger.TOPPING_MAYO);

// спросим сколько там калорий
console.log('Calories: ' + hamburger.calculateCalories());

// сколько стоит
console.log('Price: ' + hamburger.calculatePrice());

// я тут передумал и решил добавить еще приправу
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ' + hamburger.calculatePrice());

// Добавимо ще салат і картоплю і глянемо на ціну
hamburger.addTopping(Hamburger.STUFFING_SALATE, Hamburger.STUFFING_POTATOES);
console.log('Price with salad and potatoes: ' + hamburger.calculatePrice());
console.log('Calories with salad and potatoes: ' + hamburger.calculateCalories());
