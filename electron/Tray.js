const { Tray } = require('electron')
const { resolve } = require('path')

const inconPath = resolve(__dirname, '../', 'assets', 'instagram.png')

function createTray() {
    const tray = new Tray(inconPath)
    tray.setToolTip('Insta Reminder')
    
    return tray
}
module.exports = createTray()