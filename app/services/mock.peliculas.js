System.register(["../model/pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (pelicula_1_1) {
                pelicula_1 = pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new pelicula_1.Pelicula(1, "Batman", "Logan", 2016),
                new pelicula_1.Pelicula(2, "La verdad duele", "Logan", 2016),
                new pelicula_1.Pelicula(3, "Chiquito", "Logan", 2016),
                new pelicula_1.Pelicula(4, "oli k ase guapi", "Logan", 0)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map