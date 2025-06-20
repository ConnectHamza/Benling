// components/DotLoader.tsx
import React from 'react';

export default function DotLoader() {
  return (
    <div className="relative w-full h-screen bg-[#e8e8e8] flex items-center justify-center">
      <div className="loader">
        {[...Array(6)].map((_, i) => (
          <span key={i} />
        ))}
      </div>
      <style jsx>{`
        .loader {
          --color: #b1b1b1;
          --size: 100px;
          width: var(--size);
          height: var(--size);
          display: grid;
          border-radius: 8px;
          grid-template-columns: repeat(3, 1fr);
          gap: 5px;
        }
        
        .loader span {
          width: 100%;
          height: 100%;
          background-color: var(--color);
          animation: keyframes-blink 0.6s alternate infinite linear;
        }
        
        .loader span:nth-child(1) { animation-delay: 0ms; }
        .loader span:nth-child(2) { animation-delay: 200ms; }
        .loader span:nth-child(3) { animation-delay: 300ms; }
        .loader span:nth-child(4) { animation-delay: 400ms; }
        .loader span:nth-child(5) { animation-delay: 500ms; }
        .loader span:nth-child(6) { animation-delay: 600ms; }
        
        @keyframes keyframes-blink {
          0% {
            opacity: 0.3;
            transform: scale(0.5) rotate(5deg);
          }
          50% {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
}