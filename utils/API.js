const BASE_URL = 'https://newsapi.org/v2/top-headlines?';
const apiKey = 'b2a0db956acc47c193a5a8359fbf1f90';

export const makeFetchRequest = (country) => {
  return fetch(`${BASE_URL}country=${country}&apiKey=${apiKey}`)
    .then(response => response.json());
};