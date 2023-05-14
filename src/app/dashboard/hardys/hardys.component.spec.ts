import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardysComponent } from './hardys.component';

describe('HardysComponent', () => {
  let component: HardysComponent;
  let fixture: ComponentFixture<HardysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardysComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HardysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
