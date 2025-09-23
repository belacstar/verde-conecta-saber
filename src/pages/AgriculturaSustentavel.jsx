import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';

const AgriculturaSustentavel = () => {
    const etapas = [
        {
            id: 1,
            titulo: "Preparação do Solo com Composto",
            descricao: "Como preparar a terra usando o composto orgânico da compostagem escolar.",
            icone: "🌱",
            duracao: "20 min",
            topicos: [
                "Análise básica do solo",
                "Mistura de composto orgânico",
                "pH ideal para diferentes plantas",
                "Adubação natural e temperos",
                "Ferramentas necessárias"
            ]
        },
        {
            id: 2,
            titulo: "Sistema de Irrigação Sustentável",
            descricao: "Técnicas de rega eficiente e reaproveitamento de água na horta escolar.",
            icone: "💧",
            duracao: "15 min",
            topicos: [
                "Reaproveitamento de água da chuva",
                "Irrigação por gotejamento caseira",
                "Horários ideais para regar",
                "Mulching: conservação da umidade",
                "Indicadores de necessidade hídrica"
            ]
        },
        {
            id: 3,
            titulo: "Calendário de Plantio e Colheita",
            descricao: "Planejamento sazonal das culturas adequadas para o ambiente escolar.",
            icone: "📅",
            duracao: "12 min",
            topicos: [
                "Plantas de crescimento rápido",
                "Culturas adaptadas ao clima local",
                "Rotação de culturas",
                "Tempo de germinação por espécie",
                "Cronograma escolar integrado"
            ]
        }
    ];

    const circularidade = [
        {
            etapa: "Resíduos Orgânicos",
            icone: "🥬",
            descricao: "Sobras da merenda"
        },
        {
            etapa: "Compostagem",
            icone: "🪴",
            descricao: "Decomposição controlada"
        },
        {
            etapa: "Adubo Natural",
            icone: "🌱",
            descricao: "Nutrientes para a horta"
        },
        {
            etapa: "Cultivo",
            icone: "🌾",
            descricao: "Crescimento das plantas"
        },
        {
            etapa: "Colheita",
            icone: "🥕",
            descricao: "Alimentos frescos"
        },
        {
            etapa: "Merenda Escolar",
            icone: "🍽️",
            descricao: "Consumo sustentável"
        }
    ];

    const plantas = [
        {
            nome: "Alface",
            tempo: "45 dias",
            dificuldade: "Fácil",
            icone: "🥬",
            cor: "verde-claro"
        },
        {
            nome: "Rabanete",
            tempo: "30 dias",
            dificuldade: "Fácil",
            icone: "🟡",
            cor: "verde-claro"
        },
        {
            nome: "Cebolinha",
            tempo: "60 dias",
            dificuldade: "Fácil",
            icone: "🧅",
            cor: "verde-claro"
        },
        {
            nome: "Tomate Cereja",
            tempo: "90 dias",
            dificuldade: "Médio",
            icone: "🍅",
            cor: "amarelo-sol"
        },
        {
            nome: "Manjericão",
            tempo: "75 dias",
            dificuldade: "Médio",
            icone: "🌿",
            cor: "amarelo-sol"
        },
        {
            nome: "Pimentão",
            tempo: "120 dias",
            dificuldade: "Difícil",
            icone: "🌶️",
            cor: "marrom-terra"
        }
    ];

    return (
        <>
            <Header />
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-verde-claro to-amarelo-sol rounded-2xl text-white py-12 px-8 mb-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl mb-4">🌾</div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Agricultura Sustentável & Segurança Alimentar
                        </h1>
                        <p className="text-xl mb-6">
                            Horta escolar, circularidade alimentar e segurança nutricional sustentável
                        </p>
                        <div className="flex flex-wrap justify-center gap-2">
                            <Badge variant="ods" size="md">
                                ODS 2 - Fome Zero
                            </Badge>
                            <Badge variant="ods" size="md">
                                ODS 12 - Consumo Responsável
                            </Badge>
                        </div>
                    </div>
                </section>

                {/* Ciclo da Circularidade */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
                        Ciclo da Circularidade Alimentar
                    </h2>
                    <p className="text-center text-gray-600 mb-8 max-w-3xl mx-auto">
                        Entenda como os resíduos se transformam em adubo, que nutre a horta, que produz alimentos para a merenda, criando um ciclo sustentável completo.
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
                        {circularidade.map((item, index) => (
                            <div key={index} className="text-center">
                                <Card className="h-full p-4">
                                    <div className="text-3xl mb-2">{item.icone}</div>
                                    <h3 className="font-semibold text-verde-folha text-sm mb-1">
                                        {item.etapa}
                                    </h3>
                                    <p className="text-xs text-gray-600">
                                        {item.descricao}
                                    </p>
                                </Card>
                                {index < circularidade.length - 1 && (
                                    <div className="hidden md:block text-verde-claro text-2xl mt-2">
                                        →
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                {/* Etapas da Horta */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
                        Etapas da Horta Escolar
                    </h2>
                    <div className="space-y-6">
                        {etapas.map((etapa) => (
                            <Card key={etapa.id} className="p-6">
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-1/4 text-center">
                                        <div className="text-5xl mb-3">{etapa.icone}</div>
                                        <Badge variant="success" size="sm">
                                            {etapa.duracao}
                                        </Badge>
                                    </div>

                                    <div className="md:w-2/4">
                                        <h3 className="text-xl font-bold text-verde-folha mb-3">
                                            {etapa.titulo}
                                        </h3>
                                        <p className="text-gray-600 mb-4">
                                            {etapa.descricao}
                                        </p>
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-verde-folha">Aprenda sobre:</h4>
                                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                                {etapa.topicos.map((topico, index) => (
                                                    <li key={index}>{topico}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="md:w-1/4 flex flex-col justify-center space-y-3">
                                        <button className="bg-verde-folha text-white px-4 py-2 rounded-lg hover:bg-verde-claro transition-colors">
                                            📖 Estudar Etapa
                                        </button>
                                        <button className="bg-amarelo-sol text-gray-800 px-4 py-2 rounded-lg hover:bg-yellow-400 transition-colors">
                                            🎥 Ver Tutorial
                                        </button>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Plantas Recomendadas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-center text-verde-folha mb-6">
                        Plantas Ideais para Horta Escolar
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {plantas.map((planta, index) => (
                            <Card key={index} className="text-center p-4">
                                <div className="text-3xl mb-2">{planta.icone}</div>
                                <h3 className="font-semibold text-verde-folha mb-1">{planta.nome}</h3>
                                <p className="text-gray-600 text-sm mb-2">⏱️ {planta.tempo}</p>
                                <Badge
                                    variant={planta.dificuldade === 'Fácil' ? 'success' : planta.dificuldade === 'Médio' ? 'warning' : 'earth'}
                                    size="sm"
                                >
                                    {planta.dificuldade}
                                </Badge>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Dicas Práticas */}
                <section className="bg-cinza-claro rounded-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-verde-folha mb-6 text-center">
                        Dicas para o Sucesso da Horta
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card>
                            <h3 className="font-bold text-verde-claro mb-3 flex items-center">
                                💡 Dicas de Ouro
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Comece com plantas de crescimento rápido
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Envolva os alunos no planejamento
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Use recipientes reciclados como vasos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Crie um sistema de responsabilidades
                                </li>
                            </ul>
                        </Card>

                        <Card>
                            <h3 className="font-bold text-amarelo-sol mb-3 flex items-center">
                                🚫 Evite Problemas
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Não plante tudo de uma vez
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Evite locais com pouco sol
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Não use produtos químicos
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Não negligencie a manutenção
                                </li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Material para Download */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold text-verde-folha mb-6">
                        Recursos para Download
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="text-center">
                            <div className="text-3xl mb-3">📅</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Calendário de Plantio</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Cronograma sazonal personalizado
                            </p>
                            <button className="bg-verde-folha text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Download PDF
                            </button>
                        </Card>

                        <Card className="text-center">
                            <div className="text-3xl mb-3">📖</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Manual da Horta</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Guia completo passo a passo
                            </p>
                            <button className="bg-verde-folha text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Download PDF
                            </button>
                        </Card>

                        <Card className="text-center">
                            <div className="text-3xl mb-3">🌱</div>
                            <h3 className="font-semibold text-verde-folha mb-2">Fichas de Plantas</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Cards educativos das culturas
                            </p>
                            <button className="bg-verde-folha text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Download PDF
                            </button>
                        </Card>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default AgriculturaSustentavel;