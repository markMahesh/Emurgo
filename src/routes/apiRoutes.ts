import express from 'express';
import Article from '../controllers/articles'
const router = express.Router();

router.get('/articles', Article.getAritcle);

export default router;
