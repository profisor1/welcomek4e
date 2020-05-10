const Discord = require("discord.js");
const client = new Discord.Client();

client.on("guildMemberAdd", member => {
  let memberavatar = member.user.avatarURL;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | name : ", `${member}`)
    .addField(
      ":microphone2: | Welcome!",
      `بەخێریبێی بۆ سێرڤەری KURD4EVAR بەهیوای کاتێکی خۆش, ${member}`
    )
    .addField(":id: | User :", "**[" + `${member.id}` + "]**")
    .addField(
      ":family_mwgb: | Your are the member",
      `${member.guild.memberCount}`
    )
    .addField("Name", `<@` + `${member.id}` + `>`, true)
    .addField("Server", `${member.guild.name}`, true)
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp();

  member.send(embed);
});

client.on("guildMemberAdd", member => {
  let channel = member.guild.channels.find("name", "welcome");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | ناوی مێمبەر : ", `${member}`)
    .addField(
      "::wave::hibiscus:| بەخێریبێی بۆ سێرڤەری KURD4EVAR بەهیوای کاتێکی خۆش",
      `, `
    )
    .addField(":id:| بەکارھێنەر :", "**[" + `${member.id}` + "]**")
    .addField(":family_mwgb:| تۆ کەسی ژمارە", `${member.guild.memberCount}`)
    .addField("ناوی سێرڤەر:rainbow:⚡️", `${member.guild.name}`, true)
    .setImage("https://media.giphy.com/media/OkJat1YNdoD3W/giphy.gif")
    .setFooter(`**${member.guild.name}**`)
    .setTimestamp();

  channel.sendEmbed(embed);
});

client.on("guildMemberRemove", member => {
  let channel = member.guild.channels.find("name", "left");
  let memberavatar = member.user.avatarURL;
  if (!channel) return;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setThumbnail(memberavatar)
    .addField(":bust_in_silhouette: | ناوی مێمبەر", `${member}`)
    .addField("لێفتی کرد لە سێرڤەر", `${member.guild.name}`, true)
    .addField(
      ":family_mwgb:|ژمارەی مێمبەری سێرڤەر",
      `${member.guild.memberCount}` + " کەس"
    )
    .setImage("https://i.imgur.com/kBeRxZR.gif")
    .setFooter(`==== **${member.guild.name}====`, " ")
    .setTimestamp();

  channel.sendEmbed(embed);
});

client.on("message", message => {
  if (message.content.startsWith("bot")) {
    message.channel.send({
      embed: new Discord.RichEmbed()
        .setAuthor(client.user.username, client.user.avatarURL)
        .setThumbnail(client.user.avatarURL)
        .setColor("RANDOM")
        .setTitle("``WELCOME BOT`` ")
        .addField(
          "``My Ping``",
          [`${Date.now() - message.createdTimestamp}` + "MS"],
          true
        )
        .addField("``servers``", [client.guilds.size], true)
        .addField("``channels``", `[ ${client.channels.size} ]`, true)
        .addField("``Users``", `[ ${client.users.size} ]`, true)
        .addField("``My Name``", `[ ${client.user.tag} ]`, true)
        .addField("``My ID``", `[ ${client.user.id} ]`, true)
        .addField("``My Prefix``", `[ FOG ]`, true)
    });
  }
});

client.on("message", message => {
  if (message.author.bot) return; ///Pixel Team
  if (message.content.startsWith("bsrawa")) {
    if (!message.channel.guild)
      return message.reply(`** This Command For Servers Only**`);
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(`** You don't have Premissions!**`);
    if (!message.guild.member(client.user).hasPermission("MANAGE_GUILD"))
      return message.channel.send(`**I don't have Permission!**`);
    let args = message.content.split(" ").slice(1);
    let messagecount = parseInt(args);
    if (args > 100)
      return message
        .reply(`** The number can't be more than **100** .**`)
        .then(messages => messages.delete(5000));
    if (!messagecount) args = "100";
    message.channel
      .fetchMessages({ limit: messagecount })
      .then(messages => message.channel.bulkDelete(messages))
      .then(msgs => {
        message.channel
          .send(`** Done , Deleted \`${msgs.size}\` messages.** `)
          .then(messages => messages.delete(5000));
      });
  }
}); ///fog
client.on("message", function(msg) {
  if (msg.content.startsWith("server")) {
    if (!msg.channel.guild)
      return msg.reply("**❌ اسف لكن هذا الامر للاداره فقط**");
    let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .setThumbnail(msg.guild.iconURL)
      .addField("🌐 **ناوی سێرڤەر : **", `**[ ${msg.guild.name} ]**`, true)
      .addField("🌍 ** شوێنی سێرڤەر :**", `**[ ${msg.guild.region} ]**`, true)
      .addField(
        "🎖️** ژمــارەۍ ڕۆڵ :**",
        `**[ ${msg.guild.roles.size} ]**`,
        true
      )
      .addField(
        "👤** ژمارەی مێمبەر:**",
        `**[ ${msg.guild.memberCount} ]**`,
        true
      )
      .addField(
        "✅** ژمارەی ئۆنڵاینەكان :**",
        `**[ ${
          msg.guild.members.filter(m => m.presence.status == "online").size
        } ]**`,
        true
      )
      .addField(
        "📝** ژمارەی چەناڵەكان :**",
        `**[ ${msg.guild.channels.filter(m => m.type === "text").size} ]**`,
        true
      )
      .addField(
        "🔊** ژمارەی ڤۆیسەكان:**",
        `**[ ${msg.guild.channels.filter(m => m.type === "voice").size} ]**`,
        true
      )
      .addField("👑** ئۆنەری سێرڤەر :**", `**[ ${msg.guild.owner} ]**`, true)
      .addField("🆔** ئایدی سێرڤەر :**", `**[ ${msg.guild.id} ]**`, true)
      .addField(
        "📅** كاتی دروستكردنی سێرڤەر: **",
        msg.guild.createdAt.toLocaleString()
      );
    msg.channel.send({ embed: embed });
  }
});
client.on("message", message => {
  /// edit ForKa
  if (message.content === "daixa") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("انت لا تمتلك الصلاحية");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: false
    });
    message.channel.send("چات داخرا "); ///edit ForKa
  }
});

client.on("message", message => {
  if (message.content === "bikawa") {
    if (!message.channel.guild) return;
    if (!message.member.hasPermission("ADMINISTRATOR"))
      return message.reply("انت لا تمتلك الصلاحية");
    message.channel.overwritePermissions(message.guild.id, {
      READ_MESSAGES: null
    });
    message.channel.send("چات كرایەوە");
  }
});
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  console.log("Streamstatus by MrFOG dev");

  client.user
    .setActivity(`PROFISOR De papel`, {
      type: "STREAMING",
      url: "https://www.twitch.tv/666"
    })
    .then(presence =>
      console.log(
        `Your Status has been set to  ${
          presence.game ? presence.game.none : "none"
        }`
      )
    )
    .catch(console.error);
});

client.login("Njk0OTUzNzgyNjkzNDYyMDc4.XpsuJg.qVYWU88QQEbbArn-WTOBcCafpfw");
