import { UrlOptions, Options } from "../interface/interface";

class Loader {
    baseLink: string;  
    options: Options; 

    constructor(baseLink: string, options: {}) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(
        { endpoint = '', options = {} },
        callback = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load('GET', endpoint, callback, options);

    }

    errorHandler(res: Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: Options, endpoint: string): string {
        const urlOptions: UrlOptions = { ...this.options, ...options };
        let url: string = `${this.baseLink}${endpoint}?`;
            if (urlOptions.sources){
                url += `sources=${urlOptions.sources}&`;
            }
            if (urlOptions.apiKey){
                url += `apiKey=${urlOptions.apiKey}&`;
            }
        return url.slice(0, -1);
    }

    load(method: string, endpoint: string, callback: Function, options: object): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
