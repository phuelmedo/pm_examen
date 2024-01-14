import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {

  constructor(private httpClient: HttpClient) { }

  postCliente(nombre:string, email:string){
    var body = {nombre: nombre, email: email}
    console.log(nombre, email)
    console.log(body)
    return this.httpClient.post("https://3mm6p6ank1.execute-api.eu-north-1.amazonaws.com/deployapi/cliente", body)
  }

  postProducto(nombre:string, detalle:string){
    var body = {nombre: nombre, detalle: detalle}
    console.log(nombre, detalle)
    console.log(body)
    return this.httpClient.post("https://3mm6p6ank1.execute-api.eu-north-1.amazonaws.com/deployapi/producto", body)
  }

  postEnvio(nombre:string, direccion:string, idCliente:string, idProducto:string){
    var body = {nombre: nombre, direccion: direccion, idCliente: idCliente, idProducto: idProducto}
    console.log(nombre, direccion, idCliente, idProducto)
    console.log(body)
    return this.httpClient.post("https://3mm6p6ank1.execute-api.eu-north-1.amazonaws.com/deployapi/envio", body)
  }
}
