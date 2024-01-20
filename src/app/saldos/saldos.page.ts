import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldos',
  templateUrl: './saldos.page.html',
  styleUrls: ['./saldos.page.scss'],
})
export class SaldosPage implements OnInit {

  movimientos: any[] = [];
  saldoTotal: number = 0;

  constructor(private service: AwsApigatewayService, public route: Router) { }

  ngOnInit() {
    this.service.getMovimiento().subscribe((response: any) => {
      this.movimientos = response.body;
      this.calcularSaldoTotal();
      console.log(this.movimientos);
    });
  }

  calcularSaldoTotal() {
    this.saldoTotal = 0;
    this.movimientos.forEach(movimiento => {
      if (movimiento.accion === 'abono') {
        this.saldoTotal += movimiento.valor;
      } else if (movimiento.accion === 'retiro') {
        this.saldoTotal -= movimiento.valor;
      }
    });
  }
}
