/**
 * Task 1
 */
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thusday",
  "Friday",
  "Saturday",
];

let date = new Date();
let day = days[date.getDay()];

document.getElementById("current_day").innerHTML = day;
setInterval(function () {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  let prefix = "PM";
  if (hour > 12) {
    hour = hour - 12;
    prefix = "PM";
  } else {
    prefix = "AM";
  }

  document.getElementById(
    "current_time"
  ).innerHTML = `${hour} ${prefix} : ${min} : ${sec}`;
}, 1000);

/**
 * Task 2
 */
document.getElementById("current_time_now").innerHTML = `${
  date.getMonth() + 1
}-${date.getDay()}-${date.getFullYear()} & ${
  date.getMonth() + 1
}/${date.getDay()}/${date.getFullYear()}`;
/**
 * Task 3
 */
let avg = (5 + 6 + 7) / 2;
document.getElementById("area_of_triangle").innerHTML = Math.sqrt(
  avg * (avg - 5) * (avg - 6) * (avg - 7)
);
/**
 * Task 5
 */
let status = date.getFullYear() % 4 ? "Leap Calender" : "Georgion Caleder";

document.getElementById("year_status").innerHTML = `"${status}"`;

/**
 * Task 6
 */
let calc_sunday = 0;
let startDate = 2014;
let endDate = 2050;
for (let i = 2014; i <= 2050; i++) {
  let check = new Date(`January 1, ${i}`).getDay();
  if (check == 0) {
    calc_sunday += 1;
  }
}
document.getElementById("check_sunday").innerHTML = `"${calc_sunday}"`;

/**
 * Task 7
 */
document.getElementById("guess").addEventListener("click", function () {
  let random_num = Math.round(Math.random() * (10 - 1) + 1);
  let guess = prompt("Guess a Number");
  if (guess != "") {
    if (guess == random_num) {
      alert("Good Work");
    } else {
      alert("Not matched");
    }
  }
});
/**
 * Task 8
 */
const date1 = new Date();
const date2 = new Date("08/14/2022");
console.log(typeof date2);
console.log(date2);

const diffTime = Math.abs(date2 - date1);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
document.getElementById("august_left").innerHTML = diffDays;
/**
 * Task 9
 */
let alert_box = document.getElementById("alert_result");
document.getElementById("add").addEventListener("click", function () {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  if (input1 == "" || input2 == "") {
    return (alert_box.innerHTML = "Both inputs are required");
  } else {
    alert_box.innerHTML = `Result of Addition is: ${input1 + input2}`;
  }
});
document.getElementById("mul").addEventListener("click", function () {
  let input1 = parseInt(document.getElementById("input1").value);
  let input2 = parseInt(document.getElementById("input2").value);
  if (input1 == "" || input2 == "") {
    return (alert_box.innerHTML = "Both inputs are required");
  } else {
    alert_box.innerHTML = `Result of Multiplication is: ${input1 * input2}`;
  }
});

document.getElementById("clear").addEventListener("click", function () {
  alert_box.innerHTML = "";
  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";
});

/**
 * Task 9
 */


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

//task 11
var x,y;
function sumTriple() {
  x = parseInt(document.getElementById("a").value);
  y = parseInt(document.getElementById("b").value);
  
  if (x == y) {
    var flag= 3 * (x + y);
    document.getElementById("task11").innerText = flag;
    } 
   else
   {
    var flag= (x + y);
    document.getElementById("task11").innerText = flag;
   }
 }



// task 12

function testhundred() {
  var x= parseInt(document.getElementById("num").value);
  if((Math.abs(100 - x) <= 20) || (Math.abs(400 - x) <= 20)){
    document.getElementById("task12").innerText= "The number is in between 100 and 400";
  }
  else{
    document.getElementById("task12").innerText= "CONDITION NOT TRUE";
  }
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


// //task 14

// function capital_letter(str) 
// {
//     str = str.split(" ");

//     for (var i = 0, x = str.length; i < x; i++) {
//         str[i] = str[i][0].toUpperCase() + str[i].substr(1);
//     }

//     return str.join(" ");
// }

// console.log(capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
// document.getElementById("task14").innerText=capital_letter("Write a JavaScript program to capitalize the first letter of each word of a given string.");

// //Task 15

// function time_convert()
//  { 
//   var num=document.getElementById("n").value;   
//   var hours = Math.floor(num / 60);  
//   var minutes = num % 60;
//   document.getElementById("task15").innerText= `${hours}  :  ${minutes}`;         
// }

// //Task 16

// function reverse3(array) {
//     return array.map((element, idx, arr) => arr[(arr.length - 1) - idx]);
// }

// console.log(reverse3([5, 4, 3])); 
// console.log(reverse3([1, 0, -1]));  
// console.log(reverse3([2, 3, 1]));


// //Task 18
// function Kth_greatest_in_array(arr, k) {

//   for (var i = 0; i < k; i++) {
//     var max_index = i,
//       tmp = arr[i];

//     for (var j = i + 1; j < arr.length; j++) {
//       if (arr[j] > arr[max_index]) {
//         max_index = j;
//       }
//     }

//     arr[i] = arr[max_index];
//     arr[max_index] = tmp;
//   }

//   return arr[k - 1];
// }




// console.log(Kth_greatest_in_array([1,2,6,4,5], 3))
// console.log(Kth_greatest_in_array([-10,-25,-47,-36,0], 1))

// //Task 19
// function array_element_mode(arr) {
//   var ctr = [],
//     ans = 0;

//   for(var i = 0; i < 10; i++) {
//     ctr.push(0);
//   }
//   for(var i = 0; i < arr.length; i++) {
//     ctr[arr[i] - 1]++;
//     if(ctr[arr[i] - 1] > ctr[ans]) {
//       ans = arr[i] - 1;
//     }
//   }
//   return ans + 1;  
// }
// console.log(array_element_mode([1, 2, 3, 2, 2, 8, 1, 9]))


// //Task 20

// function array_element_replace(arr, old_value, new_value) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === old_value) {
//       arr[i] = new_value;
//     }
//   }
//   return arr;
// }
// num = [1, 2, 3, 2, 2, 8, 1, 9];
// console.log("Original Array: "+num);
// console.log(array_element_replace(num, 2, 5));


