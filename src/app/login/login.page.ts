import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  username: string="";
  password: string="";
  submitted = false;

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public route: Router
  ){}

  ngOnInit() {
  }

  async login(loginForm: NgForm) {
    this.submitted = true;

    if (loginForm.valid) {
      const { username, password } = loginForm.value;

      try {
        console.log("Datos a registrar:", { username, password });
        const res = await this.afAuth.signInWithEmailAndPassword(username, password);
        this.showAlert("Usuario autenticado","Bienvenido "+ username)
        this.route.navigateByUrl('/logeado');
      } catch (err: any) {
        console.dir(err);
        this.showAlert("Error", err.message);
      }
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