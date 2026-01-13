import { useState, useEffect } from 'react';
import { Menu, X, Search, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { categories, siteConfig } from '../data/mockData';

interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export default function Header({ onNavigate, currentPage }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-white py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="text-2xl sm:text-3xl font-serif font-bold tracking-tight hover:opacity-70 transition-opacity"
          >
            {siteConfig.title}
          </button>

          <nav className="hidden lg:flex items-center space-x-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleNavClick(category.slug)}
                className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gray-600 ${
                  currentPage === category.slug ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-700'
                }`}
              >
                {category.name}
              </button>
            ))}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-medium uppercase tracking-wider transition-colors hover:text-gray-600 ${
                currentPage === 'about' ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-700'
              }`}
            >
              About
            </button>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <a href={siteConfig.social.twitter} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Twitter size={18} />
            </a>
            <a href={siteConfig.social.instagram} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Instagram size={18} />
            </a>
            <a href={siteConfig.social.facebook} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Facebook size={18} />
            </a>
            <a href={siteConfig.social.linkedin} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-[72px] bg-white transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleNavClick(category.slug)}
              className={`text-lg font-medium uppercase tracking-wider text-left transition-colors ${
                currentPage === category.slug ? 'text-gray-900' : 'text-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('about')}
            className={`text-lg font-medium uppercase tracking-wider text-left transition-colors ${
              currentPage === 'about' ? 'text-gray-900' : 'text-gray-700'
            }`}
          >
            About
          </button>

          <div className="pt-6 border-t border-gray-200">
            <div className="flex items-center space-x-4">
              <a href={siteConfig.social.twitter} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Twitter size={20} />
              </a>
              <a href={siteConfig.social.instagram} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Instagram size={20} />
              </a>
              <a href={siteConfig.social.facebook} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Facebook size={20} />
              </a>
              <a href={siteConfig.social.linkedin} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
