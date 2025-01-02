const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = 'YOUR_BOT_TOKEN'; // هنا حط التوكن بوت
const prefix = '!'; // تقدر تغير البادئة إذا تبغى

// الردود التلقائية
const autoResponses = {
    "مرحبا": "مرحبًا! كيف أقدر أساعدك؟",
    "كيف حالك": "الحمدلله بخير، شكرًا لسؤالك!",
    "وداعا": "وداعًا، أتمنى لك يوم سعيد!",
    "شكرا": "العفو! دايمًا تحت أمرك.",
    "نايس": "نايس على النايس! 😎"
};

client.once('ready', () => {
    console.log(`✅ البوت دخل باسم ${client.user.tag}`);

    // حالة البوت (ستريم)
    client.user.setActivity("Casper", {
        type: "STREAMING",
        url: "https://m.twitch.tv/kmpb8" // غير الرابط قناتك
    });
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // 

    const content = message.content.toLowerCase();

    // 
    for (const [keyword, response] of Object.entries(autoResponses)) {
        if (content.includes(keyword)) {
            message.reply(response);
            break; 
        }
    }
});

client.login(token);
