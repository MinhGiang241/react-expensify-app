const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "Giang",
      age: 29,
    });
  }, 1000);
});
console.log("before");
promise
  .then((data) => {
    console.log(data);
  })
  .then(() => {
    console.log("after");
  });
