import { useState } from 'react';
import {
  Home,
  CreditCard,
  Receipt,
  BookOpen,
  Calculator,
  Shield,
  Settings,
  Bell,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Download,
  Menu,
  X,
  ArrowLeft,
  Target,
  AlertCircle,
  CheckCircle,
  HelpCircle,
  XCircle,
  Building2,
  Clock
} from 'lucide-react';
import { AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { FinancingSection } from './FinancingSection';
import { SymmFiLogo } from './SymmFiLogo';

interface DashboardProps {
  onBackToLanding: () => void;
}

const getHalalIcon = (status: string) => {
  switch (status) {
    case 'halal':
      return <CheckCircle size={16} className="text-[#4ABF9A]" />;
    case 'neutral':
      return <HelpCircle size={16} className="text-[#C5A46D]" />;
    case 'investigate':
      return <AlertCircle size={16} className="text-[#C5A46D]" />;
    case 'non-halal':
      return <XCircle size={16} className="text-[#d4183d]" />;
    default:
      return null;
  }
};

const getHalalBadge = (status: string) => {
  switch (status) {
    case 'halal':
      return <span className="px-2 py-0.5 bg-[#4ABF9A]/10 text-[#4ABF9A] rounded">Halal</span>;
    case 'neutral':
      return <span className="px-2 py-0.5 bg-[#C5A46D]/10 text-[#C5A46D] rounded">Neutral</span>;
    case 'investigate':
      return <span className="px-2 py-0.5 bg-[#C5A46D]/10 text-[#C5A46D] rounded">Investigate</span>;
    case 'non-halal':
      return <span className="px-2 py-0.5 bg-[#d4183d]/10 text-[#d4183d] rounded">Non-halal</span>;
    default:
      return null;
  }
};

export function Dashboard({ onBackToLanding }: DashboardProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data
  const expenseData = [
    { month: 'Jan', amount: 45000 },
    { month: 'Feb', amount: 52000 },
    { month: 'Mar', amount: 48000 },
    { month: 'Apr', amount: 61000 },
    { month: 'May', amount: 55000 },
    { month: 'Jun', amount: 67000 },
  ];

  const categoryData = [
    { name: 'Travel', value: 28, color: '#4ABF9A' },
    { name: 'Software', value: 22, color: '#C5A46D' },
    { name: 'Marketing', value: 18, color: '#0A1A2F' },
    { name: 'Office', value: 15, color: '#4ABF9A' },
    { name: 'Others', value: 17, color: '#C5A46D' },
  ];

  const recentTransactions = [
    { id: 1, merchant: 'AWS Services', amount: -450.00, category: 'Software', date: '2025-11-24', status: 'completed', halalStatus: 'halal' },
    { id: 2, merchant: 'LinkedIn Ads', amount: -1200.00, category: 'Marketing', date: '2025-11-23', status: 'completed', halalStatus: 'neutral' },
    { id: 3, merchant: "AB Beer Company", amount: -890.00, category: 'Business', date: '2025-11-22', status: 'pending', halalStatus: 'investigate' },
    { id: 4, merchant: 'Office Depot', amount: -234.50, category: 'Office', date: '2025-11-21', status: 'completed', halalStatus: 'halal' },
    { id: 5, merchant: 'Shopify', amount: -149.90, category: 'Software', date: '2025-11-20', status: 'completed', halalStatus: 'neutral' },
  ];

  const halalBreakdown = [
    { name: '100% Halal', value: 68, color: '#4ABF9A' },
    { name: 'Review Needed', value: 18, color: '#C5A46D' },
    { name: 'Non-compliant', value: 14, color: '#d4183d' },
  ];

  const recentAlerts = [
    { id: 1, message: "AB Beer Company transaction flagged – review alcohol policy?", merchant: "AB Beer Company", type: 'investigate' },
    { id: 2, message: "Shopify recurring subscription — classified as neutral service.", merchant: "Shopify", type: 'neutral' },
  ];

  const upcomingBills = [
    { id: 1, name: 'AWS Services', amount: 450, dueDate: '2025-12-01', category: 'Software' },
    { id: 2, name: 'Office Rent', amount: 3500, dueDate: '2025-12-01', category: 'Office' },
    { id: 3, name: 'Shopify Subscription', amount: 149.90, dueDate: '2025-12-05', category: 'Software' },
  ];

  const zakatAssets = [
    { name: 'Cash & Bank', amount: 284500 },
    { name: 'Inventory', amount: 125000 },
    { name: 'Receivables', amount: 45000 },
  ];

  const totalAssets = zakatAssets.reduce((sum, asset) => sum + asset.amount, 0);
  const nisabThreshold = 7500;
  const zakatOwed = totalAssets > nisabThreshold ? totalAssets * 0.025 : 0;

  const goalAmount = 150000;
  const savedAmount = 45000;
  const goalProgress = (savedAmount / goalAmount) * 100;

  const activeCards = [
    { id: 1, holder: 'Sarah Jameel', last4: '4242', limit: 5000, spent: 2340, type: 'Physical' },
    { id: 2, holder: 'Abdul Youssef', last4: '8888', limit: 3000, spent: 1250, type: 'Virtual' },
    { id: 3, holder: 'John Smith', last4: '1234', limit: 2000, spent: 890, type: 'Physical' },
  ];

  const navigationItems = [
    { id: 'overview', icon: Home, label: 'Overview' },
    { id: 'cards', icon: CreditCard, label: 'Cards' },
    { id: 'expenses', icon: Receipt, label: 'Expenses' },
    { id: 'bookkeeping', icon: BookOpen, label: 'Bookkeeping' },
    { id: 'tax', icon: Calculator, label: 'Tax Center' },
    { id: 'financing', icon: Shield, label: 'Financing' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - Desktop */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 bg-[#0A1A2F] border-r border-[#C5A46D]/20">
        <div className="flex items-center gap-2 p-6 border-b border-[#C5A46D]/20">
          <SymmFiLogo variant="light" size="normal" />
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === item.id
                  ? 'bg-[#4ABF9A]/20 text-[#4ABF9A]'
                  : 'text-white/70 hover:bg-white/5 hover:text-white'
              }`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="p-4 border-t border-[#C5A46D]/20">
          <button 
            onClick={onBackToLanding}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Landing</span>
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
            <Settings size={20} />
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSidebarOpen(false)}></div>
          <aside className="absolute left-0 top-0 bottom-0 w-64 bg-[#0A1A2F] border-r border-[#C5A46D]/20">
            <div className="flex items-center justify-between p-6 border-b border-[#C5A46D]/20">
              <SymmFiLogo variant="light" size="normal" />
              <button onClick={() => setSidebarOpen(false)} className="text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1 p-4 space-y-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    activeTab === item.id
                      ? 'bg-[#4ABF9A]/20 text-[#4ABF9A]'
                      : 'text-white/70 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="p-4 border-t border-[#C5A46D]/20">
              <button 
                onClick={onBackToLanding}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors mb-1"
              >
                <ArrowLeft size={20} />
                <span>Back to Landing</span>
              </button>
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
                <Settings size={20} />
                <span>Settings</span>
              </button>
            </div>
          </aside>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden text-[#0A1A2F]"
                >
                  <Menu size={24} />
                </button>
                <div>
                  <h1 className="text-[#0A1A2F]">{activeTab === 'financing' ? 'Financing' : 'Dashboard'}</h1>
                  <p className="text-[#0A1A2F]/60">Welcome back, Sarah</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Calendar size={20} className="text-[#0A1A2F]" />
                  <span className="text-[#0A1A2F]">Nov 2025</span>
                  <ChevronDown size={16} className="text-[#0A1A2F]" />
                </button>
                <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bell size={20} className="text-[#0A1A2F]" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-[#4ABF9A] rounded-full"></span>
                </button>
                <div className="w-10 h-10 bg-gradient-to-br from-[#4ABF9A] to-[#C5A46D] rounded-full"></div>
              </div>
            </div>
          </div>
        </header>

        {activeTab === 'financing' ? (
          <FinancingSection />
        ) : (
          <div className="px-4 sm:px-6 lg:px-8 py-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#0A1A2F]/60">Total Balance</span>
                  <DollarSign size={20} className="text-[#4ABF9A]" />
                </div>
                <div className="text-[#0A1A2F] mb-2">$284,500.00</div>
                <div className="flex items-center gap-1 text-[#4ABF9A]">
                  <TrendingUp size={16} />
                  <span>+12.5%</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#0A1A2F]/60">Monthly Expenses</span>
                  <Receipt size={20} className="text-[#C5A46D]" />
                </div>
                <div className="text-[#0A1A2F] mb-2">$67,240.00</div>
                <div className="flex items-center gap-1 text-[#0A1A2F]/60">
                  <TrendingUp size={16} />
                  <span>+8.2%</span>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#0A1A2F]/60">Active Cards</span>
                  <CreditCard size={20} className="text-[#4ABF9A]" />
                </div>
                <div className="text-[#0A1A2F] mb-2">12 Cards</div>
                <div className="flex items-center gap-1 text-[#0A1A2F]/60">
                  <span>$8,480 spent</span>
                </div>
              </div>

              <div 
                className="bg-white p-6 rounded-xl border border-gray-200 cursor-pointer hover:border-[#4ABF9A] transition-colors"
                onClick={() => setActiveTab('financing')}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[#0A1A2F]/60">Financing</span>
                  <Shield size={20} className="text-[#4ABF9A]" />
                </div>
                <div className="text-[#0A1A2F] mb-2">Available up to</div>
                <div className="flex items-center gap-1 text-[#4ABF9A]">
                  <span>$142,000</span>
                  <ChevronDown size={16} className="rotate-[-90deg]" />
                </div>
              </div>
            </div>

            {/* Goals, Savings & Upcoming Bills */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Goals */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Target size={20} className="text-[#4ABF9A]" />
                  <h3 className="text-[#0A1A2F]">Goals</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#0A1A2F]">New Branch</span>
                      <span className="text-[#0A1A2F]/60">{goalProgress.toFixed(0)}%</span>
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-[#4ABF9A] to-[#C5A46D]" 
                        style={{ width: `${goalProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-[#4ABF9A]">${savedAmount.toLocaleString()} saved</span>
                      <span className="text-[#0A1A2F]/60">${goalAmount.toLocaleString()} goal</span>
                    </div>
                  </div>
                  <button className="w-full px-4 py-2 border border-[#4ABF9A] text-[#4ABF9A] rounded-lg hover:bg-[#4ABF9A]/10 transition-colors">
                    + Add Funds
                  </button>
                </div>
              </div>

              {/* Upcoming Bills */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Clock size={20} className="text-[#C5A46D]" />
                  <h3 className="text-[#0A1A2F]">Upcoming Bills</h3>
                </div>
                <div className="space-y-3">
                  {upcomingBills.map((bill) => (
                    <div key={bill.id} className="flex items-center justify-between">
                      <div>
                        <div className="text-[#0A1A2F]">{bill.name}</div>
                        <div className="text-[#0A1A2F]/60">{bill.dueDate}</div>
                      </div>
                      <div className="text-[#0A1A2F]">${bill.amount.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zakat Calculator */}
              <div className="bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90 p-6 rounded-xl text-white">
                <div className="flex items-center gap-2 mb-4">
                  <Calculator size={20} className="text-[#C5A46D]" />
                  <h3>Zakat Calculator</h3>
                </div>
                <div className="space-y-3 mb-4">
                  {zakatAssets.map((asset, index) => (
                    <div key={index} className="flex items-center justify-between text-white/80">
                      <span>{asset.name}</span>
                      <span>${asset.amount.toLocaleString()}</span>
                    </div>
                  ))}
                  <div className="border-t border-white/20 pt-3">
                    <div className="flex items-center justify-between">
                      <span>Total Assets</span>
                      <span className="text-[#C5A46D]">${totalAssets.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 rounded-lg p-3 mb-3">
                  <div className="text-white/60 mb-1">Nisab Threshold</div>
                  <div className="text-[#4ABF9A]">${nisabThreshold.toLocaleString()}</div>
                </div>
                <div className="bg-[#4ABF9A]/20 border border-[#4ABF9A]/30 rounded-lg p-3">
                  <div className="text-white/90 mb-1">Annual Zakat Owed (2.5%)</div>
                  <div className="text-[#4ABF9A]">${zakatOwed.toLocaleString()}</div>
                  <div className="text-white/60 mt-1">Monthly: ${(zakatOwed / 12).toFixed(2)}</div>
                </div>
              </div>
            </div>

            {/* Halal Spend Breakdown & Recent Alerts */}
            <div className="grid lg:grid-cols-2 gap-6 mb-8">
              {/* Halal Spend Breakdown */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[#0A1A2F] mb-6">Halal Spend Breakdown</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={halalBreakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {halalBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {halalBreakdown.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-[#0A1A2F]">{item.name}</span>
                      </div>
                      <span className="text-[#0A1A2F]/60">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recent Alerts */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center gap-2 mb-6">
                  <AlertCircle size={20} className="text-[#C5A46D]" />
                  <h3 className="text-[#0A1A2F]">Recent Alerts</h3>
                </div>
                <div className="space-y-4">
                  {recentAlerts.map((alert) => (
                    <div key={alert.id} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                      <div className="flex items-start gap-3">
                        {alert.type === 'investigate' ? (
                          <AlertCircle size={20} className="text-[#C5A46D] flex-shrink-0 mt-0.5" />
                        ) : (
                          <HelpCircle size={20} className="text-[#C5A46D] flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-[#0A1A2F] mb-2">{alert.message}</p>
                          <button className="px-3 py-1 bg-[#4ABF9A] text-white rounded hover:bg-[#4ABF9A]/90 transition-colors">
                            Review
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Charts Section */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Expense Trend */}
              <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-[#0A1A2F] mb-1">Expense Trend</h3>
                    <p className="text-[#0A1A2F]/60">Last 6 months</p>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <Download size={16} className="text-[#0A1A2F]" />
                    <span className="hidden sm:inline text-[#0A1A2F]">Export</span>
                  </button>
                </div>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={expenseData}>
                    <defs>
                      <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#4ABF9A" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#4ABF9A" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" stroke="#6b7280" />
                    <YAxis stroke="#6b7280" />
                    <Tooltip />
                    <Area type="monotone" dataKey="amount" stroke="#4ABF9A" fillOpacity={1} fill="url(#colorAmount)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Category Breakdown */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="text-[#0A1A2F] mb-6">Expense Categories</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {categoryData.map((category, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: category.color }}></div>
                        <span className="text-[#0A1A2F]">{category.name}</span>
                      </div>
                      <span className="text-[#0A1A2F]/60">{category.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Transactions & Cards */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Recent Transactions with Halal Tags */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#0A1A2F]">Recent Transactions</h3>
                  <button className="flex items-center gap-2 text-[#4ABF9A] hover:text-[#4ABF9A]/80">
                    <span>View All</span>
                  </button>
                </div>
                <div className="space-y-4">
                  {recentTransactions.map((transaction) => (
                    <div key={transaction.id} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex items-center gap-3 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-[#4ABF9A]/20 to-[#C5A46D]/20 rounded-lg flex items-center justify-center">
                          <Receipt size={20} className="text-[#4ABF9A]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-[#0A1A2F] truncate">{transaction.merchant}</div>
                          <div className="flex items-center gap-2">
                            <span className="text-[#0A1A2F]/60">{transaction.category}</span>
                            {getHalalBadge(transaction.halalStatus)}
                          </div>
                        </div>
                      </div>
                      <div className="text-right ml-2">
                        <div className="text-[#0A1A2F]">${Math.abs(transaction.amount).toFixed(2)}</div>
                        <div className={`${transaction.status === 'completed' ? 'text-[#4ABF9A]' : 'text-[#C5A46D]'}`}>
                          {transaction.status}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Active Cards */}
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-[#0A1A2F]">Active Cards</h3>
                  <button className="px-4 py-2 bg-[#4ABF9A] text-white rounded-lg hover:bg-[#4ABF9A]/90 transition-colors">
                    + New Card
                  </button>
                </div>
                <div className="space-y-4">
                  {activeCards.map((card) => (
                    <div key={card.id} className="p-4 bg-gradient-to-br from-[#0A1A2F] to-[#0A1A2F]/90 rounded-xl">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-white/60">{card.type}</span>
                        <CreditCard size={20} className="text-[#C5A46D]" />
                      </div>
                      <div className="text-white mb-2">•••• {card.last4}</div>
                      <div className="text-[#C5A46D] mb-4">{card.holder}</div>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-white/60">Spent</div>
                          <div className="text-white">${card.spent.toLocaleString()}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-white/60">Limit</div>
                          <div className="text-white">${card.limit.toLocaleString()}</div>
                        </div>
                      </div>
                      <div className="mt-3 h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[#4ABF9A] rounded-full"
                          style={{ width: `${(card.spent / card.limit) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}