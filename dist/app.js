"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const settings_1 = require("./settings");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        this.app.set("port", settings_1.port);
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use((req, res, next) => {
            let err = new Error('Not Found');
            err['status'] = 404;
            next(err);
        });
        this.app.use((err, req, res, next) => {
            res.status(err.status || 500);
            res.render('error', {
                message: err.message,
                error: err
            });
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map