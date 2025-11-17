import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app.routing';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { ServiceCubo } from './service/service.cubos';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    ServiceCubo,
    provideBrowserGlobalErrorListeners(),
    
  ],
  bootstrap: [App]
})
export class AppModule { }
