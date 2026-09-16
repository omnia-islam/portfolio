import React from 'react';
import { Briefcase, Calendar, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { experienceData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Experience() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section id="experience" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Briefcase size={14} />
            <span>{t.experience.badge}</span>
          </span>
          <h2 className="section-title">{t.experience.title}</h2>
          <p className="section-subtitle">{t.experience.subtitle}</p>
        </div>

        {/* Experience Timeline */}
        <div
          style={{
            maxWidth: '850px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}
        >
          {experienceData.map((exp) => (
            <div
              key={exp.id}
              className="glass-card glass-card-interactive"
              style={{
                padding: '2.25rem',
                position: 'relative'
              }}
            >
              {/* Header Info */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.4rem' }}>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        fontWeight: '600',
                        padding: '0.2rem 0.6rem',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(97, 218, 251, 0.12)',
                        color: '#61DAFB',
                        border: '1px solid rgba(97, 218, 251, 0.28)'
                      }}
                    >
                      {exp.type[language]}
                    </span>
                    <span style={{ fontSize: '0.8rem', color: '#10B981', fontWeight: '600' }}>
                      {exp.duration[language]}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: '700', color: '#F8FAFC' }}>
                    {exp.role[language]}
                  </h3>

                  <div style={{ fontSize: '1rem', fontWeight: '600', color: '#8B5CF6', marginTop: '0.25rem' }}>
                    {exp.organization[language]}
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.82rem',
                    color: '#94A3B8',
                    backgroundColor: '#0F172A',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '6px',
                    border: '1px solid #334155'
                  }}
                >
                  <Calendar size={14} color="#61DAFB" />
                  <span>{exp.period[language]}</span>
                </div>
              </div>

              {/* Responsibilities / Highlights */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.75rem',
                  marginBottom: '1.5rem'
                }}
              >
                {exp.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.92rem',
                      color: '#CBD5E1',
                      lineHeight: '1.65'
                    }}
                  >
                    <CheckCircle2 size={16} color="#61DAFB" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>{item[language]}</span>
                  </div>
                ))}
              </div>

              {/* Technologies Used */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(51, 65, 85, 0.5)',
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}
              >
                <span style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: '600', textTransform: 'uppercase' }}>
                  {t.experience.technologies}
                </span>
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.76rem',
                      padding: '0.2rem 0.55rem',
                      borderRadius: '4px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#61DAFB'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
