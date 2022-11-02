//elegir entre  productos 


let harinaIntegral = "a";
let harinaAlmendras = "b";
let harinaGarbanzos = "c";


let metodoEfectivo = 1;
let metodoTarjeta = 2;

let continuarCompra = "s";

/*let resumenCompra = { sector: 0 , precio: 0, }*/


function precioProducto( tipoProducto, metodo) {
    let precioFinal = 0;
    let descuento = 0.7;
    let precioHarinaIntegral = 600;
    let precioHarinaAlmendras = 900;
    let precioHarinaGarbanzos = 300;

    let tipoIntegral = "a";
    let tipoAlmendras = "b";
    let tipoGarbanzos = "c";

    let efectivo = 1;
    let tarjeta = 2;
 
        if (tipoProducto == tipoIntegral) {
        if (metodo == efectivo) {
            precioFinal = precioHarinaIntegral * descuento;
            
        } else if (metodo == tarjeta) {
                    precioFinal = precioHarinaIntegral;
            }
            
        } else if (tipoProducto == tipoAlmendras) {
            if (metodo == efectivo) {
            precioFinal = precioHarinaIntegral * descuento;
                
            } else if (metodo == tarjeta) {
                    precioFinal = precioHarinaAlmendras
                
            }
            
        } else if (tipoProducto == tipoGarbanzos) {
            if (metodo == efectivo) {
                precioFinal = precioHarinaGarbanzos * descuento;
                        
            } else if (metodo == tarjeta) {
                precioFinal = precioHarinagGarbanzos;
                
            }
            
        }
        
        return precioFinal;
 }

  


 while (continuarCompra == "s") {
     alert( "Bienvenido a Kefi Almacén Natural");
     alert("Harinas Disponibles: \n HARINA A: Integral \n HARINA B: Almendras \n HARINA C: Garbanzos");
     

     let tipoProducto = prompt("Elegí el tipo de producto: \n A \n B \n C ").toLowerCase();

     while (tipoProducto != "a" && tipoProducto != "b" && tipoProducto != "c") {
         alert ("Tipo de entrada inexistente. Ingrese un dato válido");
         
         tipoProducto = prompt("Elegí el tipo de producto: \n A \n B \n C ").toLowerCase();
         
        }

    let metodoPago = prompt ("Elegí el metodo de pago \n 1 - Efectivo\n  2 - Tarjeta");

    while (metodoPago != 1 && metodoPago != 2 ) {
        alert ("Metodo de pago inexistente, intente nuevamente");

        metodoPago = parseInt(prompt("Elegi el metodo de pago: \n 1 - Efectivo \n  2 - Tarjeta"))
    }

    let precioFinal = precioProducto(tipoProducto, metodoPago);
    alert("El valor de tu compra es:" + precioFinal);

    continuarCompra = prompt("¿Querés comprar mas productos? \n - S \n - N").toLowerCase();
}
alert("Gracias por su compra!.")



