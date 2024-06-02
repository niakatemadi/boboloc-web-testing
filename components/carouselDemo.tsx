"use client";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Slider from "react-slick";
import { carType } from "@/db/firebase/types";
import Image from "next/image";
import { useEffect, useState } from "react";

type carouselDemoProps = {
  carDetails: carType;
};

export function CarouselDemo({ carDetails }: carouselDemoProps) {
  const [carPictures, setCarPictures] = useState<any>([]);
  // I want you push each picture in carPictures variable and display them in carousel with map
  // pictures are  carDetails.picture_one, carDetails.picture_two, carDetails.picture_three, carDetails.picture_four, carDetails.picture_five,
  // carDetails always contains images url you can check with console.log(carDetails)
  useEffect(() => {
    if (carDetails) {
      const urls = [];
      const pictureKeys = Object.keys(carDetails) as (keyof carType)[];
      for (const key of pictureKeys) {
        if (key.includes("picture")) {
          urls.push(carDetails[key]);
        }
      }
      setCarPictures(urls);
    }
  }, [carDetails]);

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    arrows: false,
    cssEase: "linear",
  };

  return (
    <div className="slider-container w-full max-w-xs">
      <PhotoProvider>
        <Slider {...settings}>
          {carPictures?.map((picture: string, index: any) => {
            return (
              <PhotoView key={index} src={picture}>
                <div className="aspect-square">
                  <Image
                    className="rounded-lg"
                    src={picture}
                    alt="hello"
                    priority
                    fill
                    objectFit="cover"
                  />
                </div>
              </PhotoView>
            );
          })}
        </Slider>
      </PhotoProvider>
      {/* <Carousel className="w-full max-w-xs">
        <CarouselContent>
          {carPictures?.map((picture: string, index: any) => {
            return (
              <CarouselItem key={index} className="overflow-hidden">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center">
                    <Image
                      className="rounded-lg"
                      src={picture}
                      alt="hello"
                      priority
                      width={500}
                      height={500}
                      objectFit="cover"
                    />
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}
    </div>
  );
}
