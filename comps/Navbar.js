//this is a simple navbar.
import Link from 'next/link';
import Image from 'next/image';
const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/mapleLogo.png" width={128} height={77} />
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/maple">Maple Products Listing</Link>
    </nav>
  );
};

export default Navbar;
//Image tag in NextJS will helps in better SEO
// - like it only loads the images when we scroll down to that image only
