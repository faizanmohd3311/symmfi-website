export function SymmFiLogo({ 
  variant = 'default', 
  size = 'normal'
}: { 
  variant?: 'default' | 'light' | 'dark', 
  size?: 'small' | 'normal' | 'large'
}) {
  const dimensions = {
    small: { height: 'h-5', iconSize: 20 },
    normal: { height: 'h-7', iconSize: 28 },
    large: { height: 'h-9', iconSize: 36 }
  };

  const colors = {
    default: {
      text: 'text-[#0A1A2F]',
      accent: 'text-[#4ABF9A]',
      primary: '#4ABF9A',
      secondary: '#C5A46D'
    },
    light: {
      text: 'text-white',
      accent: 'text-[#4ABF9A]',
      primary: '#4ABF9A',
      secondary: '#C5A46D'
    },
    dark: {
      text: 'text-[#0A1A2F]',
      accent: 'text-[#4ABF9A]',
      primary: '#4ABF9A',
      secondary: '#C5A46D'
    }
  };

  const { text, accent, primary, secondary } = colors[variant];
  const { height, iconSize } = dimensions[size];
  const fontSize = size === 'small' ? '1rem' : size === 'large' ? '1.5rem' : '1.25rem';

  // Finance-themed symmetric icon: Balance scales with growth arrows
  const FinanceIcon = () => (
    <svg 
      width={iconSize} 
      height={iconSize} 
      viewBox="0 0 28 28" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Left pillar - ascending */}
      <path 
        d="M6 18 L6 12 L10 8" 
        stroke={primary} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Right pillar - ascending (mirror) */}
      <path 
        d="M22 18 L22 12 L18 8" 
        stroke={primary} 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Center balance point */}
      <circle cx="14" cy="14" r="2" fill={secondary} />
      {/* Base line - symmetry */}
      <path 
        d="M4 22 L24 22" 
        stroke={primary} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      {/* Top connecting line */}
      <path 
        d="M10 8 L18 8" 
        stroke={secondary} 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className={`flex items-center gap-1.5 ${height}`}>
      <FinanceIcon />
      
      <span 
        className={`${text} tracking-tight`} 
        style={{ 
          fontFamily: "'Space Grotesk', 'Inter', sans-serif",
          fontWeight: 700,
          fontSize,
          letterSpacing: '-0.03em'
        }}
      >
        Symm<span className={accent}>Fi</span>
      </span>
    </div>
  );
}

// Favicon component for footer
export function SymmFiFavicon({ size = 32 }: { size?: number }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="rounded-lg"
    >
      {/* Background */}
      <rect width="32" height="32" rx="6" fill="#0A1A2F" />
      
      {/* Simplified icon */}
      <path 
        d="M8 20 L8 15 L12 11" 
        stroke="#4ABF9A" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path 
        d="M24 20 L24 15 L20 11" 
        stroke="#4ABF9A" 
        strokeWidth="2.5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="16" r="2" fill="#C5A46D" />
      <path 
        d="M12 11 L20 11" 
        stroke="#C5A46D" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </svg>
  );
}
