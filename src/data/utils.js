export const deepFreeze = (obj) => {
  Object.keys(obj).forEach((prop) => {
    if (typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
  return Object.freeze(obj);
};

export const useImage = (url) => {
  return new URL(`/src/assets/${url}`, import.meta.url).href;
};
