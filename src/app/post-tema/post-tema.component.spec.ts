import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostTemaComponent } from './post-tema.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('PostTemaComponent', () => {
  let component: PostTemaComponent;
  let fixture: ComponentFixture<PostTemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostTemaComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostTemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
