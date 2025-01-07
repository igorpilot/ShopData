const { app, BrowserWindow } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            preload: path.join(__dirname, "db.js"),
            contextIsolation: true,
        },
    });

    mainWindow.loadURL("http://localhost:3000"); // У режимі розробки
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

const { ipcMain } = require("electron");
const api = require("./api");

ipcMain.handle("getInventory", () => api.getInventory());
ipcMain.handle("addArrival", (_, arrival) => api.addArrival(arrival));
ipcMain.handle("getArrivals", () => api.getArrivals());
ipcMain.handle("addSale", (_, sale) => api.addSale(sale));
ipcMain.handle("getSales", () => api.getSales());
ipcMain.handle("getReport", () => api.getReport());

const { syncWithServer } = require('./backend/api');

ipcMain.handle('sync-with-server', async () => {
    try {
        const result = await syncWithServer();
        return result;
    } catch (error) {
        return { error: 'Синхронізація не вдалася.' };
    }
});

const { autoUpdater } = require('electron-updater');

app.on('ready', () => {
    createWindow();
    autoUpdater.checkForUpdatesAndNotify();
});

autoUpdater.on('update-downloaded', () => {
    dialog
        .showMessageBox({
            type: 'info',
            title: 'Оновлення доступне',
            message: 'Нове оновлення завантажене. Перезапустити програму?',
            buttons: ['Так', 'Ні'],
        })
        .then(({ response }) => {
            if (response === 0) autoUpdater.quitAndInstall();
        });
});
ipcMain.handle('export-to-excel', async () => {
    try {
        const filePath = exportToExcel();
        return { success: true, filePath };
    } catch (error) {
        console.error(error);
        return { success: false };
    }
});
