import { Component,OnInit } from '@angular/core';
import { ServiceCubo } from '../../service/service.cubos';
import { Cubo } from '../../model/cubo';
import { ActivatedRoute,Params } from '@angular/router';


@Component({
  selector: 'app-marca.component',
  standalone: false,
  templateUrl: './marca.component.html',
  styleUrl: './marca.component.css',
})
export class MarcaComponent implements OnInit {
  public cubos!: Array<Cubo>;
  constructor(
    private _service: ServiceCubo,
    private _activeRoute: ActivatedRoute
  ) {}
    ngOnInit(): void {
   this._activeRoute.params.subscribe(params => {
      const marca = params['marca'];
      this._service.findCubosMarca(marca).subscribe(response => {
        this.cubos = response;
      });
   });
  }

  
 

}

