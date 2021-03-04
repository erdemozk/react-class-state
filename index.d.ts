export declare class ClassState {
    private force;
    setState(setter: (state: this) => void): void;
    getState(): this;
    watchState(): void;
    private updateState;
}
export default ClassState;
