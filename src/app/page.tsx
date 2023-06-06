'use client';

import { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Giphy from '@/components/giphy';
import Search from '@/components/search';
import GiphyGallery from '@/components/giphy-gallery';
import GiphyModal from '@/components/giphy-modal';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

export default function Home() {
  const API_URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}`;
  const LIMIT = 20;

  const [images, setImages]: any[] = useState([]);
  const [search, setSearch] = useState('');
  const [offset, setOffset] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);

  const [displayModal, setDisplayModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleSearchClick = async () => {
    try {
      const res = await fetch(`${API_URL}&q=${search}&limit=${LIMIT}&offset=${offset}`);

      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const body = await res.json();
      const images = body.data.map((giphy: any) => giphy.images.fixed_height);

      setImages(images);
    } catch (err) {
      console.log(err)
    }
  };

  const handlePaginationClick = (next: boolean) => () => {
    if (next) {
      setOffset(offset + LIMIT);
      setPageNumber(pageNumber + 1);
      handleSearchClick();
    } else {
      if (offset === 0) return;
      setOffset(offset - LIMIT);
      setPageNumber(pageNumber - 1);
      handleSearchClick();
    }
  };

  const handleClearClick = () => {
    setSearch('');
    setImages([]);
  };

  const handleImgClick = (index: number) => {
    console.log('imgclick');
    setDisplayModal(true);
  };

  const handleModalClose = () => {
    setDisplayModal(false);
  };

  return (
    <main className={styles.main}>
      <Search clearClick={handleClearClick} searchClick={handleSearchClick} onInputChange={(e) => setSearch(e.target.value)} search={search} />
      {images.length ? (
        <GiphyGallery giphys={images} pageNumber={pageNumber} nextButtonClick={handlePaginationClick(true)} previousButtonClick={handlePaginationClick(false)} imgClick={handleImgClick} />
      ) : (
        <></>
      )}
      {displayModal ? <GiphyModal giphys={images} selectedIndex={selectedImageIndex} closeClick={handleModalClose} /> : <></>}
    </main>
  );
}
