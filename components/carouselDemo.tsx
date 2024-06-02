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
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        <CarouselItem className="overflow-hidden">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                className="rounded-lg"
                src={carDetails.picture_one}
                alt="hello"
                fill={true}
                objectFit="cover"
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="overflow-hidden">
          <Card>
            <CardContent className="flex aspect-square items-center justify-center p-6">
              <Image
                className="rounded-lg"
                src={carDetails.picture_two}
                alt="hello"
                fill={true}
                objectFit="cover"
              />
            </CardContent>
          </Card>
        </CarouselItem>
        <CarouselItem className="overflow-hidden">
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
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
