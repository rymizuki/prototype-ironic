import { AbstractStore, VuexStore } from './store';
export { AbstractStore, VuexStore };
export declare class IronicCore {
    constructor();
    setStore<S>(store: AbstractStore<S>): void;
    use(middleware: (self: this) => void): void;
}
export interface ActionPayload {
    type: string;
    data: any;
}
export declare type IronicModelConstructor<T> = new (core: IronicCore) => T;
export declare abstract class AbstractModel {
    protected core: IronicCore;
    constructor(core: IronicCore);
    action(payload: ActionPayload): void;
    abstract sync(): void | Promise<void>;
    abstract getState<S>(): S;
    protected abstract reduce(payload: ActionPayload): void;
}
export declare class IronicModelBundler {
    protected core: IronicCore;
    private models;
    constructor(core: IronicCore);
    add<T extends AbstractModel>(Model: IronicModelConstructor<T>): void;
    get<T extends AbstractModel>(Model: IronicModelConstructor<T>): AbstractModel | undefined;
    action(payload: ActionPayload): void;
}
export declare class Test {
    private name;
    constructor(name: string);
    getName(): string;
}
export declare class Ironic {
    readonly core: IronicCore;
    readonly models: IronicModelBundler;
    constructor(core: IronicCore, models: IronicModelBundler);
    action(payload: ActionPayload): void;
    getState<M extends AbstractModel, S>(Model: IronicModelConstructor<M>): unknown;
    sync<T>(models: AbstractModel[]): Promise<T>;
}
export declare function createIronic(): Ironic;
