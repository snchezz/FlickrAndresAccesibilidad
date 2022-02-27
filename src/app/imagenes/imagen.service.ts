import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagenes } from './imagenes/imagenes.module';


const baseUrl = 'http://localhost:8080/user/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http: HttpClient) { }
  getTodosTutoriales(): Observable<Imagenes[]> {
    return this.http.get<Imagenes[]>(baseUrl);
  }

  getTutorialPorId(id: any): Observable<Imagenes> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  crearTutorial(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  actualizarTutorial(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  eliminarTutorial(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  eliminarTodosImagenes(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByTitulo(titulo: any): Observable<Imagenes[]> { //title o titulo ??????
    return this.http.get<Imagenes[]>(`${baseUrl}?titulo=${titulo}`);
  }
}
