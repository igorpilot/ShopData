const db = require("./db");

// Отримати весь склад
function getInventory() {
    const stmt = db.prepare("SELECT * FROM inventory");
    return stmt.all();
}

// Додати товар
function addItem(item) {
    const stmt = db.prepare(`
    INSERT INTO inventory (name, brand, category, quantity, purchasePrice, sellingPrice)
    VALUES (?, ?, ?, ?, ?, ?)
  `);
    return stmt.run(item.name, item.brand, item.category, item.quantity, item.purchasePrice, item.sellingPrice);
}

// Оновити товар
function updateItem(item) {
    const stmt = db.prepare(`
    UPDATE inventory
    SET name = ?, brand = ?, category = ?, quantity = ?, purchasePrice = ?, sellingPrice = ?
    WHERE id = ?
  `);
    return stmt.run(item.name, item.brand, item.category, item.quantity, item.purchasePrice, item.sellingPrice, item.id);
}

// Видалити товар
function deleteItem(id) {
    const stmt = db.prepare("DELETE FROM inventory WHERE id = ?");
    return stmt.run(id);
}

// Записати прихід
function addArrival(arrival) {
    const stmt = db.prepare(`
    INSERT INTO arrivals (itemId, quantity, date, supplier)
    VALUES (?, ?, ?, ?)
  `);
    return stmt.run(arrival.itemId, arrival.quantity, arrival.date, arrival.supplier);
}

// Записати продаж
function addSale(sale) {
    const stmt = db.prepare(`
    INSERT INTO sales (itemId, quantity, date)
    VALUES (?, ?, ?)
  `);
    return stmt.run(sale.itemId, sale.quantity, sale.date);
}

// Отримати звіт
function getReport() {
    const stmt = db.prepare(`
    SELECT inventory.name, SUM(sales.quantity) AS sold, SUM(arrivals.quantity) AS arrived
    FROM inventory
    LEFT JOIN sales ON inventory.id = sales.itemId
    LEFT JOIN arrivals ON inventory.id = arrivals.itemId
    GROUP BY inventory.id
  `);
    return stmt.all();
}

module.exports = {
    getInventory,
    addItem,
    updateItem,
    deleteItem,
    addArrival,
    addSale,
    getReport,
};

const axios = require('axios'); // Додайте axios для запитів до сервера

const syncWithServer = async () => {
    try {
        const localData = getAllInventory(); // Всі товари зі складу
        const response = await axios.post('https://your-server.com/sync', {
            data: localData,
        });
        console.log('Синхронізація успішна:', response.data);
        return response.data;
    } catch (error) {
        console.error('Помилка синхронізації:', error);
        throw error;
    }
};

module.exports = {
    // Інші функції
    syncWithServer,
};
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

const exportToExcel = () => {
    const inventory = getAllInventory(); // Дані зі складу
    const ws = xlsx.utils.json_to_sheet(inventory);
    const wb = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(wb, ws, 'Inventory');

    const filePath = path.join(__dirname, '../data/inventory.xlsx');
    xlsx.writeFile(wb, filePath);
    return filePath;
};

module.exports = {
    // Інші функції
    exportToExcel,
};
