import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images: any[] = [];
  keyword!: string;

  constructor(private imagenService: ApiDataService) { }

  ngOnInit(): void {
    this.searchRandom(event);

    $(document).ready(function () {
      $('.materialboxed').materialbox();
    });
  }

  search(event: any) {
    this.keyword = event.target.value.toLowerCase();
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }

  searchRandom(event: any) {
    this.keyword = "random";
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }

  searchMoto(event: any) {
    this.keyword = "motorcycle";
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }

  searchCoche(event: any) {
    this.keyword = "sport car";
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }

  searchTec(event: any) {
    this.keyword = "tecnology";
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = res;
        });
    }
  }

  onScroll() {
    if (this.keyword && this.keyword.length > 0) {
      this.imagenService.search_keyword(this.keyword)
        .toPromise()
        .then(res => {
          this.images = this.images.concat(res);
        });
    }
  }
}
