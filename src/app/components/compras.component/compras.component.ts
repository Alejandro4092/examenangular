import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { ServiceCubo } from '../../service/service.cubos';
import { Compra } from '../../model/compra';


@Component({
  selector: 'app-compras',
  standalone: false,
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css',
})
export class ComprasComponent implements OnInit {
public compras!: Array<Compra>;

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
    this._service.getCompras(token).subscribe(
      (response => {
        this.compras = response;
      })
      
    );

   
  }




 
}
