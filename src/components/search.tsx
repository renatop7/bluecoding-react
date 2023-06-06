import React, { useState } from 'react';
import styles from './search.module.css';

type Props = {
  search: string;
  searchClick: () => void;
  clearClick: () => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = (props: Props) => {
  return (
    <div className={styles.searchBoxContainer}>
      <input type='text' placeholder='Search giphys...' className={styles.searchBoxInput} value={props.search} onChange={props.onInputChange} />
      <button className={styles.searchBoxButton} onClick={props.searchClick}>
        Search
      </button>
      <button className={styles.searchBoxButton} onClick={props.clearClick}>
        Clear
      </button>
    </div>
  );
};

export default Search;
