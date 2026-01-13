import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { categories, siteConfig } from '../data/mockData';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">{siteConfig.title}</h3>
            <p className="text-gray-400 leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href={siteConfig.social.twitter}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href={siteConfig.social.instagram}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href={siteConfig.social.facebook}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href={siteConfig.social.linkedin}
                className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    onClick={() => onNavigate(category.slug)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={() => onNavigate('about')} className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('advertise')} className="text-gray-400 hover:text-white transition-colors">
                  Advertise
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; {currentYear} {siteConfig.title}. All rights reserved.</p>
          <p className="mt-4 md:mt-0">
            Designed with passion for modern publishing
          </p>
        </div>
      </div>
    </footer>
  );
}
