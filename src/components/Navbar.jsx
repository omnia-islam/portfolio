import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Languages } from 'lucide-react';
import { ReactIcon } from './UI/BrandIcons';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'services', label: t.nav.services },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'experience', label: t.nav.experience },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ];

  const handleLinkClick = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 80,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(10, 15, 29, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(51, 65, 85, 0.5)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '75px'
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('hero');
          }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
            fontSize: '1.15rem',
            fontWeight: '700',
            color: '#F8FAFC',
            letterSpacing: '-0.02em'
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '9px',
              background: 'linear-gradient(135deg, rgba(97, 218, 251, 0.15), rgba(139, 92, 246, 0.15))',
              border: '1px solid rgba(97, 218, 251, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <ReactIcon size={20} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)' }}>
            Omnia<span style={{ color: '#61DAFB' }}>.</span>dev
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav
          aria-label="Desktop Navigation"
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '1.6rem'
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                style={{
                  fontSize: '0.88rem',
                  fontWeight: isActive ? '600' : '500',
                  color: isActive ? '#61DAFB' : '#94A3B8',
                  position: 'relative',
                  padding: '0.4rem 0',
                  transition: 'color 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#F8FAFC';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#94A3B8';
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      backgroundColor: '#61DAFB',
                      borderRadius: '2px'
                    }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Language Switcher & Connect CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          {/* Language Toggle Button */}
          <button
            onClick={toggleLanguage}
            aria-label="Switch Language / تغيير اللغة"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              backgroundColor: 'rgba(30, 41, 59, 0.7)',
              border: '1px solid #334155',
              color: '#F8FAFC',
              fontSize: '0.82rem',
              fontWeight: '600',
              transition: 'all 0.2s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#61DAFB';
              e.currentTarget.style.color = '#61DAFB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#334155';
              e.currentTarget.style.color = '#F8FAFC';
            }}
          >
            <Languages size={15} color="#61DAFB" />
            <span>{t.nav.langSwitch}</span>
          </button>

          {/* Desktop Connect Button */}
          <button
            onClick={() => handleLinkClick('contact')}
            className="btn btn-primary"
            style={{
              padding: '0.55rem 1.15rem',
              fontSize: '0.86rem',
              display: 'none'
            }}
            id="nav-connect-btn"
          >
            <span>{t.nav.connectBtn}</span>
            <ArrowUpRight size={15} className={isRTL ? 'rtl-flip' : ''} />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            className="mobile-toggle-btn"
            style={{
              color: '#F8FAFC',
              padding: '0.5rem',
              borderRadius: '8px',
              border: '1px solid #334155',
              backgroundColor: '#1E293B',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#0F172A',
            borderBottom: '1px solid #334155',
            padding: '1.5rem',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.7)'
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.id);
                  }}
                  style={{
                    fontSize: '1rem',
                    fontWeight: isActive ? '600' : '500',
                    color: isActive ? '#61DAFB' : '#94A3B8',
                    padding: '0.6rem 0.8rem',
                    borderRadius: '8px',
                    backgroundColor: isActive ? 'rgba(97, 218, 251, 0.08)' : 'transparent',
                    display: 'block'
                  }}
                >
                  {link.label}
                </a>
              );
            })}

            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => handleLinkClick('contact')}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <span>{t.nav.connectBtn}</span>
                <ArrowUpRight size={16} className={isRTL ? 'rtl-flip' : ''} />
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-connect-btn {
            display: inline-flex !important;
          }
          .mobile-toggle-btn {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
