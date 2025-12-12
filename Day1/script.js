// fetch the input.txt that contains the input for the lock
let sum = 50;
let ammountOfZeros = 0;

fetch("input.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Tiedoston lataus epäonnistui");
    }
    return response.text(); // string
  })
  .then((text) => {
    const inputArray = text.split("\r\n"); // string to array
    countSum(inputArray); //part 1
    countSumPart2(inputArray); //part 2
  })
  .catch((err) => {
    console.error(err);
  });
//part 1 solution
function countSum(inputArray) {
  inputArray.forEach((element) => {
    //check if the input number is more than 99
    let modifyedNum = parseInt(element.slice(1));
    if (modifyedNum > 99) {
      modifyedNum = modifyedNum % 100;
    }
    //check wich way to turn the dial, and then add or substract the input
    if (element.charAt(0) === "R") {
      sum = sum + modifyedNum;
      if (sum > 99) {
        sum = sum % 100;
      }
    } else {
      sum = sum - modifyedNum;
      if (sum < 0) {
        sum = 100 - Math.abs(sum);
      }
    }
    if (sum == 0) {
      ammountOfZeros++;
      //console.log("amount of zeros: " + ammountOfZeros);
    }

    //console.log(sum);
  });
  console.log("Total 1: " + ammountOfZeros);
}

//part 2 solution
let sum2 = 50;
let ammountOfZeros2 = 0;

function countSumPart2(inputArray) {
  inputArray.forEach((element) => {
    let distance = parseInt(element.slice(1));

    for (let i = 0; i < distance; i++) {
      if (element.charAt(0) === "R") {
        sum2 = (((sum2 + 1) % 100) + 100) % 100;
      } else {
        sum2 = (((sum2 - 1) % 100) + 100) % 100;
      }
      if (sum2 == 0) {
        ammountOfZeros2++;
        //console.log("ammount of zeros 2: " + ammountOfZeros2);
      }
    }
  });
  console.log("Total 2: " + ammountOfZeros2);
}
