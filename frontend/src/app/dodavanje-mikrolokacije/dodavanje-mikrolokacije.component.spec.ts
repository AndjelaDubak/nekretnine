import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeMikrolokacijeComponent } from './dodavanje-mikrolokacije.component';

describe('DodavanjeMikrolokacijeComponent', () => {
  let component: DodavanjeMikrolokacijeComponent;
  let fixture: ComponentFixture<DodavanjeMikrolokacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeMikrolokacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeMikrolokacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
