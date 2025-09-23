import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Badge from '../components/Badge';

const Home = () => {
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
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-verde-folha to-verde-claro rounded-2xl text-white py-16 px-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Verde Conecta Saber
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-verde-claro">
            Educação ambiental sustentável para escolas
          </p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Aprenda sobre sustentabilidade, gestão de resíduos orgânicos e agricultura sustentável 
            através de trilhas educativas, jogos interativos e desafios práticos alinhados aos ODS.
          </p>
          
          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/atividades"
              className="bg-amarelo-sol text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              🎮 Comece pelo Quiz
            </Link>
            <Link
              to="/agricultura-sustentavel"
              className="bg-white text-verde-folha px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              🌱 Crie sua Horta
            </Link>
          </div>
        </div>
      </section>

      {/* Indicadores de Impacto */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
          Nosso Impacto
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicadores.map((indicador, index) => (
            <Card key={index} className="text-center">
              <div className="text-3xl mb-2">{indicador.icone}</div>
              <div className="text-2xl font-bold text-verde-folha mb-1">
                {indicador.valor}
              </div>
              <div className="text-gray-600 text-sm">
                {indicador.titulo}
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Temas Principais */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
          Explore os Temas Principais
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {temas.map((tema) => (
            <Card 
              key={tema.id}
              onClick={() => window.location.href = tema.link}
              className="h-full"
            >
              <div className="text-center mb-4">
                <div className="text-5xl mb-3">{tema.icone}</div>
                <h3 className="text-xl font-bold text-verde-folha mb-2">
                  {tema.titulo}
                </h3>
                <p className="text-gray-600 mb-4">
                  {tema.descricao}
                </p>
              </div>
              
              <div className="space-y-2">
                {tema.topicos.map((topico, index) => (
                  <Badge key={index} variant="default" size="sm" className="mr-1 mb-1">
                    {topico}
                  </Badge>
                ))}
              </div>
              
              <div className="mt-6">
                <Link
                  to={tema.link}
                  className={`block w-full text-center py-3 px-4 bg-${tema.cor} text-white rounded-lg font-semibold hover:opacity-90 transition-opacity`}
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
  );
};

export default Home;