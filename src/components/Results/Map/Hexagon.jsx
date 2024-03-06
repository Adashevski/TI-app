import React from 'react';
import styles from './Map.module.css';

const Hexagon = ({ imageUrl, index }) => (
  <div className={styles.hexagon}>
    <img src={imageUrl} alt={`Image ${index + 1} `} className={styles.hexagon_img}  />
  </div>
);

export default Hexagon;