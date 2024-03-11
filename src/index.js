const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const url = require('url');


// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}

//const menu = Menu.setApplicationMenu(null)
Menu.setApplicationMenu(null)

const createWindow = () => {
  // Create the browser window.

  const createWindow = () => {
    return new BrowserWindow({
      width: 400,
      height: 600,
      frame: false,
      titleBarStyle: "hidden",
      //transparent: true,
      // titleBarOverlay: {
      //   color: '#78c850',
      //   height: 32
      // },
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
      },
    });
  }; 
  
  const mainWindow = createWindow();
  const sideWindow = createWindow(); 


  // and load the index.html of the app.
  //console.log(path.join(__dirname, 'frontend/build/index.html'));

  // url.format({
  //   pathname: path.join(__dirname, 'frontend/build/index.html'),
  //   protocol: 'file:',
  //   slashes: true,
  // })

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'frontend/build/index.html'),
    protocol: 'file:',
    slashes: true,
  }));

  sideWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'frontend/build/index.html'),
    protocol: 'file:',
    slashes: true,
  }));
  // Open the DevTools.
  //mainWindow.webContents.openDevTools();
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
