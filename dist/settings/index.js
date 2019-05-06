"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV !== "production") {
    const dotenv = require("dotenv");
    dotenv.config();
}
const normalizePort = (val) => {
    const parsedPort = parseInt(val, 10);
    if (isNaN(parsedPort)) {
        return val;
    }
    if (parsedPort >= 0) {
        return parsedPort;
    }
    return false;
};
exports.port = normalizePort(process.env.PORT || "3978");
exports.usersurl = process.env.USERSURL;
exports.photosurl = process.env.PHOTOSURL;
exports.albumsurl = process.env.ALBUMSURL;
exports.users = process.env.USERSSERVICENAME;
exports.photos = process.env.PHOTOSSERVICENAME;
exports.albums = process.env.ALBUMSSERVICENAME;
//# sourceMappingURL=index.js.map