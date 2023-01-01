"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getParam(index) {
    const params = this.split(",");
    if (index < 0 || params.length <= index) {
        return "";
    }
    return this.split(",")[index];
}
