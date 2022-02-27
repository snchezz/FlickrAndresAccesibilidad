import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistrarComponent } from './components/registrar/registrar.component';

import { AgregarComponent } from './imagenes/agregar/agregar.component';
import { DetallesComponent } from './imagenes/detalles/detalles.component';
import { GenerarpdfComponent } from './imagenes/generarpdf/generarpdf.component';
import { ListaComponent } from './imagenes/lista/lista.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signin', component: RegistrarComponent },
  { path: 'crud', component: ListaComponent },
  
  { path: 'agregar', component: AgregarComponent },
  { path: 'generar-pdf', component: GenerarpdfComponent },
  { path: 'detalles', component: DetallesComponent },
  { path: 'lista', component: ListaComponent },
  { path: 'detalles/:id', component: DetallesComponent },



  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
