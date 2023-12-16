import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  submitted = false;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  register(form: NgForm) {
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
