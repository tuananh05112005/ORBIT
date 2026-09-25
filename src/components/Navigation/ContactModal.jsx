import React, { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button/Button';
import { useLanguage } from '../../context/LanguageContext';

export default function ContactModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const cm = t.contactModal;

  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    missionType: cm.options[0],
    message: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="contact-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button
          className="contact-modal-close"
          onClick={onClose}
          aria-label="Close Contact Modal"
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle2 size={48} style={{ color: 'var(--color-accent)', margin: '0 auto 1.5rem auto' }} />
            <h3 className="section-title" style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>
              {cm.successTitle}
            </h3>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              {cm.successDesc}
            </p>
          </div>
        ) : (
          <>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-accent)', letterSpacing: '0.14em', marginBottom: '0.5rem' }}>
              {cm.label}
            </div>
            <h3 className="section-title" style={{ fontSize: '1.85rem', marginBottom: '0.5rem' }}>
              {cm.title}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
              {cm.desc}
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-field">
                <label className="contact-label">{cm.nameLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={cm.namePlaceholder}
                  className="contact-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">{cm.orgLabel}</label>
                <input
                  type="text"
                  required
                  placeholder={cm.orgPlaceholder}
                  className="contact-input"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">{cm.emailLabel}</label>
                <input
                  type="email"
                  required
                  placeholder={cm.emailPlaceholder}
                  className="contact-input"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="contact-field">
                <label className="contact-label">{cm.objectiveLabel}</label>
                <select
                  className="contact-input"
                  value={formData.missionType}
                  onChange={(e) => setFormData({ ...formData, missionType: e.target.value })}
                  style={{ background: '#0d1117' }}
                >
                  {cm.options.map((opt, idx) => (
                    <option key={idx} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div className="contact-field">
                <label className="contact-label">{cm.specLabel}</label>
                <textarea
                  rows="3"
                  placeholder={cm.specPlaceholder}
                  className="contact-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <Button
                variant="primary"
                size="md"
                type="submit"
                style={{ marginTop: '0.5rem', width: '100%' }}
              >
                {cm.submitBtn}
              </Button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
