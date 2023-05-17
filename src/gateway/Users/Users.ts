import { AuthorizationManager } from "../../services/AuthorizationManager/AuthorizationManager";
import { UsersEntity } from "../../entities/UsersEntity";

export class Users {
  constructor(private readonly request: AuthorizationManager) {}

  async me(): Promise<UsersEntity> {
    const response = await this.request.axios.get("/users/@me");
    const entityUsers = new UsersEntity(response.data);

    entityUsers.prepareAvatar();
    entityUsers.prepareTag();

    return entityUsers;
  }
}
