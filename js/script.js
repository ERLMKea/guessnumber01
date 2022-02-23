'use strict'

const lblMessage = document.querySelector(".message");
console.log(lblMessage);

const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");

lblMessage.textContent = "hej";

lblNumber.textContent = 5;
lblScore.textContent = 10;

const inpGuess = document.querySelector(".guess");
inpGuess.value = 11;

const pbCheck = document.querySelector(".pbCheck")

function checkNumberxx(btn) {
  const gnum = inpGuess.value;
  console.log("num =" + gnum + " type=" + typeof gnum);
  const numguess = Number(gnum);
  console.log("num =" + numguess + " type=" + typeof numguess);

  console.log("compare str med num ==:" + (gnum == numguess));
  console.log("compare str med num ===:" + (gnum === numguess));
  console.log("2" > 17);
  console.log("2" > "17");

}

function checkNumber(btn) {
  const gnum = inpGuess.value;
  const numguess = Number(gnum);

  console.log("fontsize=" + inpGuess.style.fontSize);
  inpGuess.style.fontSize = '22px';
  console.log("fontsize=" + inpGuess.style.fontSize);

}


pbCheck.addEventListener('click', checkNumber);


