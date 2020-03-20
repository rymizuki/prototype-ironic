import { Store } from 'vuex';
export declare abstract class AbstractStore<S> {
    abstract commit<D>(name: string, payload: D): void;
    abstract getState(): S;
}
export declare class VuexStore<S> extends AbstractStore<S> {
    protected vuex_store: Store<S>;
    constructor(vuex_store: Store<S>);
    commit<D>(name: string, payload: D): void;
    getState(): S;
}
