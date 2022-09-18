const key = 'USER_NAME';

const getData = () => window.localStorage.getItem(key);

const setData = (userName: string) =>
  window.localStorage.setItem(key, userName);

const clearData = () => window.localStorage.removeItem(key);

export { getData, setData, clearData };
