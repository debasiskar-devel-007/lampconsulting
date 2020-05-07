import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LamplandingComponent } from './lamplanding.component';

describe('LamplandingComponent', () => {
  let component: LamplandingComponent;
  let fixture: ComponentFixture<LamplandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LamplandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LamplandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
