"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("controllers/home-controller");
class Routes {
    constructor() {
        this.homeController = new home_controller_1.HomeController();
    }
    routes(app) {
        app.route('/').get(this.homeController.getHome);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map