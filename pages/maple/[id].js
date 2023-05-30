//[] brackets around the file name tells nextjs that it is changable

export const getStaticPaths = async () => {
  //first thing is to fetch that data.
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  const paths = data.map((maple) => {
    return {
      params: { id: maple.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { maple: data },
  };
};
const Details = (maple) => {
  return (
    <div>
      <h1>{maple.name}</h1>
      <p>{maple.email}</p>
      <p>{maple.website}</p>
    </div>
  );
};

export default Details;
