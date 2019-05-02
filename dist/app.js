"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const settings_1 = require("./settings");
const routes_1 = require("./routes/routes");
class App {
    constructor() {
        this.routes = new routes_1.Routes();
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.handleErrors();
    }
    config() {
        this.app.set("port", settings_1.port);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    handleErrors() {
        this.app.use((req, res, next) => {
            let err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });
        this.app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.send(err.message);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map