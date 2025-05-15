# REDUCE
Es un método de arrays para simificar todos sus valores a un unico valor


```jsx
// Método de Reduce
// nuestraLista.reduce( callBack, initialValue );

// Funcion de callback
// (acumulator, currentValue )=> {}

//Restar todos los valores de un array
const listNumeros= [175,50,25];
const resultado = listaNumeros.reduce( miFuncion );

funtion miFuncion(total, num){
    return total-num;

}

const resultado = listaNumeros.reduce( (total, num) => total - num);


## SearchParams vs PathName

### URLSearchParams
Método para trabajar con los parametros de consulta de una URL

# Sitio Multipagina

Realizar un sitio multiPage con useState para cambiar ek componente que se renderiza dependiendo del valor del state "paginaActual".
- Usar botones para cambiar el state y motrar un componente o otro.
- Actualizar el código para utilizar SearchParams para mostrar un componente o otro, usandoo links para cambiar de una página a otra