const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const token = 'YOUR_BOT_TOKEN'; // حط توكن بوتك
const prefix = '!'; // تقدر تغير البادئة إذا تبغى

const autoResponses = {
    "مرحبا": "مرحبًا! كيف أقدر أساعدك؟",
    "كيف حالك": "الحمدلله بخير، شكرًا لسؤالك!",
    "وداعا": "وداعًا، أتمنى لك يوم سعيد!"
};

client.once('ready', () => {
    console.log(`Casper ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // يتجاهل الرسائل من البوتات الثانية

    const content = message.content.toLowerCase();

    
    for (const [keyword, response] of Object.entries(autoResponses)) {
        if (content.includes(keyword)) {
            message.reply(response);
            break; 
        }
    }
});

client.login(token);
