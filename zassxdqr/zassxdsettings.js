const fs = require('fs')
const chalk = require('chalk')

global.domain = "https://mypanel.lorenzo.my.id" // Isi Domain Lu
global.apikey = '-' // Isi Apikey Plta Lu
global.capikey = '-' // Isi Apikey Pltc Lu
global.creAtor = "6281217158010@s.whatsapp.net"
global.owner = ['6281217158010']
global.ownerNumber = ["6281217158010@s.whatsapp.net"]
global.nomerOwner = "6281217158010"
global.namabotnya = 'ZoBot'
global.namaownernya = 'Zo'
global.packname = '© ZassXd||+62🇲🇨\nI`m From Indonesia'
global.author = 'Wa : 0812-1715-8010\nYT : LORENZO Official'
global.sessionName = 'session'
global.email = 'rowida8876@bipane.com'
global.group = 'https://chat.whatsapp.com/D16eyggLoxu6Td8R3KjqnO'
global.youtube = 'https://youtube.com/@ZassXdOfficial'
global.website = 'https://fakebokep.biz'
global.github = 'https://github.com/ZassXdOfficial'
global.nomorowner = 'https://wa.me/6281217158010'
global.region = 'I`m From Indonesia'
global.prefa = ['','!','.','#','-','•']
global.qris = fs.readFileSync(`./qris.jpeg`)
global.krmd = 
{
success: '```Success✅```',
admin: '```Fitur Khusus Admin Group!!!```',
botAdmin: '```Bot Harus Menjadi Admin Terlebih Dahulu!!!```',
owner: '```Fitur Khusus Owner Bot!!!```',
group: '```Fitur Digunakan Hanya Untuk Group!!!```',
private: '```Fitur Digunakan Hanya Untuk Private Chat!!!```',
bot: '```Fitur Khusus Pengguna Nomor Bot!!!```',
error: '```Mungkin Lagi Error Kak Harap Lapor Owner Biar Langsung Di Benerin🙏```',
wait: '```Waittt...```'
}

global.thumb = fs.readFileSync('./zassxdjs/image/thumb.jpg')
global.imagekir = fs.readFileSync('./zassxdjs/image/zassxd.jpg')
global.videokir = fs.readFileSync('./zassxdjs/image/zassxd.mp4')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.yellowBright(`Update File Terbaru ${__filename}`))
delete require.cache[file]
require(file)
})