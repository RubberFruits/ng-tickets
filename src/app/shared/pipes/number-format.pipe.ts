import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
    name: 'numberFormat',
    standalone: true,
})
export class NumberFormatPipe implements PipeTransform {
  transform(
    value: number,
    decimals: number = 0,
    decPoint: string = '',
    thousandsSep: string = ' '
  ): string {
    let i = parseInt((+value || 0).toFixed(decimals), undefined) + ''
    let j = i.length
    if (j > 3) {
      j = j % 3
    } else {
      j = 0
    }

    let km = j ? i.substr(0, j) + thousandsSep : ''
    let kw = i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + thousandsSep)
    // @ts-ignore
    let kd = decimals
      ? decPoint +
        Math.abs(value - +i)
          .toFixed(decimals)
          .replace(/-/, '0')
          .slice(2)
      : ''

    return km + kw + kd
  }
}
