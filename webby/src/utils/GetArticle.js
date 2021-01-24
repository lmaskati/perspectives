const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
};
const toJson = async (resp) => resp.json();

const fetchFromAPI = async (url, options) => {
  const result = await fetch(`https://cors-anywhere.herokuapp.com/${url}`, options);
  const x = result;
  return x;
};

export const get = (url) =>
  fetchFromAPI(url, {
    headers: DEFAULT_HEADERS,
    method: 'GET',
  }).then(toJson);

export const getArticle = async (url) => get(`{url}`);
