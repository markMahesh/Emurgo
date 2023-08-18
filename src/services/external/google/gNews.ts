class GNews {
  private apikey: string;
  private url: string;

  constructor(apikey?: string) {
    this.apikey = `ae119c44d751710f5c84f08d3bc19dec`;
    this.url = `https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=10&apikey=${this.apikey}`;
  }

  async getNews() {
    try {        
      const response = await fetch(this.url);
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
}

export default new GNews();
  