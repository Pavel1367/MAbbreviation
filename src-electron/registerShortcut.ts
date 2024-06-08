import { BrowserWindow, globalShortcut } from 'electron';

export const registerShortcut = (mainWindow: BrowserWindow ) =>{
    globalShortcut.register('F5', ()=>{
        if(mainWindow) mainWindow.reload()
    })
}