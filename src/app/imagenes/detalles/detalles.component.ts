import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagenes } from '../imagenes/imagenes.module';
import { ImagenService } from '../imagen.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  @Input() viewMode = false;

  @Input() tutorialActual: Imagenes = {
    titulo: '',
    descripcion: '',
    publicado: false
  };

  message = ''

  constructor(
    private tutorialService: ImagenService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }
  getTutorial(id: string): void {
    this.tutorialService.getTutorialPorId(id)
      .subscribe({
        next: (data) => {
          this.tutorialActual = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublicado(status: boolean): void {
    const data = {
      titulo: this.tutorialActual.titulo,
      descripcion: this.tutorialActual.descripcion,
      publicado: status
    };

    this.message = '';

    this.tutorialService.actualizarTutorial(this.tutorialActual.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.tutorialActual.publicado = status;
          this.message = res.message ? res.message : 'El estado ha sido actualizado correctamente!';
        },
        error: (e) => console.error(e)
      });
  }

  actualizarTutorial(): void {
    this.message = '';

    this.tutorialService.actualizarTutorial(this.tutorialActual.id, this.tutorialActual)
      .subscribe({
        next: (res) => {
          console.log(res);
          window.alert("Esta imagen ha sido actualizado correctamente!")
        },
        error: (e) => console.error(e)
      });

      location.href="lista";

  }

  eliminarTutorial(): void {
    this.tutorialService.eliminarTutorial(this.tutorialActual.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/lista']);
        },
        error: (e) => console.error(e)
      });
  }
}
