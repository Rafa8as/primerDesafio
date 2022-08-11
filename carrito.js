//Funcion Saludo Bienvenida //
function saludar (){
    alert ("Hola! Bienvenido a supermercadito");  
    datosUsurario = prompt ("Escribe tu nombre").toLocaleUpperCase();
    saludoBienvenida = "Hola" + " " + datosUsurario ;
    return saludoBienvenida 
}
//Ejecuto la funcion de Bienvenida //
alert (saludar())

const productos = [
    {nombre: "yerba", precio: 300},
    {nombre: "gaseosa", precio: 300},
    {nombre: "leche", precio: 150},
    {nombre: "cerveza", precio: 240},
    {nombre: "manteca", precio: 250},
    {nombre: "asado", precio: 1000},
]
let carrito = []
let seleccion = prompt ("Hola" + " " + datosUsurario + " "+ "desea comprar algun producto? Indique si o no")
while (seleccion != "si" && seleccion != "no"){
    alert ("por favor ingresa si o no")
    seleccion =  prompt ("hola Desea comprar algo si o no")
}
if (seleccion == "si"){
    alert ("a continuacion una lista de nuestro productos")
    let todoslosProductos = productos.map (
        (producto) => producto.nombre + " " + " $" + producto.precio)
    alert (todoslosProductos.join( " -  \n"))
}
else if ( seleccion == "no") {
    alert ("muchas gracias por venir, hasta pronto")
}

while (seleccion != "no" ){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0
    if (producto == "yerba" || producto == "gaseosa" || producto == "leche" || producto == "cerveza" || producto == "manteca" || producto == "asado"){
        switch (producto) {
            case "yerba":
            precio = 300;
            break;
            case "gaseosa":
            precio = 300;
            break;
            case "leche":
            precio = 150;
            break;
            case "cerveza":
            precio = 240;
            break;
            case "manteca":
            precio = 250;
            break;
            case "asado":
            precio = 1000
            break;

        }
        do {unidades = Number (prompt ("Cuantas Unidades desea llevar"));} while ((!Number.isInteger(unidades))|| (unidades == "")) 
        carrito.push ({producto, unidades, precio})
        console.log (carrito)
    }
    else { alert ( "No contamos con ese producto")}

    seleccion = prompt ("desea seguir comprando?")
    while (seleccion === "no") 
    {alert (datosUsurario + " " +"El total a pagar es:" + " " + carrito.reduce ((acc, el)=> acc + el.precio * el.unidades, 0))
    carrito.forEach ((carritoFinal) => 
    {console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)})

    break;
    }   

}

const total = carrito.reduce ((acc, el)=> acc + el.precio * el.unidades, 0);
console.log(`el total a pagar es : ${total}`);
