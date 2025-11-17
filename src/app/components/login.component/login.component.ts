import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceCubo } from '../../service/service.cubos';
import { Login } from '../../model/login';
import { Usuario } from '../../model/usuario';

@Component({
  selector: 'app-login.component',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
})
export class LoginComponent {
  @ViewChild("cajaemail") cajaEmail!: ElementRef;
  @ViewChild("cajapassword") cajaPassword!: ElementRef;

  constructor(private _service: ServiceCubo, private _router: Router) {}

  hacerLogin(): void {
  const email = this.cajaEmail.nativeElement.value;
  const password = this.cajaPassword.nativeElement.value;
  const login = new Login(email, password);

  this._service.login(login).subscribe(response => {
    const token = response.response; 
    localStorage.setItem('token', token);


    if (!localStorage.getItem('token')) {
      localStorage.setItem('token', token);
    }

    
    this._router.navigate(['/perfil']);
  });
}

}
