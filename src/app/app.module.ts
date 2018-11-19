import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';
import { ButtonComponent } from './button/button.component';
import { map } from 'rxjs/operators';
import { User } from './user';
import { NavComponent } from './nav/nav.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FormInicioSesionComponent } from './form-inicio-sesion/form-inicio-sesion.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ButtonComponent,
    NavComponent,
    PresentacionComponent,
    FormInicioSesionComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
