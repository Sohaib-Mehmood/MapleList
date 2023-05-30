//fetching data from any API
//go to the place where you want to fetch that data.
//call the nextJS built-in async function

import Link from 'next/link';

export const getStaticProps = async () => {
  //Don't write any code you expect to be in the browser.
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {
      maple_listing: data,
    },
  };
};

const Maple = ({ maple_listing }) => {
  return (
    <div>
      <h2>all maple products</h2>
      {maple_listing.map((maplelist) => (
        <Link href={'/maple/' + maplelist.id} key={maplelist.id}>
          <h3>{maplelist.name}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Maple;
