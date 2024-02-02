// Comision 49845
// Alumno: Ezequiel Cardozo Soto
// TERCERA pre-entrega JS
// Licoreria "Elissir Bebidas"










const carrito = [ 
    { nombre: ' Johnnie Walker Blue Label', bebidaTipo: 'Whisky', precio: 310000},
    { nombre: ' Johnnie Walker Green Label', bebidaTipo: 'Whisky', precio: 210000},
    { nombre: ' Martin Miller s London Gin', bebidaTipo: 'Gin', precio: 55000},
    { nombre: ' Gin Bulldog London Dry 700 mL', bebidaTipo: 'Gin', precio: 40000},
    { nombre: ' Aperitivo Fernet Branca 750cc', bebidaTipo: 'Aperitivo', precio: 8500}
];

//subo un producto más a la lista

carrito.push({ nombre: 'Aperitivo Campari 750cc', bebidaTipo: 'Aperitivo', precio: 5500});
console.log(carrito);

//busco un precio de bebida entre los 5000 y 50000 pesos
const encontrado = carrito.filter( (item) => (item.precio <= 50000 && item.precio >= 5000));
console.log(encontrado);

// aqui busco si tengo una bebida por la funcion some
const encontrado2 = carrito.some((item) => item.nombre == ' Johnnie Walker Blue Label'); 
console.log(encontrado2);




//los precios suben por inflacion 25% en enero
const subaPrecios = carrito.map( (item )=> item.precio * 1.25);

console.log(subaPrecios);
console.table(subaPrecios);


// o asi para que salga tambien el nombre de la bebida y el precio

const preciActualizado = carrito.map((item) => {
    return {
        nombre: item.nombre,
        precio: item.precio * 1.25
    }
})


console.log(preciActualizado);
console.table(preciActualizado);



// se ordena de menor a mayor los precios
carrito.sort( (a, b) => {
    if( a.precio > b.precio){
        return 1
    }

    if( a.precio < b.precio){
        return -1
    }
    return 0
});

console.log(carrito);