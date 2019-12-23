import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../config/config' ;
import { map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Comentario } from '../models/comentario.model';
import { Jornadas } from '../models/jornadas.model';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  comentario: Comentario;

  constructor(
    public http: HttpClient,
    public _contactoService: ContactoService,
  ) { }

  guardarComentario( comentario: Comentario) {
    const url = URL_SERVICIOS + '/comentario';
    return this.http.post( url, comentario ).pipe( map( (resp: any) => {
    Swal.fire('Comentario enviado', 'Gracias' , 'success');
    // location.reload();
   // $("form").trigger("reset");
    return resp.comentarioCreado;
  }));
  }


    guardarAporte( jornada : Jornadas) {
      const url = URL_SERVICIOS + '/jornada';
      return this.http.post( url, jornada ).pipe( map( (resp: any) => {
      Swal.fire('Aporte enviado', 'Gracias' , 'success');
      // location.reload();
     // $("form").trigger("reset");
      return resp.comentarioCreado;
    }));
    
    
    
    
      }



}
