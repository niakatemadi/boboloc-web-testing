export type User = {
  userId: string
  address: string
  city: string
  company_name: string
  country: string
  mail: string
  firstName: string
  name: string
  postal_code: string
  siret_number: string
  snapchat: string
  website_name: string
  banner_url: string
  tiktok_app_url: string
  instagram_app_url: string
  whatsapp_app_url: string
  snapchat_app_url: string
  logo_url: string
  agency_description: string
}

export type CarRentType = {
  id_car: string
  car_brand: string
  car_model: string
  id_owner: string
  rent_deposit: number
  car_registration_number: string
  car_kilometer: string
  postal_code: string
  city: string
  car_scratch_price: number
  car_impact_price: number
  car_picture: string
  scratched_rims_price: number
  car_washing_price: number
  damaged_seat_price: number
  car_impoundment_price: number
  car_crash_price: number
  exceed_kilometer_price: number
}

export type CarMoreInfoType = {
  rent_day_price: number
  rent_five_days_price: number
  rent_seven_days_price: number
  rent_month_price: number
  rent_short_weekend_price: number
  rent_extended_weekend_price: number
  car_horsepower: string
  car_type: string
  car_fuel: string
  car_engine: string
  car_year: string
  car_seat_number: string
  car_door_number: string
  rent_day_kilometer: string
  rent_five_days_kilometer: string
  rent_seven_days_kilometer: string
  rent_short_weekend_kilometer: string
  rent_extended_weekend_kilometer: string
  rent_month_kilometer: string
}

export type carType = {
  picture_one: string
  picture_two: string
  picture_three: string
  picture_four: string
  picture_five: string
  picture_six: string
  picture_seven: string
}

export type contractType = {}
