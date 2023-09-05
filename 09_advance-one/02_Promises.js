const promises = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 1 is complete");
    resolve();
  }, 1000);
});

promises.then(function () {
  //.then direct relation to resolve
  console.log("Promises Consumed");
});
// Async task is complete
// Promises Consumed

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2 is complete");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promises Consumed 2");
});

const promises3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Chai", email: "akashchauhan22110gmail.com" });
  }, 1000);
});
promises3.then(function (user) {
  console.log(user);
});
// Async task 1 is complete
// Promises Consumed
// Async task 2 is complete
// Promises Consumed 2
// { username: 'Chai', email: 'akashchauhan22110gmail.com' }

const promises4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    /* let error = true; */ let error = false;
    if (!error) {
      resolve({
        username: "Chai",
        email: "akashchauhan22110gmail.com",
        password: "123",
      });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// promiese4.then().catch()

promises4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The Promise is either resolved or rejected");
  });

// Async task 1 is complete
// Promises Consumed
// Async task 2 is complete
// Promises Consumed 2
// { username: 'Chai', email: 'akashchauhan22110gmail.com' }
// {
//   username: 'Chai',
//   email: 'akashchauhan22110gmail.com',
//   password: '123'
// }
// Chai
// The Promise is either resolved or rejected

const promises5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Chai",
        email: "akashchauhan22110gmail.com",
        password: "123",
      });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  try {
    const response = await promises5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

// Async task 1 is complete
// Promises Consumed
// Async task 2 is complete
// Promises Consumed 2
// { username: 'Chai', email: 'akashchauhan22110gmail.com' }
// {
//   username: 'Chai',
//   email: 'akashchauhan22110gmail.com',
//   password: '123'
// }
// Chai
// The Promise is either resolved or rejected
// ERROR: JS went wrong
