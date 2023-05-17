import { Client } from "../../src/Client";
import { flagsResponseType } from "../../src/repository/constants/Client";
import { Prepare } from "../../src/utils/Prepare";
import { Timer } from "../../src/utils/Timer";

describe("[DiscordOauth2]", () => {
  it("Generate URL with query parser", () => {
    const discord: Client = new Client({
      oauth2: {
        response_type: "code",
        client_secret: "aas",
        client_id: "123",
        redirect_uri: "localhost:3000/auth",
        scope: flagsResponseType.IDENTIFY_WITH_EMAIL.join(" "),
        prompt: "consent",
      },
    });

    expect(discord.url("abc")).toBe(
      "https://discord.com/oauth2/authorize?response_type=code&client_id=123&redirect_uri=localhost%3A3000%2Fauth&scope=identify+email&prompt=consent&state=abc"
    );
  });

  it("Display avatar url", () => {
    const avatarUrl = Prepare.displayAvatarURL({
      avatar: "abf160575a19cfd461d09316380ff131",
      discriminator: "0001",
      id: "332349931715166218",
    });

    expect(avatarUrl).toBe(
      "https://cdn.discordapp.com/avatars/332349931715166218/abf160575a19cfd461d09316380ff131"
    );
  });

  it("Display default avatar url", () => {
    const avatarUrl = Prepare.displayAvatarURL({
      discriminator: "0001",
    });

    expect(avatarUrl).toBe("https://cdn.discordapp.com/embed/avatars/1.png");
  });

  it("Validate timer", () => {
    const avatarUrl = Timer.validateTime(0);

    expect(avatarUrl).toBe(false);
  });
});
