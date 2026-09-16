import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin, ReactIcon } from './UI/BrandIcons';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#070B14',
        borderTop: '1px solid #1E293B',
        padding: '3.5rem 0 2rem 0',
        color: '#94A3B8'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2.5rem'
          }}
        >
          {/* Top Footer Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem'
            }}
          >
            {/* Brand */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(97, 218, 251, 0.1)',
                    border: '1px solid rgba(97, 218, 251, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <ReactIcon size={17} />
                </div>
                <span style={{ fontSize: '1.15rem', fontWeight: '700', color: '#F8FAFC', fontFamily: 'var(--font-mono)' }}>
                  Omnia<span style={{ color: '#61DAFB' }}>.</span>dev
                </span>
              </div>
              <p style={{ fontSize: '0.86rem', color: '#94A3B8' }}>
                {personalInfo.bioHeadline[language]}
              </p>
            </div>

            {/* Availability Indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
                padding: '0.5rem 1rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(16, 185, 129, 0.08)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                fontSize: '0.82rem',
                color: '#34D399'
              }}
            >
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10B981',
                  boxShadow: '0 0 10px #10B981'
                }}
              />
              <span>{t.footer.status}</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1.25rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #162032'
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.id);
                }}
                style={{ fontSize: '0.86rem', color: '#94A3B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#61DAFB')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Bottom Copyright & Back to top */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid #162032',
              fontSize: '0.82rem'
            }}
          >
            <div>
              &copy; {new Date().getFullYear()} {personalInfo.name[language]}. {t.footer.rights}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                <Github size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                style={{ color: '#94A3B8' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#F8FAFC')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94A3B8')}
              >
                <Linkedin size={18} />
              </a>

              <button
                onClick={scrollToTop}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  color: '#61DAFB',
                  fontSize: '0.82rem',
                  fontWeight: '600',
                  cursor: 'pointer'
                }}
              >
                <span>{t.footer.backToTop}</span>
                <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
