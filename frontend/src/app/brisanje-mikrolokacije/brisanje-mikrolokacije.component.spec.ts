import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrisanjeMikrolokacijeComponent } from './brisanje-mikrolokacije.component';

describe('BrisanjeMikrolokacijeComponent', () => {
  let component: BrisanjeMikrolokacijeComponent;
  let fixture: ComponentFixture<BrisanjeMikrolokacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrisanjeMikrolokacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrisanjeMikrolokacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
