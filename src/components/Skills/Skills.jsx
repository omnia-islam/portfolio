import React, { useState, useMemo } from 'react';
import { Cpu, Search, Sparkles } from 'lucide-react';
import SkillCard from './SkillCard';
import { skillCategories, skillsData } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { language, t } = useLanguage();

  const filteredSkills = useMemo(() => {
    return skillsData.filter((skill) => {
      const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
      const matchesSearch =
        skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        skill.note[language].toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Cpu size={14} />
            <span>{t.skills.badge}</span>
          </span>
          <h2 className="section-title">{t.skills.title}</h2>
          <p className="section-subtitle">{t.skills.subtitle}</p>
        </div>

        {/* Search & Category Filter Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.5rem'
          }}
        >
          {/* Search Input */}
          <div style={{ maxWidth: '420px', width: '100%', margin: '0 auto' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#1E293B',
                border: '1px solid #334155',
                borderRadius: '10px',
                padding: '0.6rem 1rem',
                gap: '0.65rem'
              }}
            >
              <Search size={18} color="#94A3B8" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t.skills.searchPlaceholder}
                style={{
                  width: '100%',
                  backgroundColor: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#F8FAFC',
                  fontSize: '0.9rem'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ color: '#94A3B8', fontSize: '0.8rem', cursor: 'pointer' }}
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '0.6rem'
            }}
          >
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  style={{
                    padding: '0.5rem 1.15rem',
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
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#F8FAFC';
                      e.currentTarget.style.borderColor = '#475569';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.color = '#94A3B8';
                      e.currentTarget.style.borderColor = '#334155';
                    }
                  }}
                >
                  {cat.name[language]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '1.25rem'
          }}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>

        {/* Verification Note Footer */}
        <div
          style={{
            marginTop: '2.5rem',
            textAlign: 'center',
            fontSize: '0.84rem',
            color: '#64748B'
          }}
        >
          <Sparkles size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.35rem' }} />
          <span>{t.skills.note}</span>
        </div>
      </div>
    </section>
  );
}
