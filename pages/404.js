import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'; //give us access to the method to use redirect function.

const NotFound = () => {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);
  return (
    <div className="not-found">
      <h1>Ooooops...</h1>
      <h2>Page not found</h2>
      <p>Redirecting to the Home Page.........</p>
    </div>
  );
};

export default NotFound;
