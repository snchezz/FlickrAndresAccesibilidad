import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  // Login logout
 
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