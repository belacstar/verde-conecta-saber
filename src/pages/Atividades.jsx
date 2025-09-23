import React, { useState } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Dialog from '../components/Dialog';

const Atividades = () => {
    const [selectedQuiz, setSelectedQuiz] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [answers, setAnswers] = useState([]);

    const quizzes = [
        {
            id: 1,
            titulo: "ODS e Sustentabilidade",
            descricao: "Teste seus conhecimentos sobre Objetivos de Desenvolvimento Sustentável",
            nivel: "Fundamental I",
            icone: "🌍",
            cor: "verde-folha",
            perguntas: [
                {
                    pergunta: "O que significa ODS?",
                    opcoes: [
                        "Objetivos de Desenvolvimento Sustentável",
                        "Organização de Desenvolvimento Social",
                        "Objetivos de Defesa Social",
                        "Ordem de Desenvolvimento Sustentável"
                    ],
                    resposta: 0
                },
                {
                    pergunta: "Qual ODS trata da Fome Zero?",
                    opcoes: ["ODS 1", "ODS 2", "ODS 3", "ODS 4"],
                    resposta: 1
                },
                {
                    pergunta: "O que é consumo consciente?",
                    opcoes: [
                        "Comprar tudo que queremos",
                        "Usar recursos de forma responsável",
                        "Não comprar nada",
                        "Comprar apenas produtos caros"
                    ],
                    resposta: 1
                }
            ]
        },
        {
            id: 2,
            titulo: "Compostagem e Resíduos",
            descricao: "Aprenda sobre separação de resíduos e compostagem",
            nivel: "Fundamental II",
            icone: "♻️",
            cor: "marrom-terra",
            perguntas: [
                {
                    pergunta: "O que pode ir na compostagem?",
                    opcoes: [
                        "Cascas de frutas",
                        "Carnes e ossos",
                        "Plásticos",
                        "Vidros"
                    ],
                    resposta: 0
                },
                {
                    pergunta: "Qual cor de lixeira é para orgânicos?",
                    opcoes: ["Azul", "Verde", "Marrom", "Amarela"],
                    resposta: 2
                },
                {
                    pergunta: "Quanto tempo leva a compostagem?",
                    opcoes: ["1 semana", "1 mês", "3-6 meses", "1 ano"],
                    resposta: 2
                }
            ]
        },
        {
            id: 3,
            titulo: "Horta Escolar",
            descricao: "Conheça sobre agricultura sustentável e hortas",
            nivel: "Ensino Médio",
            icone: "🌱",
            cor: "verde-claro",
            perguntas: [
                {
                    pergunta: "Qual o melhor horário para regar plantas?",
                    opcoes: [
                        "Meio-dia",
                        "Início da manhã",
                        "Tarde quente",
                        "Qualquer horário"
                    ],
                    resposta: 1
                },
                {
                    pergunta: "O que é circularidade alimentar?",
                    opcoes: [
                        "Comer apenas frutas redondas",
                        "Reaproveitamento em ciclos sustentáveis",
                        "Plantar em círculos",
                        "Comer em horários fixos"
                    ],
                    resposta: 1
                },
                {
                    pergunta: "Qual planta cresce mais rápido?",
                    opcoes: ["Tomate", "Rabanete", "Pimentão", "Manga"],
                    resposta: 1
                }
            ]
        }
    ];

    const jogos = [
        {
            id: 1,
            titulo: "Jogo da Memória",
            descricao: "Combine alimentos com seu destino correto",
            icone: "🧩",
            cor: "amarelo-sol",
            disponivel: false
        },
        {
            id: 2,
            titulo: "Labirinto Verde",
            descricao: "Da casca à composteira - encontre o caminho",
            icone: "🔄",
            cor: "verde-claro",
            disponivel: false
        }
    ];

    const handleStartQuiz = (quiz) => {
        setSelectedQuiz(quiz);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setAnswers([]);
    };

    const handleAnswer = (selectedOption) => {
        const currentQuiz = selectedQuiz;
        const isCorrect = selectedOption === currentQuiz.perguntas[currentQuestion].resposta;

        setAnswers([...answers, {
            pergunta: currentQuiz.perguntas[currentQuestion].pergunta,
            resposta: selectedOption,
            correta: isCorrect
        }]);

        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion + 1 < currentQuiz.perguntas.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setShowResult(true);
        }
    };

    const resetQuiz = () => {
        setSelectedQuiz(null);
        setCurrentQuestion(0);
        setScore(0);
        setShowResult(false);
        setAnswers([]);
    };

    const getScoreMessage = () => {
        const percentage = (score / selectedQuiz.perguntas.length) * 100;
        if (percentage >= 80) return "🏆 Excelente! Você é um expert em sustentabilidade!";
        if (percentage >= 60) return "🌟 Muito bem! Continue aprendendo!";
        if (percentage >= 40) return "💪 Bom trabalho! Que tal revisar o conteúdo?";
        return "📚 Continue estudando! Você vai conseguir!";
    };

    return (
        <>
            <Header />
            <Layout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-amarelo-sol to-verde-claro rounded-2xl text-white py-12 px-8 mb-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="text-6xl mb-4">🎮</div>
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Atividades & Jogos
                        </h1>
                        <p className="text-xl mb-6">
                            Aprenda de forma divertida através de quizzes, jogos interativos e desafios práticos
                        </p>
                    </div>
                </section>

                {/* Quizzes Educativos */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
                        Quizzes Educativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {quizzes.map((quiz) => (
                            <Card key={quiz.id} className="text-center">
                                <div className="text-4xl mb-3">{quiz.icone}</div>
                                <h3 className="font-bold text-verde-folha mb-2">{quiz.titulo}</h3>
                                <p className="text-gray-600 text-sm mb-3">{quiz.descricao}</p>
                                <Badge variant="primary" size="sm" className="mb-4">
                                    {quiz.nivel}
                                </Badge>
                                <div className="space-y-2">
                                    <p className="text-xs text-gray-500">
                                        {quiz.perguntas.length} perguntas
                                    </p>
                                    <button
                                        onClick={() => handleStartQuiz(quiz)}
                                        className={`w-full bg-${quiz.cor} text-white py-2 px-4 rounded-lg hover:opacity-90 transition-opacity`}
                                    >
                                        🎯 Iniciar Quiz
                                    </button>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Jogos Interativos */}
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-verde-folha mb-8">
                        Jogos Interativos
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jogos.map((jogo) => (
                            <Card key={jogo.id} className="text-center">
                                <div className="text-4xl mb-3">{jogo.icone}</div>
                                <h3 className="font-bold text-verde-folha mb-2">{jogo.titulo}</h3>
                                <p className="text-gray-600 text-sm mb-4">{jogo.descricao}</p>
                                <button
                                    disabled={!jogo.disponivel}
                                    className={`w-full py-2 px-4 rounded-lg transition-opacity ${jogo.disponivel
                                        ? `bg-${jogo.cor} text-white hover:opacity-90`
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    {jogo.disponivel ? '🎮 Jogar' : '🔒 Em Breve'}
                                </button>
                            </Card>
                        ))}
                    </div>
                </section>

                {/* Dialog do Quiz */}
                <Dialog
                    isOpen={selectedQuiz && !showResult}
                    onClose={resetQuiz}
                    title={selectedQuiz?.titulo}
                    className="max-w-2xl"
                >
                    {selectedQuiz && (
                        <div>
                            <div className="mb-4">
                                <div className="flex justify-between items-center mb-4">
                                    <Badge variant="primary" size="sm">
                                        Pergunta {currentQuestion + 1} de {selectedQuiz.perguntas.length}
                                    </Badge>
                                    <Badge variant="success" size="sm">
                                        Pontos: {score}
                                    </Badge>
                                </div>

                                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                                    <div
                                        className="bg-verde-claro h-2 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${((currentQuestion + 1) / selectedQuiz.perguntas.length) * 100}%`
                                        }}
                                    ></div>
                                </div>
                            </div>

                            <h3 className="text-lg font-semibold mb-6">
                                {selectedQuiz.perguntas[currentQuestion].pergunta}
                            </h3>

                            <div className="space-y-3">
                                {selectedQuiz.perguntas[currentQuestion].opcoes.map((opcao, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswer(index)}
                                        className="w-full p-3 text-left border border-gray-300 rounded-lg hover:border-verde-claro hover:bg-verde-claro hover:bg-opacity-10 transition-colors"
                                    >
                                        {opcao}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </Dialog>

                {/* Dialog do Resultado */}
                <Dialog
                    isOpen={showResult}
                    onClose={resetQuiz}
                    title="Resultado do Quiz"
                    className="max-w-2xl"
                >
                    {selectedQuiz && (
                        <div className="text-center">
                            <div className="text-6xl mb-4">
                                {score === selectedQuiz.perguntas.length ? '🏆' : score >= selectedQuiz.perguntas.length * 0.6 ? '🌟' : '💪'}
                            </div>

                            <h3 className="text-2xl font-bold text-verde-folha mb-4">
                                {score} de {selectedQuiz.perguntas.length} corretas
                            </h3>

                            <p className="text-lg mb-6">{getScoreMessage()}</p>

                            <div className="bg-cinza-claro rounded-lg p-4 mb-6">
                                <h4 className="font-semibold mb-3">Resumo das Respostas:</h4>
                                <div className="space-y-2 text-sm">
                                    {answers.map((answer, index) => (
                                        <div key={index} className="flex items-center justify-between">
                                            <span className="text-left">{answer.pergunta}</span>
                                            <span className={answer.correta ? 'text-green-600' : 'text-red-600'}>
                                                {answer.correta ? '✅' : '❌'}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={() => handleStartQuiz(selectedQuiz)}
                                    className="w-full bg-verde-folha text-white py-2 px-4 rounded-lg hover:bg-verde-claro transition-colors"
                                >
                                    🔄 Tentar Novamente
                                </button>
                                <button
                                    onClick={resetQuiz}
                                    className="w-full border border-verde-folha text-verde-folha py-2 px-4 rounded-lg hover:bg-verde-folha hover:text-white transition-colors"
                                >
                                    📚 Escolher Outro Quiz
                                </button>
                            </div>
                        </div>
                    )}
                </Dialog>
            </Layout>
        </>
    );
};

export default Atividades;