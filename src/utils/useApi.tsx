import { useState } from 'react';

interface UseApiParams {
  url: string;
  config?: RequestInit;
  token?: string;
}

function useApi<T>({ url, config, token }: UseApiParams) {
  const apiPath = 'https://api.spacetraders.io/v2/';
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const headers = new Headers({
    'Content-Type': 'application/json',
  });
  if (token) {
    headers.append('Authorization', `Bearer ${token}`);
  }

  const api = () => {
    setLoading(true);
    fetch(apiPath + url, {
      headers,
      ...config,
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  };

  return { data, loading, error, api };
}

export default useApi;
