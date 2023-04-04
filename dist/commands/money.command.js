"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoneyCommand = void 0;
const telegraf_1 = require("telegraf");
const command_class_1 = require("./command.class");
class MoneyCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.command("money", async (ctx) => {
            const { username: userName, id: userId } = ctx.update.message.from;
            // console.log(await addUser(userId, userName || ''))
            ctx.reply("На вашем счету 9`999`999`999 USD 💵", telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.callback("➕", 'add_money'),
                telegraf_1.Markup.button.callback("➖", 'take_money'),
            ]));
        });
        this.bot.action('add_money', (ctx) => {
            ctx.editMessageText("Вы пополнили счет на 10000 💵");
        });
        this.bot.action('take_money', (ctx) => {
            ctx.editMessageText("Вы сняли с счета 10000 💵");
        });
    }
}
exports.MoneyCommand = MoneyCommand;
//# sourceMappingURL=money.command.js.map