const express = require('express');
const app = express();
const PORT = 3000;
const { runExample } = require('./index'); 

app.get('/address/:address', async (req, res) => {
    let address = req.params.address 
    let output = await runExample(address)
    res.json({
        status: 'success',
        data: output,
      });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});