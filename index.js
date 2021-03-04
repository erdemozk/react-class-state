"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassState = void 0;
const react_1 = require("react");
class ClassState {
    constructor() {
        this.count = 5;
        this.subscribers = new Set();
    }
    setState(setter) {
        return __awaiter(this, void 0, void 0, function* () {
            const previousState = Object.assign({}, this);
            yield setter(this);
            const currentState = this;
            this.subscribers.forEach((sub) => sub(currentState, previousState));
            this.updateState();
        });
    }
    getState(settings = {}) {
        if (!settings.vanilla)
            this.initForce();
        return this;
    }
    watchState() {
        this.initForce();
    }
    subscribeState(subscriber) {
        this.subscribers.add(subscriber);
        return subscriber;
    }
    initForce() {
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