import { Component,OnInit } from '@angular/core';
import { ServiceCubo } from '../../service/service.cubos';
import { Cubo } from '../../model/cubo';
@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit{
  public cubos!: Array<Cubo>;

  constructor(private _service: ServiceCubo) { }

  ngOnInit(): void {
   this.loadCubos();

  }
  loadCubos(){
    this._service.getCubo().subscribe(response => {
      this.cubos = response;
    })
  }


} 


