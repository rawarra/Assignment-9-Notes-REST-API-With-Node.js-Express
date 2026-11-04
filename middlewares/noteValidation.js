function validateNote(req, res, next) {
  const { title, content, category } = req.body;
  if (!title || !content || !category) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  // Additional validation logic can be added here if needed
  if (typeof title !== 'string' || typeof content !== 'string' || typeof category !== 'string') {
    return res.status(400).json({ message: 'Invalid data types' });
  }

  // If validation passes, proceed to the next middleware or route handler
  if (title.trim() === '' || content.trim() === '' || category.trim() === '') {
    return res.status(400).json({ message: 'Fields cannot be empty' });
  }

  // If validation passes, proceed to the next middleware or route handler
  if (title.length > 100) {
    return res.status(400).json({ message: 'Title cannot exceed 100 characters' });
  }
  if (content.length > 1000) {
    return res.status(400).json({ message: 'Content cannot exceed 1000 characters' });
  }
  if (category.length > 50) {
    return res.status(400).json({ message: 'Category cannot exceed 50 characters' });
  }
  //text validation for special characters
  if (/[^a-zA-Z0-9\s]/.test(title) || /[^a-zA-Z0-9\s]/.test(content) || /[^a-zA-Z0-9\s]/.test(category)) {
    return res.status(400).json({ message: 'Fields cannot contain special characters' });
  }
  
  next();
}

module.exports = validateNote;