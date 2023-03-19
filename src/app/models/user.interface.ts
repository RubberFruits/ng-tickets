export interface UserInterface {
  phone_or_email: string
  lastName: string
  firstName: string
  seatInReserve: ReserveSeatFromServerInterface[] | null
}

interface ReserveSeatFromServerInterface {
  seat: string
  sector: string
  price: string
  zoneId: string
  categoryId: string
  matchId: string
  discount: boolean
}
