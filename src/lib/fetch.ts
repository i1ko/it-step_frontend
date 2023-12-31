export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

interface FetchOptions {
  method?: HttpMethod;
  headers?: Record<string, string>;
  body?: FormData | object;
}

async function fetchJson<T>(url: string, options?: FetchOptions): Promise<T> {
  try {
    const response = await fetch(process.env.REACT_APP_BACKEND_ORIGIN + url, {
      method: options?.method || 'GET',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        ...options?.headers,
      },
      body: options?.body instanceof FormData ? options.body : JSON.stringify(options?.body),
    });

    // if (!response.ok) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }

    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
}

export { fetchJson };
