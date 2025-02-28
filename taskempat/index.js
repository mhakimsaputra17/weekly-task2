// Function Palindrom
export const cekPalindrom = (str) => {
  let start = 0;
  let end = str.length - 1;
  if (typeof str !== "string") return console.log("Input harus string");
  while (start < end) {
    if (str[start] !== str[end]) {
      return console.log("Bukan palindrom");
    } else {
      start++;
      end--;
    }
    return console.log("Palindrom");
  }
};

// cekPalindrom("malam");
// cekPalindrom("hello");
// cekPalindrom(123);

// Function reverseWords
export const reverseWords = (s) => {
  if (typeof s !== "string") return console.log("Input harus string");
  let word = s.split(" ").filter((words) => words.length > 0);
  let left = 0;
  let right = word.length - 1;
  while (left < right) {
    [word[left], word[right]] = [word[right], word[left]];
    left++;
    right--;
  }
  let result = word.join(" ");
  console.log(result);
};

// reverseWords("Saya Belajar Javascript");
// reverseWords(123);
