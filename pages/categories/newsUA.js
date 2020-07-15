import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import styles from './news.module.scss';

const country = 'ua';

@inject('newsStore') @observer
class newsUA extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.newsStore.fetch(country);
    return { news: mobxStore.newsStore.news };
  }

  render() {
    const { news } = this.props;
    console.log(news);

    return (
      <Layout>
        <h1 className={styles.heading}>Live breaking news</h1>
        <ul className={styles.list}>
        {news.map(news => (
            <li className={styles.item}>
              <h3><a href={news.url}>{news.title}</a></h3>
              <p className={styles.item__content}>
                <strong>Author: </strong>
                {news.author}
              </p>
              <img src={news.urlToImage} alt="news title img" className={styles.item__img} />
              <p className={styles.item__content}>{news.publishedAt}</p>
            </li>
          ))}
        </ul>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Layout>
    );
  }
}

export default newsUA; 