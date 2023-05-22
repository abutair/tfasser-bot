import { openai } from './api.js'
import fs from 'fs'

async function makeFineTune() {
    try {
        const ft = await openai.createFineTune({
            training_file: 'file-Ui5h15hxn8Kx2Ky6JyoQKaa9',
            model: 'davinci'
        });
        console.log(ft.data);
     }
    catch (err) {
        console.log('err makefinetune: ', err.response.data.error);
    }
}
makeFineTune();