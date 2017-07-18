// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {PeliculasListComponent} from "./components/peliculas-list.components";
import {PeliculasFooterComponent} from "./components/peliculas-footer.components";
import {ContactoComponent} from "./components/contacto.components";
import {CrearPeliculaComponent} from "./components/crearpelicula.components";
// Decorador component, indicamos en que etiqueta se va a cargar la plantilla

import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
    selector: 'my-app',
    templateUrl:"app/views/peliculas.html", //Separando template del componente
    directives: [PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent, ROUTER_DIRECTIVES],
    styleUrls:["../assets/css/style.css"]
    /*template: `<h1>{{titulo}} con Angular 2</h1>
                <ul>
                  <li>Titulo: {{pelicula}}</li>
                  <li>Director: {{director}}</li>
                  <li>Año: {{anio}}</li>
                </ul>`*/
})

@RouteConfig([
    {path: "/peliculas", name: "Peliculas",component:PeliculasListComponent, useAsDefault:true},
    {path: "/contacto", name: "Contacto", component:ContactoComponent},
    {path: "/crear-pelicula", name: "CrearPelicula", component:CrearPeliculaComponent},
    {path: "/crear-pelicula/:titulo", name: "CrearPeliculaBasadaEnOtra", component:CrearPeliculaComponent}

])
 
// Clase del componente donde iran los datos y funcionalidades
export class AppComponent {
    public titulo: string = "Peliculas con angular 2"
    

    
 }
