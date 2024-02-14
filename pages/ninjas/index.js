import Head from "next/head";
import styles from "../../styles/Ninjas.module.css";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { ninjas: data },
  };
};

export default function Ninjas({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninjas</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
            <div className={styles.single}>
              <h3>{ninja.name}</h3>
              <p>{ninja.email}</p>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
