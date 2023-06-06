import './App.css';

function Msg() {
  return (
    <h3>
      Olá Rhavy! Seja bem vindo a minha aplicação React!
    </h3>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Hello World!</h1>
      <Msg />
    </div>
  );
}