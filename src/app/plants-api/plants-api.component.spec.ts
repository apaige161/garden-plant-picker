import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsApiComponent } from './plants-api.component';

describe('PlantsApiComponent', () => {
  let component: PlantsApiComponent;
  let fixture: ComponentFixture<PlantsApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
