var candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy: function (){
        this.status.count--;
        return this.status.count;
    },
};
var getCandy = candyMachine.getCandy;
var count = candyMachine.status.count;

const candyMachine = {
    status: {
        name: 'node',
        count: 5,
    },
    getCandy() {
        this.status.count--;
        return this.status.count;
    },
};
const { getCandy, status: { count } } = candyMachine;

//각종 배열 선언
var array = ['nodejs', {}, 10, true];
var node = array[0];
var obj = array[1];
var int = array[2];
var bool = array[3];

const array = ['nodejs', {}, 10, true];
const [node, obj, , bool] = array;