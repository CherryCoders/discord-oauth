import { AxiosInstance, AxiosResponse } from "axios";
export declare class AuthorizationManager {
    client: any;
    readonly axios: AxiosInstance;
    cache: Map<string, any>;
    constructor(client: any);
    authorize(code: string): Promise<void>;
    private validateAuthentication;
    private getHeaderAuthorization;
    private updateContentType;
    private authorizationToken;
    revokeToken(token: string): Promise<AxiosResponse>;
}
