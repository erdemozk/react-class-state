"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassState = void 0;
const react_1 = require("react");
class ClassState {
    setState(setter) {
        setter(this);
        this.updateState();
    }
    getState() {
        const [, force] = react_1.useReducer((c) => c + 1, 0);
        this.force = force;
        return this;
    }
    watchState() {
        const [, force] = react_1.useReducer((c) => c + 1, 0);
        this.force = force;
    }
    updateState() {
        this.force && this.force();
    }
}
exports.ClassState = ClassState;
exports.default = ClassState;
//# sourceMappingURL=index.js.map