import Layout from '../../components/Layout';
import Link from 'next/link';


export default function newsUA() {
  return (
    <Layout>
      <h1>Hot ukrainian news:</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

// export async function getServerSedeProps(context) {
//   return {
//     props: {

//     }
//   }
// }