import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-xl font-bold">ALX Project 2</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/home" className="hover:underline">/home</Link>
          <Link href="/about" className="hover:underline">/about</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
