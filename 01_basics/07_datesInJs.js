let myDate = new Date();
// console.log(myDate);//2023-08-22T09:43:08.816Z
// console.log(myDate.toString());//Tue Aug 22 2023 15:13:42 GMT+0530 (India Standard Time)
// console.log(myDate.toISOString());//2023-08-22T09:46:02.154Z
// console.log(myDate.toDateString());//Tue Aug 22 2023
// console.log(myDate.toTimeString());//15:19:00 GMT+0530 (India Standard Time)
// console.log(myDate.toLocaleString());//22/8/2023, 3:20:14 pm
// console.log(myDate.toUTCString());//Tue, 22 Aug 2023 09:51:05 GMT
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2023, 7, 22);
// console.log(myCreatedDate.toDateString()); //Tue Aug 22 2023 month starts with 0 index

let myTimeStamp = Date.now();
console.log(myTimeStamp);//1692698642444