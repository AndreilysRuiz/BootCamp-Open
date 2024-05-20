//CSS
import "./App.css";

//Componentes
import Mensaje from "./Components/Mensaje";

function App() {
  const mensaje = "Hola Mundo desde Variable";
  const mensaje1 = "Hola ";
  const a = 5;
  const b = 10;
  return (
    <>
      <header>
        <h2>{mensaje}</h2>
        <h3>{mensaje1 + "Evaluando desde JSX"}</h3>

        <h1>Titulo de la App</h1>
        <strong>Estamos trabajando en ello</strong>
        <section>
          <p>El reusultado es:</p>
          {a + b}
          <Mensaje color='red' message="Estamos Trabajando"/>
          <Mensaje color="Green" message="En un curso" />
          <Mensaje color="yellow" message="de react" />
        </section>
      </header>
    </>
  );
}

export default App;
