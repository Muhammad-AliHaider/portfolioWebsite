import Image from "next/image";
import cn from "classnames";
import style from "./style.module.sass";

export interface CarouselProps {
  imagesarray: string[];
}

const Carousel : React.FC<CarouselProps> = ({ imagesarray }) => {
  return (
      <div className={cn(style.spacer1)}>
        
          <div className={cn(style.slider)}>
            <div className={cn(style.slideTrack)}>
              {imagesarray.map((partner) => (
                <div className={cn(style.slide)}>
                  <Image src={partner} alt={""} width={85} height={72}/>
                </div>
              ))}
              {imagesarray.map((partner) => (
                <div className={cn(style.slide)}>
                  <Image src={partner} alt={""} width={85} height={72} />
                </div>
              ))}
            </div>
          </div>
      </div>
  );
};

export default Carousel;
