import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectorFilterPopupComponent } from './sector-filter-popup.component';

describe('SectorFilterPopupComponent', () => {
  let component: SectorFilterPopupComponent;
  let fixture: ComponentFixture<SectorFilterPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [SectorFilterPopupComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(SectorFilterPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
