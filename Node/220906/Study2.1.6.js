// var Human = function(type){
//     this.type = type || 'human';
// };

// Human.isHuman = function(human) {
//     return human instanceof Human;
// }

// Human.prototype.breathe = function() {
//     alert('h-a-a-a-m');
// };

// var Zero = function(type, firstName, lastName) {
//     Human.apply(this, arguments);
//     this.firstName = firstName;
//     this.lastName = lastName;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero; //상속하는 부분
// Zero.prototype.sayName = function() {
//     alert(this.firstName + ' ' + this.lastName);
// };
// var oldZero = new Zero('Human', 'Zero', 'Cho');
// Human.isHuman(oldZero); // true

// 클래스로 바꿈

class Human {
    constructor(type = 'Human') {
        this.type = type;
    }

    static isHuman(human) {
        return human instanceof Human;
    }
}

class Zero extends Human {
    constructor(type, firstName, lastName) {
        super(type);
        this.firstName = firstName;
        this.lastName = lastName;
    }


    sayName() {
        super.breathe();
        alert(`${this.firstName} ${this.lastName}`);
    }
}

const newZero = new Zero('human', 'Zero', 'cho');
Human.isHuman(newZero); // true