import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {

comentario: FormGroup;

  constructor( public _contactoService: ContactoService ) { }

  ngOnInit() {
      
      this.comentario = new FormGroup( {
      nombre: new FormControl( null , Validators.required ),
      correo: new FormControl( null , Validators.required ),
      titulo: new FormControl( null ,  Validators.required  ),
      mensaje: new FormControl( null ,  Validators.required  ),
      politica: new FormControl( null ,  Validators.required  ),
      
 }, ) ;
  }

  enviarComentario( comentario) {
    console.log( comentario.value);
    
    const ComentarioUsuario = new Comentario (
    this.comentario.value.nombre ,
    this.comentario.value.correo,
    this.comentario.value.titulo,
    this.comentario.value.mensaje,
    this.comentario.value.politica,


    );
    this._contactoService.guardarComentario( ComentarioUsuario  ).subscribe(
    resp => console.log( 'comertario' , resp , 'creado por' , resp.creadoPor )  );
    }

}
