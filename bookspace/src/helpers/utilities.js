export const removeIdFromRoute = (urlStr) => {
  const separatorIndex = urlStr.lastIndexOf(":");
  const result = urlStr.slice(0, separatorIndex);
  return result;
};
