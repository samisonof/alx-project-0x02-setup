import Head from 'next/head';
import Card from '../components/common/Card';
import Header from '../components/layout/Header';

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Home Page</h1>
        <div className="grid md:grid-cols-2 gap-6">
          <Card
            title="Introduction to Next.js"
            content="Next.js is a React framework that enables server-side rendering and static site generation."
          />
          <Card
            title="Why TypeScript?"
            content="TypeScript provides optional static typing for JavaScript, helping you catch errors early and build robust applications."
          />
          <Card
            title="Tailwind CSS"
            content="Tailwind is a utility-first CSS framework that lets you build custom designs directly in your markup."
          />
          <Card
            title="Reusable Components"
            content="Building reusable components like this Card helps maintain cleaner and more efficient codebases."
          />
        </div>
      </main>
    </>
  );
}
