// const promises = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 1 is complete");
//     resolve();
//   }, 1000);
// });

// promises.then(function () {
//   //.then direct relation to resolve
//   console.log("Promises Consumed");
// });
// // Async task is complete
// // Promises Consumed

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async task 2 is complete");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Promises Consumed 2");
// });

// const promises3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve({ username: "Chai", email: "akashchauhan22110gmail.com" });
//   }, 1000);
// });
// promises3.then(function (user) {
//   console.log(user);
// });
// // Async task 1 is complete
// // Promises Consumed
// // Async task 2 is complete
// // Promises Consumed 2
// // { username: 'Chai', email: 'akashchauhan22110gmail.com' }

// const promises4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     /* let error = true; */ let error = false;
//     if (!error) {
//       resolve({
//         username: "Chai",
//         email: "akashchauhan22110gmail.com",
//         password: "123",
//       });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// // promiese4.then().catch()

// promises4
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The Promise is either resolved or rejected");
//   });

// // Async task 1 is complete
// // Promises Consumed
// // Async task 2 is complete
// // Promises Consumed 2
// // { username: 'Chai', email: 'akashchauhan22110gmail.com' }
// // {
// //   username: 'Chai',
// //   email: 'akashchauhan22110gmail.com',
// //   password: '123'
// // }
// // Chai
// // The Promise is either resolved or rejected

// const promises5 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = false;
//     if (!error) {
//       resolve({
//         username: "Chai",
//         email: "akashchauhan22110gmail.com",
//         password: "123",
//       });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// async function consumePromiseFive() {
//   try {
//     const response = await promises5;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }
// consumePromiseFive();

// // Async task 1 is complete
// // Promises Consumed
// // Async task 2 is complete
// // Promises Consumed 2
// // { username: 'Chai', email: 'akashchauhan22110gmail.com' }
// // {
// //   username: 'Chai',
// //   email: 'akashchauhan22110gmail.com',
// //   password: '123'
// // }
// // Chai
// // The Promise is either resolved or rejected
// // ERROR: JS went wrong

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E : ", error);
//   }
// }
// getAllUsers();
// [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: [Object]
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets'
//     }
//   }]

// fetch("https://api.github.com/users/hiteshchoudhary")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));
// {
//   login: 'hiteshchoudhary',
//   id: 11613311,
//   node_id: 'MDQ6VXNlcjExNjEzMzEx',
//   avatar_url: 'https://avatars.githubusercontent.com/u/11613311?v=4',
//   gravatar_id: '',
//   url: 'https://api.github.com/users/hiteshchoudhary',
//   html_url: 'https://github.com/hiteshchoudhary',
//   followers_url: 'https://api.github.com/users/hiteshchoudhary/followers',
//   following_url: 'https://api.github.com/users/hiteshchoudhary/following{/other_user}',
//   gists_url: 'https://api.github.com/users/hiteshchoudhary/gists{/gist_id}',
//   starred_url: 'https://api.github.com/users/hiteshchoudhary/starred{/owner}{/repo}',
//   subscriptions_url: 'https://api.github.com/users/hiteshchoudhary/subscriptions',
//   organizations_url: 'https://api.github.com/users/hiteshchoudhary/orgs',
//   repos_url: 'https://api.github.com/users/hiteshchoudhary/repos',
//   events_url: 'https://api.github.com/users/hiteshchoudhary/events{/privacy}',
//   received_events_url: 'https://api.github.com/users/hiteshchoudhary/received_events',
//   type: 'User',
//   site_admin: false,
//   name: 'Hitesh Choudhary',
//   company: null,
//   blog: 'https://www.youtube.com/c/HiteshChoudharydotcom',
//   location: 'India',
//   email: null,
//   hireable: null,
//   bio: 'I make coding videos on youtube and for courses. My youtube channel explains my work more. Check that out',
//   twitter_username: 'hiteshdotcom',
//   public_repos: 70,
//   public_gists: 1,
//   followers: 5877,
//   following: 0,
//   created_at: '2015-03-23T13:03:25Z',
//   updated_at: '2023-08-17T17:32:15Z'
// }
