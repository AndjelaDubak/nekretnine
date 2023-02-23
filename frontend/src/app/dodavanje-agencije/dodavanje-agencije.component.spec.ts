import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DodavanjeAgencijeComponent } from './dodavanje-agencije.component';

describe('DodavanjeAgencijeComponent', () => {
  let component: DodavanjeAgencijeComponent;
  let fixture: ComponentFixture<DodavanjeAgencijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DodavanjeAgencijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DodavanjeAgencijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
