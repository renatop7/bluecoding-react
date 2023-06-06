import React from 'react';
import Image from 'next/image';
import styles from './giphy.module.css';

type Props = {
  width: number;
  height: number;
  url: string;
  onClick: () => void;
};

const Giphy = (props: Props) => {
  return <Image className={styles.giphyImg} alt='' src={props.url} width={props.width} height={props.height} onClick={props.onClick}></Image>;
};

export default Giphy;
