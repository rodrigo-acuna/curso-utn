let distancia = 0, volver;

do{
    do{
        distancia = parseInt(prompt("Ingrese un valor de distancia en metros"));

        if(isNaN(distancia)){
            alert("El dato ingresado no es un número. Por favor, ingrese un valor correcto ");
        }

        if(distancia < 0){
            alert("La distancia no puede ser un número negativo. Por favor, ingrese un valor correcto");
        }
    }while(isNaN(distancia) || distancia < 0);

    if(distancia <= 1000){
        alert("Usted debe ir a pie");
    }else if(distancia > 1000 && distancia <= 10000){
        alert("Usted debe ir en bicicleta")
    }else if(distancia > 10000 && distancia <= 30000){
        alert("Usted debe viajar en colectivo");
    }else if(distancia > 30000 && distancia <= 100000){
        alert("Usted debe viajar en auto");
    }else if(distancia > 100000){
        alert("Usted debe viajar en avión");
    }

    do{
        volver = prompt("Desea ingresar nuevos valores (S/N)");
    }while(volver !== "S" && volver !== "s" && volver !=="N" && volver !=="n");

}while(volver === "S" || volver === "s");