function rentalCar(tipoDeVehiculo, diasDeAlquiler, sillasParaBebes){
    let costoPorDia;
    if(tipoDeVehiculo === "compacto"){
        costoPorDia = 14000;
    }
    else if(tipoDeVehiculo === "mediano"){
        costoPorDia = 17000;
    }
    else if(tipoDeVehiculo === "camioneta"){
        costoPorDia = 28000;
    }
    else{
        return ("Tipo de vehículo no válido. Por favor, elija entre 'compacto', 'mediano' o 'camioneta'.");
    }
    if (typeof diasDeAlquiler !== "number" || diasDeAlquiler <= 0) {
        return "Días de alquiler debe ser un número mayor a 0.";
    }
    if (typeof sillasParaBebes !== "boolean") {
        return "Silla para bebé debe ser confirmado con true para alquilarlo o false para no alquilarlo.";
    }
    let totalAPagar = costoPorDia * diasDeAlquiler;

    if (sillasParaBebes){
        totalAPagar += 1200 * diasDeAlquiler;
    }
    return totalAPagar;
}

function mostrarMensaje(tipoDeVehiculo, diasDeAlquiler, sillasParaBebes) {
    let total = rentalCar(tipoDeVehiculo, diasDeAlquiler, sillasParaBebes);

    if (typeof total === "number") {
        let mensaje = `Estimado cliente: en base al tipo de vehículo ${tipoDeVehiculo} alquilado, considerando los ${diasDeAlquiler} días utilizados, el monto total a pagar es de $${total}`;
        if (sillasParaBebes) {
            mensaje += ", incluyendo el costo adicional por la silla para niños.";
        }
        console.log(mensaje);
        
    }
    else{
        console.log(total);
    }
}
//mostrarMensaje("compacto", 3, true)
//mostrarMensaje("deportivo", 3, false)
//mostrarMensaje("compacto", -3, false )
mostrarMensaje("compacto", 3,"no");
