"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const settings_1 = require("./settings");
const routes_1 = require("./routes/routes");
const error_status_1 = require("./models/error-status");
const HttpStatus = require("http-status-codes");
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
            let err = new error_status_1.ErrorStatus(HttpStatus.getStatusText(HttpStatus.NOT_FOUND));
            err.status = HttpStatus.NOT_FOUND;
            next(err);
        });
        this.app.use((err, req, res, next) => {
            res.status(err.status || HttpStatus.INTERNAL_SERVER_ERROR);
            res.send(err.message);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map