//프로미스
const condition = true;
const promise = new Promise((resolve, reject) => {
    if(condition) 
    {
        resolve('성공');
    }
    else
    {
        reject('실패');
    }
});

//다른 코드가 들어갈 수 있음
promise
.then((message)=> {
    console.log(message); // 성공(resolve)시 실행
})
.catch((error)=> {
    console.error(error); // 실패(reject)시 실행
})
.finally(()=> {
    console.log('무조건'); // 끝나면 무조건 실행
});

// 프로미스를 한꺼번에 실행
const promise1 = Promise.resolve('성공1');
const promise2 = Promise.resolve('성공2');
Promise.all([promise1, promise2])
.then((result) =>{
    console.log(result); // [성공1, 성공2]
})
.catch((error)=>{
    console.error(error);
});