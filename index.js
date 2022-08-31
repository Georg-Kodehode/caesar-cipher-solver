// const reversedAlphabet = "ZYXWVUTSRQPONMLKJIHGFEDCBA";
const reversedAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  .split("")
  .reverse()
  .join("");
const title = document.querySelector(".title");
const decodeBtn = document.querySelector("#decode-btn");
const encodeBtn = document.querySelector("#encode-btn");
const msgInput = document.querySelector("#msg-input");
const numInput = document.querySelector("#num-input");
const textArea = document.querySelector("textarea");
let text = "";
let shiftNum = 0;
let output = "";

/* Sets the text color of the textarea content */
textArea.style.color = "white";

/* Adds a click event listener to decodeBtn, which runs the caesarCipher function for each possible shift */
decodeBtn.addEventListener("click", () => {
  output = "";
  for (let i = 0; i < reversedAlphabet.length; i++) {
    caesarCipher(i, false);
  }
  /* Output is added to the textarea */
  textArea.value = output;
  textArea.style.backgroundColor = "#457b9d"; //decode color
  /* Decodes the title */
  title.textContent = "CAESAR CIPHER";
  console.log(output);
});

/* Adds a click event listener to encodeBtn, which runs the caesarCipher function once */
encodeBtn.addEventListener("click", () => {
  caesarCipher(0, true);
  /* Output is added to the textarea */
  textArea.value = output;
  textArea.style.backgroundColor = "#e63946"; //encode color
  /* Encodes the title */
  title.textContent = "ZXBPXO ZFMEBO";
});

/* Encodes/decodes the input string by shifting each letter 'num' amount of spaces to the "right" in the reversedAlphabet const */
const caesarCipher = (num, encode) => {
  /* If encode button is clicked, the num variable is overwritten with the number provided by the user */
  if (encode) {
    num = numInput.value;
    /* If a negative number is given the default shift of 3 is used instead */
    if (num < 0) {
      num = 3;
      numInput.value = 3;
    }
    output = "";
  }

  /* Uses a default 3-letter shift if no number input is provided */
  if (!num && num !== 0) {
    console.log("Num is undefined");
    num = 3;
    numInput.value = 3;
  }
  /* Converts all letters in the input to uppercase */
  text = msgInput.value.toUpperCase();
  shiftNum = parseInt(num);

  /* Loops through each character in the string */
  for (let i = 0; i < text.length; i++) {
    /* If the character is not a letter it is included "as is", the loop then continues to the next character */
    if (!reversedAlphabet.includes(text[i])) {
      output += text[i];
      continue;
    }
    /* The index of the current letter added with the shift number is told not to exceed 25. If it does it continues counting from zero */
    shiftedLetterIndex = (reversedAlphabet.indexOf(text[i]) + shiftNum) % 26;

    /* The index is then used to find the encoded/decoded letter in the 'reversedAlphabet' const and appends it to the output variable */
    output += reversedAlphabet[shiftedLetterIndex];
  }
  /* Two newlines are appended each time the caesarCipher function is run */
  output += "\n\n";
};

// const alphabet = [
//   "A",
//   "B",
//   "C",
//   "D",
//   "E",
//   "F",
//   "G",
//   "H",
//   "I",
//   "J",
//   "K",
//   "L",
//   "M",
//   "N",
//   "O",
//   "P",
//   "Q",
//   "R",
//   "S",
//   "T",
//   "U",
//   "V",
//   "W",
//   "X",
//   "Y",
//   "Z",
// ];
