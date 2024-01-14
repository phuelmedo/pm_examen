import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})
export class ClientePage implements OnInit {

  nombre: string = ""
  email: string = ""

  constructor(private service: AwsApigatewayService, public alert: AlertController, public route: Router) { }

  ngOnInit() {
    
  }

  postCliente(){

    this.service.postCliente(this.nombre, this.email).subscribe((data) =>{
      console.log(this.nombre, this.email)
      console.log(data)
      this.showAlert("Cliente registrado","Se registro correctamente el cliente " + this.nombre)
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
