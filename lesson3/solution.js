function sumEvenNumberRow(rowNumber) {
  const rows = [];
  let startInteger = 2;
  for (
    let currentRowNumber = 1;
    currentRowNumber <= rowNumber;
    currentRowNumber += 1
  ) {
    let row = createRow(startInteger, currentRowNumber);
    rows.push(row);
    startInteger = row[row.length - 1] + 2;
  }

  let finalRow = rows.pop();
  return finalRow.reduce((a, b) => a + b); // TODO: sum final row and return the sum
}

function createRow(startInteger, rowLength) {
  const row = [];
  let currentInteger = startInteger;
  while (row.length < rowLength) {
    row.push(currentInteger);
    currentInteger += 2;
  }
  return row;
}

//Tests
// row number: 1 --> sum of integers in row: 2
//row number: 2 --> sum of integers in row: 10
// row number: 4 --> sum of integers in row: 68

console.log(sumEvenNumberRow(1)); // 2
console.log(sumEvenNumberRow(2)); // 10
console.log(sumEvenNumberRow(4)); // 68

// start: 2, length: 1 --> [2]
//start: 4, length: 2 --> [4, 6]
// start: 8, length: 3 --> [8, 10, 12]

// Create a empty 'rows' array to contain all of the rows
// Create a 'row' array and add it to the overall 'rows' array
// repeat step 2 until all the necessary rows have been created
//  - all rows have been created when the length of the 'rows' array is equal to the input integer
// sum the final row
// return the sum

//Caculating the starting integer:
//Rules: First integer of row equal to last integer preceeding row + 2
//Algorithm:
// - get the last row from the rows
// - Get the last integer of that row
// - add 2

//console.log(createRow(2, 1)); // [2]
// console.log(createRow(8, 3)); // [8, 10, 12]
// console.log(createRow(4, 2)); // [4, 6]

// Algorithm:
// create a empty row array to contain the integers
// add the starting integer
// increment the starting integer by 2 to get to the next integer
// repeat steps 2&3 until the array reached the correct length
// return the row array

//Start the Loop
// -add the start integer to the row array
// - increment the start integer by 2
// - break out of the loop if the length of the row array equals row length
