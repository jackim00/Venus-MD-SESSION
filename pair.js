PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
               let b64data = Buffer.from(data).toString('base64');
               let session = await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: 'VENUS-' + b64data });

               let SIGMA_MD_TEXT = `

*_Pair Code Connected by Eastern Guru_*
*_Made With 🖤_*
*_ⓒ𝐄𝐚𝐬𝐭𝐞𝐫𝐧 𝐆𝐮𝐫𝐮👑_*
______________________________________
╔════◇
║ *『 𝐓𝐡𝐚𝐧𝐤 𝐲𝐨𝐮 𝐟𝐨𝐫 𝐂𝐡𝐨𝐨𝐬𝐢𝐧𝐠 𝐕𝐞𝐧𝐮𝐬-𝐌𝐃 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐁𝐨𝐭!🤩 』*
║ _𝐘𝐨𝐮 𝐇𝐚𝐯𝐞 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐞𝐝 𝐭𝐡𝐞 𝐅𝐢𝐫𝐬𝐭 𝐒𝐭𝐞𝐩 𝐭𝐨 𝐃𝐞𝐩𝐥𝐨𝐲 𝐲𝐨𝐮𝐫 𝐁𝐨𝐭.🚀_
╚════════════════════════╝
╔═════◇
║  『••• 𝐘𝐨𝐮 𝐥𝐨𝐯𝐞 𝐛𝐞𝐢𝐧𝐠 𝐇𝐚𝐩𝐩𝐲! 𝐑𝐢𝐠𝐡𝐭? 𝐇𝐚𝐯𝐞 𝐚 𝐋𝐨𝐨𝐤 𝐚𝐭 𝐓𝐡𝐢𝐬: •••』
║❒ *𝐘𝐨𝐮𝐭𝐮𝐛𝐞:*_https://youtube.com/@gurutechnology-wh9be?si=ReGthpeP_XJrNpeR_
║❒ *𝐎𝐰𝐧𝐞𝐫:* _https://wa.link/f0j27e_
║❒ *𝐈𝐧𝐬𝐭𝐚𝐠𝐫𝐚𝐦:* _https://instagram.com/mc.jackim__
║❒ *𝐑𝐞𝐩𝐨:* _https://github.com/EasternG/Venus-MD_
║❒ *𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐆𝐫𝐨𝐮𝐩:* _https://chat.whatsapp.com/Bw2MTl1bGnFJPt25D1rrVw_
║❒ *𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 𝐂𝐡𝐚𝐧𝐧𝐞𝐥:* _https://whatsapp.com/channel/0029VaddvWX1nozDxUfXJJ1s_
╚════════════════════════╝

_____________________________________

Don't Forget To Give Star⭐ To My Repo`
 await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id,{text:SIGMA_MD_TEXT},{quoted:session})
 

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
