export function BrandMark({ className = "h-11 w-11" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      aria-hidden="true"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="shieldGradient" x1="8" y1="8" x2="56" y2="56">
          <stop offset="0%" stopColor="#67E8F9" />
          <stop offset="100%" stopColor="#2563EB" />
        </linearGradient>
      </defs>
      <path
        d="M32 6L52 14V29C52 42.4 43.5 54.1 32 58C20.5 54.1 12 42.4 12 29V14L32 6Z"
        fill="url(#shieldGradient)"
      />
      <path
        d="M32 16C37.2 16 41.4 20.2 41.4 25.4C41.4 28.4 40 31.1 37.8 32.8L42.2 39.8H35.8L32 34.1L28.2 39.8H21.8L26.2 32.8C24 31.1 22.6 28.4 22.6 25.4C22.6 20.2 26.8 16 32 16Z"
        fill="#04111F"
      />
      <circle cx="32" cy="25.4" r="3.2" fill="#67E8F9" />
      <path d="M32 34.1V42.6" stroke="#67E8F9" strokeWidth="3" strokeLinecap="round" />
      <path d="M24.6 22.6L18.8 18.8" stroke="#67E8F9" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M39.4 22.6L45.2 18.8" stroke="#67E8F9" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
