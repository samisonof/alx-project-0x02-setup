import Head from 'next/head';
import Header from '../components/layout/Header';
import Button from '../components/common/Button';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">About Page</h1>
        <p className="mb-8">This page demonstrates the reusable Button component with different sizes and shapes.</p>
        <div className="space-x-4">
          <Button title="Small Button" size="small" shape="rounded-sm" />
          <Button title="Medium Button" size="medium" shape="rounded-md" />
          <Button title="Large Button" size="large" shape="rounded-full" />
        </div>
      </main>
    </>
  );
}
