import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpserviceService } from './httpservice.service';
import { NavComponent } from './nav/nav.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { FormInicioSesionComponent } from './form-inicio-sesion/form-inicio-sesion.component';
import { FooterComponent } from './footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { PaginainicioComponent } from './paginainicio/paginainicio.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router'

const appRoutes: Routes = [
  {path: '', redirectTo:'/inicio', pathMatch: 'full'},
  {path: 'inicio', component: PaginainicioComponent},
  {path: 'perfil', component: PerfilComponent}
];

import { NavPerfilComponent } from './nav-perfil/nav-perfil.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavComponent,
    PresentacionComponent,
    FormInicioSesionComponent,
    FooterComponent,
    PaginainicioComponent,
    PerfilComponent,
    NavPerfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    MzButtonModule,
    MzInputModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpserviceService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
