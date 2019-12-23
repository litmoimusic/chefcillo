import { Component, OnInit } from '@angular/core';
import { FormControl , FormGroup , Validators } from '@angular/forms';
import { Comentario } from 'src/app/models/comentario.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { Jornadas } from '../../models/jornadas.model';

@Component({
  selector: 'app-r-social',
  templateUrl: './r-social.component.html',
  styles: []
})
export class RSocialComponent implements OnInit {

  jornada: FormGroup;

  constructor( public _contactoService: ContactoService ) { }

  ngOnInit() {

    this.jornada = new FormGroup( {
      nombre: new FormControl( null , Validators.required ),
      correo: new FormControl( null , Validators.required ),
      aporte: new FormControl( null ,  Validators.required  ),
      politica: new FormControl( null ,  Validators.required  ),
      
 }, ) ;

  }


  enviarAporte( jornada ) {
    console.log( jornada.value);
    
    const AporteUsuario = new Jornadas (
    this.jornada.value.nombre ,
    this.jornada.value.correo,
    this.jornada.value.aporte,
    this.jornada.value.politica



    );
    this._contactoService.guardarAporte( AporteUsuario  ).subscribe(
    resp => console.log( 'comertario' , resp , 'creado por' , resp.creadoPor )  );
    }

}
