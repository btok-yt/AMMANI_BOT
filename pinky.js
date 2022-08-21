/* codded by 𝘽 𝙏𝙊𝙆_𝙀𝙁𝙓_
*/

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

// PLK Special Functions
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '+919072468600' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? '𝘽 𝙏𝙊𝙆_𝙀𝙁𝙓_' : process.env.DEPLOYER,    
};
