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
        <div className="relative py-20 md:py-64" id="services">
            <BackgroundRadialRight />
            <div className="relative w-full overflow-hidden">
                <Swiper
                    breakpoints={{
                        320: {
                            slidesPerView: 8,
                            spaceBetween: 15
                        }
                    }}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    grabCursor={true}
                    loop={true}
                    speed={2000}
                    onSlideChange={handleSlideChange}
                    initialSlide={currentSlide}
                >
                    {dataTech.map(({ id, image }) => (
                        <SwiperSlide key={id} className="flex items-center slider-horizontal">
                            <Image src={`/assets/${image}`} alt="Payment" width="70" height="70" className="h-[60px] w-[120px] object-contain" />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <CtaDark />
        </div>
    );
}