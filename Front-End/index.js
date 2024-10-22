const {app, BrowserWindow, nativeTheme} = require ("electron");
// const { createWriteStream } = require("fs");

let mainWindow;

app.on("ready", ()=>{
    nativeTheme.themeSource = 'dark'
    mainWindow = new BrowserWindow({

        width:700,
        height:400,
        icon: './img/pc_.png',
        resizable:false,
        autoHideMenuBar: true //esconde menu


    });

    mainWindow.loadURL(`file://${__dirname}./views/index.html`)

})

//Window about
const aboutWindow = ()=>{

    const about = new BrowserWindow({
       with: 360,
       height:220,
       icon: './img/pc_.png',
       autoHideMenuBar:true,
       resizable: false,

    });

    about.loadFile('./views/about.html');

}

app.whenReady().then(()=>{
    createWindow()
    aboutWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
      })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})