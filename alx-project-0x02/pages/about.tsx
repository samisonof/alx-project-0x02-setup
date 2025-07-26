import Head from 'next/head';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
      </Head>
      <main className="p-8 text-center">
        <h1 className="text-3xl font-bold">About Page</h1>
        <p>This is the about page for ALX Project 2, demonstrating routing in Next.js.</p>
      </main>
    </>
  );
}
