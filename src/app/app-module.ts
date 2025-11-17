import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app.routing';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { ServiceCubo } from './service/service.cubos';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MarcaComponent } from './components/marca.component/marca.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { ComprasComponent } from './components/compras.component/compras.component';
import { PedidoComponent } from './components/pedido.component/pedido.component';


@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    MarcaComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
    PedidoComponent
 
  

  ],
  imports: [
  
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceCubo,
    provideHttpClient(),
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
