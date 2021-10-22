import React, { useState, useContext, createContext } from 'react';
import './App.css';

const Unico = createContext({
  usuario: ``,
  setUsuario: () => {},
});

function VerUsuario() {
  const { usuario } = useContext(Unico);

  return <input type="text" value={usuario} readOnly />
}

function ModificaUsuario() {
  const { setUsuario } = useContext(Unico);

  const handleClick = () => {
    const novoUsuario = prompt('Digite o nome do novo usuário', Math.random().toString(36).slice(-5));
    setUsuario(novoUsuario);
  }

  return (
    <>
      <button onClick={handleClick}>Modificar usuario</button>
    </>
  )
}

function App() {
  const [usuario, setUsuario] = useState(`Anonimo`);

  return (
    <>
      <Unico.Provider value={{ usuario, setUsuario }}>
        Usuario: <VerUsuario /><ModificaUsuario />
        <br />
        <hr />
        {usuario}
      </Unico.Provider>
    </>
  );
}

export default App;
