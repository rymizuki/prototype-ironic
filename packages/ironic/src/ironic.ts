export interface IronicModelPort {
}

export interface IronicPort {
  readonly models: IronicModelPort[];
  action<T>(payload: T): void;
  getState(): void;
  sync<T>(models: IronicModelPort[]): Promise<T>;
}


export class Ironic implements IronicPort {
  public readonly models: IronicModelPort[] = [];
  action<T>(payload: T) {}
  getState(): void {}
  async sync<T>(models: IronicModelPort[]): Promise<T> {
    return new Promise((resolve) => resolve())
  }
}
