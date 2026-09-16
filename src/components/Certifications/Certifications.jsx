import React, { useState, useMemo } from 'react';
import { Award, CheckCircle2, ShieldCheck, BookCheck } from 'lucide-react';
import { credentialCategories, credentialsData } from '../../data/credentials';
import { useLanguage } from '../../context/LanguageContext';

export default function Certifications() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { language, t } = useLanguage();

  const filteredCredentials = useMemo(() => {
    return credentialsData.filter((item) => {
      if (activeCategory === 'all') return true;
      return item.type === activeCategory;
    });
  }, [activeCategory]);

  return (
    <section id="certifications" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Award size={14} />
            <span>{t.credentials.badge}</span>
          </span>
          <h2 className="section-title">{t.credentials.title}</h2>
          <p className="section-subtitle">{t.credentials.subtitle}</p>
        </div>

        {/* Filter Pills */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.65rem',
            marginBottom: '2.5rem'
          }}
        >
          {credentialCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '600' : '500',
                  backgroundColor: isActive ? '#61DAFB' : '#1E293B',
                  color: isActive ? '#0A0F1D' : '#94A3B8',
                  border: isActive ? '1px solid #61DAFB' : '1px solid #334155',
                  boxShadow: isActive ? '0 4px 12px rgba(97, 218, 251, 0.25)' : 'none',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer'
                }}
              >
                {cat.name[language]}
              </button>
            );
          })}
        </div>

        {/* Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredCredentials.map((cert) => {
            const isDigitalCredential = cert.type === 'credential';
            return (
              <div
                key={cert.id}
                className="glass-card glass-card-interactive"
                style={{
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  border: isDigitalCredential
                    ? '1px solid rgba(16, 185, 129, 0.45)'
                    : '1px solid rgba(139, 92, 246, 0.4)'
                }}
              >
                <div>
                  {/* Top Badge & Date */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '1rem',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                      {isDigitalCredential ? (
                        <ShieldCheck size={16} color="#10B981" />
                      ) : (
                        <BookCheck size={16} color="#A78BFA" />
                      )}
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: '600',
                          padding: '0.2rem 0.6rem',
                          borderRadius: '4px',
                          backgroundColor: isDigitalCredential
                            ? 'rgba(16, 185, 129, 0.12)'
                            : 'rgba(139, 92, 246, 0.12)',
                          color: isDigitalCredential ? '#10B981' : '#A78BFA',
                          border: isDigitalCredential
                            ? '1px solid rgba(16, 185, 129, 0.3)'
                            : '1px solid rgba(139, 92, 246, 0.3)'
                        }}
                      >
                        {cert.credentialType[language]}
                      </span>
                    </div>

                    <span style={{ fontSize: '0.78rem', color: '#94A3B8' }}>
                      {cert.date[language]}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.35rem' }}>
                    {cert.title[language]}
                  </h3>

                  <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#61DAFB', marginBottom: '1.25rem' }}>
                    {cert.issuer[language]}
                  </div>
                </div>

                {/* Topics Covered */}
                <div
                  style={{
                    paddingTop: '1.25rem',
                    borderTop: '1px solid rgba(51, 65, 85, 0.5)'
                  }}
                >
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8', textTransform: 'uppercase', marginBottom: '0.65rem' }}>
                    {t.credentials.topicsLabel}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {cert.topics.map((topic, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.84rem',
                          color: '#CBD5E1'
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          color={isDigitalCredential ? '#10B981' : '#61DAFB'}
                          style={{ flexShrink: 0 }}
                        />
                        <span>{topic[language]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
