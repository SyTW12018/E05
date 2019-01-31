import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MisAsignaturasComponent } from './mis-asignaturas.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MisAsignaturasComponent', () => {
  let component: MisAsignaturasComponent;
  let fixture: ComponentFixture<MisAsignaturasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisAsignaturasComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisAsignaturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
