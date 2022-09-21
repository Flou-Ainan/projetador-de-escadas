import './App.css'
import Escada from './Escada'
import Form from './Form'
import React from 'react'

function App() {
    const [escada, setEscada] = React.useState(
      {
          altura: 280,
          espelho: 17,
          piso: 28
      }
    )
    
    function handleChange(event) {
      const {id, value} = event.target
      setEscada(prevEscada => {
          return {
              ...prevEscada,
              [id]: value
          }
      })    
    }
  
    return (
        <div className="App">
          <h2>Projetador de Escadas</h2>
          <Form 
            altura={escada.altura}
            espelho={escada.espelho}
            piso={escada.piso}
            handleChange={handleChange}
          />
          <br></br>
          <hr></hr>
          <Escada
            altura={escada.altura}
            espelho={escada.espelho}
            piso={escada.piso}          
          />
        </div>
    );
}

export default App