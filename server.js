const express = require('express');
const app = express();
const PORT = 3000;
const { runExample } = require('./index'); 

app.get('/', async (req, res) => {
    let add = req.query.add 
    let output = await runExample(add)
    res.json({
        status: 'success',
        data: output,  // This is the response from the runExample function
      });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});