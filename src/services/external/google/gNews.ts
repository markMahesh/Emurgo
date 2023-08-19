import * as dotenv from 'dotenv';
import { cacheData, getCachedData } from '../../../Cache/cache';
dotenv.config(); // Load the .env file

class GNews {
  private apikey: string;
  private baseUrl: string;
  private url: string;
  private q: string;
  private lang: string;
  private country: string;
  private max: number;

  constructor(apikey?: string) {

    this.apikey = (process.env.API_KEY)?process.env.API_KEY:``;
    this.q='example'; 
    this.lang='en'; 
    this.max=10; 
    this.country='us';
    this.baseUrl = (process.env.URL)?process.env.URL:'';
    this.url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${this.apikey}`; 
  }


  addParamsToUrl(params:any) {
    this.q = (params.searchKey)?params.searchKey:this.q;
    this.lang = (params.lang)?params.lang:this.lang;
    this.max = (params.count)?params.count:this.max;
    this.country = (params.country)?params.country:this.country;

    const url = new URL(this.baseUrl);
    url.searchParams.append('q', this.q);
    url.searchParams.append('lang', this.lang);
    url.searchParams.append('max', `${this.max}`);
    url.searchParams.append('country', `${this.country}`);
    url.searchParams.append('apikey', this.apikey);
    
    this.url = url.toString();

  }

  async getNews(req:any) {
    try {
      this.addParamsToUrl(req.query);

      const cachedData = getCachedData(this.url);
      if(cachedData){
        console.log('Getting the data from in-mem cache')
        return cachedData;
      }
      const response = await fetch(this.url);
    
      const data = await response.json();
      cacheData(this.url,data);
      return data;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

export default new GNews();
  