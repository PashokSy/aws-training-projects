import electron from 'electron';
import path from 'path';
import url from 'url';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
let winOne, winTwo;

function createWindow() {
  winOne = new BrowserWindow();
  winTwo = new BrowserWindow();

  winOne.loadURL(
    url.format({
      pathname: path.join('.', 'one.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  winTwo.loadURL(
    url.format({
      pathname: path.join('.', 'two.html'),
      protocol: 'file',
      slashes: true,
    })
  );

  winOne.webContents.openDevTools();
  winTwo.webContents.openDevTools();

  winOne.on('closed', () => {
    winOne = null;
  });
  winTwo.on('closed', () => {
    winTwo = null;
  });
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (winOne === null && winTwo === null) {
    createWindow();
  }
});
