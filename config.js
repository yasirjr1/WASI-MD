const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "levanter_182fef7d4ac0c4457cbdcb77fe650670ba",
MONGODB: process.env.MONGODB || "mongodb+srv://Maher:Zubair@sigma-male.ggwx4gc.mongodb.net/?retryWrites=true&w=majority",
  MODE :  process.env.MODE || "public", // PUT PUBLIC OR PRIVATE
};
