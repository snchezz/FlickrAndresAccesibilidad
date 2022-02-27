import { Component, OnInit } from '@angular/core';
import { ApiDataService } from 'src/app/services/api-data.service';



@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  users: any[] = []
  names: any[] = []

  constructor(private api: ApiDataService) { }
 
  isEnablebutton: boolean = false
  isEnable: boolean = false
  isEnabled: boolean = false
  isEnabledd: boolean = false
  

  ngOnInit(): void {
  }

  addUser(name: String, mail: String, password: String) {
    if (name != null && mail != null && password != null) {
      window.alert("Registro correcto")
      this.api.insertUser(name, mail, password).subscribe();
      const area = document.getElementById(`name`) as HTMLTextAreaElement;
      area.value = '';
      const area1 = document.getElementById(`email`) as HTMLTextAreaElement;
      area1.value = '';
      const area2 = document.getElementById(`password`) as HTMLTextAreaElement;
      area2.value = '';
    } else {
      window.alert("Registro incorrecto porfavor vuelva a intentarlo")
    }
  }

  comprobar(name: String, mail: String, password: String) {
    if (name.length > 5 && mail.includes("@") && password.length > 7) {
      this.isEnablebutton = true
    } else {
      this.isEnablebutton = false
    }
  }

  comprobarname(name: String) {
    if (name.length > 5) {
      this.isEnable = true
    } else {
      this.isEnable = false
    }
  }

  comprobarmail(mail: String) {
    if (mail.includes("@")) {
      this.isEnabled = true
    } else {
      this.isEnabled = false
    }
  }

  comprobarpass(password: String) {
    if (password.length > 7) {
      this.isEnabledd = true
    } else {
      this.isEnabledd = false
    }
  }

}
