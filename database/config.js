/*

# Base By 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
# Owner ? : 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒
!- do not delete this credit

*/

global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['2349131353415']
global.ownMain = '254742491666'
global.NamaOwner = 'FLGOD' //
global.sessionName = 'session'
global.connect = true // 
global.namabot = '𝗦𝗔𝗚𝗔𝗥𝗔 𝗖𝗥𝗔𝗦𝗛' //
global.author = '𝗙𝗟𝗚𝗢𝗗' //
global.packname = '𝗦𝗔𝗚𝗔𝗥𝗔 𝗖𝗥𝗔𝗦𝗛' //
global.url1 = '
' //
global.url2 = '' //
global.linkgc = ''
global.autoviewstatus = process.env.autoviewstatus || "TRUE"
global.delayjpm = 3500
//Panel
global.domain = 'https://guru.sellerpanell.me' // your domian
global.apikey = 'ptla_aRq7aFBbQowvPwLChvjNLX5uE0rYZ6dUdGbFIhqUwUg' // 
global.capikey = 'ptlc_mI4q2CFLyxYSG9lqtpWVJSkqtxbQvZyheemGqW56VUH' // 
global.eggsnya = '15' // 
global.location = '1' // 

global.mess = { // 
ingroup: 'This feature can only be used in groups.',
admin: 'This feature is specifically for group admins.',
notadmin: "The bot must be an admin first",
owner: 'You are not 𝕶𝖎𝖓𝖌 𝕾𝖆𝖒.',
premium: 'You are not a premium user.',
seller: 'This feature can only be used by resellers and owners.',
usingsetpp: `Setpp can only be used by the owner, do you think Im stupid?`,
wait: '*Waiting for processing*',
success: 'Success sent by Spider V9',
bugrespon: `Processs.....`
}


global.autOwn = 'req(62-8S57547ms11).287p'
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
	require('fs').unwatchFile(file)
	console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
	delete require.cache[file]
	require(file)
})
