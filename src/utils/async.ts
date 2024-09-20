// Constants
import { MILLISECOND } from "@app/constants";

/**
 * Mocks a data-fetching process by returning a resolved promise after a specified delay.
 *
 * @param delaySeconds - The delay in seconds before the promise resolves. Defaults to 5 seconds.
 * @returns A promise that resolves after the specified delay.
 */
export const mockFetchData = (delaySeconds: number = 5): Promise<void> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, delaySeconds * MILLISECOND); // Convert seconds to milliseconds
  });
