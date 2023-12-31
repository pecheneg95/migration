import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { DataNews, DataSources } from '../interface/interface';

class App {
    controller: AppController;
    view: AppView;
    
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        document
            .querySelector('.sources')
            .addEventListener('click', (e: Event) => this.controller.getNews(e, (data: DataNews) => this.view.drawNews(data)));
            
        this.controller.getSources((data: DataSources) => this.view.drawSources(data));
    }
}

export default App;
