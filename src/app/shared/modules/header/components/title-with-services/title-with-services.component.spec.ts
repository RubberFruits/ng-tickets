import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleWithServicesComponent } from './title-with-services.component';

describe('TitleWithServicesComponent', () => {
  let component: TitleWithServicesComponent;
  let fixture: ComponentFixture<TitleWithServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleWithServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleWithServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
