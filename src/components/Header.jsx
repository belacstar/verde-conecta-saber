import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Badge from './Badge';
import logoTransparent from '../assets/logo/logo-verde-conecta-saber-transparente.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Educação Ambiental', href: '/educacao-ambiental' },
    { name: 'Gestão de Resíduos', href: '/gestao-residuos' },
    { name: 'Agricultura Sustentável', href: '/agricultura-sustentavel' },
    { name: 'Atividades & Jogos', href: '/atividades' },
    { name: 'Recompensas', href: '/recompensas' },
    { name: 'Material de Apoio', href: '/material-apoio' }
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="card-glass border-b border-white/30 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <img
              src={logoTransparent}
              alt="Verde Conecta Saber"
              className="w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
              style={{ maxWidth: '180px', maxHeight: '72px', height: 'auto' }}
            />
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold">
                <span className="text-gradient">Verde Conecta Saber</span>
              </h1>
              <p className="text-sm text-gray-600 font-medium">Educação Ambiental Sustentável</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`
                  px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300
                  ${isActive(item.href)
                    ? 'bg-verde-folha text-white shadow-verde transform scale-105'
                    : 'text-gray-700 hover:bg-verde-claro/20 hover:text-verde-folha'
                  }
                `}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* User Points */}
          <div className="hidden sm:flex items-center space-x-4">
            <Badge variant="ods" size="md" className="animate-glow">
              🏆 120 pontos
            </Badge>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-verde-claro/20 transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    block px-3 py-2 rounded-md text-base font-medium transition-colors
                    ${isActive(item.href)
                      ? 'bg-verde-folha text-white'
                      : 'text-gray-700 hover:bg-verde-claro hover:text-white'
                    }
                  `}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <Badge variant="ods" size="md" className="ml-3">
                  🏆 120 pontos
                </Badge>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;