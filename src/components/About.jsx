import React from 'react';
import { User, GraduationCap, MapPin, Briefcase, Award, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { language, t } = useLanguage();

  const highlights = [
    {
      icon: <GraduationCap size={18} color="#61DAFB" />,
      label: t.about.academicPill,
      detail: "CGPA 3.64 / 4.00"
    },
    {
      icon: <MapPin size={18} color="#8B5CF6" />,
      label: t.about.locationPill,
      detail: personalInfo.location[language]
    },
    {
      icon: <Briefcase size={18} color="#10B981" />,
      label: t.about.statusPill,
      detail: "Front-End & Software Dev"
    }
  ];

  return (
    <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <User size={14} />
            <span>{t.about.badge}</span>
          </span>
          <h2 className="section-title">{t.about.title}</h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center'
          }}
          className="about-grid"
        >
          {/* Left Column: Narrative Card */}
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.05rem', lineHeight: '1.75', color: '#CBD5E1' }}>
                {t.about.paragraph1}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#94A3B8' }}>
                {t.about.paragraph2}
              </p>
              <p style={{ fontSize: '1rem', lineHeight: '1.75', color: '#94A3B8' }}>
                {t.about.paragraph3}
              </p>
            </div>

            {/* Quick Badges */}
            <div
              style={{
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid #334155',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem'
              }}
            >
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.75rem 1rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid #334155'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: '600', color: '#F8FAFC' }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
                      {item.detail}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
