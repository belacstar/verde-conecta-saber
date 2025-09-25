import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Badge from './Badge';
import logoTransparent from '../assets/logo/logo-verde-conecta-saber-transparente.png';

const Header = () => {
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
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Navigation with Logo and Links */}
          <nav className="flex flex-1 items-center justify-center ml-2 sm:ml-4 md:ml-6 lg:ml-8 mr-6" role="navigation" aria-label="Main navigation">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4 group mr-8 lg:mr-12">
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

            {/* Navigation Links */}
            <div className="nav-links">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActive(item.href) ? 'active' : 'inactive'}`}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* User Points */}
          <div className="hidden sm:flex items-center space-x-4 ml-4">
            <Badge variant="ods" size="md" className="animate-glow">
              🏆 120 pontos
            </Badge>
          </div>
        </div>

        {/* Mobile navigation removed - header shows inline links on all sizes */}
      </div>
    </header>
  );
};

export default Header;