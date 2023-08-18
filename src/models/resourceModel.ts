interface IArticle{
    title: string;
    description: string;
    content: string;
    url: string;
    image: string;
    publishedAt: string;
    source: ISource;
}

interface ISource {
    name: string;
    url: string;
}

export default IArticle;
