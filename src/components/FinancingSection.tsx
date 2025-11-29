import { Shield, TrendingUp, CheckCircle, AlertCircle, Building2, Truck, Factory, ChevronRight } from 'lucide-react';

export function FinancingSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      {/* Top Summary (Hero) - Reduced */}
      <div className="bg-gradient-to-br from-[#0A1A2F] via-[#0A1A2F] to-[#0A1A2F]/95 rounded-xl p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#4ABF9A]/20 rounded-lg flex items-center justify-center">
              <Shield size={20} className="text-[#4ABF9A]" />
            </div>
            <div>
              <h2 className="text-white">Your Financing Dashboard</h2>
              <p className="text-white/60">Sharia-compliant financial solutions</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <div className="text-white/60 mb-2">Total Eligible Financing</div>
            <div className="text-white mb-3">Up to $142,000</div>
            <div className="flex items-center gap-2 text-[#4ABF9A]">
              <CheckCircle size={16} />
              <span>3 Products Available</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
            <div className="text-white/60 mb-2">Connected Accounting</div>
            <div className="flex items-center gap-3 mb-3">
              {/* QuickBooks Logo */}
              <div className="bg-white rounded px-2 py-1">
                <svg width="80" height="20" viewBox="0 0 80 20" fill="none">
                  <path d="M8 4C5.79 4 4 5.79 4 8V12C4 14.21 5.79 16 8 16C10.21 16 12 14.21 12 12V8C12 5.79 10.21 4 8 4Z" fill="#2CA01C"/>
                  <text x="16" y="14" fontFamily="Inter, sans-serif" fontSize="11" fontWeight="600" fill="#2CA01C">QuickBooks</text>
                </svg>
              </div>
            </div>
            <div className="text-white/80">Last synced 3 days ago • High confidence</div>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="space-y-6">
        {/* Murabaha */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6 bg-gradient-to-r from-[#4ABF9A]/10 to-[#4ABF9A]/5 border-b border-gray-100">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4ABF9A] rounded-lg flex items-center justify-center">
                  <Building2 size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#0A1A2F] mb-1">Murabaha (Purchase Financing)</h3>
                  <p className="text-[#0A1A2F]/60">Best for: Inventory, equipment, raw materials, resale goods</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-[#4ABF9A] text-white rounded-lg hover:bg-[#4ABF9A]/90 transition-colors whitespace-nowrap">
                Start Murabaha Request
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Eligible Limit</div>
                <div className="text-[#0A1A2F]">Up to $142,000</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Profit Rate</div>
                <div className="text-[#0A1A2F]">12–15% annualized</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Tenure</div>
                <div className="text-[#0A1A2F]">3–12 months</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Based On</div>
                <div className="text-[#0A1A2F]">Gross margin + COGS</div>
              </div>
            </div>

            <div className="bg-[#4ABF9A]/5 border border-[#4ABF9A]/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4ABF9A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle size={16} className="text-[#4ABF9A]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">How It Works</h4>
                  <p className="text-[#0A1A2F]/70">
                    We buy the asset and sell it to you at a known markup. This ensures full transparency and Sharia compliance throughout the transaction.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[#4ABF9A]" />
                <span className="text-[#0A1A2F]">Last 3 months of financial statements (fulfilled)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle size={20} className="text-[#4ABF9A]" />
                <span className="text-[#0A1A2F]">Gross margin history (fulfilled)</span>
              </div>
              <div className="flex items-center gap-3">
                <AlertCircle size={20} className="text-[#C5A46D]" />
                <span className="text-[#0A1A2F]">Last 3 months of inventory turnover (pending)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Musharaka */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6 bg-gradient-to-r from-[#C5A46D]/10 to-[#C5A46D]/5 border-b border-gray-100">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#C5A46D] rounded-lg flex items-center justify-center">
                  <TrendingUp size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#0A1A2F] mb-1">Musharaka (Profit-Sharing Partnership)</h3>
                  <p className="text-[#0A1A2F]/60">Best for: Growth capital, working capital, expansion</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-[#C5A46D] text-white rounded-lg hover:bg-[#C5A46D]/90 transition-colors whitespace-nowrap">
                Explore Musharaka
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Eligible Capital</div>
                <div className="text-[#0A1A2F]">Up to $75,000</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">SymmFi Share</div>
                <div className="text-[#0A1A2F]">20–30% of profits</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Tenure</div>
                <div className="text-[#0A1A2F]">Flexible (3–18 months)</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Based On</div>
                <div className="text-[#0A1A2F]">Net margin & stability</div>
              </div>
            </div>

            <div className="bg-[#C5A46D]/5 border border-[#C5A46D]/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#C5A46D]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp size={16} className="text-[#C5A46D]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">How It Works</h4>
                  <p className="text-[#0A1A2F]/70">
                    We become temporary partners in profit for a fixed term. This partnership model allows you to access capital while sharing success and risk according to Islamic principles.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={16} className="text-[#4ABF9A]" />
                  <span className="text-[#0A1A2F]">Eligibility Indicators</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">6-month profitability</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABF9A] w-[85%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">Revenue trend</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABF9A] w-[92%]"></div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">Cashflow volatility</span>
                    <div className="w-24 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4ABF9A] w-[78%]"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp size={16} className="text-[#C5A46D]" />
                  <span className="text-[#0A1A2F]">Performance Metrics</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">Debt-to-equity</span>
                    <span className="text-[#4ABF9A]">0.45 (Good)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">Net margin</span>
                    <span className="text-[#4ABF9A]">18.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#0A1A2F]/70">Cashflow stability</span>
                    <span className="text-[#4ABF9A]">High</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ijarah */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
          <div className="p-6 bg-gradient-to-r from-[#4ABF9A]/10 to-[#4ABF9A]/5 border-b border-gray-100">
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#4ABF9A] rounded-lg flex items-center justify-center">
                  <Truck size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="text-[#0A1A2F] mb-1">Ijarah (Asset Leasing)</h3>
                  <p className="text-[#0A1A2F]/60">Best for: Machinery, vehicles, commercial equipment</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-[#4ABF9A] text-white rounded-lg hover:bg-[#4ABF9A]/90 transition-colors whitespace-nowrap">
                Browse Ijarah Assets
              </button>
            </div>
          </div>

          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Eligible Assets</div>
                <div className="text-[#0A1A2F]">Up to $120,000</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Monthly Rental</div>
                <div className="text-[#0A1A2F]">$900–$2,400</div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Ownership Transfer</div>
                <div className="text-[#4ABF9A] flex items-center gap-1">
                  <CheckCircle size={16} />
                  Available
                </div>
              </div>
              <div>
                <div className="text-[#0A1A2F]/60 mb-2">Based On</div>
                <div className="text-[#0A1A2F]">Cashflow + leases</div>
              </div>
            </div>

            <div className="bg-[#4ABF9A]/5 border border-[#4ABF9A]/20 rounded-lg p-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-[#4ABF9A]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Shield size={16} className="text-[#4ABF9A]" />
                </div>
                <div>
                  <h4 className="text-[#0A1A2F] mb-2">How It Works</h4>
                  <p className="text-[#0A1A2F]/70">
                    We buy the asset and lease it to you with a path to ownership. This structure allows you to use essential equipment while maintaining cash flow, with the option to own the asset at the end of the term.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#4ABF9A] transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <Factory size={20} className="text-[#4ABF9A]" />
                  <span className="text-[#0A1A2F]">Manufacturing Equipment</span>
                </div>
                <div className="text-[#0A1A2F]/60 mb-2">CNC Machine</div>
                <div className="text-[#0A1A2F] mb-1">$45,000</div>
                <div className="text-[#4ABF9A]">$1,200/month</div>
              </div>

              <div className="p-4 border border-gray-200 rounded-lg hover:border-[#4ABF9A] transition-colors cursor-pointer">
                <div className="flex items-center gap-2 mb-3">
                  <Truck size={20} className="text-[#4ABF9A]" />
                  <span className="text-[#0A1A2F]">Delivery Vehicle</span>
                </div>
                <div className="text-[#0A1A2F]/60 mb-2">Ford Transit Van</div>
                <div className="text-[#0A1A2F] mb-1">$35,000</div>
                <div className="text-[#4ABF9A]">$950/month</div>
              </div>

              <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-[#4ABF9A] transition-colors cursor-pointer flex flex-col items-center justify-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                  <ChevronRight size={24} className="text-[#4ABF9A]" />
                </div>
                <span className="text-[#0A1A2F] mb-1">Upload Your Own</span>
                <span className="text-[#0A1A2F]/60">Supplier quote</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#4ABF9A]/10 border border-[#4ABF9A]/30 rounded-lg">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-[#4ABF9A] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#0A1A2F] mb-1">Pre-listed Partner Assets Available</div>
                  <div className="text-[#0A1A2F]/70">Browse our curated marketplace of Sharia-compliant assets from verified partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 bg-gradient-to-r from-[#4ABF9A] to-[#4ABF9A]/90 rounded-xl p-8 text-center">
        <h3 className="text-white mb-2">Need Help Choosing?</h3>
        <p className="text-white/90 mb-6">Schedule a consultation with our Sharia finance experts</p>
        <button className="px-8 py-3 bg-white text-[#0A1A2F] rounded-lg hover:bg-white/90 transition-colors">
          Schedule Consultation
        </button>
      </div>
    </div>
  );
}
