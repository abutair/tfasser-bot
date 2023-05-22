import {openaiClient} from'./openAiClient.js'

async function getFineTunedModelName() {
  try {
      const modelName = await openaiClient.listFineTunes();
      console.table(modelName.data.data, ["id", "status", "fine_tuned_model"]);

  }
  catch (err) {
      console.log('err getmod: ', err)
  }
}
getFineTunedModelName();