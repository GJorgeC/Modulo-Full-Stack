// 1. Importar nuestros elmentos (librerías, componentes, estilos, etc.)
// import { suma, resta} from 'math.js'

// 2. Nuestra función principal (Componente) en mayúsculas

const App = () => {

  // 3. Uso de hooks

  // 4. Nuestras propias funciones de JS
  console.log("Estoy en App.jsx");
  const nombre = "Lucía";
  const sumar = (num1, num2) => {
    return num1 + num2;
  }
  // 5. Return con nuestro HTML
  return (
    <>
      <header>Página web</header>
      <h1>Hola! {nombre}</h1>
      <h3>Sumar</h3>
      {sumar(2,3)}
      <footer>soy footer</footer>
    </>
  )

}