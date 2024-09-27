/**
 * Generates a URL by concatenating the root path and an array of sub-paths.
 * Ensures proper formatting by removing any double slashes.
 *
 * @param root - The base/root path of the URL (e.g., '/home').
 * @param subPaths - An optional array of sub-paths to append to the root path (e.g., ['dashboard', 'stats']).
 * @returns A properly formatted URL as a string.
 */
export const generateURL = (root: string, subPaths: string[] = []): string =>
  [root, ...subPaths].join("/").replace(/\/+/g, "/");
