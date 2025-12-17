let answer = 0;
console.log(answer);

fetch("testinput.txt")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to load the file");
    }
    return response.text(); // string
  })
  .then((text) => {
    const inputArray = text.split(","); // string to array
    checkIDs(inputArray);
  })
  .catch((err) => {
    console.error(err);
  });

function checkIDs(inputArray) {
  inputArray.forEach((element) => {
    //-> if, add to answer
    const IdNumber = element.split("-");
    //for loop from first ID to last ID
    const begin = parseInt(IdNumber[0]);
    const end = parseInt(IdNumber[1]);
    for (let i = begin; i <= end; i++) {
      //console.log(i);
      //check length divided by 2
      if (String(i).length % 2 == 0) {
        //-> if, then check if first half is the same as other half
        checkPalindrome(i);
        //console.log(i + " true");
      }
    }
    console.log("And the answer is: " + answer);
  });
}
//-> if, then check if first half is the same as other half
function checkPalindrome(num) {
  let halfWay = String(num).length / 2;
  let firstHalf = num.toString().slice(0, halfWay);
  let secondHalf = num.toString().slice(halfWay);
  if (firstHalf == secondHalf) {
    answer = answer + parseInt(num);
    console.log("answer is: " + answer);
  }
}
