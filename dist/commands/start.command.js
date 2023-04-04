"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartCommand = void 0;
const telegraf_1 = require("telegraf");
const command_class_1 = require("./command.class");
class StartCommand extends command_class_1.Command {
    constructor(bot) {
        super(bot);
    }
    handle() {
        this.bot.start((ctx) => {
            const { message } = ctx, rest = __rest(ctx, ["message"]);
            const { from } = message;
            const { username, id } = from;
            ctx.reply("Вам нравится ?", telegraf_1.Markup.inlineKeyboard([
                telegraf_1.Markup.button.callback("👍", 'da'),
                telegraf_1.Markup.button.callback("🥱", 'net'),
            ]));
        });
        this.bot.action('da', (ctx) => {
            // ctx.session.courseLike = true;
            ctx.editMessageText("👍 круто");
        });
        this.bot.action('net', (ctx) => {
            // ctx.session.courseLike = false;
            ctx.editMessageText('🥱 плохо');
        });
    }
}
exports.StartCommand = StartCommand;
//# sourceMappingURL=start.command.js.map