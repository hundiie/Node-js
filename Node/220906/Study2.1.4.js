function add(x , y){
    return x + y;
}

const add2 = (x , y) =>{
    return x + y;
}

const add3 = (x , y) => x + y;

const add4 = (x , y) => (x +  y);

function not1(x) {
    return !x;
}

const not2 = x => !x;

var relationship1 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFrinds()
    {
        var that = this;
        this.friends.forEach(function (friend){ console.log(that.name, friend) })
    },
};
relationship1.logFrinds();

const relationship2 = {
    name: 'zero',
    friends: ['nero','hero','xero'],
    logFrinds()
    {
        this.friends.forEach(friend => { console.log(this.name,friend); });
    },
};
relationship2.logFrinds();