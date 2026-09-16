import React from 'react';
import { Check, Star } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function SkillCard({ skill }) {
  const { language } = useLanguage();

  return (
    <div
      className="glass-card"
      style={{
        padding: '1.1rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: '0.65rem',
        border: skill.highlight ? '1px solid rgba(97, 218, 251, 0.4)' : '1px solid #334155',
        backgroundColor: skill.highlight ? 'rgba(30, 41, 59, 0.85)' : '#162032',
        position: 'relative',
        transition: 'all 0.25s ease'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontSize: '0.96rem',
            fontWeight: '600',
            color: skill.highlight ? '#61DAFB' : '#F8FAFC'
          }}
        >
          {skill.name}
        </span>
        {skill.highlight && (
          <span
            style={{
              fontSize: '0.7rem',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              backgroundColor: 'rgba(97, 218, 251, 0.12)',
              color: '#61DAFB',
              border: '1px solid rgba(97, 218, 251, 0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.2rem'
            }}
          >
            <Star size={10} fill="#61DAFB" />
            <span>Featured</span>
          </span>
        )}
      </div>

      <div style={{ fontSize: '0.8rem', color: '#94A3B8', lineHeight: '1.4' }}>
        {skill.note[language]}
      </div>
    </div>
  );
}
