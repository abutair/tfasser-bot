 
import { data } from "./loadData.js";

  // Define the split ratio between training and testing sets (e.g., 80% training, 20% testing)
  const trainRatio = 0.8;
  const testRatio = 1 - trainRatio;
  
  // Calculate the number of examples for each split
  const trainSize = Math.floor(data.length * trainRatio);
  const testSize = data.length - trainSize;
  
  // Shuffle the dataset randomly
  const shuffledData = data.sort(() => Math.random() - 0.5);
  
  // Split the data into training and testing sets
 export const trainData = shuffledData.slice(0, trainSize);
 export const testData = shuffledData.slice(trainSize);

  