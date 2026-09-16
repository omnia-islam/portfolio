import React from 'react';
import { ExternalLink, Code2, ArrowUpRight, FolderGit2 } from 'lucide-react';
import { Github } from '../UI/BrandIcons';
import { useLanguage } from '../../context/LanguageContext';

export default function ProjectCard({ project, onSelect }) {
  const { language, isRTL, t } = useLanguage();

  return (
    <div
      className="glass-card glass-card-interactive"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div>
        {/* Project Thumbnail Image or Fallback */}
        {project.image ? (
          <div
            style={{
              height: '190px',
              width: '100%',
              overflow: 'hidden',
              backgroundColor: '#0F172A',
              position: 'relative'
            }}
          >
            <img
              src={project.image}
              alt={project.title[language]}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.35s ease'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            <span
              style={{
                position: 'absolute',
                top: '0.85rem',
                [isRTL ? 'right' : 'left']: '0.85rem',
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(6px)',
                border: '1px solid rgba(97, 218, 251, 0.35)',
                color: '#61DAFB',
                fontSize: '0.72rem',
                fontWeight: '600',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px'
              }}
            >
              {project.badge[language]}
            </span>
          </div>
        ) : (
          <div
            style={{
              height: '110px',
              padding: '1.25rem 1.5rem',
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95))',
              borderBottom: '1px solid #334155',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                backgroundColor: 'rgba(97, 218, 251, 0.1)',
                border: '1px solid rgba(97, 218, 251, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#61DAFB'
              }}
            >
              <FolderGit2 size={20} />
            </div>

            <span
              style={{
                backgroundColor: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(97, 218, 251, 0.3)',
                color: '#61DAFB',
                fontSize: '0.72rem',
                fontWeight: '600',
                padding: '0.2rem 0.55rem',
                borderRadius: '4px'
              }}
            >
              {project.badge[language]}
            </span>
          </div>
        )}

        {/* Card Body */}
        <div style={{ padding: '1.5rem' }}>
          <div style={{ fontSize: '0.76rem', color: '#8B5CF6', fontWeight: '600', marginBottom: '0.35rem' }}>
            {project.affiliation[language]}
          </div>

          <h3
            style={{
              fontSize: '1.2rem',
              fontWeight: '700',
              color: '#F8FAFC',
              lineHeight: '1.35',
              marginBottom: '0.75rem'
            }}
          >
            {project.title[language]}
          </h3>

          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: '1.6',
              color: '#94A3B8',
              marginBottom: '1.25rem'
            }}
          >
            {project.description[language]}
          </p>

          {/* Tools Badges */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.4rem',
              marginBottom: '1.5rem'
            }}
          >
            {project.tools.map((tool, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '0.74rem',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  backgroundColor: '#0F172A',
                  border: '1px solid #334155',
                  color: '#CBD5E1'
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div
        style={{
          padding: '1rem 1.5rem',
          borderTop: '1px solid #334155',
          backgroundColor: '#0F172A',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '0.75rem'
        }}
      >
        <button
          onClick={() => onSelect(project)}
          className="btn btn-primary"
          style={{ padding: '0.5rem 0.95rem', fontSize: '0.8rem', flex: 1 }}
        >
          <span>{t.projects.viewProject}</span>
          <ArrowUpRight size={14} className={isRTL ? 'rtl-flip' : ''} />
        </button>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.githubBtn}
          style={{
            width: '34px',
            height: '34px',
            borderRadius: '8px',
            backgroundColor: '#1E293B',
            border: '1px solid #334155',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#94A3B8',
            transition: 'all 0.2s ease',
            flexShrink: 0
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
          <Github size={16} />
        </a>
      </div>
    </div>
  );
}
