import { Check, ArrowRight, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { SymmFiLogo, SymmFiFavicon } from './SymmFiLogo';
import { DebitCard } from './DebitCard';
import { ContactForm } from './ContactForm';

interface LandingPageProps {
  onViewDashboard: () => void;
}

export function LandingPage({ onViewDashboard }: LandingPageProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const handleWaitlistSubmit = () => {
  setSubmitted(true);
};

  const features = [
    'Sharia-compliant expense cards',
    'Real-time expense tracking',
    'Automated bookkeeping',
    'Tax optimization',
    'Ethical financing options',
    'Growth analytics'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <SymmFiLogo variant="default" size="normal" />
            
            <div className="flex items-center gap-4">
              <a 
                href="#waitlist"
                className="px-5 py-2 bg-[#0A1A2F] text-white rounded-lg hover:bg-[#0A1A2F]/90 transition-colors"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4ABF9A]/10 rounded-full mb-6">
              <div className="w-2 h-2 bg-[#4ABF9A] rounded-full animate-pulse"></div>
              <span className="text-[#0A1A2F]/70">Coming Soon</span>
            </div>
            
            <h1 
              className="text-[#0A1A2F] mb-6 tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.1', fontWeight: 700 }}
            >
              Finance that works
              <br />
              <span className="text-[#4ABF9A]">the way it should</span>
            </h1>
            
            <p className="text-[#0A1A2F]/60 mb-10 max-w-2xl mx-auto" style={{ fontSize: '1.125rem', lineHeight: '1.7' }}>
              The all-in-one financial platform for businesses seeking ethical, Sharia-compliant solutions. 
              Expense management, bookkeeping, and financing—reimagined.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="#waitlist"
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#0A1A2F] text-white rounded-xl hover:bg-[#0A1A2F]/90 transition-all hover:scale-105"
              >
                <span>Join Waitlist</span>
                <ArrowRight size={20} />
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center gap-8 text-[#0A1A2F]/60">
              <div className="text-center">
                <div className="text-[#0A1A2F] mb-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>500+</div>
                <div>On waitlist</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-[#0A1A2F] mb-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>100%</div>
                <div>Sharia compliant</div>
              </div>
              <div className="w-px h-12 bg-gray-200"></div>
              <div className="text-center">
                <div className="text-[#0A1A2F] mb-1" style={{ fontSize: '1.5rem', fontWeight: 600 }}>Q2 2025</div>
                <div>Launch date</div>
              </div>
            </div>
          </div>

          {/* Product Showcase - Angled Views */}
          <div className="relative max-w-6xl mx-auto">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#4ABF9A]/20 via-[#C5A46D]/20 to-[#4ABF9A]/20 blur-3xl -z-10"></div>
            
            {/* Desktop View */}
            <div className="relative mb-8 md:mb-24" style={{ perspective: '2000px' }}>
              <div 
                className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-200 overflow-hidden md:[transform:rotateX(8deg)_rotateY(-5deg)] md:[transform-style:preserve-3d]"
              >
                {/* Browser Chrome */}
                <div className="bg-gray-100 px-3 py-2 md:px-4 md:py-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="flex gap-1 md:gap-1.5">
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="flex-1 mx-2 md:mx-4 h-5 md:h-6 bg-white rounded-md flex items-center px-2 md:px-3">
                    <span className="text-[10px] md:text-xs text-gray-400">symmfi.com/dashboard</span>
                  </div>
                </div>
                
                {/* Dashboard Preview */}
                <div className="bg-gradient-to-br from-gray-50 to-white p-4 md:p-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-2">Total Balance</div>
                      <div className="text-sm md:text-xl text-[#0A1A2F] mb-0.5 md:mb-1" style={{ fontWeight: 600 }}>$284,500</div>
                      <div className="text-[9px] md:text-xs text-[#4ABF9A]">+12.5%</div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-2">Expenses</div>
                      <div className="text-sm md:text-xl text-[#0A1A2F] mb-0.5 md:mb-1" style={{ fontWeight: 600 }}>$67,240</div>
                      <div className="text-[9px] md:text-xs text-gray-400">This month</div>
                    </div>
                    <div className="bg-white p-3 md:p-4 rounded-lg md:rounded-xl border border-gray-200 shadow-sm">
                      <div className="text-[10px] md:text-xs text-gray-400 mb-1 md:mb-2">Active Cards</div>
                      <div className="text-sm md:text-xl text-[#0A1A2F] mb-0.5 md:mb-1" style={{ fontWeight: 600 }}>12</div>
                      <div className="text-[9px] md:text-xs text-gray-400">$8,480 spent</div>
                    </div>
                    <div className="bg-gradient-to-br from-[#4ABF9A] to-[#4ABF9A]/80 p-3 md:p-4 rounded-lg md:rounded-xl shadow-sm">
                      <div className="text-[10px] md:text-xs text-white/80 mb-1 md:mb-2">Financing</div>
                      <div className="text-sm md:text-xl text-white mb-0.5 md:mb-1" style={{ fontWeight: 600 }}>$142,000</div>
                      <div className="text-[9px] md:text-xs text-white/90">Available</div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg md:rounded-xl border border-gray-200 p-4 md:p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-3 md:mb-4">
                      <div>
                        <div className="text-xs md:text-sm text-[#0A1A2F] mb-0.5 md:mb-1" style={{ fontWeight: 600 }}>Expense Trend</div>
                        <div className="text-[10px] md:text-xs text-gray-400">Last 6 months</div>
                      </div>
                    </div>
                    {/* Simple chart representation */}
                    <div className="h-20 md:h-32 flex items-end gap-1 md:gap-2">
                      {[45, 52, 48, 61, 55, 67].map((val, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-[#4ABF9A] to-[#4ABF9A]/40 rounded-t" style={{ height: `${val}%` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile View - Positioned at angle (hidden on mobile, shown on tablet+) */}
            <div 
              className="hidden md:block absolute -bottom-12 -right-4 lg:-right-12 w-48 lg:w-64"
              style={{ perspective: '1000px' }}
            >
              <div 
                className="bg-white rounded-3xl shadow-2xl border-4 border-gray-800 overflow-hidden"
                style={{ 
                  transform: 'rotateY(-15deg) rotateX(5deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Phone notch */}
                <div className="bg-gray-800 h-6 flex items-center justify-center">
                  <div className="w-24 h-4 bg-black rounded-full"></div>
                </div>
                
                {/* App Preview */}
                <div className="bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90 p-4 pb-8">
                  <div className="text-white/60 mb-1" style={{ fontSize: '0.625rem' }}>Good morning</div>
                  <div className="text-white mb-4" style={{ fontSize: '0.875rem', fontWeight: 600 }}>Sarah</div>
                  
                  <div className="bg-white/10 backdrop-blur rounded-2xl p-3 mb-3">
                    <div className="text-white/60 mb-1" style={{ fontSize: '0.625rem' }}>Total Balance</div>
                    <div className="text-white mb-1" style={{ fontSize: '1.25rem', fontWeight: 600 }}>$284,500</div>
                    <div className="text-[#4ABF9A]" style={{ fontSize: '0.625rem' }}>+12.5%</div>
                  </div>
                  
                  <div className="space-y-2">
                    {['AWS Services', 'LinkedIn Ads', 'Office Depot'].map((name, i) => (
                      <div key={i} className="bg-white/5 backdrop-blur rounded-lg p-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded bg-[#4ABF9A]/20"></div>
                          <div>
                            <div className="text-white" style={{ fontSize: '0.625rem' }}>{name}</div>
                            <div className="text-white/40" style={{ fontSize: '0.5rem' }}>Today</div>
                          </div>
                        </div>
                        <div className="text-white" style={{ fontSize: '0.625rem' }}>-${[450, 1200, 234][i]}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Debit Card - Positioned at artistic angle */}
            <div 
              className="hidden lg:block absolute -bottom-16 -left-24"
              style={{ perspective: '1200px' }}
            >
              <div
                style={{
                  transform: 'rotateY(15deg) rotateX(-5deg) rotateZ(-3deg)',
                  transformStyle: 'preserve-3d'
                }}
              >
                <DebitCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[#0A1A2F] mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Everything you need,
              <br />
              nothing you don't
            </h2>
            <p className="text-[#0A1A2F]/60 max-w-2xl mx-auto" style={{ fontSize: '1.125rem' }}>
              Built for modern businesses that refuse to compromise on ethics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-200 hover:border-[#4ABF9A] transition-colors"
              >
                <div className="w-5 h-5 rounded-full bg-[#4ABF9A] flex items-center justify-center flex-shrink-0">
                  <Check size={14} className="text-white" strokeWidth={3} />
                </div>
                <span className="text-[#0A1A2F]">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="py-32 px-6 lg:px-8 bg-[#0A1A2F]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-white mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
            Be first in line
          </h2>
          <p className="text-white/70 mb-12" style={{ fontSize: '1.125rem' }}>
            Join our waitlist to get early access and exclusive launch benefits
          </p>

          <form
  name="waitlist"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleWaitlistSubmit}
  className="max-w-md mx-auto"
>
  {/* Netlify needs this to identify the form */}
  <input type="hidden" name="form-name" value="waitlist" />
  {/* Optional: stay on the same page after submit */}
  <input type="hidden" name="redirect" value="/#waitlist" />

  {/* Honeypot field for spam */}
  <p className="hidden">
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>

  <div className="flex flex-col sm:flex-row gap-3">
    <input
      type="email"
      name="email"            // 👈 THIS is crucial for Netlify
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Enter your email"
      required
      className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#4ABF9A] focus:border-transparent"
    />
    <button
      type="submit"
      disabled={submitted}
      className="px-8 py-4 bg-[#4ABF9A] text-white rounded-xl hover:bg-[#4ABF9A]/90 transition-colors disabled:opacity-50 whitespace-nowrap"
    >
      {submitted ? 'Added! ✓' : 'Join Waitlist'}
    </button>
  </div>
  <p className="text-white/50 mt-4">No spam. Unsubscribe anytime.</p>
</form>

          <div className="mt-16 pt-16 border-t border-white/10">
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <SymmFiFavicon size={40} />
              <SymmFiLogo variant="default" size="normal" />
            </div>
            
            <div className="flex items-center gap-8 text-[#0A1A2F]/60">
              <button 
                onClick={() => setShowContactForm(true)}
                className="hover:text-[#0A1A2F] transition-colors"
              >
                Contact
              </button>
            </div>

            <p className="text-[#0A1A2F]/40">© 2025 SymmFi. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {showContactForm && <ContactForm onClose={() => setShowContactForm(false)} />}
    </div>
  );
}
