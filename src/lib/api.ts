import f from 'isomorphic-unfetch';
import useSWR, { responseInterface, keyInterface, ConfigInterface } from 'swr';

interface Error {
  status: number;
  message: string;
}

export const fetch = <T>(url: string): Promise<T> =>
  f(url).then((r) => r.json());

export const useFetch = <T>(
  key: keyInterface,
  options?: ConfigInterface
): responseInterface<T, Error> => {
  return useSWR<T, Error>(key, fetch, options);
};
