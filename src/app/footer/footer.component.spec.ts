import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { FooterComponent } from './footer.component';
import { BrowserModule, By } from '@angular/platform-browser';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterComponent ],
      imports: [ ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(FooterComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('footer'));
      el = de.nativeElement;
    });  }));

 
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('footer should create',async(() => {
    expect(de).toBeTruthy();
  }));
});
