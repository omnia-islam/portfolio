import React, { useEffect } from 'react';
import { X, ExternalLink, Code2, CheckCircle2, AlertCircle, Sparkles, Building, Layers } from 'lucide-react';
import { Github } from '../UI/BrandIcons';
import { projectDetails } from '../../data/projectDetails';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectModal({ project, onClose }) {
  const { language, isRTL, t } = useLanguage();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const details = projectDetails[project.id];

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 15, 29, 0.85)',
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        overflowY: 'auto'
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#162032',
          border: '1px solid #334155',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '820px',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)',
          animation: 'modalIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            padding: '1.75rem 2rem',
            borderBottom: '1px solid #334155',
            backgroundColor: '#0F172A'
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.5rem' }}>
              <span
                style={{
                  fontSize: '0.74rem',
                  fontWeight: '600',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(97, 218, 251, 0.12)',
                  color: '#61DAFB',
                  border: '1px solid rgba(97, 218, 251, 0.3)'
                }}
              >
                {project.badge[language]}
              </span>
              <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>
                {project.affiliation[language]}
              </span>
            </div>

            <h3 style={{ fontSize: '1.45rem', fontWeight: '800', color: '#F8FAFC' }}>
              {project.title[language]}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label={t.modal.close}
            style={{
              color: '#94A3B8',
              backgroundColor: '#1E293B',
              border: '1px solid #334155',
              borderRadius: '8px',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#F8FAFC';
              e.currentTarget.style.borderColor = '#61DAFB';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#94A3B8';
              e.currentTarget.style.borderColor = '#334155';
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* Project Preview Image if available */}
          {project.image && (
            <div
              style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #334155',
                maxHeight: '320px'
              }}
            >
              <img
                src={project.image}
                alt={project.title[language]}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          )}

          {/* Quick Meta Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
              padding: '1.25rem',
              borderRadius: '12px',
              backgroundColor: '#0F172A',
              border: '1px solid #334155'
            }}
          >
            <div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.2rem' }}>
                {t.modal.role}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#F8FAFC' }}>
                {project.role[language]}
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.74rem', textTransform: 'uppercase', color: '#94A3B8', marginBottom: '0.2rem' }}>
                {t.modal.affiliation}
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: '600', color: '#61DAFB' }}>
                {project.affiliation[language]}
              </div>
            </div>
          </div>

          {/* Detailed Problem & Solution Narrative */}
          {details ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* Overview */}
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.6rem' }}>
                  {t.modal.overview}
                </h4>
                <p style={{ fontSize: '0.94rem', lineHeight: '1.7', color: '#CBD5E1' }}>
                  {details.overview[language]}
                </p>
              </div>

              {/* Problem & Solution Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem'
                }}
              >
                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(239, 68, 68, 0.08)',
                    border: '1px solid rgba(239, 68, 68, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#F87171' }}>
                    <AlertCircle size={16} />
                    <span style={{ fontWeight: '700', fontSize: '0.92rem' }}>{t.modal.problem}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#CBD5E1' }}>
                    {details.problem[language]}
                  </p>
                </div>

                <div
                  style={{
                    padding: '1.25rem',
                    borderRadius: '10px',
                    backgroundColor: 'rgba(16, 185, 129, 0.08)',
                    border: '1px solid rgba(16, 185, 129, 0.25)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: '#34D399' }}>
                    <CheckCircle2 size={16} />
                    <span style={{ fontWeight: '700', fontSize: '0.92rem' }}>{t.modal.solution}</span>
                  </div>
                  <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#CBD5E1' }}>
                    {details.solution[language]}
                  </p>
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '0.85rem' }}>
                  {t.modal.highlights}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                  {details.keyHighlights.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.65rem',
                        fontSize: '0.9rem',
                        color: '#CBD5E1',
                        lineHeight: '1.6'
                      }}
                    >
                      <CheckCircle2 size={16} color="#61DAFB" style={{ marginTop: '3px', flexShrink: 0 }} />
                      <span>{item[language]}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sample Code Block */}
              {details.sampleCode && (
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.65rem' }}>
                    <Code2 size={16} color="#8B5CF6" />
                    <h4 style={{ fontSize: '1.05rem', fontWeight: '700', color: '#F8FAFC' }}>
                      {t.modal.codeSnippet}
                    </h4>
                  </div>
                  <pre
                    style={{
                      padding: '1.25rem',
                      borderRadius: '10px',
                      backgroundColor: '#0A0F1D',
                      border: '1px solid #334155',
                      color: '#E2E8F0',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.84rem',
                      overflowX: 'auto',
                      lineHeight: '1.6',
                      direction: 'ltr',
                      textAlign: 'left'
                    }}
                  >
                    <code>{details.sampleCode}</code>
                  </pre>
                </div>
              )}
            </div>
          ) : (
            <p style={{ fontSize: '0.95rem', color: '#CBD5E1', lineHeight: '1.7' }}>
              {project.description[language]}
            </p>
          )}

          {/* Technologies Badges */}
          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#94A3B8', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
              {t.modal.technologies}
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {project.tools.map((tech, idx) => (
                <span
                  key={idx}
                  style={{
                    padding: '0.35rem 0.75rem',
                    borderRadius: '6px',
                    backgroundColor: '#1E293B',
                    border: '1px solid #334155',
                    fontSize: '0.82rem',
                    fontWeight: '500',
                    color: '#61DAFB'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div
          style={{
            padding: '1.25rem 2rem',
            borderTop: '1px solid #334155',
            backgroundColor: '#0F172A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.86rem' }}
          >
            <Github size={16} />
            <span>{t.modal.viewGithub}</span>
            <ExternalLink size={14} className={isRTL ? 'rtl-flip' : ''} />
          </a>

          <button
            onClick={onClose}
            className="btn btn-secondary"
            style={{ padding: '0.65rem 1.25rem', fontSize: '0.86rem' }}
          >
            <span>{t.modal.close}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
