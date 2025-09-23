import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';

const EducacaoAmbiental = () => {
    const trilhas = [
        {
            id: 1,
            titulo: "ODS - Objetivos de Desenvolvimento Sustentável",
            descricao: "Entenda as metas globais da ONU para melhorar qualidade de vida, reduzir desigualdades e preservar o planeta até 2030.",
            icone: "🌍",
            duracao: "10 min",
            topicos: [
                "O que são os ODS?",
                "ODS 2 - Fome Zero e Agricultura Sustentável",
                "ODS 12 - Consumo e Produção Responsáveis",
                "ODS 13 - Ação contra a Mudança Global do Clima",
                "Como aplicar na escola"
            ],
            videoUrl: "#",
            badges: ["ODS", "Sustentabilidade"]
        },
        {
            id: 2,
            titulo: "Consumo Consciente no Cotidiano Escolar",
            descricao: "Práticas sustentáveis que podem ser aplicadas no dia a dia da escola para reduzir desperdícios.",
            icone: "♻️",
            duracao: "8 min",
            topicos: [
                "Reduzir, Reutilizar, Reciclar",
                "Economia de água e energia",
                "Alimentação sustentável na merenda",
                "Materiais escolares ecológicos",
                "Criando um plano de ação"
            ],
            videoUrl: "#",
            badges: ["Consumo Consciente", "Economia"]
        },
        {
            id: 3,
            titulo: "Cidadania Ambiental na Prática",
            descricao: "Como formar cidadãos conscientes e engajados na preservação ambiental através de ações coletivas.",
            icone: "🤝",
            duracao: "12 min",
            topicos: [
                "Responsabilidade ambiental coletiva",
                "Projetos comunitários na escola",
                "Clubes verdes e eco-equipes",
                "Comunicação e conscientização",
                "Monitoramento de resultados"
            ],
            videoUrl: "#",
            badges: ["Cidadania", "Liderança"]
        }
    ];

    return (
        <>
            <Header />
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-verde-folha to-verde-claro rounded-2xl text-white py-12 px-8 mb-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl mb-4">🌱</div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Educação Ambiental nas Escolas
                        </h1>
                        <p className="text-xl mb-6">
                            Trilhas educativas sobre sustentabilidade, ODS e cidadania ambiental aplicados ao cotidiano escolar
                        </p>
                        <Badge variant="ods" size="lg" className="mb-4">
                            🎯 Alinhado aos ODS 2, 4, 12 e 13
                        </Badge>
                    </div>
                </section>

                {/* Trilhas Educativas */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
                        Trilhas de Aprendizagem
                    </h2>
                    <div className="space-y-8">
                        {trilhas.map((trilha) => (
                            <Card key={trilha.id} className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Ícone e Info Básica */}
                                    <div className="md:w-1/4 text-center">
                                        <div className="text-5xl mb-3">{trilha.icone}</div>
                                        <Badge variant="primary" size="sm" className="mb-2">
                                            {trilha.duracao}
                                        </Badge>
                                        <div className="space-x-1">
                                            {trilha.badges.map((badge, index) => (
                                                <Badge key={index} variant="success" size="sm">
                                                    {badge}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Conteúdo */}
                                    <div className="md:w-2/4">
                                        <h3 className="text-xl font-bold text-verde-folha mb-3">
                                            {trilha.titulo}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {trilha.descricao}
                                        </p>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-verde-folha">Tópicos abordados:</h4>
                                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                                {trilha.topicos.map((topico, index) => (
                                                    <li key={index}>{topico}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Ações */}
                                    <div className="md:w-1/4 flex flex-col justify-center space-y-3">
                                        <button className="bg-verde-folha text-white px-4 py-2 rounded-lg hover:bg-verde-claro transition-colors">
                                            📖 Ler Conteúdo
                                        </button>
                                        <button className="bg-amarelo-sol text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                                            🎥 Assistir Vídeo
                                        </button>
                                        <button className="border border-verde-folha text-verde-folha px-4 py-2 rounded-lg hover:bg-verde-folha hover:text-white transition-colors">
                                            📝 Fazer Quiz
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Material de Apoio */}
                <section className="bg-cinza-claro rounded-xl p-8">
                    <h2 className="text-2xl font-bold text-verde-folha mb-6 text-center">
                        Material de Apoio para Professores
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <div className="text-3xl mb-3">📚</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Planos de Aula</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Planos prontos para aplicar as atividades em sala
                            </p>
                            <button className="bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors">
                                Download PDF
                            </button>
                        </Card>

                        <Card className="text-center">
                            <div className="text-3xl mb-3">🖼️</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Pôsteres Educativos</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Material visual pronto para impressão
                            </p>
                            <button className="bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors">
                                Download PDF
                            </button>
                        </Card>

                        <Card className="text-center">
                            <div className="text-3xl mb-3">📊</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Cartilhas ODS</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Guias completos sobre Objetivos de Desenvolvimento Sustentável
                            </p>
                            <button className="bg-verde-claro text-white px-4 py-2 rounded-lg text-sm hover:bg-verde-folha transition-colors">
                                Download PDF
                            </button>
                        </Card>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default EducacaoAmbiental;