let cache = {}

export function getCache() {
    return cache
}

export function updateCache(key: string, value: any) {
    cache[key] = value
}