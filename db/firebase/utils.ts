import { getDocs, query, where } from 'firebase/firestore'
import { shopCarsCollection } from './collections'
import { carType } from './types'

export const getUserCar = async (): Promise<carType> => {
  const queryCars = query(
    shopCarsCollection,
    where('id_car', '==', '123456789'),
  )
  const carsDocs = await getDocs(queryCars)

  return carsDocs.docs[0].data() as carType
}
