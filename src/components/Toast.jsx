import React from 'react';

export default function Toast({ toasts }) {
  return (
    <div id="toast-container" className="toast-container" aria-live="polite">
      {toasts.map((toast) => (
        <div key={toast.id} className={`toast toast-${toast.type} ${toast.show ? 'show' : ''}`}>
          <span>{toast.type === 'success' ? '✓' : '⚠'}</span>
          <span>{toast.message}</span>
        </div>
      ))}
    </div>
  );
}
