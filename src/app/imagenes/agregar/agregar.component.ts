import { Component, OnInit } from '@angular/core';
import { Imagenes } from '../imagenes/imagenes.module';
import { ImagenService } from '../imagen.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  tutorial: Imagenes = {
    titulo: '',
    descripcion: '',
    publicado: false
  };
  
  submitted = false;

  constructor(private imagenService: ImagenService) { }

  isEnablebutton: boolean = false
  isEnabled: boolean = false
  isEnableddd: boolean = false

  ngOnInit(): void {}

  guardarTutorial(): void {
    const data = {
      titulo: this.tutorial.titulo,
      descripcion: this.tutorial.descripcion
    };

    this.imagenService.crearTutorial(data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.submitted = true;
        },
        error: (e) => console.error(e)
      });
  }

  nuevoTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      titulo: '',
      descripcion: '',
      publicado: false
    };
  }

  comprobar(titulo: String, descripcion: String) {
    if (titulo.length > 1 && descripcion.length > 1 && descripcion.includes("http")) {
      this.isEnablebutton = true
    } else {
      this.isEnablebutton = false
    }
  }

  comprobarurl(descripcion: String) {
    if (descripcion.includes("http")) {
      this.isEnabled = true
    } else {
      this.isEnabled = false
    }
  }

  comprobartitulo(titulo: String) {
    if (titulo.length > 1) {
      this.isEnableddd = true
    } else {
      this.isEnableddd = false
    }
  }
}

