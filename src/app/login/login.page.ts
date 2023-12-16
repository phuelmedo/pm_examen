import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(form: NgForm) {
    this.submitted = true;
    if (form.valid) {
      const usuario = form.value.usuario;
      localStorage.setItem('usuario', usuario);
      this.router.navigateByUrl('/logeado');
    } else {
      console.error('Se produjo un error');
    }
  }
}