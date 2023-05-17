import { Users } from "./gateway/Users/Users";
import { DiscordURIs, discordMainURI } from "./repository/constants/Client";
import { ClientOptions } from "./repository/interface/Client";
import { AuthorizationManager } from "./services/AuthorizationManager/AuthorizationManager";
import { Prepare } from "./utils/Prepare";

export class Client extends AuthorizationManager {
  public readonly users: Users;
  constructor(public options?: ClientOptions) {
    super(options);

    this.users = new Users(this);
  }

  url(csref: string): string {
    const { response_type, client_id, redirect_uri, scope, prompt }: any =
      this.options?.oauth2;

    return `${discordMainURI}${DiscordURIs.DISCORD_OAUTH}?${Prepare.parseQuery({
      response_type,
      client_id,
      redirect_uri,
      scope,
      prompt,
    })}&state=${csref}`;
  }
}
