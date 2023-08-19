class Authorize {
    AuthApiKey(apiKey: any) {
        if(!apiKey){
            throw new Error('Unauthorized -- API key not found')
        }
        if(apiKey != process.env.API_KEY)
        {
            throw new Error('Unauthorized -- Your API key is wrong.')
        }
    }
}

export default new Authorize();