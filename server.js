const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// REST API Endpoint
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
