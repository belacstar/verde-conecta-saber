import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EducacaoAmbiental from './pages/EducacaoAmbiental';
import GestaoResiduos from './pages/GestaoResiduos';
import AgriculturaSustentavel from './pages/AgriculturaSustentavel';
import Atividades from './pages/Atividades';
import JogoMemoria from './pages/JogoMemoria';
import TopicPlaceholder from './pages/TopicPlaceholder';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/educacao-ambiental" element={<EducacaoAmbiental />} />
        <Route path="/gestao-residuos" element={<GestaoResiduos />} />
        <Route path="/agricultura-sustentavel" element={<AgriculturaSustentavel />} />
        <Route path="/atividades" element={<Atividades />} />
        <Route path="/jogo-memoria" element={<JogoMemoria />} />
        <Route path="/recompensas" element={<TopicPlaceholder title="Recompensas" />} />
        <Route path="/material-apoio" element={<TopicPlaceholder title="Material de Apoio" />} />
        <Route path="*" element={<TopicPlaceholder title="Página não encontrada" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
