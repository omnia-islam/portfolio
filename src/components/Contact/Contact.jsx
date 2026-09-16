import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Copy, Check, ExternalLink, Info, Loader2, AlertTriangle, ShieldCheck, Key, Settings } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin } from '../UI/BrandIcons';
import { personalInfo } from '../../data/socialLinks';
import { useLanguage } from '../../context/LanguageContext';

export default function Contact({ onNotify }) {
  const { language, isRTL, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Read environment variables or state defaults
  const [emailConfig, setEmailConfig] = useState({
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '0SHQGN3wGUzZ9YLJb',
    recipient: import.meta.env.VITE_EMAILJS_RECIPIENT || 'omnia.islamm@gmail.com'
  });

  const [showConfigModal, setShowConfigModal] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState(null);

  const isConfigured = Boolean(
    emailConfig.serviceId &&
    emailConfig.templateId &&
    emailConfig.publicKey &&
    emailConfig.serviceId !== 'your_service_id_here' &&
    emailConfig.templateId !== 'your_template_id_here'
  );

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    if (onNotify) onNotify(`${fieldName} ${t.contact.copiedToast}`);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormFeedback({
        type: 'error',
        message: t.contact.validationError
      });
      return;
    }

    if (!isConfigured) {
      setFormFeedback({
        type: 'error',
        message: isRTL
          ? 'يرجى إدخال معرّف الخدمة (Service ID) ومعرّف القالب (Template ID) لحساب EmailJS الخاص بك لإرسال الرسالة.'
          : 'EmailJS Service ID or Template ID is missing. Please configure them below or use the direct mail app button.'
      });
      setShowConfigModal(true);
      return;
    }

    setSubmitting(true);
    setFormFeedback(null);

    try {
      const templateParams = {
        to_email: emailConfig.recipient,
        recipient: emailConfig.recipient,
        to: emailConfig.recipient,
        email_to: emailConfig.recipient,
        to_name: personalInfo.name.en,
        recipient_name: personalInfo.name.en,

        from_name: formData.name,
        user_name: formData.name,
        name: formData.name,
        from_email: formData.email,
        user_email: formData.email,
        email: formData.email,
        reply_to: formData.email,

        subject: formData.subject || `Portfolio Inquiry from ${formData.name}`,
        message: formData.message,
        content: formData.message
      };

      const res = await emailjs.send(
        emailConfig.serviceId.trim(),
        emailConfig.templateId.trim(),
        templateParams,
        emailConfig.publicKey.trim()
      );

      if (res.status === 200 || res.text === 'OK') {
        setFormFeedback({
          type: 'success',
          message: t.contact.feedbackSuccess
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
        if (onNotify) onNotify(t.contact.feedbackSuccess);
      } else {
        throw new Error(res.text || 'Failed to dispatch email');
      }
    } catch (err) {
      console.error('EmailJS error:', err);
      const rawMsg = err?.text || err?.message || 'Error communicating with EmailJS';
      setFormFeedback({
        type: 'error',
        message: `${t.contact.feedbackError} (${rawMsg})`
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDirectEmail = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-badge">
            <Mail size={14} />
            <span>{t.contact.badge}</span>
          </span>
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="section-subtitle">{t.contact.subtitle}</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem'
          }}
          className="contact-grid"
        >
          {/* Left Column: Direct Info Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC', marginBottom: '1.25rem' }}>
                {t.contact.infoTitle}
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
                {/* Email Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1rem',
                    backgroundColor: '#1E293B',
                    borderRadius: '10px',
                    border: '1px solid #334155'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(97, 218, 251, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#61DAFB'
                      }}
                    >
                      <Mail size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                        {t.contact.emailLabel}
                      </div>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: '600' }}
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.email, 'Email')}
                    aria-label="Copy Email"
                    style={{
                      padding: '0.4rem',
                      color: copiedField === 'Email' ? '#10B981' : '#94A3B8',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedField === 'Email' ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.9rem 1rem',
                    backgroundColor: '#1E293B',
                    borderRadius: '10px',
                    border: '1px solid #334155'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                    <div
                      style={{
                        width: '38px',
                        height: '38px',
                        borderRadius: '8px',
                        backgroundColor: 'rgba(139, 92, 246, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#A78BFA'
                      }}
                    >
                      <Phone size={18} />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                        {t.contact.phoneLabel}
                      </div>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: '600' }}
                        dir="ltr"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'Phone')}
                    aria-label="Copy Phone"
                    style={{
                      padding: '0.4rem',
                      color: copiedField === 'Phone' ? '#10B981' : '#94A3B8',
                      cursor: 'pointer'
                    }}
                  >
                    {copiedField === 'Phone' ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>

                {/* Location Item */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    padding: '0.9rem 1rem',
                    backgroundColor: '#1E293B',
                    borderRadius: '10px',
                    border: '1px solid #334155'
                  }}
                >
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#10B981'
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.74rem', color: '#94A3B8', textTransform: 'uppercase' }}>
                      {t.contact.locationLabel}
                    </div>
                    <div style={{ fontSize: '0.92rem', color: '#F8FAFC', fontWeight: '600' }}>
                      {personalInfo.location[language]}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div
                style={{
                  marginTop: '1.75rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid #334155',
                  display: 'flex',
                  gap: '0.85rem'
                }}
              >
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                >
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                  <ExternalLink size={13} className={isRTL ? 'rtl-flip' : ''} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ flex: 1, padding: '0.65rem', fontSize: '0.85rem' }}
                >
                  <Github size={16} />
                  <span>GitHub</span>
                  <ExternalLink size={13} className={isRTL ? 'rtl-flip' : ''} />
                </a>
              </div>
            </div>

            {/* EmailJS Status Card */}
            <div
              className="glass-card"
              style={{
                padding: '1.1rem 1.4rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '0.75rem',
                border: isConfigured ? '1px solid rgba(16, 185, 129, 0.35)' : '1px solid rgba(245, 158, 11, 0.35)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <ShieldCheck size={20} color={isConfigured ? '#10B981' : '#F59E0B'} style={{ flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.86rem', fontWeight: '700', color: '#F8FAFC' }}>
                    {isConfigured ? t.contact.statusReady : 'EmailJS Ready for Keys'}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#94A3B8' }}>
                    {t.contact.statusDesc}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowConfigModal(true)}
                className="btn btn-outline"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
              >
                <Settings size={13} />
                <span>{isConfigured ? 'Configure Keys' : 'Set Service & Template ID'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="glass-card" style={{ padding: '2.25rem' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '0.5rem',
                flexWrap: 'wrap',
                gap: '0.5rem'
              }}
            >
              <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#F8FAFC' }}>
                {t.contact.formTitle}
              </h3>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  padding: '0.2rem 0.55rem',
                  borderRadius: '4px',
                  backgroundColor: 'rgba(97, 218, 251, 0.1)',
                  color: '#61DAFB',
                  border: '1px solid rgba(97, 218, 251, 0.25)'
                }}
              >
                {t.contact.formBadge}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: '#94A3B8', marginBottom: '1.5rem' }}>
              {t.contact.formDesc}
            </p>

            {/* Form Feedback Alert */}
            {formFeedback && (
              <div
                style={{
                  padding: '0.85rem 1rem',
                  borderRadius: '8px',
                  marginBottom: '1.25rem',
                  fontSize: '0.88rem',
                  lineHeight: '1.5',
                  backgroundColor:
                    formFeedback.type === 'success'
                      ? 'rgba(16, 185, 129, 0.15)'
                      : 'rgba(239, 68, 68, 0.15)',
                  border: `1px solid ${
                    formFeedback.type === 'success' ? '#10B981' : '#EF4444'
                  }`,
                  color: formFeedback.type === 'success' ? '#A7F3D0' : '#FECACA',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.6rem'
                }}
              >
                {formFeedback.type === 'error' ? (
                  <AlertTriangle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                ) : (
                  <Info size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
                )}
                <span>{formFeedback.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.25rem'
                }}
                className="form-row"
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      color: '#CBD5E1',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder={t.contact.namePlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#F8FAFC',
                      fontSize: '0.9rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: 'block',
                      fontSize: '0.82rem',
                      fontWeight: '600',
                      color: '#CBD5E1',
                      marginBottom: '0.4rem'
                    }}
                  >
                    {t.contact.emailInputLabel}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={t.contact.emailPlaceholder}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '8px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#F8FAFC',
                      fontSize: '0.9rem',
                      outline: 'none',
                      direction: 'ltr'
                    }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#CBD5E1',
                    marginBottom: '0.4rem'
                  }}
                >
                  {t.contact.subjectLabel}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder={t.contact.subjectPlaceholder}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    color: '#F8FAFC',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  style={{
                    display: 'block',
                    fontSize: '0.82rem',
                    fontWeight: '600',
                    color: '#CBD5E1',
                    marginBottom: '0.4rem'
                  }}
                >
                  {t.contact.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t.contact.messagePlaceholder}
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    backgroundColor: '#0F172A',
                    border: '1px solid #334155',
                    color: '#F8FAFC',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '1rem'
                }}
              >
                <button
                  type="button"
                  onClick={handleDirectEmail}
                  className="btn btn-outline"
                  style={{ padding: '0.65rem 1rem', fontSize: '0.82rem' }}
                >
                  <Mail size={15} />
                  <span>{t.contact.sendDirectBtn}</span>
                </button>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{
                    padding: '0.75rem 1.75rem',
                    opacity: submitting ? 0.7 : 1
                  }}
                >
                  {submitting ? (
                    <>
                      <Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} />
                      <span>{t.contact.sendingBtn}</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} className={isRTL ? 'rtl-flip' : ''} />
                      <span>{t.contact.sendBtn}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* EmailJS Credentials Modal / Helper */}
        {showConfigModal && (
          <div
            role="dialog"
            aria-modal="true"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(10, 15, 29, 0.88)',
              backdropFilter: 'blur(8px)',
              zIndex: 1000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem'
            }}
            onClick={() => setShowConfigModal(false)}
          >
            <div
              style={{
                backgroundColor: '#162032',
                border: '1px solid #334155',
                borderRadius: '14px',
                width: '100%',
                maxWidth: '520px',
                padding: '2rem',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
                <Key size={20} color="#61DAFB" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#F8FAFC' }}>
                  EmailJS Configuration
                </h3>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#94A3B8', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                Messages are routed via EmailJS to <strong>{personalInfo.email}</strong>. Public Key: <code style={{ color: '#61DAFB' }}>{emailConfig.publicKey}</code>.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setShowConfigModal(false);
                  if (onNotify) onNotify('EmailJS settings updated!');
                }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
              >
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Service ID (e.g., service_xxxxxxx)
                  </label>
                  <input
                    type="text"
                    value={emailConfig.serviceId}
                    onChange={(e) => setEmailConfig({ ...emailConfig, serviceId: e.target.value })}
                    placeholder="service_xxxxxxx"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#F8FAFC',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Template ID (e.g., template_xxxxxxx)
                  </label>
                  <input
                    type="text"
                    value={emailConfig.templateId}
                    onChange={(e) => setEmailConfig({ ...emailConfig, templateId: e.target.value })}
                    placeholder="template_xxxxxxx"
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#F8FAFC',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', color: '#CBD5E1', marginBottom: '0.35rem', fontWeight: '600' }}>
                    Public Key
                  </label>
                  <input
                    type="text"
                    value={emailConfig.publicKey}
                    onChange={(e) => setEmailConfig({ ...emailConfig, publicKey: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.85rem',
                      borderRadius: '8px',
                      backgroundColor: '#0F172A',
                      border: '1px solid #334155',
                      color: '#F8FAFC',
                      fontSize: '0.88rem',
                      fontFamily: 'var(--font-mono)'
                    }}
                  />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => setShowConfigModal(false)}
                    className="btn btn-secondary"
                    style={{ padding: '0.55rem 1rem', fontSize: '0.84rem' }}
                  >
                    Close
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ padding: '0.55rem 1.25rem', fontSize: '0.84rem' }}
                  >
                    Save & Close
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 0.9fr 1.1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
