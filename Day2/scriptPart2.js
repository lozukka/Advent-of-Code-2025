let answer = 0;

fetch("input.txt")
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
    //array with start and end
    const IdNumber = element.split("-");
    //for loop from first ID to last ID
    const begin = parseInt(IdNumber[0]);
    const end = parseInt(IdNumber[1]);
    for (let i = begin; i <= end; i++) {
      if (isInvalid(i)) {
        answer += i;
        console.log("Added new: " + i);
      }
    }
  });
  console.log("And the answer is: " + answer);
}

function isInvalid(num) {
  const s = String(num);
  const len = s.length;

  for (let subLen = 1; subLen <= len / 2; subLen++) {
    if (len % subLen !== 0) continue;

    const pattern = s.slice(0, subLen);
    let repeated = pattern.repeat(len / subLen);

    if (repeated === s) {
      return true;
    }
  }
  return false;
}
