import Discord from "discord.js"

const client = new Discord.Client()

client.login(`TOKEN_IN_HERE`).then(() => console.log("봇이 준비되었습니다"))
