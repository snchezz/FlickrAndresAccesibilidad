import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-navlogued',
  templateUrl: './navlogued.component.html',
  styleUrls: ['./navlogued.component.css']
})
export class NavloguedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    M.AutoInit();
  }

    // Método para activar el side nav en version movil
    public nav() {
      $(document).ready(function () {
        $('.sidenav').sidenav();
      });
    }

}
