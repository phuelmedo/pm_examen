import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwsApigatewayService {

  url: string = "https://mgu139f480.execute-api.eu-north-1.amazonaws.com/deploy" 

  constructor(private httpClient: HttpClient) { }

  postMovimiento(accion:string, valor:string){
    var body = {accion: accion, valor: valor}
    console.log(accion, valor)
    console.log(body)
    return this.httpClient.post(this.url, body)
  }

  getMovimiento(): Observable<any> {
    return this.httpClient.get(this.url)
  }

  postEnvio(nombre:string, direccion:string, idCliente:string, idProducto:string){
    var body = {nombre: nombre, direccion: direccion, idCliente: idCliente, idProducto: idProducto}
    console.log(nombre, direccion, idCliente, idProducto)
    console.log(body)
    return this.httpClient.post("https://3mm6p6ank1.execute-api.eu-north-1.amazonaws.com/deployapi/envio", body)
  }
}
