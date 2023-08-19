import { Request, Response } from 'express';
import GNews from '../services/external/google/gNews';
import authorizeReq from '../Authorizer/authorizeReq';
import { getCachedData } from '../Cache/cache';

class Article {
  async getAritcle(req: Request, res: Response) {
    try { 
      authorizeReq.AuthApiKey(req.query.apiKey) // authorizing the api key

      const gnewsResponse: any = await GNews.getNews(req); // calling google search news api
      const articleData = gnewsResponse.articles;

      res.json(articleData);
    }
    catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  }

}

export default new Article();