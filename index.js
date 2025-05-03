// index.js
const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.json());

// Sample route
app.get('/Hello/:name', (req, res) => {
    const username = req.params.name;
  res.send(`Hello, ${username}`);
});

// Example API endpoint
app.get('/api/users', (req, res) => {
  res.json([{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/Hello/Ali`);
});
