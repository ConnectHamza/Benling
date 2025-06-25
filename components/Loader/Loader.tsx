import React from 'react';

export default function DotLoader() {
  return (
    <div className="dot-loader-wrapper">
      <div className="dot-loader">
        {[...Array(6)].map((_, i) => (
          <span key={i} />
        ))}
      </div>

      <style jsx>{`
        .dot-loader-wrapper {
          position: absolute;
          inset: 0;
          z-index: 30;
          background: rgba(232, 232, 232, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dot-loader {
          --color: #FF7700;
          --size: 100px;
          width: var(--size);
          height: var(--size);
          display: grid;
          border-radius: 8px;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }

        .dot-loader span {
          width: 100%;
          height: 100%;
          background-color: var(--color);
          animation: blink 0.6s alternate infinite linear;
        }

        .dot-loader span:nth-child(1) { animation-delay: 0ms; }
        .dot-loader span:nth-child(2) { animation-delay: 200ms; }
        .dot-loader span:nth-child(3) { animation-delay: 300ms; }
        .dot-loader span:nth-child(4) { animation-delay: 400ms; }
        .dot-loader span:nth-child(5) { animation-delay: 500ms; }
        .dot-loader span:nth-child(6) { animation-delay: 600ms; }

        @keyframes blink {
          0% { opacity: 0.3; transform: scale(0.5) rotate(5deg); }
          50% { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
