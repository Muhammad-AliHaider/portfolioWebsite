'use client';

import React, { useEffect, useRef } from 'react';

import lottie from 'lottie-web';

export interface LottieAnimationProps {
    width?: number ;
    height?: number;
    // jsonPath?: string;
    path?: string;
    
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({width = 400, height = 400, path = 'a'}) => {
  const animationContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log("Path to animation:", path);
    const anim = animationContainer.current ? lottie.loadAnimation({
      container: animationContainer.current, // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: path // the path to the animation JSON
    }) : null;

    return () => {
      if (anim) {
        anim.destroy(); // Cleanup animation on component unmount
      }
    };
  }, []);

  return <div ref={animationContainer} style={{ width: width, height: height }}></div>;
}

export default LottieAnimation;

