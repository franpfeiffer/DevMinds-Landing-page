"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper';
import React, { useState } from 'react';
import 'swiper/css';
import { BackgroundRadialRight } from '../BackgroundRadialRight';
import { dataTech } from './Tech';
import Image from 'next/image';
import { CtaDark } from '../CtaDark';

export function Tech() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleSlideChange = (swiper: SwiperClass) => {
        setCurrentSlide(swiper.realIndex);
    };

    return (
        <div className="relative my-20 md:my-60" id="services">
            <BackgroundRadialRight />
            <div className="relative w-full overflow-hidden">
                <CtaDark />
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 5,
                            spaceBetween: 50
                        }
                    }}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: true
                    }}
                    grabCursor={false}
                    loop={true}
                    speed={8000}
                    onSlideChange={handleSlideChange}
                    initialSlide={currentSlide}
                >
                    {dataTech.map(({ id, image }) => (
                        <SwiperSlide key={id} className="flex items-center slider-horizontal">
                            <Image src={`/assets/${image}`} alt="tech" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
}