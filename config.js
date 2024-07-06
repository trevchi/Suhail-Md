const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://chat.whatsapp.com/CUZqGanNOefIaok6vGZA6P";
global.gurl  =process.env.GURL  || "https://chat.whatsapp.com/CUZqGanNOefIaok6vGZA6P";
global.website=process.env.GURL || "https://chat.whatsapp.com/CUZqGanNOefIaok6vGZA6P" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ loki" 


global.devs = "201091469408" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "201091469408";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "true"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_08_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTI1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODQsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMzQsXG4gICAgICAgIDksXG4gICAgICAgIDc0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDQxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTMyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNSxcbiAgICAgICAgMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDU2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwLFxuICAgICAgICAxODEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTU3LFxuICAgICAgICAwLFxuICAgICAgICAxODksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTc0LFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMixcbiAgICAgICAgMTI4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM4LFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDExNixcbiAgICAgICAgMzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgODEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjM1LFxuICAgICAgICAyNixcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjksXG4gICAgICAgIDc5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzLFxuICAgICAgICA4NSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1NCxcbiAgICAgICAgOTksXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDQzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDUyLFxuICAgICAgICAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODAsXG4gICAgICAgIDU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUxLFxuICAgICAgICA2NixcbiAgICAgICAgOTYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg2LFxuICAgICAgICAyMyxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTc0LFxuICAgICAgICA2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjEyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDY4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwia0Q0LytVM0o4bWV1WkFMaWZIRmRaUk1INk9DN3diNzA4dU82WXJkeDN1OD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNzc0NzkxMTE3OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMUZEQjhFQ0MzRTJFODdDQUU5MENCMEZGNDY1RTVBMEVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwMzA3Mjk3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFvWEx6RXdqU1gtYW5TWWQ2UkhZX0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDZkZGE1MDktNWRkYi00ZjU4LTk5MWItMjMyMzVhMjhhZTdlXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMyxcbiAgICAgIDEyOSxcbiAgICAgIDY4LFxuICAgICAgMjA3LFxuICAgICAgMTk4LFxuICAgICAgMTA0LFxuICAgICAgMjAsXG4gICAgICAyMTIsXG4gICAgICA0NSxcbiAgICAgIDQsXG4gICAgICA1MSxcbiAgICAgIDE1LFxuICAgICAgMTk5LFxuICAgICAgMzAsXG4gICAgICAzOCxcbiAgICAgIDg1LFxuICAgICAgMTkyLFxuICAgICAgMTIzLFxuICAgICAgMTY2LFxuICAgICAgMjE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3MyxcbiAgICAgIDE5NixcbiAgICAgIDkyLFxuICAgICAgMTMsXG4gICAgICAyMzYsXG4gICAgICAyMzMsXG4gICAgICAyNyxcbiAgICAgIDU1LFxuICAgICAgMjA0LFxuICAgICAgMTMwLFxuICAgICAgMTA1LFxuICAgICAgMjAxLFxuICAgICAgMTk1LFxuICAgICAgMjQxLFxuICAgICAgMTU2LFxuICAgICAgMTY3LFxuICAgICAgNDMsXG4gICAgICAyNTEsXG4gICAgICAxNTQsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJRUEozUTNOTFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3NDc5MTExNzg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA4NDI2Mjk5MzkzOTM6NUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6S08J+PvS1fV2VfYXJlX0hpbcKw8J+rp18yLjBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMenE1LzhHRU5lY3A3UUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInA2WHd1UE10dUxoRFowbEJ2ZnZSdDdEbUhtbGI3ODJrdXZJZ0Q3MGpzdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZTBSOFM4cUZJL1pnSnhDcnNJaWFKWVNIbEx1dWtZbjV0WVIxOXBPVWRPS05JS0dPRS9udDNES3hZSUtqZzVjcW1LRk1kd2tBK3RPSXltbGs5aW9JQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNFZydnM2YStnampQY1M4T1RRQTM5UGtkYXIxS0cyaXZQWXB3STVkd3dzRUxLeXZQdys3b2UxZnltcGp0UUJHUjlYNEo2SnluclovdHhZRVZEZVAwQUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3NDc5MTExNzg6NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzA3MjkxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG9aXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb1ouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJIRTJwL1FYR1FNR0MyMTR1aXIxWjlCSWFXT1o2T01TV3RjTHYwdWg4SE1jPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzg2NTIyMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMDMwNzI5MzkwNlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ loki 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "kim",
  ownername:process.env.OWNER_NAME|| "loki",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "true",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
