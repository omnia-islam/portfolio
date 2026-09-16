import React, { useState, useMemo } from 'react';
import { FolderGit2, Search } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projectCategories, projects } from '../../data/portfolioData';
import { useLanguage } from '../../context/LanguageContext';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState(null);
  const { language, t } = useLanguage();

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'all' ||
        project.category === activeCategory ||
        (project.secondaryCategories && project.secondaryCategories.includes(activeCategory));
      const matchesSearch =
        project.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery, language]);

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <FolderGit2 size={14} />
            <span>{t.projects.badge}</span>
          </span>
          <h2 className="section-title">{t.projects.title}</h2>
          <p className="section-subtitle">{t.projects.subtitle}</p>
        </div>

        {/* Filter and Search Bar */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            marginBottom: '2.75rem'
          }}
        >
          {/* Search Box */}
          <div style={{ maxWidth: '440px', width: '100%', margin: '0 auto' }}>
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
                placeholder={t.projects.searchPlaceholder}
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
            {projectCategories.map((cat) => {
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

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(330px, 1fr))',
              gap: '2rem'
            }}
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setSelectedProject(proj)}
              />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: 'center',
              padding: '3rem',
              color: '#94A3B8',
              backgroundColor: '#1E293B',
              borderRadius: '12px',
              border: '1px solid #334155'
            }}
          >
            {t.projects.emptyState}
          </div>
        )}

        {/* Interactive Case Study Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
