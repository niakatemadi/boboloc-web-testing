import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { carType } from '@/db/firebase/types'
import Image from 'next/image'

type carouselDemoProps = {
  carDetails: carType
}

export function CarouselDemo({ carDetails }: carouselDemoProps) {
  // const carPictures = []

  // I want you push each picture in carPictures variable and display them in carousel with map
  // pictures are  carDetails.picture_one, carDetails.picture_two, carDetails.picture_three, carDetails.picture_four, carDetails.picture_five,
  // carDetails always contains images url you can check with console.log(carDetails)
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {[
          carDetails.picture_one,
          carDetails.picture_two,
          carDetails.picture_three,
          carDetails.picture_four,
          carDetails.picture_five,
        ].map((picture: string, index: any) => {
          return (
            <CarouselItem key={index} className="overflow-hidden">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    className="rounded-lg"
                    src={carDetails.picture_three}
                    alt="hello"
                    fill={true}
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
