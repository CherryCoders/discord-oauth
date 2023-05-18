import { Users } from "./gateway/Users/Users";
import { ClientOptions } from "./repository/interface/Client";
import { AuthorizationManager } from "./services/AuthorizationManager/AuthorizationManager";
export declare class Client extends AuthorizationManager {
    options?: ClientOptions | undefined;
    readonly users: Users;
    constructor(options?: ClientOptions | undefined);
    url(csref: string): string;
}
