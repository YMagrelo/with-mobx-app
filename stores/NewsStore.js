import { observable, action } from 'mobx';

import { makeFetchRequest } from '../utils/API';

class NewsStore {
  @observable news = [];

  

  constructor(initialData = {}) {
    this.news = initialData.news;
  }

  async fetch(country) {
    const response = await makeFetchRequest(country);
  
    this.setNews(response.articles);
  }

  @action setNews(news) {
    this.news = news;
  }
}

export default NewsStore;