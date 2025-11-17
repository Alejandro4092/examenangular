import { environment } from '../../environments/environment.development';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class ServiceCubo {
    constructor(private _http: HttpClient) {}

}