const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
 ** سيرفر ناار فيه نظام انفايت خورافي **🔥👊

 15 انفايت [ حسابين فل داتا ] أو [ 15 الف ]  😍
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
 30 انفايت [ 4 حسابات فل داتا ] أو [ 35 الف ] 🍺
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
 60 انفايت [ 8 حسابات فل داتا + 5 ماستر كارد لتفعيل بايبال ] أو [ 80 الف كريديت + 1 ماستر كارد لتفعيل بايبال ] 🔥🌹😍
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
https://discord.gg/gj7bxPy`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`!!
 ** سيرفر ناار فيه نظام انفايت خورافي **🔥👊

 15 انفايت [ حسابين فل داتا ] أو [ 15 الف ]  😍
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
 30 انفايت [ 4 حسابات فل داتا ] أو [ 35 الف ] 🍺
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
 60 انفايت [ 8 حسابات فل داتا + 5 ماستر كارد لتفعيل بايبال ] أو [ 80 الف كريديت + 1 ماستر كارد لتفعيل بايبال ] 🔥🌹😍
ء■□■□■□■□■□■□■□■□■□■□■□■□■□■
https://discord.gg/gj7bxPy`)
}).catch(console.error)
})
client.login(process.env.BOT_TOKEN);// لا تغير فيها شيء
