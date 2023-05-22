import { Configuration, OpenAIApi } from "openai";
import dotenv from "dotenv";
//import {openaiClient} from'./openAiClient.js'
import { testData,trainData } from './dataProcess.js';

dotenv.config();


const fineTuningOptions = {
    dataset: trainData,
    model: 'gpt-3.5-turbo',
    steps: 1000,
    batchSize: 16,
    learningRate: 3e-5,
    validationDataset: {
      dataset: testData,
      split: 0.1,
    },
    //prompt: 'you islamic bot you gonna answer ayat tafseer in arabic',
};


const configuration = new Configuration({
    organization: process.env.ORGANIZATION,
    apiKey: process.env.OPENAI_API_KEY,
});

const  openaiClient = new OpenAIApi(configuration);

async function startFineTuning() {
    try {
     const fineTuningResponse = await openaiClient.createFineTune(fineTuningOptions);

      console.log('Fine-tuning started:', fineTuningResponse);

    } catch (error) {
      console.error('Error during fine-tuning:', error);
    }
  }
  
  startFineTuning();
  