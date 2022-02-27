import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

export interface FlickrPhoto {
  farm: string;
  id: string;
  secret: string;
  server: string;
  title: string;
}

export interface FlickrOutput {
  photos: {
    photo: FlickrPhoto[];
  };
}

@Injectable({
  providedIn: 'root'
})

export class ApiDataService {
  UrlFli = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
  BASE_URL = 'http://Localhost:8080/'

  prevKeyword!: string;
  currPage = 1;

  constructor(private http: HttpClient) { 

  }

  getData() {
    return this.http.get<any[]>(`${this.BASE_URL}user/get`)
  }

  // Insertar
  insertUser(name: String, mail: String, password: String) {
    return this.http.post(`${this.BASE_URL}user/insert`, 
    {
      "name": name,
      "mail": mail,
      "password": password
    })
  }

  // Login
  searchByMailAndPass(mail: String, password: String) {
    return this.http.post(`${this.BASE_URL}user/find`,
      {
        "mail": mail,
        "password": password
      })
  }

  searchByName(name: String) {
    return this.http.post<any[]>(`${this.BASE_URL}user/findname`,
      {
        "name": name
      })
  }

  getCharacters (page : number = 1, name : string = "") {
    return this.http.get<any>(this.BASE_URL + `character?page=${page}&name=${name}`, {})
  }
  // Flickr metodos
  
  search_keyword(keyword: string) {
    if (this.prevKeyword === keyword) {
      this.currPage++;
    } else {
      this.currPage = 1;
    }
    this.prevKeyword = keyword;
  
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=12&page=${this.currPage}`;
  
    return this.http.get( this.UrlFli + params).pipe(map((res: any) => {
      const urlArr: any[] = [];
      res.photos.photo.forEach((ph: FlickrPhoto) => {
        const photoObj = {
          url: `https://farm${ph.farm}.staticflickr.com/${ph.server}/${ph.id}_${ph.secret}`,
          title: ph.title
        };
        urlArr.push(photoObj);
      });
      return urlArr;
    }));
  }


}
