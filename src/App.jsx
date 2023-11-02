import React from "react";
import Produto from "./pages/Produto";

const App = () => {
  const [dados, setDados] = React.useState(null); //criando o hook para os dados da API
  const [loading, setLoading] = React.useState(null); // criando o hook para controlar o carregamento da página

  async function handleClick(event) {
    setLoading(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
    );
    const json = await response.json();
    setDados(json);
    setLoading(false);
  }

  return (
    <>
      <button onClick={handleClick}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
      <button onClick={handleClick}>tablet</button>
      {loading && <p>carregando...</p>}
      {!loading && dados && <Produto dados={dados} />}
    </>
  );
};

export default App;
