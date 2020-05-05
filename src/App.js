import React from 'react';
import GlobalStyle from './styles/global';
import { Container, ChocolateList } from './styles/styles';
import chocolateImg from './assets/images/chocolate.svg';

function App() {
  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Container>
          <img src={chocolateImg} alt="Logo com barra de chocolate" />
          <h1>Chocolates</h1>
          <ChocolateList>
            <li>
              <div>
                <img src={chocolateImg} alt="Imagem de chocolate redonda" />
                <div>
                  <h2>Chocolate de teste</h2>
                  <p>Valor: R$ 10,00</p>
                  <p>Marca: Cacau Show</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <img src={chocolateImg} alt="Imagem de chocolate redonda" />
                <div>
                  <h2>Chocolate de teste 2 </h2>
                  <p>Valor: R$ 10,00</p>
                  <p>Marca: Cacau Show</p>
                </div>
              </div>
            </li>
          </ChocolateList>
        </Container>
      </>
    </div> // Fechando div app
  );
}

export default App;
