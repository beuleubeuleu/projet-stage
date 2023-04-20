export const truncate = (str: string, maxLength: number): string => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength) + "...";
}




export const getObjectFromSessionStorage = (key: string) => {
  const storedItem = sessionStorage.getItem(key);

  let item = null
  if ( storedItem ) {
    item = JSON.parse(storedItem)
  }
  return item
}