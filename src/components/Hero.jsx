import React, { useState } from 'react';
import { ArrowDown, Download, Mail, Sparkles, Terminal, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Hero({ onNotify }) {
  const { language, isRTL, t } = useLanguage();
  const [activeTab, setActiveTab] = useState('profile');
  const [copied, setCopied] = useState(false);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('npx omnia-islam-portfolio');
    setCopied(true);
    if (onNotify) onNotify('Command copied to clipboard!');
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '3rem',
        overflow: 'hidden'
      }}
    >
      {/* Subtle Background Glow Orbs */}
      <div
        className="glow-orb glow-orb-cyan"
        style={{
          top: '15%',
          [isRTL ? 'right' : 'left']: '5%',
          width: '420px',
          height: '420px'
        }}
      />
      <div
        className="glow-orb glow-orb-purple"
        style={{
          bottom: '10%',
          [isRTL ? 'left' : 'right']: '5%',
          width: '480px',
          height: '480px'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3.5rem',
            alignItems: 'center'
          }}
          className="hero-grid"
        >
          {/* Left Column: Hero Copy */}
          <div>
            {/* Availability / Professional Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.55rem',
                padding: '0.45rem 1rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(97, 218, 251, 0.08)',
                border: '1px solid rgba(97, 218, 251, 0.28)',
                color: '#61DAFB',
                fontSize: '0.82rem',
                fontWeight: '600',
                marginBottom: '1.35rem'
              }}
            >
              <Sparkles size={14} />
              <span>{t.hero.badge}</span>
            </div>

            {/* Main Headline with purple gradient emphasis */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5.2vw, 3.85rem)',
                fontWeight: '800',
                lineHeight: '1.15',
                color: '#F8FAFC',
                marginBottom: '1.35rem',
                letterSpacing: '-0.025em'
              }}
            >
              {t.hero.headlinePrefix}{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #61DAFB 20%, #8B5CF6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {t.hero.headlineSuffix}
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <p
              style={{
                fontSize: '1.08rem',
                lineHeight: '1.7',
                color: '#CBD5E1',
                marginBottom: '1rem',
                maxWidth: '620px'
              }}
            >
              {t.hero.tagline}
            </p>

            <p
              style={{
                fontSize: '0.96rem',
                lineHeight: '1.6',
                color: '#94A3B8',
                marginBottom: '2.5rem',
                maxWidth: '600px'
              }}
            >
              {t.hero.subText}
            </p>

            {/* Action Buttons */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem'
              }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn btn-primary"
                style={{ padding: '0.85rem 1.65rem' }}
              >
                <span>{t.hero.btnProjects}</span>
                <ArrowDown size={16} />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.45rem' }}
              >
                <Mail size={16} />
                <span>{t.hero.btnContact}</span>
              </button>

              <a
                href={personalInfo.cvUrl}
                download="Omnia_Islam_CV.pdf"
                className="btn btn-outline"
                style={{ padding: '0.85rem 1.45rem' }}
              >
                <Download size={16} />
                <span>{t.hero.btnDownloadCV}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Card */}
          <div>
            <div
              className="glass-card"
              style={{
                overflow: 'hidden',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.65)',
                border: '1px solid #334155'
              }}
            >
              {/* Terminal Header */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.8rem 1.2rem',
                  backgroundColor: '#0F172A',
                  borderBottom: '1px solid #334155'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#EF4444' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#F59E0B' }} />
                  <div style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                  <span
                    style={{
                      marginLeft: '0.6rem',
                      fontSize: '0.78rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#94A3B8'
                    }}
                  >
                    {t.hero.terminal.title}
                  </span>
                </div>

                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <button
                    onClick={() => setActiveTab('profile')}
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '5px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: activeTab === 'profile' ? 'rgba(97, 218, 251, 0.15)' : 'transparent',
                      color: activeTab === 'profile' ? '#61DAFB' : '#94A3B8',
                      cursor: 'pointer'
                    }}
                  >
                    profile.json
                  </button>
                  <button
                    onClick={() => setActiveTab('stack')}
                    style={{
                      padding: '0.25rem 0.6rem',
                      borderRadius: '5px',
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      backgroundColor: activeTab === 'stack' ? 'rgba(97, 218, 251, 0.15)' : 'transparent',
                      color: activeTab === 'stack' ? '#61DAFB' : '#94A3B8',
                      cursor: 'pointer'
                    }}
                  >
                    stack.config
                  </button>
                </div>
              </div>

              {/* Terminal Body */}
              <div
                style={{
                  padding: '1.5rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  lineHeight: '1.7',
                  backgroundColor: '#0A0F1D',
                  direction: 'ltr',
                  textAlign: 'left'
                }}
              >
                {activeTab === 'profile' ? (
                  <div>
                    <span style={{ color: '#8B5CF6' }}>const</span>{' '}
                    <span style={{ color: '#61DAFB' }}>developer</span> = &#123;
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <div>
                        <span style={{ color: '#94A3B8' }}>name:</span>{' '}
                        <span style={{ color: '#FCD34D' }}>"{personalInfo.name.en}"</span>,
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8' }}>role:</span>{' '}
                        <span style={{ color: '#FCD34D' }}>"{personalInfo.role.en}"</span>,
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8' }}>status:</span>{' '}
                        <span style={{ color: '#10B981' }}>"{t.hero.terminal.status}"</span>,
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8' }}>education:</span> &#123;
                        <div style={{ paddingLeft: '1.25rem' }}>
                          <div>
                            <span style={{ color: '#94A3B8' }}>degree:</span>{' '}
                            <span style={{ color: '#CBD5E1' }}>"B.Sc. Computer Science"</span>,
                          </div>
                          <div>
                            <span style={{ color: '#94A3B8' }}>university:</span>{' '}
                            <span style={{ color: '#CBD5E1' }}>"MUST"</span>,
                          </div>
                          <div>
                            <span style={{ color: '#94A3B8' }}>cgpa:</span>{' '}
                            <span style={{ color: '#F59E0B' }}>3.64</span>
                          </div>
                        </div>
                        &#125;,
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8' }}>training:</span> [
                        <span style={{ color: '#CBD5E1' }}>"DEPI React Trainee (159h)"</span>,{' '}
                        <span style={{ color: '#CBD5E1' }}>"Orange RPA Hub"</span>],
                      </div>
                      <div>
                        <span style={{ color: '#94A3B8' }}>location:</span>{' '}
                        <span style={{ color: '#FCD34D' }}>"Giza, Egypt"</span>
                      </div>
                    </div>
                    &#125;;
                  </div>
                ) : (
                  <div>
                    <div style={{ color: '#64748B', marginBottom: '0.4rem' }}>
                      // Core Technologies & Architecture
                    </div>
                    <div>
                      <span style={{ color: '#61DAFB' }}>export default</span> &#123;
                    </div>
                    <div style={{ paddingLeft: '1.25rem' }}>
                      <div>
                        <span style={{ color: '#CBD5E1' }}>primaryFocus:</span>{' '}
                        <span style={{ color: '#10B981' }}>["React.js", "JavaScript ES6+", "HTML5", "CSS3", "Responsive UI"]</span>,
                      </div>
                      <div>
                        <span style={{ color: '#CBD5E1' }}>csFoundations:</span>{' '}
                        <span style={{ color: '#FCD34D' }}>["Data Structures", "Dynamic Programming", "OOP", "SQL Server"]</span>,
                      </div>
                      <div>
                        <span style={{ color: '#CBD5E1' }}>automation:</span>{' '}
                        <span style={{ color: '#8B5CF6' }}>["UiPath Studio", "REFramework", "Orchestrator Queues"]</span>,
                      </div>
                      <div>
                        <span style={{ color: '#CBD5E1' }}>tools:</span>{' '}
                        <span style={{ color: '#94A3B8' }}>["VS Code", "Git", "GitHub", "EmailJS"]</span>
                      </div>
                    </div>
                    &#125;;
                  </div>
                )}

                {/* Simulated CLI Prompt */}
                <div
                  style={{
                    marginTop: '1.25rem',
                    paddingTop: '0.85rem',
                    borderTop: '1px dashed #243248',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8' }}>
                    <Terminal size={14} color="#61DAFB" />
                    <span style={{ color: '#61DAFB' }}>~</span>
                    <span>npx omnia-islam-portfolio</span>
                  </div>
                  <button
                    onClick={handleCopyCmd}
                    aria-label="Copy Command"
                    style={{
                      padding: '0.25rem 0.5rem',
                      borderRadius: '4px',
                      backgroundColor: 'rgba(97, 218, 251, 0.1)',
                      color: copied ? '#10B981' : '#61DAFB',
                      cursor: 'pointer',
                      fontSize: '0.75rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem'
                    }}
                  >
                    {copied ? <Check size={12} /> : null}
                    <span>{copied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
