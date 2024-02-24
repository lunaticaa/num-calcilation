//console.log("");


//window.alert("");

//this is a comment

/*  ehwethwb fgbrthw comment */

/*document.getElementById("myH1").textContent = `Hello`;

document.getElementById("myP").textContent = `i like pizza`;

let x;
let age = 25;
let price = 10;
console.log(age);

console.log(typeof price);

console.log(`your age is ${age}`);

let students = 30;

students = students -1;

students = students + 3;

students += 1;

students -= 1;

students *2;

students /= 2;

students++;
students--;
console.log(students);


let userName = window.prompt("what's your userName: ");

console.log(userName); */

/* let username;

document.getElementById("mySubmit").onclick = function(){
  username = document.getElementById("myText").value;
  console.log(username);
  document.getElementById("myH1").textContent = `Hello ${username}`
}; */


const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel = document.getElementById("countLabel");

let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
};

resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}


decreaseBtn.onclick = function(){
  count--
  countLabel.textContent = count;
}






