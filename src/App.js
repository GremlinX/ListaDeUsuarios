import Cabecalho from "./modulos/Cabecalho/cabecalho";
import Lista from "./modulos/Lista/lista";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <todo-list>
      <Cabecalho/>
      <Lista/>
    </todo-list>
  );
}

export default App;
