module.exports.config = {
  name: "girldp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "girl",
  commandCategory: "Random-IMG",
  usages: "girl dp",
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
    var link = ["
https://i.imgur.com/2H8e8eT.jpeg","https://i.imgur.com/wr1Ggf3.jpeg","https://i.imgur.com/Th7ruZq.jpeg","https://i.imgur.com/jnhHx5C.jpeg","https://i.imgur.com/3t77jTA.jpeg","https://i.imgur.com/Tnz4uOB.jpeg","https://i.imgur.com/hiVNTWn.jpeg","https://i.imgur.com/E3QOTni.jpeg","https://i.imgur.com/5TzHyrk.jpeg","https://i.imgur.com/b9yTKWt.jpeg","https://i.imgur.com/mN90lx8.jpeg","https://i.imgur.com/EKT1LI4.jpeg","https://i.imgur.com/OKayLne.jpeg","https://i.imgur.com/1cyiwf0.jpeg","https://i.imgur.com/8EB7AIV.jpeg","https://i.imgur.com/zBeAnJT.jpeg","https://i.imgur.com/i98FkNA.jpeg","https://i.imgur.com/DZWIbko.jpeg","https://i.imgur.com/CjaV8kP.jpeg","https://i.imgur.com/Zrj0MwK.jpeg","https://i.imgur.com/qrqKHYG.jpeg","https://i.imgur.com/rTzbWOi.jpeg","https://i.imgur.com/I4H7OED.jpeg","https://i.imgur.com/VbIEbWx.jpeg","https://i.imgur.com/bHrVNFy.jpeg"
           ];
     var callback = () => api.sendMessage({body:`●───────🍂 𝐆𝐢𝐫𝐥 𝐃𝐩  🍂★●────────●▶`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
