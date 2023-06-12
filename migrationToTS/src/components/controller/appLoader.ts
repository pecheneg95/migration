import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '9d2d38c0ff3b4c189514857d54af2637', 
        });
    }
}

export default AppLoader;
