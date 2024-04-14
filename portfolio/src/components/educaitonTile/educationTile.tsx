import Image from 'next/image';
import React from 'react';
import styles from './style.module.sass';

// Adjust the import path as necessary

interface EducationTileProps {
    imageUrl: string;
    schoolName: string;
    graduationYear: string;
    cgpa: string;
}

const EducationTile: React.FC<EducationTileProps> = ({ imageUrl, schoolName, graduationYear, cgpa }) => {
    return (
        <div className={styles.container}>
            <div>
            <Image src={imageUrl} alt="School Logo" className={styles.image} width={100} height={100}/>
            </div>
            <div className={styles.details}>
                <h3>{schoolName}</h3>
                <p>Graduation: {graduationYear}</p>
                <p>CGPA: {cgpa}</p>
            </div>
        </div>
    );
};

export default EducationTile;
