import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { ServiceCubo } from '../../service/service.cubos';
import { Compra } from '../../model/compra';

@Component({
  selector: 'app-pedido.component',
  standalone: false,
  templateUrl: './pedido.component.html',
  styleUrl: './pedido.component.css',
})
export class PedidoComponent implements OnInit {

  constructor(
    private _router: Router,
    private _service: ServiceCubo
  ) {}
 
   ngOnInit(): void {
   this.loadCubos();

  }
  loadCubos(){
    this._service.getCubo().subscribe(response => {
      this.cubos = response;
    })
}
