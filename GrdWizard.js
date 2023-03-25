// GrdWizard.js

// Important Vars
var Version = "1.0.7";
const prompt = require('prompt-sync')();
let AsciiStartUp = 
`Welcome to 
  ____         _${colorText("__        ___                    _", "lightblue")}
 / ___|_ __ __| ${colorText("\\ \\      / /(_)______ _ _ __  __| |", "lightblue")}
| |  _| '__/ _\` |${colorText("\\ \\ /\\ / / | |_  / _\` | ' __/  _\`|", "lightblue")}
| |_| | | | (_| |${colorText(" \\ V  V /  | |/ /| (_| | | | (_| |", "lightblue")}
 \\____|_|  \\__,_|${colorText("  \\_/\\_/   |_/___\\__,_ |_|  \\__,_|", "lightblue")}
 
  ${colorText("GrdWizard", "green")} is a test score calculator that calculates your grade,
  based on the correct answers and how many questions the test has.
  Developed by TheTechyKid. Version ${colorText(Version, "blue")}.
  All lights reserved.
`;

// Color text function
function colorText(text, color) {
    const colors = {
      black: "\x1b[30m",
      red: "\x1b[31m",
      green: "\x1b[32m",
      yellow: "\x1b[33m",
      blue: "\x1b[34m",
      lightblue: "\x1b[38;5;33m",
      magenta: "\x1b[35m",
      cyan: "\x1b[36m",
      white: "\x1b[37m",
    };
    const reset = "\x1b[0m";
    return `${colors[color]}${text}${reset}`;
}

// Main app class
function Main(){
  let num = 1;

  // Functions
  function getPercent(A, B){
    let percentage = (A / B) * 100;
    return percentage;
  }

  function askContinue(){
    console.log("");
    let exit = prompt("Continue [Y/N]? ");
    console.log("");

    return exit;
  }

  function sanitazationInput(A, B){  
    if (A < 0 || B < 0){
      throw new TypeError("Input must be a number and a postive number");
    }

    if (A > B){
      throw new TypeError("Correct answers must be lesser or equal to number of questions");
    }
  }

  class TypeError extends Error {
    constructor(message) {
      super(message);
      this.name = "TypeError";
    }
  }

  // loop
  while (num > 0) {
      // Prompt
      console.log(AsciiStartUp);
      let crt = parseInt(prompt(`Correct answers ${colorText(">", "green")} `));
      let numQuestion = parseInt(prompt(`Number of questions ${colorText(">", "green")} `));
      let percent = getPercent(crt, numQuestion);

      // Sanitazation of the input
      sanitazationInput(crt, numQuestion)
  
      // Output
      if (percent >= 80){
          console.log(`You got ${colorText(percent.toString()+"%", "green")} great job!`);
      } else {
          console.log(`You got ${colorText(percent.toString()+"%", "red")} to bad.`);
      }

      // Ask if they want to continue
      Con = askContinue()
      if (Con.toLowerCase() === "n"){
        break;
      } else {
        console.clear();
        continue;
      }
  }
}

if (1 === 1){
  Main();
}