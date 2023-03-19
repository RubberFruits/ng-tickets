import { Component, Input, OnInit } from '@angular/core'

import { SectorStaticDataInterface } from './models/sector-static-data.interface'
import { ChooseSectorService } from './services/choose-sector.service'

@Component({
  selector: 'app-choose-sector',
  templateUrl: './choose-sector.component.html',
  styleUrls: ['./choose-sector.component.scss'],
})
export class ChooseSectorComponent implements OnInit {
  @Input('arenaIdProps') arenaId!: string

  sectors: SectorStaticDataInterface[] =
    this.chooseSectorService.getSectorsStaticData()

  constructor(private chooseSectorService: ChooseSectorService) {}

  ngOnInit(): void {}

  getInitialSectorColor(sector: SectorStaticDataInterface): string {
    return this.chooseSectorService.getInitialSectorColor(sector)
  }

  getInitialSectorStrokeParams(sectorId: number | string) {
    return this.chooseSectorService.getInitialSectorStrokeParams(sectorId)
  }

  sectorHover(sectorId: number | string) {
    this.chooseSectorService.handleSectorHover(sectorId)
  }

  sectorBlur() {
    this.chooseSectorService.handleSectorBlur()
  }
}
