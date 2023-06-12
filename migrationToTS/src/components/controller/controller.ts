import AppLoader from './appLoader';

class AppController extends AppLoader {
    getSources(callback: Function): void { 
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback as () => void
        );
    }

    getNews(e: Event, callback: Function): void { 
        let target = e.target as HTMLTemplateElement;
        const newsContainer = e.currentTarget as HTMLTemplateElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback as () => void
                    );
                }
                return;
            }
            target = target.parentNode as HTMLTemplateElement;
        }
    }
}

export default AppController;
