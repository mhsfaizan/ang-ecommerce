import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormalShirtComponent } from './formal-shirt.component';

describe('FormalShirtComponent', () => {
  let component: FormalShirtComponent;
  let fixture: ComponentFixture<FormalShirtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormalShirtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormalShirtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
