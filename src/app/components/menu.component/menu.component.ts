import { Component, OnInit } from '@angular/core';
import { ServiceCubo } from '../../service/service.cubos';
import { Cubo } from '../../model/cubo';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit {
  public marcas!:Array<string>;
  constructor(private _service:ServiceCubo) {}

  ngOnInit(): void {
    this.loadMarca();
  }
  loadMarca(){
    this._service.getMarca().subscribe(response=>{
      this.marcas=response;
    })
  }

}
