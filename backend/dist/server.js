"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const mongoose_1 = __importDefault(require("mongoose"));
const korisnik_router_1 = __importDefault(require("./routers/korisnik.router"));
const kupac_router_1 = __importDefault(require("./routers/kupac.router"));
const oglasivac_router_1 = __importDefault(require("./routers/oglasivac.router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
mongoose_1.default.connect('mongodb://localhost:27017/pia_projekat');
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('db connection ok');
});
const router = express_1.default.Router();
router.use('/korisnik', korisnik_router_1.default);
router.use('/kupac', kupac_router_1.default);
router.use('/oglasivac', oglasivac_router_1.default);
app.use('/', router);
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map