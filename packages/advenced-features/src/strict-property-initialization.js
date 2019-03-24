"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class StrictInit {
    constructor() {
        this.address = 'hello';
        this.isPublic = true;
    }
}
exports.default = StrictInit;
;
const lib = new StrictInit();
const shortTitles = lib.titles.filter(title => title.length < 5);
//# sourceMappingURL=strict-property-initialization.js.map