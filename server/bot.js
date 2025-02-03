const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.TELEGRAM_BOT_TOKEN;
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, "Привет! Чтобы поиграть в игру, нажмите на кнопку Играть.", {
        // reply_markup: {
        //     inline_keyboard: [
        //         [{
        //             text: "Играть",
        //             web_app: { url: "https://ourgame-mu.vercel.app/" }
        //         }]
        //     ]
        // }
    });
});

module.exports = bot;
