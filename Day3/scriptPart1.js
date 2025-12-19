let answer = 0;
let joltage = 0;

fetch("testinput.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load the file");
    }
    return response.text(); // string
  })
  .then((text) => {
    const inputArray = text.split("\r\n"); // string to array
    checkIDs(inputArray);
  })
  .catch((err) => {
    console.error(err);
  });

//possible joltage 99-11
//check each bank
//find the two most biggest digits
//add two digits to answer

function checkIDs(inputArray) {
  inputArray.forEach((element) => {
    const bank = element.split("");
    console.log(bank);
    for (let i = 99; i >= 11; i--) {
      joltage = bank.find((element) => element == 9);
      console.log(joltage);
    }
    answer += parseInt(joltage);
    console.log("Answer is: " + answer);
  });
}
