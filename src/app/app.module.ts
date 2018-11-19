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
<<<<<<< HEAD
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
=======
import { PaginainicioComponent } from './paginainicio/paginainicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import {Routes, RouterModule} from '@angular/router'

const appRoutes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: PaginainicioComponent},
  {path: 'perfil', component: PerfilComponent}
];
>>>>>>> e7da52fae67a5fd4d0da6763c8374c531bec09f9

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ButtonComponent,
    NavComponent,
    PresentacionComponent,
    FormInicioSesionComponent,
    FooterComponent,
    PaginainicioComponent,
    PerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
<<<<<<< HEAD
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule
=======
    RouterModule.forRoot(appRoutes)
>>>>>>> e7da52fae67a5fd4d0da6763c8374c531bec09f9
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
