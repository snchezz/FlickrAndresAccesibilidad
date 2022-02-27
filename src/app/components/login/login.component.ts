import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any[] = []
  names: any[] = []
  tokenStorageService: any;

  constructor(private api: ApiDataService) { }

  isEnable: boolean = false


  ngOnInit(): void {
    this.getUsers()
  }

  // Obtener seguidores
  getUsers() {
    this.api.getData().subscribe(users => {
      this.users = users

    })
  }

  // Registrer
  addUser(name: String, mail: String, password: String) {
    this.api.insertUser(name, mail, password).subscribe(() => {
      this.getUsers();
    });
  }


  // Login
  searchByNameAndPassword(mail: String, password: String) {
    this.api.searchByMailAndPass(mail, password).subscribe((user) => {
      console.log(user)
      if (user != null) {
        window.alert("Login correcto, bienvenido")
        this.isEnable = true
        // Si es correcto nos manda al home
        location.href="home";
      } else {
        window.alert("Login incorrecto")
        this.isEnable = false
        const area = document.getElementById(`email`) as HTMLTextAreaElement;
        area.value = '';
        const area1 = document.getElementById(`password`) as HTMLTextAreaElement;
        area1.value = '';
      }
    })
  }

  // Buscar
  searchByName(name: String) {
    this.api.searchByName(name).subscribe((res) => {
      console.log(res)
      if (res.length != 0) {
        console.log("Usuario encontrado")
        this.names = res
      } else {
        console.log("usuario no encontrado")
        this.names = []
      }
    })
  }


}
