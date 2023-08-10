// @ts-ignore
import fetch from 'node-fetch';

export async function fetchWithTimeout(resource, options = {}) {
    // @ts-ignore
    const { timeout = 4000 } = options;

    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);

    const response = await fetch(resource, {
        ...options,
        signal: controller.signal
    });
    clearTimeout(id);

    return response;
}