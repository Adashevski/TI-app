import React from 'react';
import Hexagon from './Hexagon';
import styles from './Map.module.css';

const images = [
    '/40.png',
    '/21.png',
    '/blank-homeSystem1.png',
    '/24.png',
    '/19.png',
    '/47.png',
    '/35.png',
    '/23.png',
    '/41.png',
    '/blank-homeSystem2.png',
    '/30.png',
    '/45.png',
    '/48.png',
    '/26.png',
    '/50.png',
    '/46.png',
    '/27.png',
    '/28.png',
    '/18.png',
    '/44.png',
    '/32.png',
    '/31.png',
    '/29.png',
    '/39.png',
    '/42.png',
    '/38.png',
    '/34.png',
    '/blank-homeSystem3.png',
    '/43.png',
    '/36.png',
    '/33.png',
    '/49.png',
    '/20.png',
    '/22.png',
    '/blank-homeSystem4.png',
    '/37.png',
    '/25.png',    
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