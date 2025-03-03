// Create web server
// Start server
// Create a route for /comments
// Send back a response
// Listen on port 3000
// Respond with a JSON object with comments
// Respond with a 404 status code if the route is not found
// Respond with a 500 status code if there is an error

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
  res.json({ comments: ['comment 1', 'comment 2'] })