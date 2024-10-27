// Importing the necessary libraries
import express from 'express'
const app = express();
app.use(express.json());  // for parsing application/json

// Define the function
export const base64Encode = async (req, res) => {
  const { input } = req.body;  // Get input from request body
  if (!input) {
    return res.status(400).send({ error: "Input is required" });
  }
  
  // Convert the input string to base64
  const output = Buffer.from(input).toString('base64');
  
  // Respond with JSON output
  res.send({ output });
};

// Defining the route for the function
app.post('/functions/baseReEncode', base64Encode);


// A route to serve the documentation
app.get('/functions/baseReEncode', (req, res) => {
  res.json({
    name: "base64Encode",
    description: "Encode anything to base64",
    input: {
      type: "string",
      description: "Input the data you'd like to encode to base64",
      example: "Hello, world"
    },
    output: {
      type: "string",
      description: "Base64 encoded string",
      example: "SGVsbG8sIHdvcmxk"
    }
  });
});

// Start the express server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
