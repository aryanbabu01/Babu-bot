module.exports.config = {
  name: "haryanvi",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "haryanvi patluphotos",
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
    var link = ["https://i.imgur.com/wajQrWr.mp4","https://i.imgur.com/NDi3Mg5.mp4","https://i.imgur.com/65eu5js.mp4","https://i.imgur.com/FiMDSSQ.mp4","https://i.imgur.com/2lNGk6g.mp4","https://i.imgur.com/rihQlF8.mp4","https://i.imgur.com/Vr0UyYE.mp4","https://i.imgur.com/CslNtcq.mp4","https://i.imgur.com/JT0cUwv.mp4","https://i.imgur.com/FvSc4tM.mp4","https://i.imgur.com/MnR8lXF.mp4","https://i.imgur.com/u7QlMJh.mp4","https://i.imgur.com/RrCehZR.mp4","https://i.imgur.com/XBr6ZqZ.mp4","https://i.imgur.com/xcbw8a1.mp4","https://i.imgur.com/cUTuB7w.mp4","https://i.imgur.com/jFGQVlq.mp4","https://i.imgur.com/PRsqvXJ.mp4","https://i.imgur.com/sM9AFmH.mp4"];
     var callback = () => api.sendMessage({body:`★彡 𝐇𝐚𝐫𝐲𝐚𝐧𝐯𝐢 𝐒𝐨𝐧𝐠 𝐑𝐞𝐞𝐥 彡★`,attachment: fs.createReadStream(__dirname + "/cache/1.mp4")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.mp4"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.mp4")).on("close",() => callback());
   };
