import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginainicioComponent } from './paginainicio.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PaginainicioComponent', () => {
  let component: PaginainicioComponent;
  let fixture: ComponentFixture<PaginainicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginainicioComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginainicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
