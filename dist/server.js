"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const SERVER = app_1.default.listen(app_1.default.get("port"), () => {
    console.log("App is running at http://localhost:%d in %s mode", app_1.default.get("port"), app_1.default.get("env"));
});
exports.default = SERVER;
//# sourceMappingURL=server.js.map