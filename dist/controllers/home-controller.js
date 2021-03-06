"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpStatus = require("http-status-codes");
const users_service_1 = require("../services/users-service");
class HomeController {
    getHome(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let servicio = new users_service_1.UsersService();
            let result = yield servicio.getAll();
            res.status(HttpStatus.OK).send('Album API</br>There is no front-end, see https://github.com/VaroJulio/AlbumApi for implementation!');
        });
    }
    ;
}
exports.HomeController = HomeController;
//# sourceMappingURL=home-controller.js.map