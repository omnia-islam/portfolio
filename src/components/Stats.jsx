import React from 'react';
import { Award, Clock, Layout, GraduationCap, CheckCircle2 } from 'lucide-react';
import { heroStats } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

export default function Stats() {
  const { language } = useLanguage();

  const getStatIcon = (id) => {
    switch (id) {
      case 'cgpa':
        return <GraduationCap size={22} color="#61DAFB" />;
      case 'depi':
        return <Clock size={22} color="#8B5CF6" />;
      case 'projects':
        return <Layout size={22} color="#10B981" />;
      case 'huawei':
        return <Award size={22} color="#F59E0B" />;
      default:
        return <CheckCircle2 size={22} color="#61DAFB" />;
    }
  };

  return (
    <section
      id="stats"
      style={{
        padding: '2.5rem 0 3.5rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
        zIndex: 2
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {heroStats.map((stat) => (
            <div
              key={stat.id}
              className="glass-card glass-card-interactive"
              style={{
                padding: '1.75rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                border: '1px solid #334155'
              }}
            >
              <div
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '12px',
                  backgroundColor: 'rgba(30, 41, 59, 0.9)',
                  border: '1px solid rgba(51, 65, 85, 0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {getStatIcon(stat.id)}
              </div>

              <div>
                <div
                  style={{
                    fontSize: '1.65rem',
                    fontWeight: '800',
                    color: '#F8FAFC',
                    fontFamily: 'var(--font-mono)',
                    lineHeight: '1.2'
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{
                    fontSize: '0.88rem',
                    fontWeight: '600',
                    color: '#61DAFB',
                    marginTop: '0.2rem'
                  }}
                >
                  {stat.label[language]}
                </div>
                <div
                  style={{
                    fontSize: '0.76rem',
                    color: '#94A3B8',
                    marginTop: '0.15rem'
                  }}
                >
                  {stat.sublabel[language]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
