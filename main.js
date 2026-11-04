const express = require('express');
const {PORT} = require('./config/server.config');

const notesRoutes = require('./routes/notes.route');
const userRoutes = require('./routes/user.route');
const errorHandler = require('./utils/errorHandler');

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Use the routes
app.use('/api/notes', notesRoutes);
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

app.get('/health', (req, res) => {
  res.send('notes-api is running');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});