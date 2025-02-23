const divideAndSort = (num) => {
  if(typeof num !== "number")return "input harus number!"
  let numString = num.toString();
  let arrStrings = numString.split("0");
  let newArrStrings = arrStrings.map(str => {
    return str.split('').map(Number);
  });
  let sortedArr = newArrStrings.map(subArr => {
    return subArr.sort((a, b) => a - b);
  });
  let flattenedStringArray = sortedArr.flat().map(String);
  let finalString = flattenedStringArray.join('');

  let finalNumber = parseInt(finalString);
  return finalNumber;
}

let numbers = 5956560159466056;

console.log(divideAndSort(numbers));
console.log(divideAndSort("satuduatiga"))