//this is a simple navbar.
import Link from 'next/link';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>MapleList</h1>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/maple">Maple Products Listing</Link>
    </nav>
  );
};

export default Navbar;
