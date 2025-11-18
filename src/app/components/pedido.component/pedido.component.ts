import { Component,OnInit } from '@angular/core';
import { ServiceCubo } from '../../service/service.cubos';
import { Cubo } from '../../model/cubo';
import { Compra } from '../../model/compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedido.component',
  standalone: false,
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent implements OnInit {
public cubos!: Array<Cubo>;
public compra!: Compra;
  constructor(
    private _router: Router,
    private _service: ServiceCubo
  ) {}
 
   ngOnInit(): void {
    const token = localStorage.getItem('token');
    if (!token) {
      this._router.navigate(['/login']);
      return;
    }
   this.loadCubos();

  }
  loadCubos(){
    this._service.getCubo().subscribe(response => {
      this.cubos = response;
    })
}
//necesito el id del cubo seleccionado en el select para comprarlo
comprarCubo(){
    const token = localStorage.getItem('token');
    if (!token) {
      this._router.navigate(['/login']);
      return;
    }
   
  }


}