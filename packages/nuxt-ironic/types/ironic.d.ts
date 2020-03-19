export interface IronicModel {}

export interface Ironic {
  sync<T>(models: IronicModel[]): Promise<T>
  action<T>(payload: T): void
}
