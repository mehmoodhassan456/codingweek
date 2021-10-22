// const d= new Date();
// document.getElementById("show").innerText=d.getDate();
// document.getElementById("show1").innerText=d.getMonth();
// document.getElementById("show2").innerText=d.getFullYear();
// document.getElementById("show").innerText=d.getDate();
//Task 01

const d = new Date();
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
document.getElementById("show").innerHTML = days[d.getDay()];
// document.write(d.getHours(), "   ",d.getMinutes(),"     ",d.getSeconds());
// document.write();
// document.write();

//Task 2
document.getElementById("day").innerText=  `Today is: ${days[d.getDay()]}`;
let t=d.getHours();
if (t>12){
    document.getElementById("show1").innerText=(`Time is:${t-12} PM ${d.getMinutes()} Minutes ${d.getSeconds()}    Seconds`);;
}
else{
    document.getElementById("show1").innerText=(`Time is:${t} AM ${d.getMinutes()} Minutes ${d.getSeconds()}    Seconds`);

}
// document.write("<br>");
document.getElementById("date").innerText=`${d.getMonth()}-${d.getDay()}-${d.getFullYear()}`;
// 5, 6, 7
//Task # 3
var a=5;
var b=6;
var c=7; 
var s= (a+b+c)/2;

var area=(s*(s-a)*(s-b)*(s-c))^1/2;
document.getElementById("area").innerText=`the area of triangle is: ${area}`;

// let str="Saylani";
// let str1="";
// for (let i = str.length - 1; i >= 0; i--) {
//     str1 += str[i];
// }
// }
// return str1
// document.write("<br>");
// document.write(str1);

// function reverseString(str) {

//     // empty string
//     let newString = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         newString += str[i];
//     }
//     return newString;
// }

// // take input from the user
// string="Saylani"
// const result = reverseString(string);
// document.write("<br><br>",result);
//Task 4

let str="Saylani";
let newStr="";
let l=str.length;

for (let i=l-1 ;i>=0; i--){
    newStr+=str[i];
}

document.getElementById("string").innerText=newStr;

let year=d.getFullYear();
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    document.getElementById("leapYear").innerText="Current Year is Leap Year";

}
else{
    document.getElementById("leapYear").innerText="Current Year is not Leap Year";
}


let calSun=0;
for (i=2014;i<=2050;i++){
    let check =new Date(`January 1, ${i}`).getDay();
    if (check==0){
        calSun+=1;
    }

}
document.getElementById("sunday").innerText=(`Number of Sundays: ${calSun}`);
// Math.floor(Math.random() * 10);
// let b= document.getElementById("guess").value;

// if (b==Math.floor(Math.random() * 10)){
//     document.write("<br>","You got it right");
// }
// else{
//     document.write("<br>","Try Again");
// }
 
function check() {
    var x = Math.floor((Math.random() * 10) + 1);
    var i = document.getElementById('inputFiled').value;
 
    if (i === x) {
      document.getElementById("sh").innerText="Good JOb";
    }else {
       document.getElementById("sh").innerText= "Not matched";
    }

   
}
// // let currentYear = d.getFullYear();

//  // Get the current date
//  let today = new Date();
  
//  // Get the year of the current date
//  let christmasYear = today.getFullYear();

//  // Check if the current date is
//  // already past by checking if the month
//  // is December and the current day
//  // is greater than 25
//  if (today.getMonth() == 7 &&
//      today.getDate() > 14) {

//    // Add an year so that the next
//    // Christmas date could be used
//    aYear = aYear + 1;
//  }

//  // Get the date of the next Christmas
//  let aDate = 
//      new Date(aYear, 7, 14);

//  // Get the number of milliseconds in 1 day
//  let dayMilliseconds =
//      1000 * 60 * 60 * 24;

//  // Get the remaining amount of days
//  let remainingDays = Math.ceil(
//    (christmaDate.getTime() - today.getTime()) /
//    (dayMilliseconds)
//  );

//  // Write it to the page
//  document.write("There are " + remainingDays +
//                 " days remaining until 14 August.");

//Task 8

const date1 = new Date();
const date2 = new Date("08/14/2022");
console.log(typeof date2);
console.log(date2);

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("august_left").innerHTML = diffDays;


let num1=parseInt (document.getElementById("number1").value);
let num2=parseInt (document.getElementById("number2").value);

const mult= ()=> {
    result=num1*num2;
    document.getElementById("task9").innerText=result;
}
const div= ()=>{
    // if (num2==0){
    // document.getElementById("task9").innerText="Enter value greater than 0";
    // }
    // else{
    // let result=num1/num2;
    // document.getElementById("task9").innerText=result;
    // }
    result=num1/num2;
    document.getElementById("task9").innerText= result;
    

}

// Task 10

const convertTemp = ()=>{
  const temp = document.getElementById("temp").value;
  const selectBox = document.getElementById("units");
  const showResult = document.getElementById("showResult");

  console.log(temp.value);

  console.log(selectBox.value);

  if (selectBox.value == "celcius"){
      var result = (temp*9/5)+32
    showResult.innerText = `${result} °F`
}
else{
      var result = ((temp-32)/9)*5;
    showResult.innerText = `${result} °C`
}

}

function sumTriple (x, y) {
  if (x == y) {
    return 3 * (x + y);
    } 
   else
   {
    return (x + y);
   }
 }
document.getElementById("task11").innerText=(sumTriple(10, 20));
document.getElementById("task110").innerText=(sumTriple(10, 10));

// task 12
var x= document.getElementById("num").value;
function testhundred() {
  document.getElementById("task12").innerText= ((Math.abs(100 - x) <= 20) ||(Math.abs(400 - x) <= 20));
}

//task 13

function max_of_three() 
 {
  var x= document.getElementById("numb1").value;
var y=document.getElementById("numb2").value;
var z=document.getElementById("numb3").value;   
  max_val = 0;
  if (x > y)
  {
    max_val = x;
  } else
  {
    max_val = y;
  }
  if (z > max_val) 
  {
    max_val = z;
  }
  document.getElementById("task13").innerText=` The value is: ${max_val}`;
}


//task 14

function capital_letter(str) 
{
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
document.getElementById("task14").innerText=capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string.");

//Task 15

function time_convert()
 { 
  var num=document.getElementById("n").value;   
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  document.getElementById("task15").innerText= `${hours}  :  ${minutes}`;         
}

//Task 16

function reverse3(array) {
    return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
}

console.log(reverse3([5, 4, 3])); 
console.log(reverse3([1, 0, -1]));  
console.log(reverse3([2, 3, 1]));


//Task 18
function Kth_greatest_in_array(arr, k) {

  for (var i = 0; i < k; i++) {
    var max_index = i,
      tmp = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[max_index]) {
        max_index = j;
      }
    }

    arr[i] = arr[max_index];
    arr[max_index] = tmp;
  }

  return arr[k - 1];
}




console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

//Task 19
function array_element_mode(arr) {
  var ctr = [],
    ans = 0;

  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < arr.length; i++) {
    ctr[arr[i] - 1]++;
    if(ctr[arr[i] - 1] > ctr[ans]) {
      ans = arr[i] - 1;
    }
  }
  return ans + 1;  
}
console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))


//Task 20

function array_element_replace(arr, old_value, new_value) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === old_value) {
      arr[i] = new_value;
    }
  }
  return arr;
}
num = [1, 2, 3, 2, 2, 8, 1, 9];
console.log("Original Array: "+num);
console.log(array_element_replace(num, 2, 5));
