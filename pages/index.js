import Head from "next/head";
import Link from "next/link";

export default function Home({ msg }) {
  return (
    <div>
      <Head>
        <title>Welcome</title>
      </Head>

      <div style={{ padding: "5px 20px" }}>
        <p>👋 Hello from {msg}!</p>
        <li>
          <Link href="/hello">
            <a>hello</a>
          </Link>
        </li>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { msg: "PwnFunction" },
  };
}

export const config = { amp: true };
