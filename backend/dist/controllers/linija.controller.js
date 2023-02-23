"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinijaController = void 0;
const linija_1 = __importDefault(require("../models/linija"));
class LinijaController {
    constructor() {
        this.getLinije = (req, res) => {
            linija_1.default.find({}, (err, linije) => {
                if (err)
                    console.log(err);
                else
                    res.json(linije);
            });
        };
    }
}
exports.LinijaController = LinijaController;
//# sourceMappingURL=linija.controller.js.map