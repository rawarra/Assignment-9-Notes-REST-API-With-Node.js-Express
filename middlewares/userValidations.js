function userValidations (req, res, next) {
   
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required name, email, password' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
// Additional validation logic can be added here if needed
if (typeof name !== 'string' || typeof email !== 'string' || typeof password !== 'string') {
      return res.status(400).json({ message: 'Invalid data types' });
    }
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return res.status(400).json({ message: 'Fields cannot be empty' });
    }
    // name must be at least 3 characters long and email must be a valid email address
    if (name.length < 3) {
      return res.status(400).json({ message: 'Name must be at least 3 characters long' });
    }
    if (!email.includes('@')) {
      return res.status(400).json({ message: 'Invalid email address' });
    }
    if (/[^a-zA-Z0-9\s]/.test(name) || /[^a-zA-Z0-9\s]/.test(password)) {
      return res.status(400).json({ message: 'Fields cannot contain special characters' });
    }

    if (password.length > 20) {
      return res.status(400).json({ message: 'Password cannot exceed 20 characters' });
    }
    next();
  
};


module.exports = userValidations;