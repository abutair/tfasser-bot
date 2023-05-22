import { openai } from './open_ai/api.js';

import express from "express";

const app = express();
const port = 3000;




// Set up Express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set up routes
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
                 
    const completion = await openai.createCompletion({
        model: "davinci:ft-eqratech-2023-05-19-19-20-13",
        prompt: `you islamic bot you gonna answer ayat tafseer in arabic
              ${message}`,
        max_tokens:200,
      });

      console.log(completion.data.choices[0].text);

    res.json ({
             completion: completion.data.choices[0].text
    })                           
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred." });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


