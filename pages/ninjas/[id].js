import Head from "next/head";
import React from "react";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    method: "GET",
  });
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};

export default function Details({ ninja }) {
  return (
    <>
      <Head>
        <title>Ninja List | {ninja.name}</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1>{ninja.name}</h1>
        <p>{ninja.email}</p>
        <p>{ninja.website}</p>
        <p>{ninja.address.city}</p>
      </div>
    </>
  );
}
