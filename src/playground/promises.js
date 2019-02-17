const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('this is my resolved data');
    }, 3000);
});

promise.then((data) => {
    console.log(data);
});