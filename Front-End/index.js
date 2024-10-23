const { app, BrowserWindow, ipcMain, nativeTheme } = require("electron");

let mainWindow;

app.on("ready", () => {
    nativeTheme.themeSource = 'dark';
    mainWindow = new BrowserWindow({
        width: 700,
        height: 400,
        icon: './img/fast-food.png',
        autoHideMenuBar: true // esconde menu
    });

    mainWindow.loadURL(`file://${__dirname}/views/index.html`);
});

// Função para abrir a janela "Sobre"
const openAboutWindow = () => {
    const aboutWindow = new BrowserWindow({
        width: 360,
        height: 220,
        icon: './img/fast-food.png',
        autoHideMenuBar: true,
        resizable: false,
    });
    aboutWindow.loadFile('./views/about.html');
};

// Função para abrir a janela "Contato"
const openContactWindow = () => {
    const contactWindow = new BrowserWindow({
        width: 360,
        height: 220,
        icon: './img/fast-food.png',
        autoHideMenuBar: true,
        resizable: false,
    });
    contactWindow.loadFile('./views/contact.html'); // Crie este arquivo
};

// Escutando os eventos do menu
ipcMain.on('open-about-window', openAboutWindow);
ipcMain.on('open-contact-window', openContactWindow);

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) mainWindow();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
