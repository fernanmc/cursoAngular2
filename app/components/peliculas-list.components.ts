// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {Pelicula} from "../model/pelicula";
import {PeliculaService} from "../services/peliculas.service";
import {ROUTER_DIRECTIVES} from "angular2/router";

// Decorador component, indicamos en que etiqueta se va a cargar la plantilla
@Component({
    selector: 'peliculas-list',
    templateUrl:"app/views/peliculas-list.html", //Separando template del componente
    providers: [PeliculaService],
    directives:[ROUTER_DIRECTIVES]
    //styleUrls:["../assets/css/style.css"]
    /*template: `<h1>{{titulo}} con Angular 2</h1>
                <ul>
                  <li>Titulo: {{pelicula}}</li>
                  <li>Director: {{director}}</li>
                  <li>Año: {{anio}}</li>
                </ul>`*/
})
 
// Clase del componente donde iran los datos y funcionalidades
export class PeliculasListComponent {
    public pelicula:Pelicula;
    public peliculaElegida:Pelicula;
    public mostrarDatos:boolean;
    public peliculas: Array<Pelicula>;
    public datoServicio;
  //  public titulo:string = "Peliculao";
   /* public pelicula:string ;
    public director:string ;
    public anio:number ;*/

    constructor(private _peliculasService: PeliculaService){

        //this.datoServicio = 
        this.mostrarDatos = false;
        this.holaMundo();
        this.peliculas = this._peliculasService.getPeliculas();
        this.pelicula = this.peliculas[0];
        this.peliculaElegida = this.peliculas[0];
    }
    //boolean, array, 

    holaMundo(){
        console.log(this.pelicula);
    }

    clicked(mostrarDatos:boolean){
        console.log(this.mostrarDatos);
        if (mostrarDatos == false){
            this.mostrarDatos = true;
        }else{
            this.mostrarDatos = false;
        }
        
    }

    onCambiarPelicula(Pelicula:Pelicula){
      this.pelicula = Pelicula
      this.peliculaElegida = Pelicula;
    }
}