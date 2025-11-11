module.exports.config = {
  name: "motu patlu",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "motu patluphotos",
  commandCategory: "Random-IMG",
  usages: "video",
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
    var link = ["https://i.imgur.com/n0Q1VHO.mp4","https://i.imgur.com/2Bey6es.mp4" ];
     var callback = () => api.sendMessage({body:`Motu patlu Funny😹`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
   };
