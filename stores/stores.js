import { useStaticRendering } from 'mobx-react';

import NewsStore from './NewsStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { newsStore: {} }) {
  if (isServer) {
    return {
      newsStore: new NewsStore(initialData.newsStore),
    };
  }
  if (store === null) {
    store = {
      newsStore: new NewsStore(initialData.newsStore),
    };
  }

  return store;
}