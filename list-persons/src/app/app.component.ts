import { HttpClientJsonpModule } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { TablaComponent } from './tabla/tabla.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  @ViewChild(TablaComponent) child !: TablaComponent;

  title:string = 'list-persons'
  buscar:string = ''

  listaPersonas:any = []

  persona = {
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    direccion: "",
    telefono: ""
  }

  filtrar() {
    this.child.listaPersonas = this.child.listaCompleta
    if (this.buscar.trim() == '') return

    this.child.listaPersonas = this.child.listaCompleta.filter(
      (persona: any) => {
        return (
          persona.nombre.toLowerCase().includes(this.buscar.toLowerCase()) ||
          persona.apellidoPaterno.toLowerCase().includes(this.buscar.toLowerCase()) ||
          persona.apellidoMaterno.toLowerCase().includes(this.buscar.toLowerCase())
        )
      }
    )

  }

  agregar() {
    this.child.post(this.persona)
  }

  ngAfterViewInit() {}
}
