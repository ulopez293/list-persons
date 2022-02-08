import { Component, OnInit, Input  } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  listaCompleta:any = []
  listaPersonas:any = []

  constructor(private http: HttpClient) {
    this.get()
  }

  ngOnInit(): void { this.get() }

  get() {
    this.http.get('http://localhost:3000/personas').subscribe(
      (data: any) => { 
        this.listaPersonas = data 
        this.listaCompleta = data
      }
    )
  }

  post(persona:any) {
    this.http.post('http://localhost:3000/personas', persona).subscribe(
      (data: any) => {
        this.get()
      }
    )
  }

  delete(persona:any) {
    this.http.delete('http://localhost:3000/personas/'+persona.id).subscribe(
      (data: any) => { 
        this.get()
      }
    )
  }

  put(persona:any){
    this.http.put('http://localhost:3000/personas/'+persona.id, persona).subscribe(
      (data: any) => { 
        this.get()
      }
    )
  }


  editar(event:any, id_persona:any) {
   let tr = event.target.parentNode.parentNode
   let datos: any = Array.from(tr.querySelectorAll('input')).map((td:any) => { return td.value })
   let propiedades = ['nombre', 'apellidoPaterno', 'apellidoMaterno', 'direccion', 'telefono']
   let personaUpdate: any = { id: id_persona }
   propiedades.forEach((key:any, index:any) => { personaUpdate[key] = datos[index] })

   this.put(personaUpdate)
  }

}
