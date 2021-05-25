const path = require('path')
const { BrowserWindow } = require('electron')
function createWindow () {
    const win = new BrowserWindow({
      width: 250,
      height: 310,
      frame: false,
      show: false,
      fullscreenable: false,
      resizable: false,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')    
    //    win.loadURL('https://www.youtube.com')
    return win
}
module.exports = createWindow()