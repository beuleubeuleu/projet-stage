export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}