import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { InstitucionalComponent } from './pages/institucional/institucional.component';
import { RSocialComponent } from './pages/r-social/r-social.component';
import { CanalesComponent } from './pages/canales/canales.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { HistoriaComponent } from './pages/historia/historia.component';
import { TerminosComponent } from './pages/terminos/terminos.component';



const appRoutes: Routes = [

    {path: '', component: LandingComponent },
    { path: 'landing', component: LandingComponent },
    { path: 'productos', component: ProductosComponent},
    { path: 'historia', component:  HistoriaComponent},
    { path: 'institucional', component: InstitucionalComponent },
    { path: 'social', component: RSocialComponent },
    { path: 'canales', component: CanalesComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'pedido', component: PedidoComponent  },
    { path: 'terminos', component: TerminosComponent },
    { path: '**', component: NopagefoundComponent },
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
