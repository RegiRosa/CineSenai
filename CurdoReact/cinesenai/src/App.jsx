// function App () {
//   const titulo = "Cinesenai";
//   const ano = 2026;
//   const duracaoMinutos = 166;

//   return (
//     <>
//     <h1 className="titulo">{titulo}</h1>
//     <p style={{color: "gray"}}>Em cartaz desde {ano}</p>
//     <p>Duna dura {Math.floor(duracaoMinutos / 60)} h{duracaoMinutos % 60}</p>
//     <input type = "text"/>
//     </>
//   )
// }

// export default App;

import { CartaoDeVisita } from "./components/CartaoDeVisita";
import { FichaDoFilme } from "./components/FichaDoFilme";
import { Navbar } from "./components/Navbar";
import { Rodape } from "./components/Rodape";

// function App () {
//   return (
//     <>
//     <h1>CineSenai</h1>
//     <Rodape />
//     </>
//   );
// }

// export default App; //main recebe essa informação

//div meu container principal, não preciso do fragmento

function App(){
  return (
  <>
  <Navbar />
  <div className="container">
    <h1>Catalogo</h1>
  </div>
  </>
  );

}

export default App;

