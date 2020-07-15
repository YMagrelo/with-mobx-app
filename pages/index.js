import React  from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './index.module.scss';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Breaking news</title>
      </Head>
      <h1 className={styles.heading}>Breaking news</h1>
      <h2>
        <Link href="/categories/newsUA">
          <a>UKRAINE</a>
        </Link>
      </h2>
      <h2>
        <Link href="/categories/newsUS">
          <a>USA</a>
        </Link>
      </h2>
    </Layout>
  );
}
