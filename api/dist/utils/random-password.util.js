"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomPassword = void 0;
function generateRandomPassword(name) {
    let end = '';
    for (let i = 0; i < 4; i++) {
        const newChar = Math.floor(Math.random() * 9);
        end = `${end}${newChar}`;
    }
    return name.concat(end);
}
exports.generateRandomPassword = generateRandomPassword;
//# sourceMappingURL=random-password.util.js.map