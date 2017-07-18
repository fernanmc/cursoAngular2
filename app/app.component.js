System.register(['angular2/core', "./components/peliculas-list.components", "./components/peliculas-footer.components", "./components/contacto.components", "./components/crearpelicula.components", "angular2/router"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, peliculas_list_components_1, peliculas_footer_components_1, contacto_components_1, crearpelicula_components_1, router_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (peliculas_list_components_1_1) {
                peliculas_list_components_1 = peliculas_list_components_1_1;
            },
            function (peliculas_footer_components_1_1) {
                peliculas_footer_components_1 = peliculas_footer_components_1_1;
            },
            function (contacto_components_1_1) {
                contacto_components_1 = contacto_components_1_1;
            },
            function (crearpelicula_components_1_1) {
                crearpelicula_components_1 = crearpelicula_components_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.titulo = "Peliculas con angular 2";
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: "app/views/peliculas.html",
                        directives: [peliculas_list_components_1.PeliculasListComponent, peliculas_footer_components_1.PeliculasFooterComponent, contacto_components_1.ContactoComponent, crearpelicula_components_1.CrearPeliculaComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ["../assets/css/style.css"]
                    }),
                    router_1.RouteConfig([
                        { path: "/peliculas", name: "Peliculas", component: peliculas_list_components_1.PeliculasListComponent, useAsDefault: true },
                        { path: "/contacto", name: "Contacto", component: contacto_components_1.ContactoComponent },
                        { path: "/crear-pelicula", name: "CrearPelicula", component: crearpelicula_components_1.CrearPeliculaComponent },
                        { path: "/crear-pelicula/:titulo", name: "CrearPeliculaBasadaEnOtra", component: crearpelicula_components_1.CrearPeliculaComponent }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map