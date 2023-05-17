export class BaseEntities {
  constructor(public readonly props: any) {}

  toJSON(): object {
    return this.props;
  }
}
