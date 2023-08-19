class APIError extends Error {
    constructor(public status: number, message: string) {
        super(`${status} - ${message}`);
        this.name = 'APIError';
    }
}

export function handleAPIResponse(response: Response): void {
    const status = response.status;
    
    if (status === 400) {
        throw new APIError(400, 'Bad Request -- Your request is invalid.');
    } else if (status === 401) {
        throw new APIError(401, 'Unauthorized -- Your API key is wrong.');
    } else if (status === 403) {
        throw new APIError(403, 'Forbidden -- Daily quota reached. Retry after reset.');
    } else if (status === 429) {
        throw new APIError(429, 'Too Many Requests -- Slow down and retry later.');
    } else if (status === 500) {
        throw new APIError(500, 'Internal Server Error -- Server problem. Try again later.');
    } else if (status === 503) {
        throw new APIError(503, 'Service Unavailable -- Temporarily offline for maintenance.');
    } else {
        throw new APIError(status, 'Unhandled error');
    }
}