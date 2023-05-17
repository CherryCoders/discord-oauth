export const flagsResponseType = {
  IDENTIFY_WITH_EMAIL: ["identify", "email"],
  ALL_ACTIVIES: ["activities.read", "activities.write"],
  ALL_APPLICATIONS: [
    "applications.builds.read",
    "applications.builds.upload",
    "applications.commands",
    "applications.commands.update",
    "applications.commands.permissions.update",
    "applications.entitlements",
    "applications.store.update",
  ],
  ALL_GUILDS: ["guilds", "guilds.join", "guilds.members.read"],
  ALL_RPC: [
    "rpc",
    "rpc.activities.write",
    "rpc.notifications.read",
    "rpc.voice.read",
    "rpc.voice.write",
  ],
};

export const discordMainURI = "https://discord.com";
export const discordVersionAPI = 10;
export const discordURLAPI = `${discordMainURI}/api/v${discordVersionAPI}`;
export const cdnURLDiscord = "https://cdn.discordapp.com";

export const DiscordURIs = {
  DISCORD_OAUTH: "/oauth2/authorize",
  DISCORD_TOKEN_OAUTH: "/api/oauth2/token",
};
