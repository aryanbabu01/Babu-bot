module.exports.config = {
  name: "hotgirl",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "hot",
  commandCategory: "Random-IMG",
  usages: "hot dp",
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
    var link = ["https://i.imgur.com/mVdG9xj.jpeg","https://i.imgur.com/UkWoZmJ.jpeg","https://i.imgur.com/cm3YVps.jpeg","https://i.imgur.com/k0MsdLE.jpeg","https://i.imgur.com/KwM0NAC.jpeg","https://i.imgur.com/QRaCzhr.jpeg","https://i.imgur.com/EtFAaPw.jpeg","https://i.imgur.com/O0r8Ywx.jpeg","https://i.imgur.com/MyGZuAt.jpeg","https://i.imgur.com/tQSZGls.jpeg","https://i.imgur.com/yDSNIzH.jpeg","https://i.imgur.com/i1uPz1E.jpeg","https://i.imgur.com/iHC20ZM.jpeg","https://i.imgur.com/oN2pOJJ.jpeg","https://i.imgur.com/DLIznHm.jpeg","https://i.imgur.com/TfXA4py.jpeg","https://i.imgur.com/W904BnS.jpeg","https://i.imgur.com/H0sHybf.jpeg","https://i.imgur.com/doq2Mia.jpeg","https://i.imgur.com/1WJxwLk.jpeg","https://i.imgur.com/AyV883N.jpeg","https://i.imgur.com/l1bcl58.jpeg"  ];
     var callback = () => api.sendMessage({body:`★━━━━━━━━━━━━━★💜 𝐇𝐨𝐭 𝐌𝐰𝐥 🥵 💜 ★━━━━━━━━━━━━━★`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
