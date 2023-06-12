import News from './news/news';
import Sources from './sources/sources';
import {DataNews, DataSources} from '../interface/interface';

export class AppView {
    news;
    sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DataNews): void {
        const values: object[] = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DataSources): void {
        const values: object[] = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
