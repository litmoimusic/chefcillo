import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { RSocialComponent } from './pages/r-social/r-social.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NopagefoundComponent,
    ProductosComponent,
    InstitucionalComponent,
    RSocialComponent,
    CanalesComponent,
    ContactoComponent,
    PedidoComponent,
    HistoriaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
