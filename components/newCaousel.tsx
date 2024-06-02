'use client'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { carType } from '@/db/firebase/types';
import Image from 'next/image';

type NewCarouselProps = {
    carDetails: carType;
};

export function NewCarousel({ carDetails }: NewCarouselProps) {
    const pictures = [
        carDetails.picture_one,
        carDetails.picture_two,
        carDetails.picture_three,
        carDetails.picture_four,
        carDetails.picture_five,
    ];

    return (
        <Carousel showThumbs={false} showIndicators={true} showArrows={true} width={500} dynamicHeight={false}>
            {pictures.map((picture: string, index: number) => (
                <div key={index} style={{ position: "relative", width: `${500}px`, height: `${300}px`, overflow: "hidden" }}>
                    <Image
                        src={picture}
                        alt={`Picture ${index + 1}`}
                        fill
                    />
                </div>
            ))}
        </Carousel>
    );
}
