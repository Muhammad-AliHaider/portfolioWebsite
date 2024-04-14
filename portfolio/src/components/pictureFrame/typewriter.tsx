'use client';

import React, { useEffect, useState } from 'react';

import styles from './Typewriter.module.sass';

const Typewriter = () => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const texts = ["a Web Developer!", "a Flutter Developer!", "a Tech Enthusiast!", "a Problem Solver!", "Ali Haider!"];

    useEffect(() => {
        const currentText = texts[loopNum % texts.length];
        const updateText = () => {
            if (isDeleting) {
                setText(currentText.slice(0, text.length - 1));
            } else {
                setText(currentText.slice(0, text.length + 1));
            }
        };

        if (!isDeleting && text === currentText) {
            // Finish typing and start deleting after a pause
            setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === '') {
            // Finish deleting and cycle to next text after a pause
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setTypingSpeed(150); // Reset typing speed for new text
        } else {
            // Continue typing or deleting
            const delay = isDeleting ? 100 : typingSpeed;
            setTimeout(updateText, delay);
        }
    }, [text, isDeleting, loopNum, texts, typingSpeed]);

    return (
        <>
        
        <div className={styles.typewriter}>
            <span>{text}</span>
            <span className={styles.cursor}></span>
        </div>
        </>
    );
};

export default Typewriter;
