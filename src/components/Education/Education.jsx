import React from 'react';
import { GraduationCap, BookOpen, Award, MapPin, Calendar } from 'lucide-react';
import { educationData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Education() {
  const { language, t } = useLanguage();

  return (
    <section id="education" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <GraduationCap size={14} />
            <span>{t.education.badge}</span>
          </span>
          <h2 className="section-title">{t.education.title}</h2>
          <p className="section-subtitle">{t.education.subtitle}</p>
        </div>

        {/* Education Card */}
        <div style={{ maxWidth: '850px', margin: '0 auto' }}>
          <div className="glass-card" style={{ padding: '2.5rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1.25rem',
                marginBottom: '1.75rem'
              }}
            >
              <div>
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    fontSize: '0.74rem',
                    fontWeight: '600',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    backgroundColor: 'rgba(97, 218, 251, 0.12)',
                    color: '#61DAFB',
                    border: '1px solid rgba(97, 218, 251, 0.3)',
                    marginBottom: '0.5rem'
                  }}
                >
                  <Award size={13} />
                  <span>{educationData.academicStatus[language]}</span>
                </div>

                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#F8FAFC' }}>
                  {educationData.degree[language]}
                </h3>

                <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#8B5CF6', marginTop: '0.2rem' }}>
                  {educationData.faculty[language]}
                </div>

                <div style={{ fontSize: '1rem', color: '#CBD5E1', marginTop: '0.2rem' }}>
                  {educationData.institution[language]}
                </div>
              </div>

              {/* CGPA Badge */}
              <div
                style={{
                  padding: '1rem 1.4rem',
                  borderRadius: '12px',
                  backgroundColor: '#0F172A',
                  border: '1px solid rgba(97, 218, 251, 0.35)',
                  textAlign: 'center',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  {t.education.cgpaLabel}
                </div>
                <div
                  style={{
                    fontSize: '1.6rem',
                    fontWeight: '800',
                    color: '#61DAFB',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {educationData.cgpa}
                </div>
              </div>
            </div>

            {/* Meta Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                padding: '1rem 1.25rem',
                borderRadius: '8px',
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid #334155',
                marginBottom: '2rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#CBD5E1' }}>
                <Calendar size={16} color="#61DAFB" />
                <span>{educationData.dates[language]}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.86rem', color: '#CBD5E1' }}>
                <MapPin size={16} color="#8B5CF6" />
                <span>{educationData.location[language]}</span>
              </div>
            </div>

            {/* Relevant Coursework */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '1rem' }}>
                <BookOpen size={17} color="#61DAFB" />
                <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#F8FAFC' }}>
                  {t.education.courseworkTitle}
                </h4>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
                {educationData.coursework.map((course, idx) => (
                  <span
                    key={idx}
                    style={{
                      padding: '0.45rem 0.9rem',
                      borderRadius: '6px',
                      backgroundColor: '#1E293B',
                      border: '1px solid #334155',
                      fontSize: '0.85rem',
                      fontWeight: '500',
                      color: '#F8FAFC'
                    }}
                  >
                    {course[language]}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
