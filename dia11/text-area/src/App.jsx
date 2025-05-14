import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [texto, setTexto] = useState('')

  const [silabasNumero, setSilabasNumero] = useState(0)

  const [palabrasNumero, setPalabrasNumero] = useState(0)


  function contarSilabas(e) {
    const textoNuevo = e.target.value;
    const palabras = textoNuevo.trim().split(/\s+/).filter(Boolean)
    setPalabrasNumero(palabras.length)
    setSilabasNumero(silabasNumero + 1)
  }

  return (
    <>
      <div>
        <textarea onChange={contarSilabas} value={texto}>{texto}</textarea>
      </div>
      <div>{silabasNumero}</div>
      <div>{palabrasNumero}</div>
    </>
  )
}

export default App
 