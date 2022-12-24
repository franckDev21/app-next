import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

type PostProp = { userId: number; id: number; title: string; body: string };

type PostsProp = {
  posts: PostProp[];
};

import React from "react";

const Home: React.FC<PostsProp> = ({ posts }) => {
  return (
    <Layout>
      <h1>{`Page d'accueil`}</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </Layout>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}
