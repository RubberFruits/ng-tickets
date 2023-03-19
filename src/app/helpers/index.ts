export function isSectorAvailableOnRender(id: number | string): boolean {
  return !(id === null || id === 0 || typeof id === 'string')
}
