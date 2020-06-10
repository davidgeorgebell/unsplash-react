import Head from 'next/head';
import React, { useEffect } from 'react';

const baseUrl = 'https://api.unsplash.com/photos/?client_id=';
const accessKey = process.env.ACCESS_KEY;

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}${accessKey}`);
  const images = await res.json();
  console.log(images);
  return {
    props: {
      images,
    },
  };
}

export default function Home({ images }) {
  return (
    <div className='container'>
      <Head>
        <title>React Infinite Scroll</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Infinite scroll</h1>
        <input type='text' placeholder='search' />
      </main>

      <footer>David Bell</footer>
    </div>
  );
}
