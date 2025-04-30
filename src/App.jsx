import { useState } from 'react';

const Header = () => {
  return <header>Tarjeta de presentación</header>
}

const Body = () => {
  return <>
  <div className="card-container">
      <div className="card">
        <div className="name"> 
          Jorge Garcia Carpio
        </div>
        <div className="img-container">
          <div>
            <img src="/src/assets/reshot-icon-cinema-3B7CSM9AQ2.svg"></img>    
          </div>
          <div>
            <img src="/src/assets/reshot-icon-music-note-WX25CPTFN9.svg"></img>
          </div>
          <div>
            <img src="/src/assets/reshot-icon-sports-trophy-X3TGZ9H4LU.svg"></img>
          </div>

        </div>
        <div>
          Me gusta pasar tiempo con mis amigos y haciendo deporte, pero disfruto mucho de mis momentos solo escuchando música o viendo peliculas
        </div>
      </div>
    </div>
  </>
}



const Footer = () => {
  const [mostrarCuriosidad, setMostrarCuriosidad] = useState(false);

  return (
    <footer>
      <p>Creado por Jorge Garcia Carpio. Espero que les guste</p>

      <button
        className="curiosity-btn"
        onClick={() => setMostrarCuriosidad(!mostrarCuriosidad)}
      >
        {mostrarCuriosidad ? 'Ocultar curiosidad' : 'Mostrar curiosidad'}
      </button>

      {mostrarCuriosidad && (
        <p className="curiosity-text">PD: Como dato curioso soy músico 🎶</p>
      )}
    </footer>
  );
};


const App = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};



export default App;
