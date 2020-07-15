import { observable, action } from 'mobx';

import { makeFetchRequest } from '../utils/API';

class NewsStore {
  @observable post = null;

  endpoint = 'post';

  constructor(initialData = {}) {
    this.post = initialData.post;
  }

  async fetch(id) {
    const response = await makeFetchRequest(`${this.endpoint}/${id}/`);
    this.setPost(response);
  }

  @action setPost(post) {
    this.post = post;
  }
}

export default PostStore;