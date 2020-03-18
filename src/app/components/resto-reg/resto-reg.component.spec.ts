import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestoRegComponent } from './resto-reg.component';

describe('RestoRegComponent', () => {
  let component: RestoRegComponent;
  let fixture: ComponentFixture<RestoRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestoRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestoRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
