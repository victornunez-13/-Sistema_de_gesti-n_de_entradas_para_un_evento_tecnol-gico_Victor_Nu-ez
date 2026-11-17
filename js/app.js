const precioEntrada = 20;
const cuposIniciales = 50;
const descuentoEstudiante = 0.30;
const descuentoDocente = 0.15;
const descuentoGeneral = 0;
const maxEntrada = 5;

let cupos = cuposIniciales;
let opcion = '';
let compras = 0;
let ingresos = 0;
let entradasVendidas = 0;

do {
    opcion = prompt(
        "SISTEMA INNOVA ESPE 2026\n\n" +
        "1. Comprar entradas\n" +
        "2. Consultar cupos disponibles\n" +
        "3. Consultar ingresos acumulados\n" +
        "4. Salir\n\n" +
        "Elija una opción:"
    );

    switch (opcion) {
        case '1':
            if (cupos === 0) {
                alert("Compra rechazada: Evento agotado, no quedan cupos disponibles.");
                break;
            }

            let nombre = prompt("Ingrese el nombre del comprador:");
            if (!nombre || nombre.trim() === "") {
                alert("Compra rechazada: Debe ingresar un nombre válido.");
                break;
            }

            let tipo = prompt(
                "Seleccione el tipo de participante:\n" +
                "1. Estudiante (30% desc.)\n" +
                "2. Docente (15% desc.)\n" +
                "3. Público General (0% desc.)"
            );

            if (tipo !== '1' && tipo !== '2' && tipo !== '3') {
                alert("Compra rechazada: Tipo de participante inválido.");
                break;
            }

            let entradaCantidad = prompt("Ingrese la cantidad de entradas (1 a 5):");
            let cantidad = Number(entradaCantidad);

            
            if (!Number.isInteger(cantidad) || cantidad < 1 || cantidad > maxEntrada) {
                alert("Compra rechazada: La cantidad debe ser un número entero entre 1 y 5.");
                break;
            }

            // Comprobar disponibilidad de cupos suficientes
            if (cantidad > cupos) {
                alert(`Compra rechazada: Solicitud superior a los cupos restantes (${cupos}).`);
                break;
            }

            // Cálculos aritméticos
            let subtotal = cantidad * precioEntrada;
            let porcentajeDesc = 0;
            let personaTipo = "";

            if (tipo === '1') {
                porcentajeDesc = descuentoEstudiante;
                personaTipo = "Estudiante";
            } else if (tipo === '2') {
                porcentajeDesc = descuentoDocente;
                personaTipo = "Docente";
            } else {
                porcentajeDesc = descuentoGeneral;
                personaTipo = "Público General";
            }

            let descuento = subtotal * porcentajeDesc;
            let total = subtotal - descuento;

            
            cupos -= cantidad;
            entradasVendidas += cantidad;
            ingresos += total;
            compras += 1;

            
            let resumenCompra =
                `SIMULACIÓN DE UNA COMPRA\n` +
                `Nombre: ${nombre}\n` +
                `Tipo de participante: ${personaTipo}\n` +
                `Cantidad de entradas: ${cantidad}\n\n` +
                `Subtotal: $${subtotal.toFixed(2)}\n` +
                `Descuento (${porcentajeDesc * 100} %): $${descuento.toFixed(2)}\n` +
                `Total a pagar: $${total.toFixed(2)}\n\n` +
                `Compra realizada exitosamente.\n` +
                `Cupos restantes: ${cupos}`;

            alert(resumenCompra);
            console.log(resumenCompra);
            break;

        case '2':
            let mensajeCupo = "";
            if (cupos > 10) {
                mensajeCupo = "Cupos disponibles";
            } else if (cupos >= 1 && cupos <= 10) {
                mensajeCupo = "Últimos cupos disponibles";
            } else {
                mensajeCupo = "Evento agotado";
            }

            alert(`Cupos disponibles: ${cupos}\nEstado: ${mensajeCupo}`);
            console.log(`Cupos disponibles: ${cupos} - ${mensajeCupo}`);
            break;

        case '3':
            

        case '4':
            

        default:
            alert("Error: Opción de menú inexistente. Intente nuevamente.");
            break;
    }

} while (opcion !== '4');
