import Head from 'next/head';
import Header from '../components/layout/Header';

export default function PostsPage() {
  return (
    <>
      <Head>
        <title>Posts - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Posts Page</h1>
        <p>This is the posts page where future blog content will appear.</p>
      </main>
    </>
  );
}
