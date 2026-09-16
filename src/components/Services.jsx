import React from 'react';
import { Layers, Code2, Layout, Cpu, Workflow, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const getServiceIcon = (id) => {
    switch (id) {
      case 'frontend':
        return <Code2 size={24} color="#61DAFB" />;
      case 'ui-ux':
        return <Layout size={24} color="#8B5CF6" />;
      case 'programming':
      case 'software':
        return <Cpu size={24} color="#F59E0B" />;
      case 'automation':
        return <Workflow size={24} color="#10B981" />;
      default:
        return <Layers size={24} color="#61DAFB" />;
    }
  };

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Layers size={14} />
            <span>{t.services.badge}</span>
          </span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-subtitle">{t.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="glass-card glass-card-interactive"
              style={{
                padding: '2.25rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Icon Container */}
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(30, 41, 59, 0.8)',
                    border: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.5rem'
                  }}
                >
                  {getServiceIcon(service.id)}
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: '#F8FAFC',
                    marginBottom: '0.85rem'
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.92rem',
                    lineHeight: '1.65',
                    color: '#94A3B8',
                    marginBottom: '1.5rem'
                  }}
                >
                  {service.description}
                </p>
              </div>

              {/* Highlights List */}
              <div
                style={{
                  paddingTop: '1.25rem',
                  borderTop: '1px solid rgba(51, 65, 85, 0.5)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.55rem'
                }}
              >
                {service.highlights.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.55rem',
                      fontSize: '0.82rem',
                      color: '#CBD5E1'
                    }}
                  >
                    <CheckCircle size={14} color="#61DAFB" style={{ flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
