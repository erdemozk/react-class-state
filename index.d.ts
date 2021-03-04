export declare class ClassState {
    private force;
    setState(setter: (state: this) => void): void;
    getState(): this;
    watch(): void;
    private update;
}
export default ClassState;
