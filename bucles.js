//Ejercicio 2 Bucles

listado = [2,4,3,6,9,8];
target = 10;

function valorestarget(a){
    //Creamos el nuevo array que va a almacenar las combinaciones posibles
    let newlistado = []
    //Recorremos el array de tal manera que haga todas las combinaciones posibles.
    for (let i=0; i < listado.length;i++){
        for(let j=i+1; j < listado.length;j++){
            let suma=listado[i]+listado[j]
            if(suma==a){
                //Si la suma es igual al target se puede hacer push al nuevo array
                newlistado.push([listado[i],listado[j]])
            }
        }
    }
    //Finalmente retornamos newlistado para que imprimir el valor
    return newlistado
}

console.log(valorestarget(target));
