'use client';
//next image
import Image from "next/image";
// parallax
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from 'react-parallax-mouse'

const Banner = () => {
  return (
    <section className="bg-primary bg-pattern lg:min-h">
      <div className="container mx-auto min-h-[768px] flex items-center justify-center">
        <MouseParallaxContainer globalFactorX={0.4} globalFactorY={0.3} resetOnLeave
          className="w-full flex flex-col lg:flex-row items-center">
          {/* Text */}
          <MouseParallaxChild factorX={0.1} factorY={0.3}>
          <div className="lg:text text-white">Suporte®</div>
            <div className=" flex flex-col lg:flex-row items-center lg:text-left flex-1 px-6 text-white">
              
              <h1 className=" text-6xl lg:text font-bangers ">VEJA COMO UTILIZAR O SISTEMA</h1>
            </div>
          </MouseParallaxChild>
          {/* Image */}
          <MouseParallaxChild factorX={0.2} factorY={0.3} className='relative'>
            <div>
              {/* Image */}
              <div>
                <Image
                  src={'/fofinhos-banner.png'}
                  width={550}
                  height={558}
                  alt=''
                  priority={1}
                />
              </div>
            </div>
          </MouseParallaxChild>
        </MouseParallaxContainer>
      </div>
    </section>
  );
};

export default Banner;
