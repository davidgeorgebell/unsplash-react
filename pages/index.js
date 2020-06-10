import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const baseUrl = 'https://api.unsplash.com/photos/?client_id=';
const accessKey = process.env.NEXT_PUBLIC_ACCESS_KEY;

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
        <div className='image-grid'>
          {images.map((image, index) => (
            <div className='image' key={index}>
              <img src={image.urls.regular} alt={image.alt_description} />
            </div>
          ))}
        </div>
      </main>

      <footer>David Bell</footer>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${baseUrl}${accessKey}`);
  const images = await res.json();
  return {
    props: {
      images,
    },
  };
}
