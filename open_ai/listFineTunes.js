import { openai } from './api.js'

async function getFineTunedModelName() {
  try {
      const modelName = await openai.listFineTunes();
      console.table(modelName.data.data, ["id", "status", "fine_tuned_model"]);

  }
  catch (err) {
      console.log('err getmod: ', err)
  }
}
getFineTunedModelName();