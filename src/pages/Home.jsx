import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';
import hero1 from '../assets/hero/hero1.jpg';
import hero2 from '../assets/hero/hero2.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Carrossel de imagens da hero
  const heroImages = [hero1, hero2];


  // Carrossel estático: sem autoplay, navegação manual

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
      <section className="relative overflow-hidden min-h-[65vh] md:min-h-[70vh] w-full bg-gray-200">
        {/* Carrossel de Imagens - Full Width */}
        <div className="absolute inset-0" style={{ position: 'relative' }}>
          <div
            className="flex transition-transform duration-[600ms] ease-in-out h-full"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {heroImages.map((image, index) => (
              <div key={index} className="relative flex-shrink-0 w-full h-full min-h-[65vh]">
                <img
                  src={image}
                  alt={`Hero ${index + 1}`}
                  className="w-full h-full object-cover block"
                  onError={(e) => { console.error('Erro ao carregar imagem:', image); e.target.style.opacity = 0.5; }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-verde-folha/70 via-verde-folha/50 to-transparent"></div>
                {/* overlay específico para o primeiro slide */}
                {index === 0 && (
                  <div style={{ position: 'absolute', left: '4%', top: '8%', zIndex: 45, display: 'grid', gap: '12px', gridTemplateColumns: '1fr', maxWidth: '48%', minWidth: '260px' }}>
                    {/* Title card (now at top-left) */}
                    <div className="rounded-xl" style={{ overflow: 'hidden', transform: 'translateY(0)', transition: 'transform 300ms ease' }}>
                      <div style={{ padding: '12px 16px', background: 'linear-gradient(90deg, rgba(255,255,255,0.92), rgba(250,250,250,0.86))', borderRadius: '12px', boxShadow: '0 12px 36px rgba(0,0,0,0.24)', borderLeft: '6px solid rgba(27,94,32,0.9)' }}>
                        <h2 className="m-0" style={{ color: '#1B5E20', fontSize: '20px', fontWeight: 800, letterSpacing: '-0.2px', textShadow: '0 3px 8px rgba(27,94,32,0.08)' }}>Verde Conecta Saber</h2>
                      </div>
                    </div>

                    {/* Subtitle card */}
                    <div className="rounded-xl" style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '12px 16px', background: 'linear-gradient(180deg, rgba(255,255,255,0.96), rgba(250,250,250,0.92))', borderRadius: '12px', boxShadow: '0 6px 18px rgba(0,0,0,0.12)' }}>
                        <h3 className="text-lg lg:text-xl font-semibold text-gray-800 m-0">Aprenda, plante e colha sustentabilidade na sua escola.</h3>
                      </div>
                    </div>

                    {/* Content + CTA card */}
                    <div className="rounded-xl" style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '14px 18px', background: 'linear-gradient(180deg, rgba(255,255,255,0.98), rgba(245,245,245,0.95))', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.18)' }}>
                        <div className="text-sm lg:text-base text-gray-700" style={{ lineHeight: 1.6 }}>
                          <p style={{ margin: 0 }}>A natureza é nossa casa comum, e cuidar dela é uma missão de todos.</p>
                          <p style={{ marginTop: '8px' }}>Na escola, aprender sobre meio ambiente significa entender como nossas escolhas do dia a dia afetam o planeta.</p>
                        </div>

                        <div style={{ marginTop: '12px' }}>
                          <Link to="/educacao-ambiental" className="inline-block px-4 py-2 rounded-lg font-semibold text-white" style={{ background: 'linear-gradient(90deg,#2E7D32,#66BB6A)', boxShadow: '0 8px 22px rgba(46,125,50,0.24)' }}>
                            Ir para Educação Ambiental →
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {/* (debug removido) */}
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

              {/* frase especial removida daqui e colocada dentro do primeiro slide para garantir visibilidade */}

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

          {/* Indicadores do Carrossel (bolinhas) */}
          <div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-50"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              pointerEvents: 'auto'
            }}
          >
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Ir para slide ${index + 1}`}
                style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  border: '2px solid white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: currentSlide === index ? '#2E7D32' : 'rgba(255,255,255,0.8)',
                  boxShadow: currentSlide === index ? '0 4px 16px rgba(46,125,50,0.5)' : '0 2px 8px rgba(0,0,0,0.2)',
                  transform: currentSlide === index ? 'scale(1.3)' : 'scale(1)'
                }}
              />
            ))}
          </div>

          {/* Setas de Navegação */}
          <button
            onClick={() => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
            style={{
              position: 'absolute',
              left: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 60,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0,0,0,0.8)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0,0,0,0.6)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Anterior"
          >
            &#8249;
          </button>
          <button
            onClick={() => setCurrentSlide((prev) => (prev + 1) % heroImages.length)}
            style={{
              position: 'absolute',
              right: '24px',
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 60,
              width: '56px',
              height: '56px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: 'rgba(0,0,0,0.6)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              pointerEvents: 'auto',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(0,0,0,0.8)';
              e.target.style.transform = 'translateY(-50%) scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(0,0,0,0.6)';
              e.target.style.transform = 'translateY(-50%) scale(1)';
            }}
            aria-label="Próximo"
          >
            &#8250;
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
