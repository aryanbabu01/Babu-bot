module.exports.config = {
  name: "cutebaby",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "cute bacha photos",
  commandCategory: "Random-IMG",
  usages: "baby dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }

};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = ["https://i.imgur.com/3RSpMAW.jpeg","https://i.imgur.com/JDf7Ogq.jpeg,","https://i.imgur.com/zdZP2Wj.jpeg","https://i.imgur.com/2yYjqVA.jpeg","https://i.imgur.com/RnbTPDZ.jpeg","https://i.imgur.com/5A1d43O.jpeg","https://i.imgur.com/BQQj2MQ.jpeg","https://i.imgur.com/pKKzS9A.jpeg","https://i.imgur.com/iuYXjfZ.jpeg","https://i.imgur.com/10GHmTy.jpeg","https://i.imgur.com/GGYPJHA.jpeg","https://i.imgur.com/G8TdzCa.jpeg","https://i.imgur.com/gy5hBE2.jpeg","https://i.imgur.com/ZkzIjAS.jpeg","https://i.imgur.com/8eFTFG9.jpeg","https://i.imgur.com/VeqBese.jpeg","https://i.imgur.com/xYMKJx4.jpeg","https://i.imgur.com/AEqtRtw.jpeg","https://i.imgur.com/4ih7Kmn.jpeg","https://i.imgur.com/POB2pRU.jpeg","https://i.imgur.com/6Lqedub.jpeg","https://i.imgur.com/b92QX4B.jpeg","https://i.imgur.com/SouWkkP.jpeg","https://i.imgur.com/B4WdiGE.jpeg" ];
     var callback = () => api.sendMessage({body:`★━━━━━━━━━━★💜𝙎𝙤 𝙘𝙪𝙩𝙚 𝙗𝙖𝙗𝙮★━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
