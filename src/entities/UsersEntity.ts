import { BaseEntities } from "./BaseEntities";
import { Prepare } from "../utils/Prepare";

export class UsersEntity extends BaseEntities {
  constructor(public props: any) {
    super(props);
  }

  prepareAvatar() {
    this.props.avatarURL = Prepare.displayAvatarURL(this.props);
  }

  prepareTag() {
    this.props.tag = `${this.props.username}#${this.props.discriminator}`;
  }
}
