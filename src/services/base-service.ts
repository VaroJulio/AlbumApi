import * as config from '../settings/index';
const fetch = require('node-fetch');

export class BaseService {
    constructor(){};
    
    protected async get(serviceName: string, parameters?: any): Promise<any>{
        let url = this.getServiceUrl(serviceName, parameters);
        let promise = new Promise<any>(
            (resolve, reject) =>{
                fetch(
                    url, 
                    {
                        method: 'GET',
                        headers:
                        {
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    }
                )
                .then(res => res.json())
                .then(res => resolve(res))
                .catch((e) => reject(e));
            }
        ); 
        return promise;    
    };

    protected async post(serviceName: string, body: any, parameters?: any): Promise<any>{
        let url = this.getServiceUrl(serviceName, parameters);
        let promise = new Promise<any>(
            (resolve, reject) =>{
                fetch(
                    url, 
                    {
                        method: 'POST',
                        headers:
                        {
                            'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify(body)
                    }
                )
                .then(res => res.json())
                .then(res => resolve(res))
                .catch((e) => reject(e));
            }
        ); 
        return promise;    
    };

    protected async put(serviceName: string, body: any, parameters?: any): Promise<any>{
        let url = this.getServiceUrl(serviceName, parameters);
        let promise = new Promise<any>(
            (resolve, reject) =>{
                fetch(
                    url, 
                    {
                        method: 'PUT',
                        headers:
                        {
                        'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify(body)
                    }
                )
                .then(res => res.json())
                .then(res => resolve(res))
                .catch((e) => reject(e));
            }
        ); 
        return promise;    
    };

    protected async patch(serviceName: string, body: any, parameters?: any): Promise<any>{
        let url = this.getServiceUrl(serviceName, parameters);
        let promise = new Promise<any>(
            (resolve, reject) =>{
                fetch(
                    url, 
                    {
                        method: 'PATCH',
                        headers:
                        {
                        'Content-Type': 'application/json; charset=UTF-8'
                        },
                        body: JSON.stringify(body)
                    }
                )
                .then(res => res.json())
                .then(res => resolve(res))
                .catch((e) => reject(e));
            }
        ); 
        return promise;    
    };

    protected async delete(serviceName: string, parameters?: any): Promise<any>{
        let url = this.getServiceUrl(serviceName, parameters);
        let promise = new Promise<any>(
            (resolve, reject) =>{
                fetch(
                    url, 
                    {
                        method: 'DELETE',
                        headers:
                        {
                            'Content-Type': 'application/json; charset=UTF-8'
                        }
                    }
                )
                .then(res => res.json())
                .then(res => resolve(res))
                .catch((e) => reject(e));
            }
        ); 
        return promise;    
    };

    protected getServiceUrl(serviceName: string, parameters?:any){
        var url: string;
        switch (serviceName){
            case config.users:{
                url = config.usersurl;
                break;
            }
            case config.albums:{
                url = config.albumsurl;
                break;
            }
            case config.photos:{
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