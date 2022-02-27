import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ImagenService } from '../imagen.service';
import { Imagenes } from '../imagenes/imagenes.module';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-generarpdf',
  templateUrl: './generarpdf.component.html',
  styleUrls: ['./generarpdf.component.css']
})
export class GenerarpdfComponent implements OnInit {

  tutoriales?: Imagenes[];
  tutorialActual: Imagenes = {};
  indiceActual = -1;
  titulo = '';


  constructor(private imagenService: ImagenService) { }

  ngOnInit(): void {
    this.recuperarTutoriales();
    this.refrescarLista();
  }

  recuperarTutoriales(): void {
    this.imagenService.getTodosTutoriales()
      .subscribe({
        next: (data) => {
          this.tutoriales = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refrescarLista(): void {
    this.recuperarTutoriales();
    this.tutorialActual = {};
    this.indiceActual = -1;
  }

 
  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {

      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);


      PDF.setFontSize(20)
      PDF.text('Este proyecto ha sido realizado con\nSpring y Angular, por Andrés\nSánchez Vera', 50, 130)
      var img = new Image()
      img.src = 'assets/flickrbysanchezblack.png'
      PDF.addImage(img, 'png', 10, 200, 180, 90)

      PDF.save('informe-imagenes-andres-sanchez.pdf');


    });
  }

}
