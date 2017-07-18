// Importar el núcleo de Angular
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {Pelicula} from "../model/pelicula";
import {PeliculaService} from "../services/peliculas.service";
import {Router, RouteParams} from "angular2/router";


@Component({
    templateUrl:"app/views/crear-pelicula.html", //Separando template del componente
    providers: [PeliculaService]
})


 
// Clase del componente donde iran los datos y funcionalidades
export class CrearPeliculaComponent {

public TituloPelicula = "";
public nuevaPelicula: Pelicula;

constructor(private _peliculaService: PeliculaService, private _router: Router, private _routerParams: RouteParams ){

}

OnSubmit(){
    console.log(this.nuevaPelicula);
    this._peliculaService.insertPelicula(this.nuevaPelicula);
    this._router.navigate(['Peliculas']);
}    

ngOnInit():any{
        this.TituloPelicula = this._routerParams.get("titulo");
        this.nuevaPelicula = new Pelicula(
            0,
            this._routerParams.get("titulo"),
            this._routerParams.get("director"),
            parseInt(this._routerParams.get("anio"))

        );
}

 }
