const sqlite3 = require('sqlite3');
const { open } = require('sqlite');

// Open or create the SQLite database file
async function getDB() {
  return open({
    filename: './portfolio.db',
    driver: sqlite3.Database
  });
}

// Initialize the database tables
async function initDB() {
  const db = await getDB();
  
  await db.exec(`
    CREATE TABLE IF NOT EXISTS projects (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      company TEXT NOT NULL,
      role TEXT NOT NULL,
      status TEXT,
      period TEXT NOT NULL,
      location TEXT,
      technologies TEXT, -- Stored as JSON string
      achievements TEXT, -- Stored as JSON string
      display_order INTEGER DEFAULT 0
    )
  `);
  
  return db;
}

module.exports = { getDB, initDB };
