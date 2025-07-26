import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Header: React.FC = () => {
  const { pathname } = useRouter();

  const linkClasses = (path: string) =>
    `hover:underline ${pathname === path ? 'text-yellow-300 font-semibold' : ''}`;

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">ALX Project</h1>
        <nav className="space-x-6">
          <Link href="/home" className={linkClasses('/home')}>Home</Link>
          <Link href="/about" className={linkClasses('/about')}>About</Link>
          <Link href="/posts" className={linkClasses('/posts')}>Posts</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
