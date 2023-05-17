import { cdnURLDiscord } from "../repository/constants/Client";

export class Prepare {
  public static parseQuery(queryOptions: any): string {
    return new URLSearchParams(queryOptions).toString();
  }
  public static displayAvatarURL(user: any) {
    if (!user.avatar)
      return `${cdnURLDiscord}/embed/avatars/${
        Number(user.discriminator) % 5
      }.png`;
    return `${cdnURLDiscord}/avatars/${user.id}/${user.avatar}`;
  }
}
