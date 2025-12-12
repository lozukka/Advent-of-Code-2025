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
    console.log(typeof text);
    const inputArray = text.split("\r\n"); // string to array
    countSum(inputArray);
  })
  .catch((err) => {
    console.error(err);
  });

function countSum(inputArray) {
  inputArray.forEach((element) => {
    let modifyedNum = parseInt(element.slice(1));
    if (modifyedNum > 99) {
      modifyedNum = modifyedNum % 100;
    }
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
    if (sum === 0) {
      ammountOfZeros++;
    }

    console.log(sum);
  });
  console.log("total: " + ammountOfZeros);
}
