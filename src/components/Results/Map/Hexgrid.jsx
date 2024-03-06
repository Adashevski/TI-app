import React from 'react';
import Hexagon from './Hexagon';
import styles from './Map.module.css';

const images = [
    '/tiles/40.png',
    '/tiles/21.png',
    '/tiles/blank-homeSystem1.png',
    '/tiles/24.png',
    '/tiles/19.png',
    '/tiles/47.png',
    '/tiles/35.png',
    '/tiles/23.png',
    '/tiles/41.png',
    '/tiles/blank-homeSystem2.png',
    '/tiles/30.png',
    '/tiles/45.png',
    '/tiles/48.png',
    '/tiles/26.png',
    '/tiles/50.png',
    '/tiles/46.png',
    '/tiles/27.png',
    '/tiles/28.png',
    '/tiles/18.png',
    '/tiles/44.png',
    '/tiles/32.png',
    '/tiles/31.png',
    '/tiles/29.png',
    '/tiles/39.png',
    '/tiles/42.png',
    '/tiles/38.png',
    '/tiles/34.png',
    '/tiles/blank-homeSystem3.png',
    '/tiles/43.png',
    '/tiles/36.png',
    '/tiles/33.png',
    '/tiles/49.png',
    '/tiles/20.png',
    '/tiles/22.png',
    '/tiles/blank-homeSystem4.png',
    '/tiles/37.png',
    '/tiles/25.png',    
    
    
];
const rows = [4, 5, 6, 7, 6, 5, 4];

export const Hexgrid = () => {
  let imageIndex = 0;

  return (
    <div className={styles.hexGrid}>
      {rows.map((numHexagons, rowIndex) => (
        <div className={styles.row} key={rowIndex}>
          {Array.from({ length: numHexagons }).map((_, hexagonIndex) => {
            const hexagon = (
              <Hexagon
                key={hexagonIndex}
                imageUrl={images[imageIndex++]}
                index={imageIndex}
              />
            );
            return hexagon;
          })}
        </div>
      ))}
    </div>
  );
};