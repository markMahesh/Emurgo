const cache: Record<string, any> = {};

export function getCachedData(url: string): any {
    return cache[url];
}

export function cacheData(url: string, data: any): void {
    cache[url] = data;
}