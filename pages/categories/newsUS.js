import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/news.module.scss';
import NewsItem from '../../components/NewsItem';

const country = 'us';

@inject('newsStore') @observer
class newsUS extends Component {
  static async getInitialProps({ mobxStore }) {
    await mobxStore.newsStore.fetch(country);
    return { news: mobxStore.newsStore.news };
  }

  render() {
    const { news } = this.props;

    return (
      <Layout>
        <Head>
          <title>USA</title>
        </Head>
        <h1 className={styles.heading}>Live breaking news</h1>
        <ul className={styles.list}>
        {news.map(news => (
           <NewsItem news={news} />
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

export default newsUS; 
