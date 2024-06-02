import { db } from '@/db/firebaseConfig'
import { collection, doc } from 'firebase/firestore'

export const usersCollection = collection(db, 'users')
export const shopCarsCollection = collection(db, 'shopCars')
export const shopContractsCollection = collection(db, 'shopContracts')

export const carsTargetedDocument = (documentId: string) => {
  return doc(db, 'cars', documentId)
}

export const userTargetedDocument = (documentId: string) => {
  return doc(db, 'users', documentId)
}

export const updateUserDataCollection = collection(
  db,
  'updateUserSensitiveData',
)
