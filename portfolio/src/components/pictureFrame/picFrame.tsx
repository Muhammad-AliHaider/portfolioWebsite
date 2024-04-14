import Image from 'next/image';
import React from 'react';
import Typewriter from './typewriter';
import cn from 'classnames';
import github from './assets/icons8-github.svg';
import linkedIn from './assets/icons8-linkedin.svg';
import pic from './assets/ali.png';
import styles from './style.module.sass';

export default function PicFrame() {
    return (
        <div className= {cn(styles.Container)}>
            <Image src={pic} alt="PicFrame" className={cn(styles.picture)}/>
            <div className={cn(styles.TextContainer)}> 
                <div className = {cn(styles.typewriterDiv)}>
                    <span>I'm</span>
                    <Typewriter/>
                </div>
                <div className={cn(styles.convertToColumn)}>
                    <span>Follow me on: </span>
                    <div className = {cn(styles.socialMediaContainer)}>
                        
                        <a href="https://www.linkedin.com/in/alihaider12/">
                            <Image src={linkedIn} alt="LinkedIn" width={30} height={30}/>
                        </a>
                        <a href="https://github.com/Muhammad-AliHaider">
                            <Image src={github} alt="GitHub" width={30} height={30}/>
                        </a>
                    </div>
                </div>
            </div>
            

        </div>
    );
}