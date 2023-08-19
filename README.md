# Emurgo
Emurgo-backend-service

# Steps to Start the service

1. run `_npm install_`
2. run `npm run start` (it will start the server at [localhost](http://localhost:3000/)). 
3. To hit the api in Postman where you can use `http://localhost:3010/api/articles` endpoint.
   - example of url after adding queryParams `http://localhost:3010/api/articles?apiKey=ae119c44d751710f5c84f08d3bc19dec&searchKey=modi&count=2&lang=en&country=ind`
  - OR.   
    Curl command to hit the api:  
    `curl --location 'http://localhost:3010/api/articles?apiKey=ae119c44d751710f5c84f08d3bc19dec&searchKey=modi&count=2&lang=en&country=ind'`

# Tools and their Versions

1. Node.js v20.4.0.

# Sample Req and Response
    Req:
        http://localhost:3010/api/articles?apiKey=ae119c44d751710f5c84f08d3bc19dec&searchKey=modi&count=2&lang=en&country=ind
    Resp:
        `[
    {
        "title": "Citing mean income rise, PM says India making progress on equitable prosperity",
        "description": "Modi in his LinkedIn post also said that the SBI report shows that the smaller states, especially from the northeast, namely Manipur, Mizoram, and Nagaland, have “exhibited an admirable growth of over 20% in ITR filings in the last 9 years”.",
        "content": "India is making “remarkable progress on achieving equitable and collective prosperity”, with Income Tax returns data showing a leap in mean income over the last nine years, Prime Minister Narendra Modi said in a LinkedIn post on Friday citing a study... [789 chars]",
        "url": "https://indianexpress.com/article/business/economy/citing-mean-income-rise-pm-says-india-making-progress-on-equitable-prosperity-8899000/",
        "image": "https://images.indianexpress.com/2023/08/modi-2collll-1.jpg",
        "publishedAt": "2023-08-18T18:52:43Z",
        "source": {
            "name": "The Indian Express",
            "url": "https://indianexpress.com"
        }
    },
    {
        "title": "G20 Ministerial Meet: PM Modi says ‘India is home to to every religion, innumerable cultural practices’",
        "description": "PM Modi describes India as a diverse country with multiple languages, religions, and cultural practices.",
        "content": "Prime minister Narendra Modi on Saturday asserted that India is an incredibly diverse country with dozens of languages. It is a home to every religion in world & innumerable cultural practices. He further praised India's digital public Infrastructure... [2136 chars]",
        "url": "https://www.livemint.com/news/india/g20-minister-meet-pm-modi-says-home-to-every-religion-innumerable-cultural-practices-11692419989857.html",
        "image": "https://www.livemint.com/lm-img/img/2023/08/19/600x338/modi_1692379051649_1692421537328.jpg",
        "publishedAt": "2023-08-18T18:30:00Z",
        "source": {
            "name": "Livemint",
            "url": "https://www.livemint.com"
        }
    }
]`

