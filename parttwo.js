// Pull data from the inputdata.txt local file & splits each line into a separate entry in an array (31 characters per row)
const fs = require('fs');
const data = fs.readFileSync('inputdata.txt', 'utf8').split('\n');

// Functions that determines which indice we're at for each movement as we move through the elements in the array
// Slope one: Right 1, Down 1
let slopeOne = 0;
const moveSlopeOne = function(){
  slopeOne+=1;
  if (slopeOne > 30){
    slopeOne-=31;
  }
};
// Slope two: Right 3, Down 1
let slopeTwo = 0;
const moveSlopeTwo = function(){
  slopeTwo+=3;
  if (slopeTwo > 30){
    slopeTwo-=31;
  }
};

// Slope three: Right 5, Down 1
let slopeThree = 0;
const moveSlopeThree = function(){
  slopeThree+=5;
  if (slopeThree > 30){
    slopeThree-=31;
  }
};

// Slope four: Right 7, Down 1
let slopeFour = 0;
const moveSlopeFour = function(){
  slopeFour+=7;
  if (slopeFour > 30){
    slopeFour-=31;
  }
};

// Slope five: Right 1, Down 2
let slopeFive = 0;
const moveSlopeFive = function(){
  slopeFive+=1;
  if (slopeFive > 30){
    slopeFive-=31;
  }
};

// Function for determining the crashes for each slope
const ohShitATree = (function(){
  let crashesOne = 0;
  let crashesTwo = 0;
  let crashesThree = 0;
  let crashesFour = 0;
  let crashesFive = 0;

  // Loop for Slope one
  for (let i = 1; i < data.length; i++){
    moveSlopeOne();
    const currentRow = data[i];
    const currentChar = currentRow.split("");
    if (currentChar[slopeOne] === '#'){
      crashesOne+=1;
    }
  }

  // Loop for Slope two
  for (let i = 1; i < data.length; i++){
    moveSlopeTwo();
    const currentRow = data[i];
    const currentChar = currentRow.split("");
    if (currentChar[slopeTwo] === '#'){
      crashesTwo+=1;
    }
  }

  // Loop for Slope three
  for (let i = 1; i < data.length; i++){
    // Start by moving to the correct position in the next row
    moveSlopeThree();
    const currentRow = data[i];
    const currentChar = currentRow.split("");
    if (currentChar[slopeThree] === '#'){
      crashesThree+=1;
    }
  }

  // Loop for Slope four
  for (let i = 1; i < data.length; i++){
    // Start by moving to the correct position in the next row
    moveSlopeFour();
    const currentRow = data[i];
    const currentChar = currentRow.split("");
    if (currentChar[slopeFour] === '#'){
      crashesFour+=1;
    }
  }

  // Loop for Slope five
  for (let i = 1; i < data.length; i++){
    // Start by moving to the correct position in the next row
    if (!(i % 2)){
      moveSlopeFive();
      const currentRow = data[i];
      const currentChar = currentRow.split("");
      if (currentChar[slopeFive] === '#'){
        crashesFive+=1;
      }
    }
  }

  console.log(`Number of tree crashes in Slope one: ${crashesOne}`);
  console.log(`Number of tree crashes in Slope two: ${crashesTwo}`);
  console.log(`Number of tree crashes in Slope three: ${crashesThree}`);
  console.log(`Number of tree crashes in Slope four: ${crashesFour}`);
  console.log(`Number of tree crashes in Slope five: ${crashesFive}`);
  const answer = crashesOne * crashesTwo * crashesThree * crashesFour * crashesFive;
  console.log(answer);
  return answer;
})();