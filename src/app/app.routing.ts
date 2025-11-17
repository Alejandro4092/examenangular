import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { MarcaComponent } from './components/marca.component/marca.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { PedidoComponent } from './components/pedido.component/pedido.component';
import { ComprasComponent } from './components/compras.component/compras.component';
const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'marca/:marca',component: MarcaComponent},
  {path:'login',component: LoginComponent},
  { path:'perfil', component: PerfilComponent },
  { path:'compras', component: ComprasComponent },
  { path:'pedido', component: PedidoComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
