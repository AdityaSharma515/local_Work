const promise = new Promise((resolve,reject)=>{
    resolve("resolve is called once");
});
const promise2 = new Promise((resolve,reject)=>{
    resolve("resolve is called on promise2");
});
const promise3 = new Promise((resolve,reject)=>{
    reject("reject is called once");
});

promise.then((value)=>{
    console.log(value);
    return promise2;
}).then((value)=>{
    console.log(value);
    return promise3;
}).catch((err)=>{
    console.log(err);
})