process.env.DIST = join(__dirname, '../dist')
process.env.PUBLIC = app.isPackaged ? process.env.DIST : join(process.env.DIST, '../public')

import { join } from 'path'
import { app, BrowserWindow, shell } from 'electron'

let win: BrowserWindow | null
// Here, you can also use other preload
const preload = join(__dirname, './preload.js')
const url = process.env.VITE_DEV_SERVER_URL

function createWindow() {
  win = new BrowserWindow({
    icon: join(process.env.PUBLIC, 'logo.svg'),
    title: 'Test',
    webPreferences: {
      preload,
    },
  })

  // Open links in the browser, not inside the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })

  if (url) {
    win.loadURL(url)
    win.webContents.openDevTools()
  } else {
    win.loadFile(join(process.env.DIST, 'index.html'))
  }
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
