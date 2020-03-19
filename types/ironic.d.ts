export interface IronicModelPort {
}
export interface IronicPort {
    readonly models: IronicModelPort[];
    action<T>(payload: T): void;
    getState(): void;
    sync<T>(models: IronicModelPort[]): Promise<T>;
}
export declare class Ironic implements IronicPort {
    readonly models: IronicModelPort[];
    action<T>(payload: T): void;
    getState(): void;
    sync<T>(models: IronicModelPort[]): Promise<T>;
}
