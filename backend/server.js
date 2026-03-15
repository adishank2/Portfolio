const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const nodemailer = require('nodemailer');
const { getDB, initDB } = require('./db');

// Load env variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize SQLite DB on startup
initDB().then(() => {
  console.log('✅ SQLite Database Connected && Tables Intialized');
}).catch(err => {
  console.error('❌ Database Initialization Error:', err);
});

// ================= ROUTES ================= //

// 1. Projects API
app.get('/api/projects', async (req, res) => {
  try {
    const db = await getDB();
    const rows = await db.all('SELECT * FROM projects ORDER BY display_order ASC, id DESC');
    
    // Parse JSON strings back into arrays for the frontend
    const projects = rows.map(row => ({
      ...row,
      technologies: row.technologies ? JSON.parse(row.technologies) : [],
      achievements: row.achievements ? JSON.parse(row.achievements) : []
    }));
    
    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Server Error' });
  }
});

// Admin route to add a project
app.post('/api/projects', async (req, res) => {
  try {
    const db = await getDB();
    const { company, role, status, period, location, technologies, achievements, order } = req.body;
    
    const result = await db.run(`
      INSERT INTO projects (company, role, status, period, location, technologies, achievements, display_order)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `, [
      company,
      role,
      status || null,
      period,
      location || 'Remote',
      JSON.stringify(technologies || []),
      JSON.stringify(achievements || []),
      order || 0
    ]);
    
    res.status(201).json({ id: result.lastID, message: 'Project created successfully' });
  } catch (error) {
    console.error('Error adding project:', error);
    res.status(400).json({ message: 'Invalid data' });
  }
});

// 2. Contact Form API
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS // Use Google App Password here
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Send to yourself
      replyTo: email,
      subject: `New Portfolio Message from ${name}`,
      text: `You received a new message from your portfolio contact form:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
