import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsFromServerComponent } from './plants-from-server.component';

describe('PlantsFromServerComponent', () => {
  let component: PlantsFromServerComponent;
  let fixture: ComponentFixture<PlantsFromServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlantsFromServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsFromServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
