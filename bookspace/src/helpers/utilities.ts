export const removeIdFromRoute = (urlStr: string):string => {
  const separatorIndex = urlStr.lastIndexOf(":");
  const result = urlStr.slice(0, separatorIndex);
  return result;
};
