import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Ninja List | Page Not Found</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className="not-found">
        <h1>Oops...</h1>
        <h2>That page cannot be found</h2>
        <p>
          Go back to the <Link href={"/"}>home</Link>{" "}
        </p>
      </div>
    </>
  );
}
