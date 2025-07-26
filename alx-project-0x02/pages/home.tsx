import Head from 'next/head';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p>Welcome to the home page of ALX Project 2!</p>
      </main>
    </>
  );
}
