import LottieAnimation, { LottieAnimationProps } from '../lottieAnmationPlayer/lottieAnimation';

import Image from 'next/image';
import React from 'react';
import styles from './style.module.sass'; // Adjust the import path as necessary

interface ArticleModalProps {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    title: string;
    description: string;
    jsonUrl: string;
    points: string[];
    demoChild?: React.ReactNode;
}

const ArticleModal: React.FC<ArticleModalProps> = ({ isOpen, onClose, imageUrl, title, description, jsonUrl, points, demoChild }) => {
    if (!isOpen) return null;

    const configLottie: LottieAnimationProps = {
        path: jsonUrl,
        height: 400,
        width: 900
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.modalCloseButton} onClick={onClose}>×</button>
                <div className={styles.lottieContainer}>
                    <LottieAnimation {...configLottie} />
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.gradientDivider} />
                    <Image src={imageUrl} alt={title} className={styles.modalImage} width={100} height={100} />
                    <h2 className={styles.modalTitle}>{title}</h2>
                    <p className={styles.modalDescription}>{description}</p>

                    <div className={styles.gradientDivider} />

                    <ul className={styles.modalPoints}>
                        {points.map((point, index) => (
                            <li key={index} >{point}</li>
                        ))}
                    </ul>


                    {
                        demoChild != null ? 
                        <div className={styles.modalDemo}>
                            {demoChild}
                        </div>:
                        <></>
                    }

                </div>
            </div>
        </div>
    );
};

export default ArticleModal;
