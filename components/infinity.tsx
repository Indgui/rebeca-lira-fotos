/** Símbolo do infinito colorido (neurodiversidade), igual ao do logo. */
export function Infinity({ className }: { className?: string }) {
  return (
    <svg viewBox="4190 460 380 160" className={className} aria-hidden>
      <defs>
        <linearGradient id="inf-rainbow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#E5484D" /><stop offset=".2" stopColor="#F2992E" /><stop offset=".4" stopColor="#F2C430" />
          <stop offset=".6" stopColor="#2EA55B" /><stop offset=".8" stopColor="#3B82E0" /><stop offset="1" stopColor="#7C4DC4" />
        </linearGradient>
      </defs>
      <path
        d="M4550 540c0 33-27 60-60 60-45 0-80-45-110-60-30 15-65 60-110 60-33 0-60-27-60-60s27-60 60-60c45 0 80 45 110 60 30-15 65-60 110-60 33 0 60 27 60 60z"
        fill="none" stroke="url(#inf-rainbow)" strokeWidth="38" strokeLinejoin="round"
      />
    </svg>
  );
}
