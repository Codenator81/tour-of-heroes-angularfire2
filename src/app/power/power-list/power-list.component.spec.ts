/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PowerListComponent } from './power-list.component';

describe('PowerListComponent', () => {
  let component: PowerListComponent;
  let fixture: ComponentFixture<PowerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PowerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PowerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
