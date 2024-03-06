import React from 'react';
import Hexagon from './Hexagon';
import styles from './Map.module.css';

const images = [
    '/TI-app/tiles/40.png',
    '/TI-app/tiles/21.png',
    '/TI-app/tiles/blank-homeSystem1.png',
    '/TI-app/tiles/24.png',
    '/TI-app/tiles/19.png',
    '/TI-app/tiles/47.png',
    '/TI-app/tiles/35.png',
    '/TI-app/tiles/23.png',
    '/TI-app/tiles/41.png',
    '/TI-app/tiles/blank-homeSystem2.png',
    '/TI-app/tiles/30.png',
    '/TI-app/tiles/45.png',
    '/TI-app/tiles/48.png',
    '/TI-app/tiles/26.png',
    '/TI-app/tiles/50.png',
    '/TI-app/tiles/46.png',
    '/TI-app/tiles/27.png',
    '/TI-app/tiles/28.png',
    '/TI-app/tiles/18.png',
    '/TI-app/tiles/44.png',
    '/TI-app/tiles/32.png',
    '/TI-app/tiles/31.png',
    '/TI-app/tiles/29.png',
    '/TI-app/tiles/39.png',
    '/TI-app/tiles/42.png',
    '/TI-app/tiles/38.png',
    '/TI-app/tiles/34.png',
    '/TI-app/tiles/blank-homeSystem3.png',
    '/TI-app/tiles/43.png',
    '/TI-app/tiles/36.png',
    '/TI-app/tiles/33.png',
    '/TI-app/tiles/49.png',
    '/TI-app/tiles/20.png',
    '/TI-app/tiles/22.png',
    '/TI-app/tiles/blank-homeSystem4.png',
    '/TI-app/tiles/37.png',
    '/TI-app/tiles/25.png',    
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