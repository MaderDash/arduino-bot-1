import { SapphireClient } from '@sapphire/framework';
import { BOT_TOKEN } from './utils/config';
import './utils/db';

const client = new SapphireClient({ intents: ['GUILDS', 'GUILD_MESSAGES'] });

client.login(BOT_TOKEN);
