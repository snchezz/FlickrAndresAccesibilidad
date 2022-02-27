import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

import { ApiDataService } from 'src/app/services/api-data.service';
import { FormsModule } from '@angular/forms';
import{HttpClient, HttpClientModule} from '@angular/common/http';
import { NavComponent } from './components/nav/nav.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AgregarComponent } from './imagenes/agregar/agregar.component';
import { DetallesComponent } from './imagenes/detalles/detalles.component';
import { ListaComponent } from './imagenes/lista/lista.component';
import { NavloguedComponent } from './components/navlogued/navlogued.component';
import { GenerarpdfComponent } from './imagenes/generarpdf/generarpdf.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    NotfoundComponent,
    RegistrarComponent,
    AgregarComponent,
    DetallesComponent,
    ListaComponent,
    NavloguedComponent,
    GenerarpdfComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
