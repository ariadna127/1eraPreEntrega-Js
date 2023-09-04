//SIMULADOR INTERACTIVO DE COMPRAS 

alert("Bienvenido a Venecia Clothes");

const seleccionarProducto = () => {
    let producto = "";
    let cantidad = 0;
    let precio = 0;
    let subtotal = 0;
    let seguirComprando = true;
    do {
        producto = prompt("Ingrese el producto que desea comprar: remera, pantalon, sweater");
        cantidad = Number(prompt("Ingrese la cantidad que desea comprar"));
        switch (producto) {
            case "remera":
                precio = 1500;
                break;
            case "pantalon":
                precio = 4000;
                break;
            case "sweater":
                precio = 3000;
                break;
            default:
                alert("El producto ingresado no existe");
                break;
        }
        subtotal = precio * cantidad;

        seguirComprando = confirm("¿Desea seguir comprando?");
    } while (seguirComprando);
    alert("El subtotal de su compra sin IVA y descuentos aplicados es $" + subtotal);
    return subtotal;
}

const aplicarIva = (subtotal) =>{
    const iva = subtotal * 0.21;
    const sumaIva =  subtotal + iva;
    alert("El subtotal de su compra con Iva aplicado es de $" + sumaIva);
    return sumaIva;
}

const aplicarDescuento = (subtotalConIva) =>{
    if (subtotalConIva >= 5000) {
        alert("Se ha aplicado un descuento del 25%");
        return subtotalConIva * 0.75;
        } else {
        return subtotalConIva;
    }
}

const mostrarPrecioFinal = (precioFinal) =>{
    alert("El precio final de su compra es $" + precioFinal);
}

const subtotal = seleccionarProducto();
const subtotalConIva = aplicarIva(subtotal);
const precioFinal = aplicarDescuento(subtotalConIva);
mostrarPrecioFinal(precioFinal);