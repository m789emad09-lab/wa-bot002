const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    }
});

client.on('qr', qr => {
    console.log('QR RECEIVED');
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('✅ BOT READY');
});

client.on('message', msg => {
    if (msg.body.includes('المواعيد')) {
        msg.reply('دي مواعيد التسجيل لكل الفروع');
    }
});

client.initialize();           const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Bot is running ✅')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log('Server running on port ' + PORT)
})

