import { Request, Response } from 'express';
import GNews from '../services/external/google/GNews';

class Article {
    async getAritcle(req: Request, res: Response) {
        const gnewsResponse :any = await GNews.getNews();
        console.log('gnewsResponse: ', gnewsResponse)
        const articleData = gnewsResponse.articles;
        res.json(articleData);
    }

}

export default new Article();