import { BrowserWindow, globalShortcut, app } from 'electron';

export const registerShortcut = (mainWindow: BrowserWindow) => {
  globalShortcut.register('F5', () => {
    if (mainWindow) mainWindow.reload();
  });

  globalShortcut.register('CommandOrControl+Shift+I', () => {
    if (mainWindow){
        mainWindow.webContents.openDevTools();
      
    } 
   
  });
};
