import { CarouselDemo } from '@/components/carouselDemo'
import { NewCarousel } from '@/components/newCaousel'
import { getUserCar } from '@/db/firebase/utils'

import FullCalendarComponent from '@/components/fullCalendarComponent'
import { BsCalendarWeekFill } from 'react-icons/bs'
import { FaCar } from 'react-icons/fa'
import { GiCarDoor, GiPowerLightning } from 'react-icons/gi'
import { MdAirlineSeatReclineExtra } from 'react-icons/md'
import { PiEngineFill } from 'react-icons/pi'
import { RiLuggageDepositFill } from 'react-icons/ri'
type carDetailsProps = {
  params: {
    carId: string
  }
}

export default async function page({ params: { carId } }: carDetailsProps) {
  const carDetails = await getUserCar()

  return (
    <main>
      <div className="h-[50vh] md:h-[65vh]">
        <div className="h-5/6 relative flex justify-center items-center">
          {/* <CarouselDemo carDetails={carDetails} /> */}
          <NewCarousel carDetails={carDetails} />
        </div>
        <div className="h-1/6 p-4 md:w-[50%] ">
          <p className="font-bold">Audi R8</p>
          <p>France, Paris</p>
          <div className="w-[100%] border-b-2 border-b-slate-700"></div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-[50vw] lg:h-64">
          <div className="h-20 lg:h-24 p-4 flex">
            <div className="ml-2">
              <p className="font-bold">FAST LOCATION</p>
              <p>Professionnel</p>
            </div>
          </div>
          <div className="lg:h-40 p-4">
            <div className="w-[100%] border-b-2 border-b-slate-700"></div>
            <p className="mb-3 font-bold">Description</p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita
              quasi ab possimus iusto dicta magnam nisi consectetur aut,
              voluptate, numquam natus exercitationem voluptatum molestias
              ducimus quo ullam qui officiis quos!
            </p>
          </div>
        </div>
        <div className="h-56 w-[50vw] hidden md:block lg:h-64"></div>
      </div>
      <div className="h-80 p-4 md:w-[50%]">
        <div className="w-[100%] border-b-2 border-b-slate-700"></div>
        <p className="mb-3 font-bold">Caractéristiques</p>
        <div className="md:grid md:grid-cols-3 md:gap-2 h-72">
          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <RiLuggageDepositFill
                  style={{
                    color: '#fff',
                  }}
                />
              </div>

              <p className="w-5/6 h-full ml-2 font-semibold"> Caution</p>
            </div>
            <div className="text-start md:mt-3">800$</div>
          </div>
          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <GiPowerLightning
                  style={{
                    color: '#fff',
                  }}
                />
              </div>

              <p className="w-5/6 h-full ml-2 font-semibold">Puissance</p>
            </div>
            <div className="text-start md:mt-3"> 400 CHV</div>
          </div>
          <div className="w-full h-6 flex justify-between mb-3  md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <FaCar
                  style={{
                    color: '#fff',
                  }}
                />
              </div>

              <p className="w-5/6 h-full ml-2 font-semibold">
                Type de véhicule
              </p>
            </div>
            <div className="text-start md:mt-3"> SUV </div>
          </div>
          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <PiEngineFill
                  style={{
                    color: '#fff',
                  }}
                />
              </div>
              <p className="w-5/6 h-full ml-2 font-semibold"> Moteur</p>
            </div>
            <div className="text-start md:mt-3">Diesel</div>
          </div>
          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <BsCalendarWeekFill
                  style={{
                    color: '#fff',
                  }}
                />
              </div>

              <p className="w-5/6 h-full ml-2 font-semibold">Année</p>
            </div>
            <div className="text-start md:mt-3">2023</div>
          </div>
          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <GiCarDoor
                  style={{
                    color: '#fff',
                  }}
                />
              </div>

              <p className="w-5/6 h-full ml-2 font-semibold">Porte</p>
            </div>
            <div className="text-start md:mt-3">4</div>
          </div>

          <div className="w-full h-6 flex justify-between mb-3 md:flex md:flex-col">
            <div className="w-4/6 flex md:h-6 md:w-full">
              <div
                className="w-1/6 h-full bg-white flex justify-center items-center"
                style={{
                  backgroundColor: ' #7265e3',
                }}
              >
                <MdAirlineSeatReclineExtra
                  style={{
                    color: '#fff',
                  }}
                />
              </div>
              <p className="w-5/6 h-full ml-2 font-semibold">Siège</p>
            </div>
            <div className="text-start md:mt-3">5</div>
          </div>
        </div>
      </div>

      <div className="p-4">
        <div className="w-[100%] border-b-2 border-b-slate-700">
          <FullCalendarComponent carId={carId} />
        </div>
      </div>
    </main>
  )
}
