const axios = require("axios");
const fs = require("fs");
const path = require("path");

// 🔹 Safe API loader with fallback
async function getDiptoApi() {
  if (!global.apis?.diptoApi) {
    try {
      const base = await axios.get(
        "https://raw.githubusercontent.com/Mostakim0978/D1PT0/main/baseApiUrl.json"
      );
      global.apis = { diptoApi: base.data.api };
    } catch (e) {
      console.warn("⚠️ baseApiUrl.json fetch failed, using backup API");
      // ✅ fallback working API — replace with your own if needed
      global.apis = { diptoApi: "https://api.d1pto.xyz" };
    }
  }
  return global.apis.diptoApi;
}

// 🔹 File downloader
async function downloadFile(url, fileName) {
  const res = await axios({ method: "GET", url, responseType: "arraybuffer" });
  const filePath = path.join(__dirname, "cache", fileName);
  if (!fs.existsSync(path.join(__dirname, "cache")))
    fs.mkdirSync(path.join(__dirname, "cache"), { recursive: true });
  fs.writeFileSync(filePath, res.data);
  return filePath;
}

// 🔹 YouTube Video ID extractor
function getVideoID(url) {
  const regex =
    /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))((\w|-){11})(?:\S+)?$/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

module.exports = {
  config: {
    name: "dl",
    version: "1.2.0",
    credits: "Raj",
    role: 0,
    shortDescription: "Auto or manual YouTube video downloader",
    longDescription:
      "YouTube video links par automatic download ya manual command se download karein.",
    category: "media",
    guide: {
      en: "{pn} [YouTube URL] — YouTube video download karega",
    },
  },

  // 🟢 Manual Command
  onStart: async function ({ api, args, event }) {
    try {
      const url = args[0];
      if (!url)
        return api.sendMessage("❌ YouTube link do!", event.threadID, event.messageID);

      const videoID = getVideoID(url);
      if (!videoID)
        return api.sendMessage("❌ Invalid YouTube URL!", event.threadID, event.messageID);

      api.setMessageReaction("⏳", event.messageID, () => {}, true);

      const diptoApi = await getDiptoApi();
      const { data } = await axios.get(`${diptoApi}/ytDl3?link=${videoID}&format=mp4`);

      if (!data.downloadLink)
        return api.sendMessage("⚠️ Download link not found!", event.threadID);

      const title = data.title || "YouTube Video";
      const quality = data.quality || "Unknown";
      const filePath = await downloadFile(data.downloadLink, `${title}.mp4`);

      api.setMessageReaction("✅", event.messageID, () => {}, true);
      await api.sendMessage(
        {
          body: `🎬 ${title}\n📺 Quality: ${quality}\n✅ Download Complete!`,
          attachment: fs.createReadStream(filePath),
        },
        event.threadID,
        () => fs.unlinkSync(filePath),
        event.messageID
      );
    } catch (err) {
      console.error(err);
      api.sendMessage(
        "❌ Download failed: " + (err.message || "Unknown error"),
        event.threadID,
        event.messageID
      );
    }
  },

  // 🟢 Auto Download on Chat
  onChat: async function ({ api, event }) {
    try {
      const { body, messageID, threadID, senderID } = event;
      if (!body) return;
      if (senderID === api.getCurrentUserID()) return;

      const match = body.match(
        /(https?:\/\/(?:www\.|m\.)?(?:youtube\.com\/\S+|youtu\.be\/\S+))/
      );
      if (!match) return;

      const url = match[0];
      const videoID = getVideoID(url);
      if (!videoID) return;

      api.setMessageReaction("⏳", messageID, () => {}, true);

      const diptoApi = await getDiptoApi();
      const { data } = await axios.get(`${diptoApi}/ytDl3?link=${videoID}&format=mp4`);

      if (!data.downloadLink) {
        api.setMessageReaction("❌", messageID, () => {}, true);
        return api.sendMessage("⚠️ Failed to fetch video.", threadID, messageID);
      }

      const title = data.title || "YouTube Video";
      const quality = data.quality || "Unknown";
      const filePath = await downloadFile(data.downloadLink, `${title}.mp4`);

      api.setMessageReaction("✅", messageID, () => {}, true);
      api.sendMessage(
        {
          body: `🎬 ${title}\n📺 Quality: ${quality}\n✅ Auto Download Complete!`,
          attachment: fs.createReadStream(filePath),
        },
        threadID,
        () => fs.unlinkSync(filePath),
        messageID
      );
    } catch (err) {
      api.sendMessage(
        "❌ Error: " + (err.message || "Unknown error"),
        event.threadID,
        event.messageID
      );
    }
  },
};
