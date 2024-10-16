//Ithan Camacho
//Objetos
const film = {
    tittle: "Fight Club",
    year: 1999,
    duration: "2h 19min",
    score: 8.8,
    production: {
        director: "David Fincher",
        script: ["Chuck Palahniuk", "Jim Uhls"],
        mainCast: ["Brad Pitt", "Edward Norton", "Meat Loaf"]
    },
    mainActor(){
        return `El actor principal es ${this.production.mainCast[1]}`;
    }
}

const {tittle, year, duration, score, production} = film; //destructuración
console.log(`Titulo: ${tittle}
Año: ${year}
Duración: ${duration}
Puntuación: ${score}
Reparto Principal: ${production.mainCast}
`);

//congelar objeto
//Object.freeze(film);
//console.log(Object.isFrozen(film));
//film.tittle = "The Matrix";
//console.log(film.tittle);

//Uso de seal
//Object.seal(film);
//console.log(Object.isSealed(film));
//film.tittle = "El Club de la Pelea";
//console.log(film.tittle);

//Rest
const {tittle:titulo,year:año, ...detalles} = film;
console.log(detalles);

//Spread
const film2 = {
    ...film, //copia de film
    tittle: "Star Wars",
    year: 1977
}
console.log(film2);

//Acceder al contenido
console.log(film.mainActor());

console.log("Obtener las claves:",Object.keys(film))
console.log("Obtener los valores:",Object.values(film))
console.log("Obtener las claves y valores en un array:",Object.entries(film))

//Abreviación de propiedades
const nombre = "Ghostbusters";
const añoEstreno = 1984;

const movie = {
    nombre,
    añoEstreno
}
console.log(movie);

//Arreglos
const peliculas = [
    {
    nombre: "The Matrix", 
    añoEstreno: 1999, 
    duracion: "2h 16min"
    },
    {
    nombre: "The Godfather", 
    añoEstreno: 1972, 
    duracion: "2h 55min"
    },
    {
    nombre: "The Shawshank Redemption", 
    añoEstreno: 1994, 
    duracion: "2h 22min"
    }
]

//Uso de propiedades de arreglos

const peliculasBDD = peliculas.map(p => {
    return {
        nombre: p.nombre.toUpperCase(),
    }
})

console.log(peliculasBDD);

console.log("Número de elementos:", peliculas.length);
peliculas.length >= 2 ? console.log("Ver peliculas") : console.log("Solo hay una pelicula");

//primera forma de iterar un arreglo 
console.log("\n Primera forma de iterar");

for(let i=0; i<peliculas.length; i++){
    console.log(`${i} - ${peliculas[i].nombre}`);
}

//segunda forma de iterar un arreglo
console.log("\n Segunda forma de iterar");
peliculas.forEach((p, i) => {
    console.log(`${i} - ${p.nombre}`);
})


//tercera forma de iterar un arreglo
console.log("\n Tercera forma de iterar");
const nuevaPelicula = peliculas.map((p, i) => {
    return `${i} - ${p.nombre}`;
})
console.log(nuevaPelicula);
console.log();


const peliculas2021 = ["Dune", "Cruella", "Black Widow"];

peliculas2021.push("Medicamentos") //Agregar elemento al final
peliculas2021.unshift("Adopciones") //Agregar elemento al inicio
console.log(peliculas2021)

peliculas2021.pop() //Elimina el último elemento
peliculas2021.shift() //Elimina el primer elemento 
console.log(peliculas2021)

//Encontrar elementos
const pelicula1 = peliculas2021.find(p => p === "Cruella");
console.log(pelicula1);

//filtrar elementos
const resultPeliculaFiltro = peliculas2021.filter(p => p.startsWith("B"));
console.log(resultPeliculaFiltro);