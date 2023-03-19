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
  isStatic?: number | undefined
  freePlaces?: string | null
  minPrice?: string
  maxPrice?: string
}
