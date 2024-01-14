import { Component, OnInit } from '@angular/core';
import { AwsApigatewayService } from 'src/app/services/aws-apigateway.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  nombre: string = ""
  detalle: string = ""

  constructor(private service: AwsApigatewayService, public alert: AlertController, public route: Router) { }

  ngOnInit() {
    
  }

  postProducto(productoForm: NgForm){
    const { nombre, detalle } = productoForm.value;

    this.service.postProducto(this.nombre, this.detalle).subscribe((data) =>{
      console.log(nombre, detalle)
      console.log(data)
      this.showAlert("Producto registrado","Producto registrado " + nombre)
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
