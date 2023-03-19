import { TestBed } from '@angular/core/testing'

import { ChooseSectorService } from './choose-sector.service'

describe('ChooseSectorsService', () => {
  let service: ChooseSectorService

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(ChooseSectorService)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
