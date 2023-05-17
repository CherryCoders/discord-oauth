export interface OAuth2Options {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  scope: string;
  prompt: string;
  state?: string;
  client_secret: string;
}

export interface ClientOptions {
  oauth2: OAuth2Options;
}
