import { createInterface } from 'readline';
import { createReadStream } from 'fs';

// Specify the path to your JSONL file
const filePath = './data.jsonl';

// Define an array to store the loaded data
export const data = [];

// Create a readline interface
const rl = createInterface({
  input: createReadStream(filePath),
  crlfDelay: Infinity
});

// Read each line of the file
rl.on('line', (line) => {
  // Parse the JSON from the line
  const jsonData = JSON.parse(line);

  // Add the parsed JSON object to the data array
  data.push(jsonData);
});

// After reading all lines, perform further processing
rl.on('close', () => {
  // Perform any additional operations with the loaded data
  console.log('Data loaded');
});
//console.log(rl.data.id);


  