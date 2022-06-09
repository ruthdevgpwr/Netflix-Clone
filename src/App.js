import './App.css';
import Row from './components/Row';
import categories from './api';
import Banner from './components/Banner';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      {/*
    - NavBar
    - destaque
    - Em alta
    - Filmes de cada categoria*/}

      {/*
      conseguimos passar propriedades para o componente do React, então estamos falando que um 
      Row vai receber um key, um title e um path
      Lá o componente Row no arquivo Row.js conseguimos colocar essas propriedades que ele tá recebendo
      , que são as propriedades que citei acima
      */}
      <Nav />
      <Banner />
      {categories.map((category) => {
        return (
          <Row
            key={category.name} // só serve para o React renderizar e ele tem que ser único
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        );
      })}
    </div>
  );
}

export default App;
