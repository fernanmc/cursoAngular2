// Importar el núcleo de Angular
import {Component} from 'angular2/core';


@Component({
    selector: 'contacto',
    templateUrl:"app/views/contacto.html", //Separando template del componente
  
})


 
// Clase del componente donde iran los datos y funcionalidades
export class ContactoComponent {
    public contacto: string = "Contacto: Fernando Masero"
    

    
 }
