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
const config = require("../settings/index");
const fetch = require('node-fetch');
class BaseService {
    constructor() { }
    ;
    get(serviceName, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getServiceUrl(serviceName, parameters);
            let promise = new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch((e) => reject(e));
            });
            return promise;
        });
    }
    ;
    post(serviceName, body, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getServiceUrl(serviceName, parameters);
            let promise = new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch((e) => reject(e));
            });
            return promise;
        });
    }
    ;
    put(serviceName, body, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getServiceUrl(serviceName, parameters);
            let promise = new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch((e) => reject(e));
            });
            return promise;
        });
    }
    ;
    patch(serviceName, body, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getServiceUrl(serviceName, parameters);
            let promise = new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    },
                    body: JSON.stringify(body)
                })
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch((e) => reject(e));
            });
            return promise;
        });
    }
    ;
    delete(serviceName, parameters) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = this.getServiceUrl(serviceName, parameters);
            let promise = new Promise((resolve, reject) => {
                fetch(url, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json; charset=UTF-8'
                    }
                })
                    .then(res => res.json())
                    .then(res => resolve(res))
                    .catch((e) => reject(e));
            });
            return promise;
        });
    }
    ;
    getServiceUrl(serviceName, parameters) {
        var url;
        switch (serviceName) {
            case config.users: {
                url = config.usersurl;
                break;
            }
            case config.albums: {
                url = config.albumsurl;
                break;
            }
            case config.photos: {
                url = config.photosurl;
                break;
            }
            default: url = null;
        }
        if (url !== null && parameters !== undefined && parameters !== null) {
            url = `${url}${parameters}`;
        }
        return url;
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base-service.js.map