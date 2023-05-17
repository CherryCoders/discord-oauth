import axios, { AxiosInstance, AxiosResponse } from "axios";

import { discordURLAPI } from "../../repository/constants/Client";
import { OAuth2Options } from "../../repository/interface/Client";
import { Prepare } from "../../utils/Prepare";
import { DiscordResponseToken } from "../../repository/interface/Authorization";
import { Timer } from "../../utils/Timer";

export class AuthorizationManager {
  public readonly axios: AxiosInstance = axios.create({
    baseURL: discordURLAPI,
  });
  public cache: Map<string, any> = new Map();

  constructor(public client: any) {}

  async authorize(code: string) {
    const response: DiscordResponseToken = await this.authorizationToken(code);

    this.updateContentType("application/json");
    this.axios.defaults.headers.authorization = `Bearer ${response.access_token}`;

    this.cache.set(response.access_token, response);

    this.axios.interceptors.request.use(
      async (config) => {
        if (this.axios.defaults.headers.authorization) {
          const { token }: any = this.getHeaderAuthorization(
            this.axios.defaults.headers.authorization
          );

          await this.validateAuthentication(token);
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  private async validateAuthentication(token: string) {
    const fetchAuth = this.cache.get(token);
    if (!fetchAuth) return false;
    if (!Timer.validateTime(fetchAuth.expires_in)) {
      delete this.axios.defaults.headers.authorization;
      const response = await this.authorizationToken(
        fetchAuth.refresh_token,
        "refresh_token"
      );
      this.axios.defaults.headers.authorization = `Bearer ${response.access_token}`;
      this.cache.delete(token);
      this.cache.set(response.access_token, response);
    }
  }

  private getHeaderAuthorization(header: any): object {
    const [type, token] = header.split(" ");
    return { token, type };
  }

  private updateContentType(content: string) {
    this.axios.defaults.headers["Content-Type"] = content;
  }

  private async authorizationToken(
    code: string,
    grant_type: string = "authorization_code"
  ): Promise<DiscordResponseToken> {
    this.updateContentType("application/x-www-form-urlencoded");

    const { client_id, client_secret, redirect_uri }: OAuth2Options =
      this.client.oauth2;
    const response = await this.axios.post(
      "oauth2/token",
      grant_type === "refresh_token"
        ? Prepare.parseQuery({
            client_id,
            client_secret,
            grant_type,
            refresh_token: code,
          })
        : Prepare.parseQuery({
            client_id,
            client_secret,
            grant_type,
            redirect_uri,
            code,
          })
    );
    return response?.data;
  }

  async revokeToken(token: string): Promise<AxiosResponse> {
    const { client_id, client_secret }: OAuth2Options = this.client.oauth2;
    this.updateContentType("application/x-www-form-urlencoded");
    const response: AxiosResponse = await this.axios.post(
      "/token/revoke",
      Prepare.parseQuery({
        client_id,
        client_secret,
        token,
      })
    );
    return response?.data;
  }
}
