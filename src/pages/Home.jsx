import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrossel de imagens da hero direita
  const heroImages = [
    '/hero2.jpg',
    '/hero1.jpg'
  ];

  // Auto-play do carrossel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000); // Troca a cada 4 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const temas = [
    {
      id: 1,
      titulo: "Educação Ambiental nas Escolas",
      descricao: "Trilhas sobre sustentabilidade, ODS e cidadania ambiental aplicados ao cotidiano escolar.",
      icone: "🌱",
      cor: "verde-folha",
      link: "/educacao-ambiental",
      topicos: ["ODS - Objetivos de Desenvolvimento Sustentável", "Consumo consciente", "Cidadania ambiental"]
    },
    {
      id: 2,
      titulo: "Gestão de Resíduos Orgânicos",
      descricao: "Como reaproveitar resíduos orgânicos, compostagem e práticas sustentáveis na escola.",
      icone: "♻️",
      cor: "marrom-terra",
      link: "/gestao-residuos",
      topicos: ["Diferença entre orgânicos e recicláveis", "Compostagem passo a passo", "Receitas de reaproveitamento"]
    },
    {
      id: 3,
      titulo: "Agricultura Sustentável & Segurança Alimentar",
      descricao: "Horta escolar, circularidade alimentar e segurança nutricional sustentável.",
      icone: "🌾",
      cor: "verde-claro",
      link: "/agricultura-sustentavel",
      topicos: ["Horta escolar", "Circularidade alimentar", "Calendário de plantio"]
    }
  ];

  const indicadores = [
    { titulo: "Quizzes Concluídos", valor: "1,247", icone: "🎯" },
    { titulo: "Estudantes Ativos", valor: "823", icone: "👥" },
    { titulo: "Escolas Participantes", valor: "45", icone: "🏫" },
    { titulo: "Badges Conquistadas", valor: "3,892", icone: "🏆" }
  ];

  return (
    <>
      {/* Header fixado no topo */}
      <Header />

      {/* Hero Section - Full Width */}
      <section className="relative overflow-hidden min-h-[70vh] md:min-h-[80vh] w-full">
        {/* Carrossel de Imagens - Full Width */}
        <div className="absolute inset-0">
          <div
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div
                key={index}
                className="relative bg-cover bg-center bg-no-repeat flex-shrink-0 w-full h-full"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="absolute inset-0 bg-verde-folha/60"></div>
              </div>
            ))}
          </div>

          {/* Conteúdo centralizado sobre o carrossel */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-8">
            <div className="text-center text-white max-w-4xl">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
                Verde Conecta Saber
              </h1>
              <p className="text-xl lg:text-3xl mb-8 font-semibold drop-shadow-md">
                Educação ambiental sustentável para escolas
              </p>
              <p className="text-base lg:text-xl leading-relaxed drop-shadow-sm opacity-95 mb-12 max-w-3xl mx-auto">
                Aprenda sobre sustentabilidade, gestão de resíduos orgânicos e agricultura sustentável
                através de trilhas educativas, jogos interativos e desafios práticos alinhados aos ODS.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  to="/agricultura-sustentavel"
                  className="bg-amarelo-sol text-verde-folha px-8 py-4 rounded-2xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  🌱 Crie sua Horta
                </Link>
                <Link
                  to="/atividades"
                  className="bg-white/90 text-verde-folha px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white transition-all duration-300 shadow-2xl transform hover:scale-105"
                >
                  🎮 Comece pelo Quiz
                </Link>
              </div>
            </div>
          </div>

          {/* Indicadores do Carrossel */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
            <div className="flex space-x-3">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${currentSlide === index
                    ? 'bg-white scale-110'
                    : 'bg-white/50 hover:bg-white/80'
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Botões de Navegação */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/20 hover:bg-black/40 text-white p-3 rounded-full transition-all duration-300"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </section>

      {/* Resto do conteúdo dentro do Layout */}
      <Layout>
        {/* Indicadores de Impacto */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Nosso Impacto</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Transformando a educação ambiental através da tecnologia
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {indicadores.map((indicador, index) => (
              <Card key={index} className="text-center group">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {indicador.icone}
                </div>
                <div className="text-3xl font-bold text-verde-folha mb-2">
                  {indicador.valor}
                </div>
                <div className="text-gray-600 font-medium">
                  {indicador.titulo}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Temas Principais */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-center mb-4">
            <span className="text-gradient">Explore os Temas Principais</span>
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Trilhas educativas alinhadas aos Objetivos de Desenvolvimento Sustentável
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {temas.map((tema) => (
              <Card
                key={tema.id}
                onClick={() => window.location.href = tema.link}
                className="h-full group relative overflow-hidden"
              >
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {tema.icone}
                  </div>
                  <h3 className="text-2xl font-bold text-verde-folha mb-3">
                    {tema.titulo}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {tema.descricao}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tema.topicos.map((topico, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-verde-claro rounded-full mr-3"></div>
                      {topico}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">
                  <Link
                    to={tema.link}
                    className="btn-primary block w-full text-center rounded-xl font-bold transform group-hover:scale-105 transition-all duration-300"
                  >
                    Explorar Tema →
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Seção Rápida de Atividades */}
        <section className="bg-white rounded-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-verde-folha mb-4">
              Atividades & Jogos
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Aprenda de forma divertida através de quizzes, jogos da memória e desafios práticos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-verde-folha mb-2">Quiz Educativo</h3>
              <p className="text-gray-600 text-sm mb-4">
                Teste seus conhecimentos sobre sustentabilidade
              </p>
              <Link
                to="/atividades"
                className="inline-block bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors"
              >
                Jogar Agora
              </Link>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-3">🧩</div>
              <h3 className="font-semibold text-verde-folha mb-2">Jogo da Memória</h3>
              <p className="text-gray-600 text-sm mb-4">
                Combine alimentos com seu destino correto
              </p>
              <Link
                to="/atividades"
                className="inline-block bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors"
              >
                Jogar Agora
              </Link>
            </Card>

            <Card className="text-center">
              <div className="text-4xl mb-3">🏆</div>
              <h3 className="font-semibold text-verde-folha mb-2">Recompensas</h3>
              <p className="text-gray-600 text-sm mb-4">
                Conquiste badges e acompanhe seu progresso
              </p>
              <Link
                to="/recompensas"
                className="inline-block bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors"
              >
                Ver Troféus
              </Link>
            </Card>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
