const {app,BrowserWindow,globalShortcut} = require('electron');


function createWindow()
{
    const win = new BrowserWindow({
        width:800,
        height:600,
        frame:false,
        title: "distribuidora app",
        webPreferences:{
            nodeIntegration:true
        }
    })
    //let child = new BrowserWindow({parent: win})
    win.loadFile("abonos.html")
    //child.show()
    win.loadFile("index.html")
}

app.whenReady().then(createWindow);

// app.on('ready', _ => {
//     new BrowserWindow()

//     const name = electron.app.getName()
//     const template = [
//         {
//             label: name,
//             submenu: [{
//                 label:  `About ${name}`,
//                 click: _ => {
//                     console.log('clicked about')
//                 }
//             }]
//         }

//     ]
//     const menu = Menu.buildFromTemplate(template)
//     Menu.setApplicationMenu(menu)
// })