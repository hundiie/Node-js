const timeout = setTimeout(() => {
    console.log("1.5 초 후 실행");
}, 1500);

const interval = setInterval(() => {
    console.log("1 초 마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
    console.log("3 초 후 실행");//실행 안됨
}, 3000);

setTimeout(() =>{
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);//2.5 초 후 실행 정지

// const immediate = setImmedate(() =>{
//     console.log('즉시 실행 1');
// })
    
// const immediate2 = setImmedate(() =>{
//     console.log('즉시 실행 2');// 실행 안됨
// })
        
// clearImmedate(immediate2);// imm2의 실행을 막음
    
// 3.4.4
console.log(__filename);
console.log(__dirname);