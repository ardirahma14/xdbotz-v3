const fs = require('fs')
const chalk = require('chalk')
// EDIT DISINI
global.owner = ['6281998903280'] // no own
global.author = 'KurrXd' // nama author 
global.packname = 'Follow IG @reika.bot' // nama pack sticker
global.namabot = 'Reika' // nama bot mu
global.group = 'shorturl.at/NY037' // grup mu
global.pic = './config/reika.jpg'


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})
