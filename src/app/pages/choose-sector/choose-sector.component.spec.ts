import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseSectorComponent } from './choose-sector.component';

describe('ChooseSectorComponent', () => {
  let component: ChooseSectorComponent;
  let fixture: ComponentFixture<ChooseSectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChooseSectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseSectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
