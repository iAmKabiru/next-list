import Head from "next/head";
import Link from "next/link"
import styles from '../../styles/ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: {ninjas: data}
  }
}

const NinjaListing = ({ninjas}) => {
  return (
    <>
      <Head>
        <title>Ninja Listing</title>
      </Head>
      <div>
        <h1>Ninja Listings</h1>
        {ninjas.map(ninja => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.ninja}>
              <h3>{ninja.name}</h3>
            </a>
            </Link>
        ))}
      </div>
    </>
  );
}

export default NinjaListing;