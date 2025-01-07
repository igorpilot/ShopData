const Database = require("better-sqlite3");
const path = require("path");

const dbPath = path.join(__dirname, "data", "inventory.db");
const db = new Database(dbPath);

// Ініціалізація таблиць
db.exec(`
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  brand TEXT,
  category TEXT,
  quantity INTEGER,
  purchasePrice REAL,
  sellingPrice REAL
);

CREATE TABLE IF NOT EXISTS sales (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  itemId INTEGER,
  quantity INTEGER,
  date TEXT,
  FOREIGN KEY (itemId) REFERENCES inventory(id)
);

CREATE TABLE IF NOT EXISTS arrivals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  itemId INTEGER,
  quantity INTEGER,
  date TEXT,
  supplier TEXT,
  FOREIGN KEY (itemId) REFERENCES inventory(id)
);
`);

module.exports = db;
