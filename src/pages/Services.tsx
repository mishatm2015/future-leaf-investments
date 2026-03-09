import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {
  TrendingUp, Clock, Target, Shield, Users, Briefcase,
  BarChart3, PieChart, Landmark, Coins, LineChart, ArrowRightLeft,
  Wallet, GraduationCap, Umbrella, Heart, Building, Globe, Crown,
  FileCheck, UsersRound, FileText, ScrollText, Layers, Gem, Scale
} from "lucide-react";

const categories = [
  {
    title: "Investment Modes",
    subtitle: "The How",
    items: [
      { icon: Clock, name: "Systematic Investment Plan (SIP)", desc: "Disciplined, regular investing to build wealth over time and average out market volatility." },
      { icon: Coins, name: "Lumpsum Investment", desc: "Strategic one-time investment of surplus funds into equity or debt schemes based on market valuation." },
      { icon: ArrowRightLeft, name: "Systematic Transfer Plan (STP)", desc: "Staggering a large lumpsum from a liquid/debt fund into an equity fund to manage risk." },
      { icon: Wallet, name: "Systematic Withdrawal Plan (SWP)", desc: "Generating regular monthly cash flow from an existing corpus, ideal for retirement income." },
    ],
  },
  {
    title: "Goal-Based Solutions",
    subtitle: "The Why",
    items: [
      { icon: Umbrella, name: "Retirement Planning", desc: "Building a substantial corpus to ensure financial independence post-retirement." },
      { icon: GraduationCap, name: "Child's Education Planning", desc: "Creating a dedicated fund for higher education costs, factoring in education inflation." },
      { icon: Shield, name: "Tax Saving (ELSS)", desc: "Investments in ELSS to save tax under Section 80C with potential for higher returns." },
      { icon: TrendingUp, name: "Wealth Creation", desc: "Long-term aggressive portfolio strategies to maximize capital appreciation over 10-15+ years." },
      { icon: Heart, name: "Emergency Fund Setup", desc: "Building a liquid safety net using Liquid or Overnight funds to cover 6-12 months of expenses." },
    ],
  },
  {
    title: "Portfolio Management Services",
    subtitle: "The Health",
    items: [
      { icon: BarChart3, name: "Existing Portfolio Review", desc: "Analyzing your current mutual fund holdings to identify underperforming schemes and overlap." },
      { icon: PieChart, name: "Asset Allocation", desc: "Structuring your portfolio with the right mix of Equity, Debt, and Gold based on your risk appetite." },
      { icon: Scale, name: "Portfolio Rebalancing", desc: "Periodically adjusting your portfolio to maintain original asset allocation and manage risk." },
      { icon: Target, name: "Risk Profiling", desc: "Assessing your ability and willingness to take risks to recommend suitable mutual fund categories." },
    ],
  },
  {
    title: "Specialized Client Segments",
    subtitle: "The Who",
    items: [
      { icon: Globe, name: "NRI Investment Desk", desc: "End-to-end investment support for NRIs including KYC compliance and NRE/NRO fund mapping." },
      { icon: Building, name: "Corporate Treasury Management", desc: "Helping business owners park idle cash in Liquid/Ultra-Short Duration funds for better returns." },
      { icon: Crown, name: "HNI Services", desc: "Bespoke portfolio strategies for large ticket investments focusing on tax efficiency and estate planning." },
    ],
  },
  {
    title: "Operational & Support Services",
    subtitle: "The Ease",
    items: [
      { icon: FileCheck, name: "Paperless Onboarding (e-KYC)", desc: "Digital and seamless KYC registration to get investment-ready in minutes." },
      { icon: UsersRound, name: "Family Portfolio View", desc: "Consolidating investments of all family members under a single login for easier tracking." },
      { icon: FileText, name: "Capital Gains Statements", desc: "Detailed reports for easy tax filing at the end of the financial year." },
      { icon: ScrollText, name: "Transmission of Units", desc: "Assisting with the legal process of transferring mutual fund units to nominees." },
    ],
  },
  {
    title: "Product-Specific Offerings",
    subtitle: "What We Offer",
    items: [
      { icon: LineChart, name: "Equity Funds", desc: "Large Cap, Mid Cap, Small Cap, Flexi Cap, and Sectoral Funds." },
      { icon: Landmark, name: "Debt Funds", desc: "Liquid, Overnight, Corporate Bond, and Gilt Funds." },
      { icon: Layers, name: "Hybrid Funds", desc: "Balanced Advantage, Aggressive Hybrid, and Multi-Asset Funds." },
      { icon: Gem, name: "Gold Funds", desc: "Sovereign Gold Bonds (SGB) and Gold ETFs/Funds of Funds." },
      { icon: Briefcase, name: "Index Funds & ETFs", desc: "Passive investment strategies tracking market indices like Nifty 50 or Sensex." },
    ],
  },
];

const Services = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Services</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Planting Seeds for Your Future</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            From planting your first SIP to watching your wealth grow, we provide 360-degree support for all your mutual fund needs.
          </p>
        </div>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.title}>
              <div className="mb-6 flex items-baseline gap-3">
                <h2 className="text-2xl font-bold">{cat.title}</h2>
                <span className="text-sm text-muted-foreground">— {cat.subtitle}</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-card-hover"
                  >
                    <item.icon className="mb-3 text-primary" size={22} />
                    <h3 className="mb-1 font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Services;
