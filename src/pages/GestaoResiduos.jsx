import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';

const GestaoResiduos = () => {
    const modulos = [
        {
            id: 1,
            titulo: "Diferenciando Resíduos: Orgânicos vs Recicláveis",
            descricao: "Aprenda a identificar e separar corretamente os diferentes tipos de resíduos.",
            icone: "🗂️",
            duracao: "7 min",
            topicos: [
                "Resíduos orgânicos: cascas, restos de comida, talos",
                "Recicláveis: plástico, vidro, papel, metal",
                "Contaminados: não recicláveis",
                "Cores das lixeiras e sinalização",
                "Exercícios práticos de separação"
            ],
            cor: "marrom-terra"
        },
        {
            id: 2,
            titulo: "Reaproveitamento Criativo",
            descricao: "Receitas simples e ideias criativas para dar nova vida aos resíduos orgânicos.",
            icone: "👨‍🍳",
            duracao: "12 min",
            topicos: [
                "Receitas com cascas e talos",
                "Sucos e vitaminas integrais",
                "Caldos nutritivos caseiros",
                "Farinha de casca de banana",
                "Cartazes educativos para impressão"
            ],
            cor: "verde-claro"
        },
        {
            id: 3,
            titulo: "Compostagem: Do Lixo ao Adubo",
            descricao: "Passo a passo completo para fazer compostagem na escola com segurança e higiene.",
            icone: "🪴",
            duracao: "15 min",
            topicos: [
                "Materiais necessários: caixas, minhocário",
                "Proporções: carbono e nitrogênio",
                "Processo de decomposição",
                "Cuidados com higiene e temperatura",
                "Cronograma de manutenção"
            ],
            cor: "marrom-terra"
        },
        {
            id: 4,
            titulo: "Coleta e Armazenamento Seguro",
            descricao: "Práticas seguras para evitar pragas, odores e riscos sanitários na escola.",
            icone: "🧼",
            duracao: "10 min",
            topicos: [
                "Recipientes adequados para cantina",
                "Frequência de coleta",
                "Limpeza e desinfecção",
                "Prevenção de pragas urbanas",
                "Normas de segurança alimentar"
            ],
            cor: "amarelo-sol"
        }
    ];

    const receitas = [
        {
            nome: "Farofa de Talos",
            ingredientes: "Talos de couve, cebola, alho",
            tempo: "15 min",
            icone: "🥬"
        },
        {
            nome: "Suco de Casca de Abacaxi",
            ingredientes: "Casca de abacaxi, água, açúcar",
            tempo: "10 min",
            icone: "🍍"
        },
        {
            nome: "Caldo de Cascas",
            ingredientes: "Cascas de legumes, temperos",
            tempo: "30 min",
            icone: "🍲"
        }
    ];

    return (
        <>
            <Header />
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-marrom-terra to-verde-claro rounded-2xl text-white py-12 px-8 mb-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl mb-4">♻️</div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Gestão de Resíduos Orgânicos
                        </h1>
                        <p className="text-xl mb-6">
                            Transforme restos orgânicos em recursos: compostagem, receitas de reaproveitamento e práticas sustentáveis
                        </p>
                        <Badge variant="ods" size="lg" className="mb-4">
                            🎯 Redução de Desperdício + Zero Waste
                        </Badge>
                    </div>
                </section>

                {/* Módulos de Aprendizagem */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-marrom-terra mb-8">
                        Módulos de Aprendizagem
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {modulos.map((modulo) => (
                            <Card key={modulo.id} className="h-full">
                                <div className="text-center mb-4">
                                    <div className="text-4xl mb-3">{modulo.icone}</div>
                                    <h3 className="text-lg font-bold text-marrom-terra mb-2">
                                        {modulo.titulo}
                                    </h3>
                                    <Badge variant="warning" size="sm" className="mb-3">
                                        {modulo.duracao}
                                    </Badge>
                                    <p className="text-gray-600 mb-4 text-sm">
                                        {modulo.descricao}
                                    </p>
                                </div>

                                <div className="space-y-2 mb-6">
                                    <h4 className="font-semibold text-marrom-terra text-sm">Você vai aprender:</h4>
                                    <ul className="text-xs text-gray-600 space-y-1">
                                        {modulo.topicos.slice(0, 3).map((topico, index) => (
                                            <li key={index} className="flex items-start">
                                                <span className="text-verde-claro mr-2">•</span>
                                                {topico}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-2">
                                    <button className={`w-full bg-${modulo.cor} text-white py-2 px-4 rounded-lg text-sm hover:opacity-90 transition-opacity`}>
                                        📖 Iniciar Módulo
                                    </button>
                                    <button className="w-full border border-marrom-terra text-marrom-terra py-2 px-4 rounded-lg text-sm hover:bg-marrom-terra hover:text-white transition-colors">
                                        📝 Quiz do Módulo
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Receitas Rápidas */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-center text-marrom-terra mb-6">
                        Receitas de Reaproveitamento
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {receitas.map((receita, index) => (
                            <Card key={index} className="text-center p-4">
                                <div className="text-3xl mb-2">{receita.icone}</div>
                                <h3 className="font-semibold text-marrom-terra mb-1">{receita.nome}</h3>
                                <p className="text-gray-600 text-xs mb-2">{receita.ingredientes}</p>
                                <Badge variant="warning" size="sm" className="mb-3">
                                    ⏱️ {receita.tempo}
                                </Badge>
                                <button className="w-full bg-verde-claro text-white py-1 px-3 rounded text-xs hover:bg-verde-folha transition-colors">
                                    Ver Receita
                                </button>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Infográfico: Certo vs Errado */}
                <section className="bg-cinza-claro rounded-xl p-8 mb-8">
                    <h2 className="text-2xl font-bold text-marrom-terra mb-6 text-center">
                        Compostagem: Certo ❌ Errado
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Certo */}
                        <Card className="border-l-4 border-verde-claro">
                            <h3 className="font-bold text-verde-claro mb-4 flex items-center">
                                ✅ Faça Assim
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Use cascas de frutas e legumes
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Misture materiais secos (folhas, papel)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Mantenha umidade controlada
                                </li>
                                <li className="flex items-start">
                                    <span className="text-verde-claro mr-2">•</span>
                                    Cubra sempre após adicionar restos
                                </li>
                            </ul>
                        </Card>

                        {/* Errado */}
                        <Card className="border-l-4 border-red-500">
                            <h3 className="font-bold text-red-500 mb-4 flex items-center">
                                ❌ Evite Isso
                            </h3>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Carnes, ossos ou laticínios
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Deixar descoberto (atrai pragas)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Excesso de água (apodrece)
                                </li>
                                <li className="flex items-start">
                                    <span className="text-red-500 mr-2">•</span>
                                    Ignorar o cronograma de manutenção
                                </li>
                            </ul>
                        </Card>
                    </div>
                </section>

                {/* Downloads */}
                <section className="text-center">
                    <h2 className="text-2xl font-bold text-marrom-terra mb-6">
                        Material para Download
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="text-center">
                            <div className="text-4xl mb-3">📋</div>
                            <h3 className="font-semibold text-marrom-terra mb-2">Guia de Compostagem</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Manual completo com passo a passo ilustrado
                            </p>
                            <button className="bg-marrom-terra text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Download PDF
                            </button>
                        </Card>

                        <Card className="text-center">
                            <div className="text-4xl mb-3">📄</div>
                            <h3 className="font-semibold text-marrom-terra mb-2">Cartazes Educativos</h3>
                            <p className="text-gray-600 text-sm mb-4">
                                Pôsteres prontos para imprimir e colar na escola
                            </p>
                            <button className="bg-marrom-terra text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                                Download PDF
                            </button>
                        </Card>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default GestaoResiduos;