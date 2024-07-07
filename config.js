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


global.devs = "27747911178" // Developer Contact
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_17_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDM2LFxuICAgICAgICAzMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTI3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgNjksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAyLFxuICAgICAgICA2OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDMxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMDYsXG4gICAgICAgIDgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAyLFxuICAgICAgICA1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NSxcbiAgICAgICAgMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNzcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDM4LFxuICAgICAgICAzMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDExLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNTksXG4gICAgICAgIDM3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgNDksXG4gICAgICAgIDUwLFxuICAgICAgICA2MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTA0LFxuICAgICAgICA1OSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMzQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDIyLFxuICAgICAgICA2OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDM3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjM0LFxuICAgICAgICA2MixcbiAgICAgICAgMjZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4OFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU2LFxuICAgICAgICA0NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgzLFxuICAgICAgICA2LFxuICAgICAgICA1MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDQyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODksXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA1NCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjUsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjE0LFxuICAgICAgICA1NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjU0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjIsXG4gICAgICAgIDUxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcInZaTFVhSEYrTE9UY2tZZGtQYUtYektzcmIrWFRXNE1TTFZGTnF5Uks0Nmc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5UNDFNWTZoVG1pNWk5dUFzWGFpTlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDdmZDBjODAtNDE4ZS00ZDgyLWFmYWYtNmQzMzRlYTBjNzczXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU4LFxuICAgICAgMjcsXG4gICAgICA3LFxuICAgICAgMjIyLFxuICAgICAgMTEzLFxuICAgICAgMTAsXG4gICAgICAxMjUsXG4gICAgICA2NCxcbiAgICAgIDEzNSxcbiAgICAgIDYxLFxuICAgICAgNDIsXG4gICAgICA3NixcbiAgICAgIDY5LFxuICAgICAgMTkzLFxuICAgICAgMTM4LFxuICAgICAgMTgwLFxuICAgICAgMjIsXG4gICAgICA1MCxcbiAgICAgIDQ3LFxuICAgICAgMTY3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMSxcbiAgICAgIDYxLFxuICAgICAgNjUsXG4gICAgICA0NyxcbiAgICAgIDE1OCxcbiAgICAgIDIsXG4gICAgICA2MyxcbiAgICAgIDc4LFxuICAgICAgMTg4LFxuICAgICAgMTMxLFxuICAgICAgMTIxLFxuICAgICAgNDQsXG4gICAgICAzMyxcbiAgICAgIDEzMSxcbiAgICAgIDI0NCxcbiAgICAgIDMyLFxuICAgICAgMTk5LFxuICAgICAgMjQyLFxuICAgICAgOTMsXG4gICAgICAzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1Wk04NU1NR1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjc3NDc5MTExNzg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzA4NDI2Mjk5MzkzOTM6NkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn6S08J+PvS1fV2VfYXJlX0hpbcKw8J+rp18yLjBcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMM3E1LzhHRVBMR3FyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInA2WHd1UE10dUxoRFowbEJ2ZnZSdDdEbUhtbGI3ODJrdXZJZ0Q3MGpzdzg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiRWgxUGtndnhCRCtJaGQrb1BiTnJKa2NIbnlRTlJRR0d2ZUhYZW94VEY0OWlyNHFqSFU2d2w3dkF1a2JhK3lsUW9RQzZJYkczK0h3RDA5NWV6aFpNREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZVMzYXM3b0czdUVSZTQvNFJQdFcyWHJIcGZhVWVZWFR1alI1WEdkMXZ6NnArVERXbWR4eUhwQ0lVbHU5Yll6dHZQVTBSQWhnWHJFV2VOQjVXZmZPZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjc3NDc5MTExNzg6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwMzYxODQ2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSG9hXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIb2EuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIrbkM4UVc5SVl2TTVMWnJjN3ZseXFxZDdOaFkrSVlhMDZpRjkxVEZzbHd3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE4Nzg2NTIyMjAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNjE4MDIzMDJcIn0iCn0="  // PUT your SESSION_ID 


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
