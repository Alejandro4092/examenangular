import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Login } from '../../model/login';
import { Router } from '@angular/router';
import { ServiceCubo } from '../../service/service.cubos';
import { Usuario } from '../../model/usuario';


@Component({
  selector: 'app-perfil',
  standalone: false,
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css',
})
export class PerfilComponent implements OnInit {
  public usuario!: Usuario;
public compras!: Array<any>;

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

   
    this._service.perfil(token).subscribe(
      (response: Usuario) => {
        this.usuario = response;
      }
      
    );
  }



  mostrarCompras(): void {
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
