export interface SectorStaticDataInterface {
  id: number | string
  name: string
  color: string
  defaultColor: string
  coordinates: string
  textX: string
  textY: string
  textRotate: string
  textColor: string
  defaultTextColor: string
  isStatic?: number
  freePlaces?: string
  minPrice?: string
  maxPrice?: string
  isAvailable: boolean
  isSectorInPriceBounds: boolean
}
