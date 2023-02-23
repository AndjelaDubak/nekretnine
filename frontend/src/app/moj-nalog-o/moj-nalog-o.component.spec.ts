import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MojNalogOComponent } from './moj-nalog-o.component';

describe('MojNalogOComponent', () => {
  let component: MojNalogOComponent;
  let fixture: ComponentFixture<MojNalogOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MojNalogOComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MojNalogOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
