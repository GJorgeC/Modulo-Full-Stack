// El export en JS es como hacer public una variable o objeto en JAVA

export const nombre = "Juan";
export const edad = 30;

const saludar = (nombre, edad) => {
    console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);
}

export default saludar;