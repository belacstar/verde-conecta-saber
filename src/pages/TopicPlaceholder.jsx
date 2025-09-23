import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';

const TopicPlaceholder = ({ title, children }) => {
    return (
        <>
            <Header />
            <Layout>
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-verde-folha mb-6">{title}</h1>
                    <div className="bg-white rounded-lg p-6">
                        {children || (
                            <p className="text-gray-600">Conteúdo em desenvolvimento. Em breve trilhas, vídeos e materiais para professores.</p>
                        )}
                    </div>
                </div>
            </Layout>
        </>
    );
};

export default TopicPlaceholder;