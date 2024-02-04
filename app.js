// Comision 49845
// Alumno: Ezequiel Cardozo Soto
// TERCERA pre-entrega JS
// Licoreria "Elissir Bebidas"



/* const carrito = [ 
    { nombre: ' Johnnie Walker Blue Label', bebidaTipo: 'Whisky', precio: 310000, cantidad: 0, disponible: true},
    { nombre: ' Johnnie Walker Green Label', bebidaTipo: 'Whisky', precio: 210000,cantidad: 0, disponible: true},
    { nombre: ' Martin Miller s London Gin', bebidaTipo: 'Gin', precio: 55000, cantidad: 0, disponible: false},
    { nombre: ' Gin Bulldog London Dry 700 mL', bebidaTipo: 'Gin', precio: 40000, cantidad: 0, disponible: false},
    { nombre: ' Aperitivo Fernet Branca 750cc', bebidaTipo: 'Aperitivo', precio: 8500,cantidad: 0, disponible: true}
]; */


// utilizo una clase constructora para agregar bebidas
class Bebida{
    constructor(nombre, bebidaTipo, precio, cantidad){
        this.nombre = nombre;
        this.bebidaTipo = bebidaTipo;
        this.precio = parseFloat(precio);
        this.cantidad = cantidad;
        this.disponible = true;


    }
    sumarIva(){
        return this.precio * 1.21;
    }
    vender(){
        return this.disponible = false;
    
    }
    precioVip(){
        return this.precio * 1.21 * 0.25;
    }

}

const ListaBebidas = [];
let entrada;

do{
    let entrada = prompt(`ingrese el nombre del producto o end para finalizar de agregar`);
    if(entrada ===`end` || entrada ===` END` || entrada === `End`){
        break
    }else{
        nombreBebida = entrada;
        let TipoBebida = prompt (`ingrese el tipo de bebida`);
        let precioBebida = prompt(`Ingrese el precio de la bebida`);
        let cantidad = parseInt(prompt(`ingrese la cantidad del producto deseado`));
        ListaBebidas.push(new Bebida(nombreBebida, TipoBebida, precioBebida, cantidad   ))
    }
}
while(entrada != `end` || entrada != `END` || entrada != `End`);

//subo un producto más a la lista

ListaBebidas.push({ nombre: 'Aperitivo Campari 750cc', bebidaTipo: 'Aperitivo', precio: 5500});

console.log(ListaBebidas);


//busco un precio de bebida entre los 5000 y 50000 pesos
const encontrado = ListaBebidas.filter( (item) => (item.precio <= 50000 && item.precio >= 5000));
console.log(encontrado);


// aqui busco si tengo una bebida por la funcion some
const encontrado2 = ListaBebidas.some((item) => item.nombre == 'Aperitivo Campari 750cc'); 
console.log(encontrado2);


//los precios suben por inflacion 25% en enero
const subaPrecios = ListaBebidas.map( (item )=> item.precio * 1.25);

console.log(subaPrecios);
console.table(subaPrecios);

// o asi para que salga tambien el nombre de la bebida y el precio
const preciActualizado = ListaBebidas.map((item) => {
    return {
        nombre: item.nombre,
        precio: item.precio * 1.25
    }
});

console.log(preciActualizado);
console.table(preciActualizado);



// se ordena de menor a mayor los precios
ListaBebidas.sort( (a, b) => {
    if( a.precio > b.precio){
        return 1
    }

    if( a.precio < b.precio){
        return -1
    }
    return 0
});

console.log(ListaBebidas);



