import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string="";
  password: string="";
  cpassword: string="";

  submitted = false;
  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public route: Router
  ){}

  ngOnInit() {
  }

  async registrar(){
    const {username, password, cpassword} = this
    console.log("Datos a registrar:", { username, password, cpassword });
    if(password !== cpassword){
      this.showAlert("Error", "Las contraseñas no coinciden ");
      return;
    }
    try{
      const res = await this.afAuth.createUserWithEmailAndPassword(username,password)
      this.showAlert("Usuario registrado","Bienvenido "+ username)
      this.route.navigateByUrl('/login');
    }catch(err: any){
      console.dir(err);
      this.showAlert("Error", err.message);
    }
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
