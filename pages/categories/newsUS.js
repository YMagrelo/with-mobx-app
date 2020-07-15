import Layout from '../../components/Layout';
import Link from 'next/link';

export default function newsUS() {
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