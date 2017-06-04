/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AadharListComponent } from './aadhar-list.component';

describe('AadharListComponent', () => {
  let component: AadharListComponent;
  let fixture: ComponentFixture<AadharListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AadharListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AadharListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
