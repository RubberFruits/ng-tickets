import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnBlockComponent } from './return-block.component';

describe('ReturnBlockComponent', () => {
  let component: ReturnBlockComponent;
  let fixture: ComponentFixture<ReturnBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReturnBlockComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(ReturnBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
