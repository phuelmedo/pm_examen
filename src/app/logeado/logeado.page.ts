import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.page.html',
  styleUrls: ['./logeado.page.scss'],
})
export class LogeadoPage implements OnInit {
  usuario: string = '';
  constructor() { }

  ngOnInit() {
    this.usuario = localStorage.getItem('usuario') ?? '';
  }

}
