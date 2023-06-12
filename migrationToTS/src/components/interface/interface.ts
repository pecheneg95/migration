interface SourceNewsItem {
    name: string;
    id: string;
}

interface NewsItem {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    source: SourceNewsItem;
    title: string;
    url: string;
    urlToImage: string;
}

interface DataItem {
    name: string;
    id: string;
}

interface DataNews {
    status: string;
    totalResults: number;
    articles: object[];
}

interface DataSources {
    status: string;
    sources: object[];
}

interface Response {
    ok: boolean;
    type: string;
    url: string;
    redirected: boolean;
    status: number;
    statusText: string;
}

interface Options {
    sources?: string;
}


interface UrlOptions extends Options  {
    apiKey?: string;
}


export { NewsItem, DataItem, DataNews, DataSources, Response, UrlOptions, Options};
