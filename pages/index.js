import React  from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>Breaking news</title>
      </Head>
      <h1>Breaking news</h1>
      <ul>
        <li>
          <h2>
            <Link href="/categories/newsUA">
              <a> Ukrainian news</a>
            </Link>
          </h2>
        </li>
        <li>
          <h2>
            <Link href="/categories/newsUS">
              <a> USA news</a>
            </Link>
          </h2>
        </li>
      </ul>
    </Layout>
  );
}
