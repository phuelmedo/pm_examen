import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';


@Component({
  selector: 'app-envio',
  templateUrl: './envio.page.html',
  styleUrls: ['./envio.page.scss'],
})
export class EnvioPage implements OnInit {

  nombre: string = ""
  direccion: string = ""
  idcliente: string = ""
  idproducto: string = ""

  constructor(private service: AwsApigatewayService, public alert: AlertController, public route: Router) { }

  ngOnInit() {
    
  }

  postEnvio(envioForm: NgForm){
    const { nombre, direccion, idcliente, idproducto } = envioForm.value;

    this.service.postEnvio(this.nombre, this.direccion, this.idcliente, this.idproducto).subscribe((data) =>{
      console.log(nombre, direccion, idcliente, idproducto)
      console.log(data)
      this.showAlert("Envio registrado","Envio para " + nombre)
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
