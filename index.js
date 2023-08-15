const xiaomi12Precio = 279000;
const xiaomi11Precio = 104899;
const samsungS23Precio = 489999;
const samsungS22Precio = 349999;
const motorolaG9Precio = 73500;
const motorolaG8Precio = 34999;

function xiaomi(precio) {
    let cantidad = prompt("Ingrese la cantidad de celulares que desea comprar");
    cantidad = parseInt(cantidad);

    if (cantidad >= 2) {
        let total = precio * cantidad * 0.7;
        alert("El monto total es: " + total);
    }
    else{
        let total = precio * cantidad;
        alert("El monto total es: " + total)
    }
}

function samsung(precio) {
    let cantidad = prompt("Ingrese la cantidad de celulares que desea comprar");
    cantidad = parseInt(cantidad);
    let total = precio * cantidad + 7500
    alert("El monto total es: " + total)
}

function motorola(precio) {
    let cantidad = prompt("Ingrese la cantidad de celulares que desea comprar");
    cantidad = parseInt(cantidad);

    let total = 0;
    let hayGris = false;

    for (let i = 1; i <= cantidad; i++) {
        let color = prompt("Seleccione el color de su celular \nGris \nNegro \nBlanco");
        color = color.toUpperCase();

        if (color === "GRIS") {
            hayGris = true;
            total = total + precio * 0.75; 
        } else {
            total = total + precio;
        }
    }

    if (hayGris) {
        alert("El monto total con descuento es: " + total);
    } else {
        alert("El monto total es: " + total);
    }
}


function menuProductos() {
    let producto = prompt("Seleccione el producto que desea:\nXiaomi Redmi Note 12 $ 279.000\nXiaomi Redmi Note 11 $ 104.899\nSamsung Galaxy S23 $ 489.999\nSamsung Galaxy S22 $ 349.999\nMotorola G9 $ 73.500\nMotorola G8 $ 34.999");
    producto = producto.toUpperCase();

    switch (producto) {
        case "XIAOMI REDMI NOTE 12":
            alert("30% DE DESCUENTO EN XIAOMI LLEVANDO 2 O MAS CELULARES");
            xiaomi(xiaomi12Precio);
            break;
        case "XIAOMI REDMI NOTE 11":
            alert("30% DE DESCUENTO EN XIAOMI LLEVANDO 2 O MAS CELULARES");
            xiaomi(xiaomi11Precio);
            break;
        case "SAMSUNG GALAXY S23":
            alert("PRODUCTOS SAMSUNG +$ 7500 DE ENVIO POR CELULAR");
            samsung(samsungS23Precio);
            break;
        case "SAMSUNG GALAXY S22":
            alert("PRODUCTOS SAMSUNG +$ 7500 DE ENVIO POR CELULAR");
            samsung(samsungS22Precio);
            break;
        case "MOTOROLA G9":
            alert("25% DE DESCUENTO POR CADA CELULAR GRIS QUE LLEVES");
            motorola(motorolaG9Precio);
            break;
        case "MOTOROLA G8":
            alert("25% DE DESCUENTO POR CADA CELULAR GRIS QUE LLEVES");
            motorola(motorolaG8Precio);
            break;
        default:
            alert("Producto no reconocido");
            break;
    }
}

while (true) {
    let opcion = prompt("Digite P para visualizar la lista de productos");
    opcion = opcion.toUpperCase();
    if (opcion === "P") {
        menuProductos();
    } else {
        break;
    }
}
