import React, { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Contador from './components/Contador';

function App() {
  const [cardCount, setCardCount] = useState(0);

  const handleCountChange = (newCount) => {
    setCardCount(newCount);
  };

  const cards = [
    { title: 'Cristiano Ronaldo', image: '/images/ronaldo.jpg', text: 'Uno de los mejores jugadores  del Real Madrid.', count: cardCount },
    { title: 'Raúl González', image: '/images/raul.jpg', text: 'Leyenda del Real Madrid y máximo goleador histórico.', count: cardCount },
    { title: 'Zinedine Zidane', image: '/images/zidane.jpg', text: 'Jugador y entrenador icónico del Real Madrid.', count: cardCount },
    { title: 'Luis Figo', image: '/images/figo.jpg', text: 'Portugués que dejó huella en el Real Madrid.', count: cardCount },
    { title: 'Roberto Carlos', image: '/images/roberto-carlos.jpg', text: 'Lateral izquierdo y especialista en tiros libres.', count: cardCount },
    { title: 'Sergio Ramos', image: '/images/ramos.jpg', text: 'Capitán y defensor destacado del Real Madrid.', count: cardCount },
  ];

  return (
    <div className="App container">
      <h1 className="my-4">Jugadores más destacados del Real Madrid</h1>
      <CardContainer cards={cards} />
      <Contador onCountChange={handleCountChange} />
    </div>
  );
}

export default App;
