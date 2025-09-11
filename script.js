const monthEle = document.getElementById("month-name");

const dayEle = document.getElementById("day-name");

const dateEle = document.getElementById("date");

const yearEle = document.getElementById("yr");



const date = new Date();

// console.log(date);


const month = date.getMonth();


monthEle.innerText = date.toLocaleString("en",{month:"long"});

dayEle.innerText = date.toLocaleString("en",{weekday:"long"});

dateEle.innerText = date.getDate();

yearEle.innerText = date.getFullYear();