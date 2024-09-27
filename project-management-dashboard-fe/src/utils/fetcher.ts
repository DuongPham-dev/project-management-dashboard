// Constants
import { MILLISECOND } from "@app/constants";

interface MockFetchDataParams<T> {
  mockData?: T;
  delaySeconds?: number;
}

/**
 * Mock function to simulate data fetching with a delay.
 * @param delaySeconds - Time in seconds before the promise resolves.
 * @param mockData - Data that will be resolved after the delay.
 * @returns Promise that resolves with the provided mockData.
 */
export const mockFetchData = <T = unknown>({
  delaySeconds = 5,
  mockData,
}: MockFetchDataParams<T>): Promise<T> =>
  new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(mockData ?? ({} as T));
    }, delaySeconds * MILLISECOND); // Convert seconds to milliseconds
  });

export interface CallAPIParams<ResponseData> {
  fetcher: () => Response;
  successHandler?: (dat: ResponseData) => void;
  errorHandler?: (error: Error) => void;
}

/**
 * Function to make an API call and handle the result or error.
 * @template TData - The type of the expected response data.
 * @param fetcher - Function that performs the API request.
 * @param successHandler - Optional function to handle successful responses.
 * @param errorHandler - Optional function to handle errors that occur during the request.
 */
export const callAPI = async <TData>({
  fetcher,
  successHandler,
  errorHandler,
}: CallAPIParams<TData>): Promise<void> => {
  try {
    const response = await fetcher();
    const data: TData = await response.json();

    successHandler?.(data);
  } catch (error) {
    if (errorHandler) {
      if (error instanceof Error) return errorHandler(error);

      if (typeof error === "string") return errorHandler(new Error(error));
    }

    throw error;
  }
};
