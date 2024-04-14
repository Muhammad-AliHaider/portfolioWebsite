"use client";

import Image from 'next/image';
import React from 'react';
import image from '../pictureFrame/assets/icons8-github.svg'
import styles from './style.module.sass';

// Adjust the import path if necessary

interface TileProps {
    imageUrl: string;
    title: string;
    subtitle: string;
    onClick: () => void;
    width?: number;
    height?: number;
}

const Tile: React.FC<TileProps> = ({ imageUrl, title, subtitle, onClick , width = 50  , height = 50}) => {
    return (
        <div onClick={onClick} className={styles.tileContainer}>
            <Image src={imageUrl} alt={title} className={styles.tileImage} width={width} height={height} />
            <div className={styles.tileTextContainer}>
                <h2 className={styles.tileTitle}>{title}</h2>
                <p className={styles.tileSubtitle}>{subtitle}</p>
            </div>
        </div>
    );
};

export default Tile;
