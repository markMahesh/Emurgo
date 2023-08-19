import express from 'express';
import bodyParser from 'body-parser';
import apiRoutes from './routes/apiRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api', apiRoutes , ()=> {
    return {"resp" :"hello world"}
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});