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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ troksy" 


global.devs = "447865951947" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "447865951947";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '4'  // put '1' to "5" here to check bot styles
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_31_06_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NixcbiAgICAgICAgMjUsXG4gICAgICAgIDU4LFxuICAgICAgICA1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxODUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTksXG4gICAgICAgIDM1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDg5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDk3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDQzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAyLFxuICAgICAgICA2NixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgODQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTczLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjExLFxuICAgICAgICA4MSxcbiAgICAgICAgMjM0LFxuICAgICAgICAzMixcbiAgICAgICAgOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTE2LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTcsXG4gICAgICAgIDk1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIzLFxuICAgICAgICA1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDkxLFxuICAgICAgICA5MCxcbiAgICAgICAgMTYzLFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyLFxuICAgICAgICA3MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDcyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjU1LFxuICAgICAgICA2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg5LFxuICAgICAgICA5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDI0MixcbiAgICAgICAgODksXG4gICAgICAgIDMzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5NCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE0NixcbiAgICAgICAgNDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgOTksXG4gICAgICAgIDEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjMyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDY4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDUsXG4gICAgICAgIDMzLFxuICAgICAgICA4OSxcbiAgICAgICAgODYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTIxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAzMixcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDgzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4NixcbiAgICAgICAgOCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwMyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNixcbiAgICAgICAgNzMsXG4gICAgICAgIDMxLFxuICAgICAgICA0MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDY5XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDczLFxuICAgICAgICAyMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDUyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDcwLFxuICAgICAgICAxODksXG4gICAgICAgIDgwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5MyxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxODEsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwicEROdWRVWUVBOVdiMFdlZEFmUytLaWJKR3FQNlFnQkY4Q2hRQ1g4MXZOcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNjM3ODUxMzI5MDZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBMTRBOEFDREM4QjY5N0RDREM4XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTUzNDY2MFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJsS21TSUJKN1I3V1hLWmNvUUFITVBBXCIsXG4gIFwicGhvbmVJZFwiOiBcImU2NjgyZjAyLTY2NmItNDFhMS05NWRlLTk4NmI4OTgzNWYyM1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxNjYsXG4gICAgICAxNzUsXG4gICAgICAxMTgsXG4gICAgICAxMjcsXG4gICAgICA1NixcbiAgICAgIDQxLFxuICAgICAgMTE1LFxuICAgICAgNzUsXG4gICAgICAyMjIsXG4gICAgICAxLFxuICAgICAgMjIyLFxuICAgICAgNzMsXG4gICAgICAwLFxuICAgICAgOTgsXG4gICAgICAyOCxcbiAgICAgIDIyMSxcbiAgICAgIDE4NCxcbiAgICAgIDE5MyxcbiAgICAgIDQ3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODgsXG4gICAgICAzOCxcbiAgICAgIDg2LFxuICAgICAgMTU0LFxuICAgICAgMTk5LFxuICAgICAgMTY3LFxuICAgICAgMjM0LFxuICAgICAgMTIzLFxuICAgICAgMjgsXG4gICAgICAzMSxcbiAgICAgIDI0MSxcbiAgICAgIDIwNixcbiAgICAgIDIyOSxcbiAgICAgIDE5MixcbiAgICAgIDI0MyxcbiAgICAgIDI4LFxuICAgICAgMjM0LFxuICAgICAgNzQsXG4gICAgICAxMTQsXG4gICAgICAyMTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQTG50YXNKRUx1SStMTUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlFEL2VFNnp4NmtkN0NkcDhGcElLeXdDUHdXSndFNlR6elc4L3FiR1lGMzA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidlA0eWhwcE1UckYzTFpiVTFac2NWNi8xVjlWMUVIaGgrTFE0cUVqWUdWZytKVGE1REl0U1hybE1XeEVZdjVmR0RSV1dOYWttZlJZMStrOElaZjJoRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRHN0TEoydkFjb3NwYjVYcGphNEN3L1FIVE8xcXgvb1BqMUIyYkRoN0ZvMXhQQkZYT1NmaGZ3alE2MVRRS0JpVzJJS0U3c0Ztd2xXV1hHT3FTOEsxanc9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNjM3ODUxMzI5MDY6MzJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjg3NDIwMTgzODI2NTM3OjMyQGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjYzNzg1MTMyOTA2OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAxMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NTM0NjUzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUHl2XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQeXYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJETUVxbEdLMHNGc0V4OTlKdlBZTGFXQ1phajdqSnVpQVg0ZStRV3BPb3pNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1MDY5NzgyOTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcxOTUzNDY2MTAxMlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ troksy 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "tanisha",
  ownername:process.env.OWNER_NAME|| "troksy",


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
