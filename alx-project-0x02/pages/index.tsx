import Head from 'next/head';
import Header from '../components/layout/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Project 2</title>
        <meta name="description" content="Next.js Project Setup and Basics" />
      </Head>
      <main>
        <Header />
        <section className="p-8 text-center">
          <p className="text-lg">This is a basic Next.js + TypeScript + Tailwind project scaffold.</p>
        </section>
      </main>
    </>
  );
}
