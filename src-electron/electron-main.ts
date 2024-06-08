import { app, BrowserWindow, Menu} from 'electron';
import path from 'path';
import os from 'os';
import { initialiseServer } from './initialiseServer'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer';
import { registerShortcut } from './registerShortcut';
// needed in case process is undefined under Linux
const platform = process.platform || os.platform();

let mainWindow: BrowserWindow | undefined

function createWindow() {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null)
  mainWindow = new BrowserWindow({
    icon: path.resolve(__dirname, 'icons/icon.png'), // tray icon
    width: 1000,
    height: 600,
    useContentSize: true,
    webPreferences: {
      contextIsolation: true,
      // More info: https://v2.quasar.dev/quasar-cli-webpack/developing-electron-apps/electron-preload-script
      preload: path.resolve(__dirname, process.env.QUASAR_ELECTRON_PRELOAD),
    },
  });

  mainWindow.loadURL(process.env.APP_URL);
  if (process.env.DEBUGGING) {
    // if on DEV or Production with debug enabled
    mainWindow.webContents.openDevTools();
  }  else {
    mainWindow.webContents.on('devtools-opened', () => {
      mainWindow?.webContents.closeDevTools();
    });
  }

  mainWindow.on('closed', () => {
    mainWindow = undefined;
  });
}

app.whenReady().then( async () => {
  installExtension(VUEJS_DEVTOOLS)
   createWindow();
  initialiseServer();
  if(mainWindow) registerShortcut(mainWindow)
});
app.on('window-all-closed', () => {
  if (platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === undefined) {
    createWindow();
  }
});
