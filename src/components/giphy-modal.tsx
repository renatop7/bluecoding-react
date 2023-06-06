import React, { useState } from 'react';
import styles from './giphy.module.css';
import Image from 'next/image';

type Props = {
  giphys: any[];
  selectedIndex: number;
  closeClick: () => void;
};

const GiphyModal = (props: Props) => {
  const [selectedImage, setSelectedImage] = useState(props.giphys[props.selectedIndex]);

  return (
    <div className={styles.modalContainer}>
      <button className={styles.modalCloseButton} onClick={props.closeClick}>Close</button>
      <div className={styles.modalDisplayImgContainer}>
        <Image className={styles.modalDisplayImg} alt='' src={selectedImage.url} width={selectedImage.width} height={selectedImage.height} />
      </div>
      <div className={styles.thumbnailGallery}>
        {props.giphys.map((image: any, index: number) => (
          <Image key={`thumbnail-img-${index}`} alt='' src={image.url} onClick={(e) => setSelectedImage(props.giphys[index])} width={image.width} height={image.height} />
        ))}
      </div>
    </div>
  );
};

export default GiphyModal;
