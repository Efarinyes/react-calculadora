import { useState } from "react";
import "./App.css";

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function Button({ onPressed, children }) {
  return <button onClick={onPressed}> {children}</button>;
}

const initialAntic = 0;
const initialDisplay = 0;
const initialOperacio = "";
function App() {
  const [antic, setAntic] = useState(initialAntic);
  const [operacio, setOperacio] = useState(initialOperacio);
  const [novaEntrada, setNovaEntrada] = useState(false);
  const [display, setDisplay] = useState(initialDisplay);

  const entrarNumero = (numero) => {
    if (novaEntrada) setDisplay(numero);
    else setDisplay(display * 10 + numero);
    setNovaEntrada(false);
  };

  const entraOperacio = (operacio) => {
    setNovaEntrada(true);
    setAntic(display);
    if (!novaEntrada) calcular();
    setOperacio(operacio);
  };
  const calcular = () => {
    if (operacio === "+") setDisplay(antic + display);
    if (operacio === "-") setDisplay(antic - display);
  };

  const clear = () => {
    setOperacio("");
    setDisplay(initialDisplay);
    setAntic(initialAntic);
  };

  return (
    <div className="calculadora">
      <div className="display">{display}</div>
      <div className="numeros">
        {numeros.map((numero) => (
          <Button onPressed={() => entrarNumero(numero)} key={numero}>
            {numero}
          </Button>
        ))}
      </div>
      <div className="botons">
        <button onClick={() => entraOperacio("+")}>+</button>
        <button onClick={calcular}>=</button>
        <button onClick={() => entraOperacio("-")}>-</button>
        <button onClick={clear}>C</button>
      </div>
    </div>
  );
}

export default App;
