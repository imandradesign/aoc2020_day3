// Pull data from the inputdata.txt local file & splits each line into a separate entry in an array (31 characters per row)
const fs = require('fs');
const data = fs.readFileSync('inputdata.txt', 'utf8').split('\n');

// Function that determines which indice we're at for each movement as we move through the elements in the array
let currentPosition = 0;
const moveToNextPosition = function(){
  currentPosition+=3;
  if (currentPosition > 30){
    currentPosition-=31;
  }
};

// IIFE to find which rows have a "#" symbol each time we move down 1 and right 3 spaces
const ohShitATree = (function(){
  let treeCrashes = 0;
  // Loop through the characters in each array element
  for (let i = 1; i < data.length; i++){
    // Start by moving to the correct position in the next row
    moveToNextPosition();
    const currentRow = data[i];
    const currentChar = currentRow.split("");
    if (currentChar[currentPosition] === '#'){
      treeCrashes+=1;
    }
  }
  console.log(`Number of tree crashes: ${treeCrashes}`);
  return treeCrashes;
})();