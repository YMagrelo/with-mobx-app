import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Layout from '../../components/Layout';
import Link from 'next/link';

@inject('newsStore') @observer

class newsUS extends Component {
  country = 'us';
  static async getInitialProps({ mobxStore }) {
    await mobxStore.newsStore.fetch(this.country);
    return { news: mobxStore.newsStore.news };
  }

  render() {
    const { news } = this.props;
    console.log(news);

    return (
      <Layout>
        <h1>News about sport:</h1>
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
