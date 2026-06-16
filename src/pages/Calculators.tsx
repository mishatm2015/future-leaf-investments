import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import {
  Calculator, TrendingUp, Umbrella, ArrowDownToLine,
  CreditCard, Layers, ArrowUpDown, ArrowRight,
} from "lucide-react";

const calculators = [
  {
    id: "sip",
    label: "SIP Calculator",
    icon: TrendingUp,
    desc: "Calculate how much you need to save or how much you will accumulate with your SIP.",
  },
  {
    id: "stepup-sip",
    label: "Step-up SIP Calculator",
    icon: Layers,
    desc: "Calculate returns when you increase your SIP amount by a fixed percentage every year.",
  },
  {
    id: "swp",
    label: "SWP Calculator",
    icon: ArrowDownToLine,
    desc: "Calculate your final amount with a Systematic Withdrawal Plan (SWP).",
  },
  {
    id: "stepup-swp",
    label: "Step-up SWP Calculator",
    icon: ArrowUpDown,
    desc: "Calculate returns when you increase your withdrawals every year to beat inflation.",
  },
  {
    id: "emi",
    label: "EMI Calculator",
    icon: CreditCard,
    desc: "Calculate your monthly loan instalment (EMI) and total interest payable.",
  },
  {
    id: "retirement",
    label: "Retirement Calculator",
    icon: Umbrella,
    desc: "Calculate the corpus you need to retire comfortably and the SIP to get there.",
  },
];

const Calculators = () => (
  <>
    <Navbar />
    <main className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
            <Calculator size={14} /> Calculators
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">Plan Your Financial Future</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Free, instant calculators for SIP, SWP, EMI, Step-up investments, and retirement planning.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {calculators.map((c) => (
            <Link
              key={c.id}
              to={`/calculators/${c.id}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon size={22} />
              </div>
              <h3 className="mb-1.5 font-bold text-lg">{c.label}</h3>
              <p className="flex-1 text-sm text-muted-foreground">{c.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Calculate now
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Calculators;
