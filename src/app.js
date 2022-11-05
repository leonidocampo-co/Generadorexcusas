/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["the dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when i finished",
    "during my lunch",
    "while i was praying"
  ];

  let excusa = "";

  let num = Math.floor(Math.random() * (who.lenght - 1));
  excusa = who[num] + " ";

  num = Math.floor(Math.random() * (action.lenght - 1));
  excusa = excusa + action[num] + "";

  num = Math.floor(Math.random() * (what.lenght - 1));
  excusa = excusa + what[num] + "";

  num = Math.floor(Math.random() * (when.lenght - 1));
  excusa = excusa + when[num] + "";

  document.getElementById("excusa").innerText = excusa;

  console.log(excusa);
};

function randomVal(arr) {
  let num = Math.floor(Math.random() * (arr.lenght - 1));
  return arr[num];
}
