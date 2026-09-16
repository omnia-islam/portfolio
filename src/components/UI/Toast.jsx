import React from 'react';
import { CheckCircle, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function Toast({ message, onClose }) {
  const { isRTL } = useLanguage();

  if (!message) return null;

  return (
    <div
      role="alert"
      style={{
        position: 'fixed',
        bottom: '2rem',
        [isRTL ? 'right' : 'left']: '2rem',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        padding: '0.85rem 1.25rem',
        borderRadius: '12px',
        backgroundColor: '#1E293B',
        border: '1px solid rgba(97, 218, 251, 0.4)',
        boxShadow: '0 12px 30px rgba(0, 0, 0, 0.6)',
        color: '#F8FAFC',
        fontSize: '0.9rem',
        fontWeight: '500',
        animation: 'modalIn 0.25s ease-out'
      }}
    >
      <CheckCircle size={18} color="#61DAFB" />
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          color: '#94A3B8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '0.2rem',
          marginLeft: isRTL ? '0' : '0.5rem',
          marginRight: isRTL ? '0.5rem' : '0',
          cursor: 'pointer'
        }}
        aria-label="Dismiss notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}
