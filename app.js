// Comision 49845
// Alumno: Ezequiel Cardozo Soto
// TERCERA pre-entrega JS
// Licoreria "Elissir Bebidas"


const nombreUsuario = document.querySelector('#nombreUsuario');

function obtenerUsuario(){
    let usuario;

    do {
        usuario = prompt('Hola! ¿Cómo te llamas?').trim();
    } while( usuario == null || usuario === '' || usuario.length < 3)

    nombreUsuario.innerText = usuario;
}

obtenerUsuario()

const carrito = [ 
    { nombre: ' Johnnie Walker Blue Label', img: 'img/botella-blueLabel.png', bebidaTipo: 'Whisky', precio: 310000},
    { nombre: ' Johnnie Walker Green Label',img: 'img/green label.png' , bebidaTipo: 'Whisky', precio: 210000},
    { nombre: ' Martin Miller s London Gin',img: 'img/Martin Miller.png',bebidaTipo: 'Gin', precio: 55000},
    { nombre: ' Gin Bulldog London Dry 700 mL', img: 'img/Bulldog Gin.jpg' ,bebidaTipo: 'Gin', precio: 40000},
    { nombre: ' Aperitivo Fernet Branca 750cc', img: 'img/Fernet Branca 750.jpg' ,bebidaTipo: 'Aperitivo', precio: 8500}
];

//subo un producto más a la lista


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

// selecciono un elemento
const titulo = document.querySelector('h1');
const sub = document.querySelector('.sub');
const contenedor = document.querySelector('#tarjetas');



//subo un producto más a la lista

carrito.push({ nombre: 'Aperitivo Campari 750cc', img: 'img/CAMPARI-247x247.png' , bebidaTipo: 'Aperitivo', precio: 5500});
console.log(carrito);
// recorro 
carrito.forEach(tarjetita => {
    contenedor.innerHTML += 
                        `<div class="card">
                                <img src="${tarjetita.img}" alt="bebidas">
                                <h4> ${tarjetita.nombre}</h4>
                                <p>${tarjetita.precio}</p>
                        </div>`;
});

// selecciono los productos
const seleccion = document.querySelectorAll('.card');
console.log(seleccion);

seleccion.forEach(element => {
    console.log(element);
});
