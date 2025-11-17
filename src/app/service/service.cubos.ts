import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cubo } from '../model/cubo';
import { Usuario } from '../model/usuario';
import { Login } from '../model/login';
import { Compra } from '../model/compra';


@Injectable()
export class ServiceCubo {
    constructor(private _http: HttpClient) {}
    //En el menú de nuestra aplicación, tendremos que cargar las Marcas de los cubos 
   // /api/cubos/marcas
    getMarca(): Observable<any>{
    let request="api/cubos/Marcas";
    let url= environment.urlApiCubos+request;
    return this._http.get(url);
    }

    getCubo(): Observable<Array<Cubo>>{
    let request="api/cubos";
    let url= environment.urlApiCubos+request;
    return this._http.get<Array<Cubo>>(url);
    }
    
     findCubosMarca(marca:string): Observable<Array<Cubo>>{
    let request="api/cubos/cubosmarca"+marca;
    let url= environment.urlApiCubos+request;
    return this._http.get<Array<Cubo>>(url);
    }
     login(login: Login): Observable<any> {
        const request = 'api/Manage/Login';
        const url = environment.urlApiCubos + request;
        let header = new HttpHeaders();
        header = header.set('Content-Type', 'application/json');
        const json = JSON.stringify(login);
        return this._http.post(url, json, { headers: header });
    }
    perfil(token: string): Observable<Usuario> {
        const request = 'api/Manage/PerfilUsuario';
        const url = environment.urlApiCubos + request;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return this._http.get<Usuario>(url, { headers });
    }
   getCompras(token: string): Observable<Array<Compra>> {
        const request = 'api/Compra/ComprasUsuario';
        const url = environment.urlApiCubos + request;
        const headers = new HttpHeaders().set('Authorization', 'Bearer ' + token);
        return this._http.get<Array<Compra>>(url, { headers });
    }
    realizarCompra(token: string, compra: Compra): Observable<any> {
        const request = 'api/Compra/insertarpedido'+compra.idCubo;
        const url = environment.urlApiCubos + request;
        const headers = new HttpHeaders()
            .set('Authorization', 'Bearer ' + token)
            .set('Content-Type', 'application/json');
        const json = JSON.stringify(compra);
        return this._http.post(url, json, { headers });
    }
  

}