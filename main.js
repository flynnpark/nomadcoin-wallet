const electron = require('electron');
const path = require('path');
const url = require('url');

const { app, BrowserWindow } = electron;

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    resizable: false,
    title: 'Nomadcoin Wallet'
  });

  const ENV = process.env.ENV;

  if (ENV === 'dev') {
    mainWindow.loadURL('http://localhost:3000');
  } else {
    mainWindow.loadURL(
      url.format({
        pathname: path.join(__dirname, 'uidev/build/index.html'),
        protocol: 'file',
        slashes: true
      })
    );
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('ready', createWindow);