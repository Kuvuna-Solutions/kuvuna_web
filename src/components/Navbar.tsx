import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isHome = location.pathname === '/';
  
  // Use dark nav styles if on Home (hero is navy), or if scrolled, or if mobile menu is open
  const isDarkNav = isHome || isScrolled || mobileMenuOpen;

  const navLinks = [
    { name: 'What We Do', path: '/#what-we-do' },
    { name: 'Our Work', path: '/work' },
    { name: 'How We Work', path: '/how-we-work' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-none outline-none ${
        mobileMenuOpen
          ? 'bg-kuvuna-navy-dark py-4 shadow-xl'
          : isScrolled
          ? 'bg-kuvuna-navy/95 backdrop-blur-md shadow-lg shadow-kuvuna-navy/15 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-kuvuna-amber rounded-lg p-1"
          >
            <img
              src={
                isDarkNav
                  ? '/brand/for-dark-backgrounds/svg/kuvuna-logo.svg'
                  : '/brand/for-light-backgrounds/svg/kuvuna-logo.svg'
              }
              alt="Kuvuna Logo"
              className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith('/#');
              const isActive = !isAnchor && location.pathname === link.path;

              if (isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`text-sm font-semibold transition-colors py-1 ${
                      isDarkNav
                        ? 'text-kuvuna-cloud/90 hover:text-white'
                        : 'text-kuvuna-navy hover:text-kuvuna-amber'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              }

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold transition-colors py-1 ${
                    isActive
                      ? isDarkNav
                        ? 'text-white border-b-2 border-kuvuna-amber'
                        : 'text-kuvuna-navy border-b-2 border-kuvuna-amber'
                      : isDarkNav
                      ? 'text-kuvuna-cloud/90 hover:text-white'
                      : 'text-kuvuna-navy/80 hover:text-kuvuna-navy'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-all duration-200 shadow-sm hover:shadow active:scale-[0.98] group"
            >
              <span>Talk to us</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-kuvuna-amber transition-colors ${
                isDarkNav
                  ? 'text-white hover:text-kuvuna-amber'
                  : 'text-kuvuna-navy hover:text-kuvuna-amber'
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer (Solid Dark Navy with High-Contrast Bold Links) */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-kuvuna-navy-dark border-t border-white/10 px-5 pt-4 pb-8 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isAnchor = link.path.startsWith('/#');
              if (isAnchor) {
                return (
                  <a
                    key={link.name}
                    href={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-bold text-white hover:text-kuvuna-amber py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    {link.name}
                  </a>
                );
              }
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-bold py-2.5 px-3 rounded-lg transition-colors ${
                    location.pathname === link.path
                      ? 'bg-white/10 text-kuvuna-amber'
                      : 'text-white hover:text-kuvuna-amber hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-4 border-t border-white/10">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center px-4 py-3.5 rounded-xl text-sm font-bold bg-kuvuna-amber text-kuvuna-navy hover:bg-kuvuna-amber-hover transition-colors shadow-md"
              >
                <span>Talk to us</span>
                <ArrowUpRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
