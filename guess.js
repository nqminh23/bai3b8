function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}
let randomNumber = generateRandomNumber();

function guessNumber() {
  let userGuess = parseInt(document.getElementById("userGuess").value);
  if (isNaN(userGuess)) {
    document.getElementById("result").innerHTML =
      "Vui lòng nhập một số từ 1 đến 10!";
    return;
  }

  if (userGuess === randomNumber) {
    document.getElementById("result").innerHTML =
      "Chúc mừng! Bạn đã đoán đúng số " + randomNumber;
  } else {
    document.getElementById("result").innerHTML = "Sai rồi! Hãy thử lại.";
  }
}
