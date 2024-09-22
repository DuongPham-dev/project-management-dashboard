/**
 * Returns a pluralized version of a label based on the count, with an optional display of the count.
 *
 * @param {string} label - The singular form of the label to be pluralized (e.g., "file", "comment").
 * @param {Object} options - Options for determining the count and whether to display it.
 * @param {number} options.count - The number used to determine if the label should be pluralized.
 * @param {boolean} [options.isDisplayCount=true] - Whether to include the count in the returned string.
 * @returns {string} - A string containing the pluralized label with or without the count (e.g., "1 file", "2 comments").
 *
 * Example usage:
 * getPluralizedLabel("comment", { count: 2 }); // "2 comments"
 * getPluralizedLabel("file", { count: 1, isDisplayCount: false }); // "file"
 */
export const getPluralizedLabel = (
  label: string,
  { count, isDisplayCount = true }: { count: number; isDisplayCount?: boolean }
): string => {
  const text = count > 1 ? `${label}s` : label;

  if (isDisplayCount) {
    return `${count} ${text}`;
  }

  return text;
};
