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
}
