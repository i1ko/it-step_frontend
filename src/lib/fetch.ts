type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: string | FormData;
}

async function fetchJson<T>(url: string, options?: FetchOptions): Promise<T> {
  try {
    const response = await fetch(url, {
      method: options?.method || 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      body: options?.body instanceof FormData ? options.body : JSON.stringify(options?.body),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export { fetchJson };
