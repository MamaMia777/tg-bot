"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bot = void 0;
const telegraf_1 = require("telegraf");
const money_command_1 = require("./commands/money.command");
const start_command_1 = require("./commands/start.command");
class Bot {
    constructor() {
        this.commands = [];
        this.bot = new telegraf_1.Telegraf('6192796212:AAGlOmktLU4wOPgF3qX4TM8pznqrZ-9d4hI');
        // this.bot.use(new LocalSession({ database: 'sessions.json' })).middleware()
    }
    init() {
        this.commands = [
            new start_command_1.StartCommand(this.bot),
            new money_command_1.MoneyCommand(this.bot)
        ];
        for (const command of this.commands) {
            command.handle();
        }
        this.bot.launch();
    }
}
exports.Bot = Bot;
//# sourceMappingURL=Bot.js.map