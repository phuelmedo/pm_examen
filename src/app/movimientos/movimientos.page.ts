import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  accion: string = ""
  valor: number = 0;

  constructor(private service: AwsApigatewayService, public alert: AlertController, public route: Router) { }

  ngOnInit() {
    
  }

  postMovimiento(productoForm: NgForm){
    const { accion, valor } = productoForm.value;

    this.service.postMovimiento(this.accion, valor).subscribe((data) =>{
      console.log(accion, valor)
      console.log(data)
      this.showAlert("Movimiento registrado","Movimiento registrado " + accion)
      this.route.navigateByUrl('/logeado');
    })
  }

  async showAlert(header:string,message:string){
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
  }
}
