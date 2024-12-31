const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('plantport.db');

// Initialize database tables
db.serialize(() => {
    // Products table
    db.run(`
        CREATE TABLE IF NOT EXISTS products (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            price REAL NOT NULL,
            description TEXT,
            image_url TEXT
        )
    `);

    // Insert sample data
    const sampleProducts = [
        ['Snake Plant', 29.99, 'Low maintenance indoor plant', '/images/snake-plant.jpg'],
        ['Peace Lily', 24.99, 'Beautiful flowering plant', '/images/peace-lily.jpg']
    ];

    const insert = db.prepare('INSERT OR IGNORE INTO products (name, price, description, image_url) VALUES (?, ?, ?, ?)');
    sampleProducts.forEach(product => insert.run(product));
    insert.finalize();
});

module.exports = db;