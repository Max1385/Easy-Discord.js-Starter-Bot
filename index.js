const Discord = require ("discord.js")

const { prefix } = require("./config.json")



const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

client.on("ready", () => {
    console.log("Bot ist startklar!");
  
client.user.setActivity("Bot made by Max");
  
client.user.setStatus('dnd')
  
});

client.on("messageCreate", async message => {
  
  if(message.content === prefix + "test") {
  message.channel.send("This test was succesfully :yes:")
  }
  
});

client.login('YOUR TOKEN')
