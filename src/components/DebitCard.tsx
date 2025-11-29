import { SymmFiLogo } from './SymmFiLogo';

export function DebitCard() {
  return (
    <div 
      className="relative w-[340px] h-[214px] rounded-2xl overflow-hidden shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #0A1A2F 0%, #1a3a4f 50%, #0A1A2F 100%)',
      }}
    >
      {/* Decorative background patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#4ABF9A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#C5A46D] rounded-full blur-3xl"></div>
      </div>

      {/* Card content */}
      <div className="relative h-full p-6 flex flex-col justify-between">
        {/* Top section - Logo and chip */}
        <div className="flex items-start justify-between">
          <SymmFiLogo variant="light" size="small" />
          
          {/* Chip */}
          <div className="w-12 h-10 bg-gradient-to-br from-[#C5A46D] to-[#C5A46D]/60 rounded-md relative overflow-hidden">
            <div className="absolute inset-0 grid grid-cols-3 gap-[1px] p-1.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-[#0A1A2F]/20 rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>

        {/* Middle section - Card number */}
        <div>
          <div 
            className="text-white tracking-[0.2em] mb-1"
            style={{ 
              fontFamily: 'monospace',
              fontSize: '1.125rem',
              fontWeight: 500,
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}
          >
            4532  1234  5678  9012
          </div>
          <div className="flex items-center gap-1 text-white/60 text-xs">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1" fill="none"/>
              <path d="M6 3v3l2 2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
            </svg>
            <span>Contactless</span>
          </div>
        </div>

        {/* Bottom section - Name and logos */}
        <div className="flex items-end justify-between">
          <div>
            <div className="text-white/50 text-[10px] mb-1 uppercase tracking-wide">Cardholder</div>
            <div 
              className="text-white tracking-wider"
              style={{ 
                fontSize: '0.875rem',
                fontWeight: 600,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}
            >
              SARAH JAMEEL
            </div>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div className="text-white/50 text-[10px]">
              <span className="mr-2">VALID THRU</span>
              <span className="text-white font-mono">12/27</span>
            </div>
            
            {/* Mastercard logo */}
            <svg width="48" height="30" viewBox="0 0 48 30" fill="none">
              <circle cx="18" cy="15" r="12" fill="#EB001B" opacity="0.9"/>
              <circle cx="30" cy="15" r="12" fill="#F79E1B" opacity="0.9"/>
              <path 
                d="M24 6.5C21.5 8.5 20 11.5 20 15C20 18.5 21.5 21.5 24 23.5C26.5 21.5 28 18.5 28 15C28 11.5 26.5 8.5 24 6.5Z" 
                fill="#FF5F00"
                opacity="0.9"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
    </div>
  );
}
