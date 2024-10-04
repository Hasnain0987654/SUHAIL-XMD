const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923366140063";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_01_10_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0LFxuICAgICAgICAxODUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQzLFxuICAgICAgICA2NyxcbiAgICAgICAgNDMsXG4gICAgICAgIDYxLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjQzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNzAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMzNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgNzUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICA2MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1MSxcbiAgICAgICAgOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTAzLFxuICAgICAgICA4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjMsXG4gICAgICAgIDExN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE5LFxuICAgICAgICA0MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDUzLFxuICAgICAgICA2LFxuICAgICAgICAzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTIsXG4gICAgICAgIDY1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDQsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY4LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNTksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0MixcbiAgICAgICAgMjA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgODksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjYsXG4gICAgICAgIDg4LFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDcsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMCxcbiAgICAgICAgMTczLFxuICAgICAgICA0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMSxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDQ2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTcyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNzEsXG4gICAgICAgIDk2LFxuICAgICAgICAyNixcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyLFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMxLFxuICAgICAgICA1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMixcbiAgICAgICAgNSxcbiAgICAgICAgMTk3LFxuICAgICAgICAzMyxcbiAgICAgICAgMjUzLFxuICAgICAgICA5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJvcCtuZk8wV24wMHp1Ym91cHFWTmN4R0xBUkJjbmJXOUtqRThQNzN6UmlnPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzM2NjE0MDA2M0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMDQzRTZDMTUxQUMzMDUyMDU2N0FFMkY0NzczMDQ1MUJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4MDI1MjYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMzY2MTQwMDYzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIwMTk1QkEwQzhCODM2RkEyNzRGRkE2MEE4OEZCRkU4Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjgwMjUyNjJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiQkZTM2pDb09UOGl4endrblkxTmZHd1wiLFxuICBcInBob25lSWRcIjogXCIxNTAwY2JmOC1mYzU3LTQyZTUtYmM2MS0yM2E1ODE4NWE2N2JcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgNzgsXG4gICAgICAxNDUsXG4gICAgICAxNDYsXG4gICAgICAyMDAsXG4gICAgICAxMTYsXG4gICAgICAyMTIsXG4gICAgICA5MyxcbiAgICAgIDU0LFxuICAgICAgMixcbiAgICAgIDE3NCxcbiAgICAgIDE4NixcbiAgICAgIDE3NyxcbiAgICAgIDQ2LFxuICAgICAgODMsXG4gICAgICA2OCxcbiAgICAgIDE2OCxcbiAgICAgIDExMixcbiAgICAgIDIyLFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5OCxcbiAgICAgIDEwOCxcbiAgICAgIDIwMixcbiAgICAgIDUsXG4gICAgICA0MCxcbiAgICAgIDExOSxcbiAgICAgIDI0NixcbiAgICAgIDEwOSxcbiAgICAgIDQ0LFxuICAgICAgMzEsXG4gICAgICAxMjMsXG4gICAgICAxODIsXG4gICAgICAxMjcsXG4gICAgICA5LFxuICAgICAgMTE0LFxuICAgICAgODYsXG4gICAgICAxMDEsXG4gICAgICA2LFxuICAgICAgMjIsXG4gICAgICAxNTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSlhBNVoxMjRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM2NjE0MDA2MzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIs+D0LjRlCDPgc650ZTCotGUXCIsXG4gICAgXCJsaWRcIjogXCI2MjQxMDIzNjk2OTE3OjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ08zZm9MMERFS1NsL3JjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQ3NpYXExTkNhSUE2YVVZZDFiQ3pDMmNSc1dsdVgxRXBBZ0oxZ3cxaE9IND1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIwcnVSLzVTZVVicCt5QTdMdUdzTW5DcG1IeVI3R0FsQ0xkTVZSa205eFRLN040aTk3UjBUUXRGTDdVNHJmaDMvemxIZWRYcmRpUG9JU0ttRWc5MjREUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJHa3R4cHFtM1BRUEJ1VmI2Zk93SElHak1ZYTNxb0RzcWFTTnFERmx4bzZ2OE8xRXlUbXRITjRwOVE0dzBzQ2FtMmo2ZEZPYWE3Z2ZZckZBZlBhRlNnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI5MjMzNjYxNDAwNjM6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjgwMjUyNTYsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLTGhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtMaC5qc29uIjogIntcImtleURhdGFcIjpcIi9uSUswMVlLNGhPYWd0WjlXT2p3NHFreFA1dkc4M0xVUzlGZncyZUJxNDQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6OTMzNzY5MTk3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjgwMjUyNjA3NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
