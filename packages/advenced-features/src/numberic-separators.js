"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const africaPop = 1234567890;
class AmountInput {
    constructor() {
        this.amount = 0;
    }
    showTooltip() {
        setTimeout(() => {
            alert('ooo');
        }, 2500);
    }
    formatMillion() {
        return this.amount / 1000000 + 'M';
    }
}
AmountInput.MAX_ALLOWED = 9999999999;
exports.default = AmountInput;
;
//# sourceMappingURL=numberic-separators.js.map