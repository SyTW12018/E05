import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPerfilComponent } from './nav-perfil.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NavPerfilComponent', () => {
  let component: NavPerfilComponent;
  let fixture: ComponentFixture<NavPerfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPerfilComponent ],
      imports: [ RouterTestingModule ]

    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
