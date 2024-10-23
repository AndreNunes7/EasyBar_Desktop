const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");
const path = require("path");

let mainWindow;

app.on("ready", () => {
    nativeTheme.themeSource = 'dark';
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        icon: path.join(__dirname, 'img', 'fast-food.png'),
        autoHideMenuBar: true,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'js', 'render.js') // Altere o caminho para o preload
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'views', 'index.html'));
});

// Função para abrir a janela "Sobre"
const openAboutWindow = () => {
    const aboutWindow = new BrowserWindow({
        width: 360,
        height: 220,
        icon: path.join(__dirname, 'img', 'fast-food.png'),
        autoHideMenuBar: true,
        resizable: false,
    });
    aboutWindow.loadFile(path.join(__dirname, 'views', 'about.html'));
};

ipcMain.on('open-about-window', openAboutWindow);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) mainWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
