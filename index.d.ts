declare type GetStateSettings = {
    vanilla?: boolean;
};
declare type StateSubscriber<T> = (currentState: T, previousState: T) => void;
export declare class ClassState {
    count: number;
    private force;
    private subscribers;
    setState(setter: (state: this) => Promise<void> | void): Promise<void>;
    getState(settings?: GetStateSettings): this;
    watchState(): void;
    subscribeState(subscriber: StateSubscriber<this>): StateSubscriber<this>;
    private initForce;
    private updateState;
}
export default ClassState;
