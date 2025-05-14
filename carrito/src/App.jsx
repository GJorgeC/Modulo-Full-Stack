import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    producto: '',
    precio: ''
  })

  const [listaProductos, setListaProductos] = useState([])
  const [precioTotal, setPrecioTotal] = useState(0)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const nuevoPrecio = parseFloat(formData.precio)
    if (precioTotal + nuevoPrecio > 100) {
      alert('El precio total supera los 100 euros')
      return
    }

    const nuevoProducto = {
      producto: formData.producto,
      precio: nuevoPrecio
    }

    setListaProductos(prev => [...prev, nuevoProducto])
    setPrecioTotal(prev => prev + nuevoPrecio)
    setFormData({ producto: '', precio: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="producto"
          value={formData.producto}
          onChange={handleChange}
          placeholder="Producto"
        />
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
        />
        <button type="submit">Añadir</button>
      </form>

      <div>
        {listaProductos.map((p, i) => (
          <div key={i}>{p.producto} - {p.precio}€</div>
        ))}
        <strong>Total: {precioTotal.toFixed(2)}€</strong>
      </div>
    </>
  )
}

export default App
