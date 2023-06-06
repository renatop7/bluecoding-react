import React from 'react';
import styles from './giphy.module.css';
import Giphy from './giphy';

type Props = {
  giphys: any[];
  pageNumber: number;
  nextButtonClick: () => void;
  previousButtonClick: () => void;
  imgClick: (index: number) => void;
};

const GiphyGallery = (props: Props) => {
  const prevButtonDisabled = props.pageNumber === 1;

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.paginationButtonsContainer}>
        <button disabled={prevButtonDisabled} className={styles.paginationButton} onClick={props.previousButtonClick}>
          Previous
        </button>
        <button className={styles.paginationButton} onClick={props.nextButtonClick}>
          Next
        </button>
      </div>
      <p>Page: {props.pageNumber}</p>
      <div className={styles.imageGallery}>
        {props.giphys.length && props.giphys.map((image: any, index: number) => <Giphy key={`giphy-item-${index}`} {...image} onClick={() => props.imgClick(index)} />)}
      </div>
    </div>
  );
};

export default GiphyGallery;
