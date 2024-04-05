import {app, BrowserWindow} from 'electron'

let parentWindow, childWindow;

function createWindows () {

parentWindow = new BrowserWindow({title: 'Parent'});
childWindow = new BrowserWindow({parent: parentWindow, modal: true,show: false, title: 'Child'});
childWindow.loadURL('https://github.com');
childWindow.once('ready-to-show', () => {
  childWindow.show()
});
}

app.on('ready', createWindows);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});