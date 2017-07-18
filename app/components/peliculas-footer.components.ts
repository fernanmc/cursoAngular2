// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from "../model/pelicula"

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-footer',
    templateUrl:"app/views/peliculas-footer.html", //Separando template del componente
    //styleUrls:["../assets/css/style.css"]
    /*template: `<h1>{{titulo}} con Angular 2</h1>
                <ul>
                  <li>Titulo: {{pelicula}}</li>
                  <li>Director: {{director}}</li>
                  <li>Año: {{anio}}</li>
                </ul>`*/
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasFooterComponent {
    public copyright:string = "Copyright curso de Angular 2 fernando masero cornejo";
}