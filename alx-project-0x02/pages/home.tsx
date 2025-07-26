import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import PostModal from '@/components/common/PostModal';

interface Post {
  title: string;
  content: string;
}

export default function HomePage() {
  const [posts, setPosts] = useState<Post[]>([
    { title: 'Introduction to Next.js', content: 'Next.js enables server-side rendering and static site generation.' },
    { title: 'Why TypeScript?', content: 'TypeScript helps you catch errors early and build robust applications.' }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  return (
    <>
      <Head>
        <title>Home - ALX Project</title>
      </Head>
      <Header />
      <main className="p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Home Page</h1>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            + New Post
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddPost}
        />
      </main>
    </>
  );
}
