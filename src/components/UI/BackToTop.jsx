import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label={t.footer.backToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        [isRTL ? 'left' : 'right']: '2rem',
        width: '44px',
        height: '44px',
        borderRadius: '12px',
        backgroundColor: '#1E293B',
        border: '1px solid #334155',
        color: '#F8FAFC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.45)',
        zIndex: 90,
        transition: 'all 0.25s ease',
        cursor: 'pointer'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = '#2A3B54';
        e.currentTarget.style.borderColor = '#61DAFB';
        e.currentTarget.style.color = '#61DAFB';
        e.currentTarget.style.transform = 'translateY(-3px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = '#1E293B';
        e.currentTarget.style.borderColor = '#334155';
        e.currentTarget.style.color = '#F8FAFC';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <ArrowUp size={20} />
    </button>
  );
}
