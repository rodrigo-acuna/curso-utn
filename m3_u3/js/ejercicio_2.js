let lugar = 0, mayor, volver = "";
const ARRAY = [];

do{
    mayor = 0;

    for(let i = 0; i <10; i++){
        lugar = i+1;
        do{
            ARRAY[i] = parseInt(prompt("Ingrese el valor " + lugar + " de 10"));

            if(isNaN(ARRAY[i])){
                alert("El valor ingresado no es un número. Intente nuevamente");
            }
        }while(isNaN(ARRAY[i]));

        if(i === 0){
            mayor = ARRAY[i];
        }

        if(ARRAY[i] > mayor){
            mayor = ARRAY[i];
        }
    }

    alert("El mayor de los valores ingresados es " + mayor);

    do{
        volver = prompt("Desea ingresar nuevos valores (S/N)");
    }while(volver !== "S" && volver !== "s" && volver !=="N" && volver !=="n");

}while(volver === "S" || volver === "s");