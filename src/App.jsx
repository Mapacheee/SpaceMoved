import { useState } from 'react';
import './App.css';

function App() {
  // Estado para manejar el entorno mostrado
  const [currentView, setCurrentView] = useState('home');

  // Función para cambiar la vista al hacer clic en los botones
  const handleButtonClick = (view) => {
    setCurrentView(view);
  
  };

  // JSX para mostrar el contenido basado en la vista actual
  return (
    <div className="App">
      <h1>Sistema Virtual</h1>

      {/* Botones */}
      <div className="button-group">
        <button onClick={() => handleButtonClick('entrenar')}>Entrenar</button>
        <button onClick={() => handleButtonClick('metricas')}>Métricas</button>
        <button onClick={() => handleButtonClick('social')}>Social</button>
      </div>

      {/* Contenido dinámico según la vista */}
      <div className="content">
        {currentView === 'entrenar' && (
          <div>
            <h2>Entrenar</h2>
            <img src="/assets/entrenar.jpg" alt="Entrenar" className="virtual-image" />
            <p>Aquí puedes visualizar tu entorno de entrenamiento.</p>
          </div>
        )}
        {currentView === 'metricas' && (
          <div>
            <h2>Métricas</h2>
            <img src="/assets/metricas.jpg" alt="Métricas" className="virtual-image" />
            <p>Aquí puedes visualizar tus métricas de rendimiento.</p>
          </div>
        )}
        {currentView === 'social' && (
          <div>
            <h2>Social</h2>
            <img src="/assets/social.jpg" alt="Social" className="virtual-image" />
            <p>Aquí puedes interactuar con otros usuarios.</p>
          </div>
        )}
        {currentView === 'home' && <p>Haz clic en uno de los botones para comenzar.</p>}
      </div>
      <div>
        <label >gomma
          
        </label>
      </div>
    </div>
  );
}

export default App;
