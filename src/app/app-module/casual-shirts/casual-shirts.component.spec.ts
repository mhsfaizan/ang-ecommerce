import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CasualShirtsComponent } from './casual-shirts.component';

describe('CasualShirtsComponent', () => {
  let component: CasualShirtsComponent;
  let fixture: ComponentFixture<CasualShirtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CasualShirtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CasualShirtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
