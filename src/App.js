import React from 'react';
import Menu from './components/Menu'
import dadosIniciais from './data/dados_iniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{background: "#141414"}}>
      <Menu />
      <BannerMain url="https://www.youtube.com/watch?v=lrYABThl188" 
      videoDescription="O canal Curso em Vídeo completou 1 MILHÃO de inscritos! Para comemorar, preparamos esse especial de fim de ano, apresentando parte da nossa equipe, planos para 2020 e muitas outras novidades. Assista até o fim!" 
      videoTitle="Show do 1 MILHÃO 🌽 Feliz 2020 🥳"/>

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["0"]}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["1"]}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["2"]}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["3"]}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["4"]}
      />
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias["5"]}
      />
      <Footer />
    </div>
  );
}

export default App;