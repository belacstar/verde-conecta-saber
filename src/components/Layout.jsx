import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <footer className="bg-verde-folha text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Verde Conecta Saber</h3>
              <p className="text-verde-claro">
                Educação ambiental sustentável para escolas,
                promovendo consciência ecológica e práticas sustentáveis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Objetivos ODS</h3>
              <ul className="space-y-2 text-verde-claro">
                <li>• ODS 2: Fome Zero</li>
                <li>• ODS 4: Educação de Qualidade</li>
                <li>• ODS 12: Consumo Responsável</li>
                <li>• ODS 13: Ação Contra Mudança Climática</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <p className="text-verde-claro">
                Projeto desenvolvido para educação ambiental em escolas.
              </p>
            </div>
          </div>
          <div className="border-t border-verde-claro mt-8 pt-8 text-center text-verde-claro">
            <p>&copy; 2025 Verde Conecta Saber. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;