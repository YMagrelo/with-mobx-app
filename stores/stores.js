import { useStaticRendering } from 'mobx-react';

import NewsStore from './NewsStore';
import UIStore from './UIStore';

const isServer = typeof window === 'undefined';
useStaticRendering(isServer);

let store = null;

export default function initializeStore(initialData = { newsStore: {} }) {
  if (isServer) {
    return {
      newsStore: new NewsStore(initialData.newsStore),
      uiStore: new UIStore(),
    };
  }
  if (store === null) {
    store = {
      newsStore: new NewsStore(initialData.newsStore),
      uiStore: new UIStore(),
    };
  }

  return store;
}