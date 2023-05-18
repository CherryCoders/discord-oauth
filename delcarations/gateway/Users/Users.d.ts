import { AuthorizationManager } from "../../services/AuthorizationManager/AuthorizationManager";
import { UsersEntity } from "../../entities/UsersEntity";
export declare class Users {
    private readonly request;
    constructor(request: AuthorizationManager);
    me(): Promise<UsersEntity>;
}
