import React, { useEffect, useState, useRef, useCallback } from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

// Static imports from src/assets/carrossel as the default image set for the memory game.
import banana from '../assets/jogo-memoria/banana.jpg';
import ervilha from '../assets/jogo-memoria/ervilha.jpg';
import jardinagem from '../assets/jogo-memoria/jardinagem.jpg';
import maca from '../assets/jogo-memoria/maca.jpg';
import milho from '../assets/jogo-memoria/milho.jpg';
import morango from '../assets/jogo-memoria/morango.jpg';
import ovo from '../assets/jogo-memoria/ovo.jpg';
import planta from '../assets/jogo-memoria/planta.jpg';
import reciclagem from '../assets/jogo-memoria/reciclagem.jpg';
import semente from '../assets/jogo-memoria/semente.jpg';
import inter from '../assets/jogo-memoria/inter.png';

const allImages = [
    { id: 'banana', src: banana },
    { id: 'ervilha', src: ervilha },
    { id: 'jardinagem', src: jardinagem },
    { id: 'maca', src: maca },
    { id: 'milho', src: milho },
    { id: 'morango', src: morango },
    { id: 'ovo', src: ovo },
    { id: 'planta', src: planta },
    { id: 'reciclagem', src: reciclagem },
    { id: 'semente', src: semente }
];

// Add simple 3D flip classes via inline style object (we'll also add minimal CSS to App.css next)

function shuffle(array) {
    const copy = array.slice();
    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

const JogoMemoria = () => {
    const [cards, setCards] = useState([]);
    const [firstPick, setFirstPick] = useState(null);
    const [secondPick, setSecondPick] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [moves, setMoves] = useState(0);
    const [matches, setMatches] = useState(0);
    const [best, setBest] = useState(() => {
        try {
            const v = localStorage.getItem('jogo-memoria-best');
            return v ? Number(v) : null;
        } catch (err) { console.debug('localStorage read failed', err); return null; }
    });
    const [soundOn, setSoundOn] = useState(true);
    const audioCtxRef = useRef(null);

    useEffect(() => {
        startGame();
    }, []);

    // initialize audio context lazily
    useEffect(() => {
        if (typeof window !== 'undefined' && !audioCtxRef.current) {
            try {
                audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
            } catch (err) {
                // audio not available in this environment
                console.debug('AudioContext init failed', err);
                audioCtxRef.current = null;
            }
        }
    }, []);

    // audio playback helper (hoisted before effects that call it)
    const playTone = useCallback((type) => {
        if (!soundOn) return;
        const ctx = audioCtxRef.current;
        if (!ctx) return;
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g);
        g.connect(ctx.destination);
        if (type === 'flip') {
            o.frequency.value = 600;
            g.gain.value = 0.06;
            o.start();
            setTimeout(() => o.stop(), 80);
        } else if (type === 'match') {
            o.frequency.value = 440;
            g.gain.value = 0.08;
            o.start();
            setTimeout(() => o.stop(), 180);
        } else if (type === 'win') {
            // arpeggio
            const freqs = [660, 880, 990];
            let t = 0;
            freqs.forEach((f) => {
                const o2 = ctx.createOscillator();
                const g2 = ctx.createGain();
                o2.frequency.value = f;
                g2.gain.value = 0.06;
                o2.connect(g2);
                g2.connect(ctx.destination);
                o2.start(ctx.currentTime + t);
                o2.stop(ctx.currentTime + t + 0.12);
                t += 0.12;
            });
        }
    }, [soundOn]);

    useEffect(() => {
        if (firstPick && secondPick) {
            setDisabled(true);
            if (firstPick.pairId === secondPick.pairId) {
                // mark matched and play sound
                setCards((prev) => prev.map((c) => (c.pairId === firstPick.pairId ? { ...c, matched: true } : c)));
                playTone('match');
                resetPicks();
                setMatches((m) => m + 1);
            } else {
                // flip back after short delay
                setTimeout(() => {
                    setCards((prev) => prev.map((c) => (c.id === firstPick.id || c.id === secondPick.id ? { ...c, flipped: false } : c)));
                    resetPicks();
                }, 700);
            }
            setMoves((m) => m + 1);
        }
    }, [firstPick, secondPick, playTone]);

    const startGame = () => {
        // Duplicate images to make pairs and create card objects
        const pairSet = allImages.map((img) => [
            { id: `${img.id}-a`, pairId: img.id, src: img.src, flipped: false, matched: false },
            { id: `${img.id}-b`, pairId: img.id, src: img.src, flipped: false, matched: false }
        ]).flat();

        const shuffled = shuffle(pairSet);
        setCards(shuffled);
        setFirstPick(null);
        setSecondPick(null);
        setDisabled(false);
        setMoves(0);
        setMatches(0);
    };

    // persist best score
    useEffect(() => {
        if (matches === allImages.length) {
            playTone('win');
            try {
                if (best === null || moves < best) {
                    localStorage.setItem('jogo-memoria-best', String(moves));
                    setBest(moves);
                }
            } catch (err) {
                console.debug('persist best failed', err);
            }
        }
        // include dependencies that influence best persistence and playTone usage
    }, [matches, best, moves, playTone]);

    const clearBest = () => {
        try { localStorage.removeItem('jogo-memoria-best'); setBest(null); } catch (err) { console.debug('clear best failed', err); }
    };

    const resetPicks = () => {
        setFirstPick(null);
        setSecondPick(null);
        setDisabled(false);
    };

    const handleCardClick = (card) => {
        if (disabled) return;
        if (card.matched) return;
        if (firstPick && card.id === firstPick.id) return; // clicking same card
        // flip the card
        const flippedCard = { ...card, flipped: true };
        setCards((prev) => prev.map((c) => (c.id === card.id ? flippedCard : c)));
        playTone('flip');

        if (!firstPick) {
            setFirstPick(flippedCard);
        } else if (!secondPick) {
            setSecondPick(flippedCard);
        }
    };

    const isWon = matches === allImages.length;

    return (
        <>
            <Header />
            <Layout>
                <section className="mb-8">
                    <h1 className="text-3xl font-bold text-center mb-6">Jogo da Memória</h1>

                    <div className="max-w-4xl mx-auto text-center mb-6">
                        <p className="text-gray-600">Encontre todos os pares com o menor número de movimentos.</p>
                        <div className="mt-4 flex items-center justify-center gap-4">
                            <button onClick={startGame} className="btn-primary">Reiniciar</button>
                            <div className="text-sm text-gray-700">Movimentos: <strong>{moves}</strong></div>
                            <div className="text-sm text-gray-700">Pares: <strong>{matches}/{allImages.length}</strong></div>
                            <div className="flex items-center gap-2">
                                <button onClick={() => setSoundOn(s => !s)} className="px-2 py-1 border rounded text-sm">
                                    {soundOn ? '🔊 Som' : '🔈 Sem Som'}
                                </button>
                                <button onClick={clearBest} className="px-2 py-1 border rounded text-sm">Limpar melhor</button>
                                <div className="text-sm text-gray-700">Melhor: <strong>{best ?? '-'}</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full px-8 mx-auto">
                        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-4 memory-grid">
                            {cards.map((card) => (
                                <div key={card.id} className={`relative w-full pb-[100%] rounded-lg overflow-hidden cursor-pointer select-none ${card.flipped || card.matched ? 'card-flipped' : ''} ${card.matched ? 'card-matched' : ''}`} onClick={() => handleCardClick(card)} aria-pressed={card.flipped || card.matched} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(card); }}>
                                    <div className="card-inner">
                                        <div className="card-front">
                                            <div className={`absolute inset-0 bg-white rounded-lg flex items-center justify-center ${card.matched ? 'opacity-80' : ''}`}>
                                                <img src={card.src} alt="" className="memory-card-img" />
                                            </div>
                                        </div>

                                        <div className="card-back">
                                            <div className="absolute inset-0 bg-verde-folha/90 rounded-lg flex items-center justify-center">
                                                <img src={inter} alt="verso" className="memory-card-img" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {isWon && (
                            <div className="mt-6 text-center">
                                <h2 className="text-2xl font-bold text-verde-folha">Parabéns! Você encontrou todos os pares 🎉</h2>
                                <p className="text-gray-700">Movimentos: {moves}</p>
                            </div>
                        )}
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default JogoMemoria;
