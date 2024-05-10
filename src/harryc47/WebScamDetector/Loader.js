import { EmbedBuilder, Events } from "discord.js";
import { PluginBase } from "../../../../../src/plugin/PluginBase.js";
import { URL } from "./utils/URL.js";

export class Loader extends PluginBase {

    onEnable() {
        this.getNexus().on(Events.MessageCreate, this.onMessage)
    }

    async onMessage(message) {
        const content = message.content;
        const regex = /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+\.[a-zA-Z]{2,}/g;
        const match = content.match(regex);
        if (!match) return
        for (const website of match) {
            const isSafe = await URL.isSafe(website);
            if (!isSafe) {
                const embed = new EmbedBuilder()
                    .setTitle("WebScamDetector")
                    .setDescription(`Website ${website} seems unsafe`)
                    .setColor(0xFF0000)
                message.reply({
                    embeds: [embed]
                })
            }
        }
    }

    onDisable() {
    }
}