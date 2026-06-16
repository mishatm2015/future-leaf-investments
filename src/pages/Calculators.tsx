import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import {
  Calculator, TrendingUp, Umbrella, IndianRupee, Percent, Clock,
  User, ArrowDownToLine, CreditCard, Layers, ArrowUpDown, ArrowLeft, ArrowRight,
} from "lucide-react";

// ─── helpers ────────────────────────────────────────────────────────────────

function formatINR(n: number): string {
  if (n >= 1_00_00_000) return `₹${(n / 1_00_00_000).toFixed(2)} Cr`;
  if (n >= 1_00_000) return `₹${(n / 1_00_000).toFixed(2)} L`;
  return `₹${Math.round(n).toLocaleString("en-IN")}`;
}

const BRAND_COLORS = [
  "hsl(145,55%,32%)",
  "hsl(40,70%,50%)",
  "hsl(220,40%,40%)",
  "hsl(85,50%,45%)",
];

function SliderInput({
  label,
  icon: Icon,
  value,
  min,
  max,
  step,
  onChange,
  prefix,
  suffix,
}: {
  label: string;
  icon: React.ElementType;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm font-medium text-foreground">
          <Icon size={15} className="text-primary" />
          {label}
        </label>
        <div className="flex items-center gap-1">
          {prefix && <span className="text-sm font-semibold text-primary">{prefix}</span>}
          <input
            type="number"
            value={value}
            min={min}
            max={max}
            step={step}
            onChange={(e) => {
              const v = parseFloat(e.target.value);
              if (!isNaN(v) && v >= min && v <= max) onChange(v);
            }}
            className="w-24 rounded-lg border border-border bg-secondary px-2 py-1 text-right text-sm font-semibold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {suffix && <span className="text-sm font-semibold text-muted-foreground">{suffix}</span>}
        </div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-secondary accent-primary"
      />
      <div className="flex justify-between text-xs text-muted-foreground">
        <span>{prefix}{min.toLocaleString("en-IN")}{suffix}</span>
        <span>{prefix}{max.toLocaleString("en-IN")}{suffix}</span>
      </div>
    </div>
  );
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: boolean;
  payload?: Array<{ name: string; value: number }>;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-border bg-card px-3 py-2 text-sm shadow-md">
        <p className="font-medium">{payload[0].name}</p>
        <p className="text-primary font-semibold">{formatINR(payload[0].value)}</p>
      </div>
    );
  }
  return null;
};

function StatCard({
  label,
  value,
  color = "text-foreground",
}: {
  label: string;
  value: string;
  color?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-3">
      <p className={`text-base font-bold ${color}`}>{value}</p>
      <p className="mt-0.5 text-xs text-muted-foreground leading-tight">{label}</p>
    </div>
  );
}

function DonutChart({
  data,
  height = 220,
  small = false,
}: {
  data: { name: string; value: number }[];
  height?: number;
  small?: boolean;
}) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={small ? 50 : 60}
          outerRadius={small ? 80 : 90}
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((_, i) => (
            <Cell key={i} fill={BRAND_COLORS[i % BRAND_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend formatter={(v) => <span className="text-xs">{v}</span>} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ─── SIP CALCULATOR ─────────────────────────────────────────────────────────

function SIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  // effective monthly rate — industry standard for mutual fund SIP
  const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
  const n = years * 12;
  const totalValue = r === 0 ? monthly * n : monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
  const invested = monthly * n;
  const returns = totalValue - invested;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={TrendingUp} title="SIP Calculator" sub="Systematic Investment Plan" />
        <SliderInput label="Monthly Investment" icon={IndianRupee} value={monthly} min={500} max={200000} step={500} onChange={setMonthly} prefix="₹" />
        <SliderInput label="Expected Annual Return" icon={Percent} value={rate} min={1} max={30} step={0.5} onChange={setRate} suffix="%" />
        <SliderInput label="Investment Duration" icon={Clock} value={years} min={1} max={40} step={1} onChange={setYears} suffix=" Yr" />
        <HowItWorks text="Calculates the future value of regular monthly investments compounded monthly." />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Investment Summary</h3>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <StatCard label="Invested" value={formatINR(invested)} />
          <StatCard label="Returns" value={formatINR(returns)} color="text-[hsl(40,70%,40%)]" />
          <StatCard label="Total Value" value={formatINR(totalValue)} color="text-primary" />
        </div>
        <DonutChart data={[{ name: "Invested", value: Math.round(invested) }, { name: "Returns", value: Math.round(returns) }]} />
        <HighlightBox label="Wealth Gain Ratio" value={`${((returns / invested) * 100).toFixed(1)}%`} sub={`Returns over ${years} yr${years > 1 ? "s" : ""}`} />
      </div>
    </div>
  );
}

// ─── SWP CALCULATOR ─────────────────────────────────────────────────────────

function SWPCalculator() {
  const [corpus, setCorpus] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(10000);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  // effective monthly rate — industry standard for mutual fund SWP
  const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
  const n = years * 12;

  let balance = corpus;
  let totalWithdrawn = 0;
  let monthsLasted = 0;
  for (let i = 0; i < n; i++) {
    balance = balance * (1 + r);
    if (balance <= 0) break;
    const w = Math.min(withdrawal, balance);
    balance -= w;
    totalWithdrawn += w;
    monthsLasted++;
  }
  balance = Math.max(balance, 0);
  const interestEarned = balance + totalWithdrawn - corpus;
  const corpusExhausted = monthsLasted < n;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={ArrowDownToLine} title="SWP Calculator" sub="Systematic Withdrawal Plan" />
        <SliderInput label="Total Investment (Corpus)" icon={IndianRupee} value={corpus} min={100000} max={10000000} step={50000} onChange={setCorpus} prefix="₹" />
        <SliderInput label="Monthly Withdrawal" icon={IndianRupee} value={withdrawal} min={500} max={200000} step={500} onChange={setWithdrawal} prefix="₹" />
        <SliderInput label="Expected Annual Return" icon={Percent} value={rate} min={1} max={20} step={0.5} onChange={setRate} suffix="%" />
        <SliderInput label="Withdrawal Period" icon={Clock} value={years} min={1} max={30} step={1} onChange={setYears} suffix=" Yr" />
        <HowItWorks text="Each month, returns are earned on the remaining corpus before the withdrawal is deducted." />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Withdrawal Summary</h3>
        {corpusExhausted && (
          <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs text-destructive">
            Corpus exhausted after <strong>{monthsLasted} months</strong>. Consider reducing withdrawal or increasing corpus.
          </div>
        )}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <StatCard label="Total Withdrawn" value={formatINR(totalWithdrawn)} color="text-[hsl(40,70%,40%)]" />
          <StatCard label="Remaining Corpus" value={formatINR(balance)} color="text-primary" />
          <StatCard label="Interest Earned" value={formatINR(Math.max(interestEarned, 0))} color="text-[hsl(85,50%,35%)]" />
          <StatCard label="Initial Corpus" value={formatINR(corpus)} />
        </div>
        <DonutChart
          data={[
            { name: "Total Withdrawn", value: Math.round(totalWithdrawn) },
            { name: "Remaining Corpus", value: Math.round(balance) },
          ]}
          height={200}
          small
        />
      </div>
    </div>
  );
}

// ─── EMI CALCULATOR ─────────────────────────────────────────────────────────

function EMICalculator() {
  const [principal, setPrincipal] = useState(1000000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const r = rate / 100 / 12;
  const n = years * 12;
  const emi =
    r === 0
      ? principal / n
      : (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPayment = emi * n;
  const totalInterest = totalPayment - principal;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={CreditCard} title="EMI Calculator" sub="Equated Monthly Instalment" />
        <SliderInput label="Loan Amount" icon={IndianRupee} value={principal} min={50000} max={10000000} step={50000} onChange={setPrincipal} prefix="₹" />
        <SliderInput label="Annual Interest Rate" icon={Percent} value={rate} min={1} max={30} step={0.1} onChange={setRate} suffix="%" />
        <SliderInput label="Loan Tenure" icon={Clock} value={years} min={1} max={30} step={1} onChange={setYears} suffix=" Yr" />
        <HowItWorks text={`EMI = P × r × (1+r)ⁿ / [(1+r)ⁿ - 1] where r is monthly rate and n is total months.`} />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Loan Summary</h3>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <StatCard label="Monthly EMI" value={formatINR(emi)} color="text-primary" />
          <StatCard label="Principal" value={formatINR(principal)} />
          <StatCard label="Total Interest" value={formatINR(totalInterest)} color="text-[hsl(40,70%,40%)]" />
        </div>
        <DonutChart
          data={[
            { name: "Principal", value: Math.round(principal) },
            { name: "Total Interest", value: Math.round(totalInterest) },
          ]}
        />
        <HighlightBox
          label="Total Payment"
          value={formatINR(totalPayment)}
          sub={`Over ${years} year${years > 1 ? "s" : ""} (${n} EMIs)`}
        />
      </div>
    </div>
  );
}

// ─── STEP-UP SIP CALCULATOR ─────────────────────────────────────────────────

function StepUpSIPCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [stepup, setStepup] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  // effective monthly rate — industry standard for mutual fund SIP
  const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
  let balance = 0;
  let totalInvested = 0;
  for (let yr = 0; yr < years; yr++) {
    const sip = monthly * Math.pow(1 + stepup / 100, yr);
    for (let m = 0; m < 12; m++) {
      // SIP invested at BEGINNING of month, then earns return for the month
      balance = (balance + sip) * (1 + r);
      totalInvested += sip;
    }
  }
  const returns = balance - totalInvested;

  // flat SIP comparison uses same beginning-of-period annuity-due formula
  const flatN = years * 12;
  const flatValue = r === 0 ? monthly * flatN : monthly * ((Math.pow(1 + r, flatN) - 1) / r) * (1 + r);
  const extraGain = balance - flatValue;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={Layers} title="Step-up SIP Calculator" sub="Annual increase in SIP amount" />
        <SliderInput label="Initial Monthly SIP" icon={IndianRupee} value={monthly} min={500} max={200000} step={500} onChange={setMonthly} prefix="₹" />
        <SliderInput label="Annual Step-up Rate" icon={Percent} value={stepup} min={0} max={50} step={1} onChange={setStepup} suffix="%" />
        <SliderInput label="Expected Annual Return" icon={Percent} value={rate} min={1} max={30} step={0.5} onChange={setRate} suffix="%" />
        <SliderInput label="Investment Duration" icon={Clock} value={years} min={1} max={40} step={1} onChange={setYears} suffix=" Yr" />
        <HowItWorks text={`Your SIP increases by ${stepup}% every year. In year ${years}, your monthly SIP will be ${formatINR(monthly * Math.pow(1 + stepup / 100, years - 1))}.`} />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Step-up Investment Summary</h3>
        <div className="mb-4 grid grid-cols-3 gap-3">
          <StatCard label="Total Invested" value={formatINR(totalInvested)} />
          <StatCard label="Returns" value={formatINR(returns)} color="text-[hsl(40,70%,40%)]" />
          <StatCard label="Total Value" value={formatINR(balance)} color="text-primary" />
        </div>
        <DonutChart
          data={[
            { name: "Total Invested", value: Math.round(totalInvested) },
            { name: "Estimated Returns", value: Math.round(returns) },
          ]}
        />
        {extraGain > 0 && (
          <HighlightBox
            label="Extra Gain vs Flat SIP"
            value={formatINR(extraGain)}
            sub={`Benefit of increasing SIP by ${stepup}% every year`}
          />
        )}
      </div>
    </div>
  );
}

// ─── STEP-UP SWP CALCULATOR ─────────────────────────────────────────────────

function StepUpSWPCalculator() {
  const [corpus, setCorpus] = useState(1000000);
  const [withdrawal, setWithdrawal] = useState(8000);
  const [stepup, setStepup] = useState(5);
  const [rate, setRate] = useState(8);
  const [years, setYears] = useState(10);

  // effective monthly rate — industry standard for mutual fund SWP
  const r = Math.pow(1 + rate / 100, 1 / 12) - 1;
  let balance = corpus;
  let totalWithdrawn = 0;
  let monthsLasted = 0;
  for (let yr = 0; yr < years; yr++) {
    const w = withdrawal * Math.pow(1 + stepup / 100, yr);
    for (let m = 0; m < 12; m++) {
      balance = balance * (1 + r);
      if (balance <= 0) break;
      const actual = Math.min(w, balance);
      balance -= actual;
      totalWithdrawn += actual;
      monthsLasted++;
    }
    if (balance <= 0) break;
  }
  balance = Math.max(balance, 0);
  const corpusExhausted = monthsLasted < years * 12;
  const interestEarned = Math.max(balance + totalWithdrawn - corpus, 0);

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-6 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={ArrowUpDown} title="Step-up SWP Calculator" sub="Annual increase in withdrawal amount" />
        <SliderInput label="Total Investment (Corpus)" icon={IndianRupee} value={corpus} min={100000} max={10000000} step={50000} onChange={setCorpus} prefix="₹" />
        <SliderInput label="Initial Monthly Withdrawal" icon={IndianRupee} value={withdrawal} min={500} max={200000} step={500} onChange={setWithdrawal} prefix="₹" />
        <SliderInput label="Annual Step-up Rate" icon={Percent} value={stepup} min={0} max={30} step={1} onChange={setStepup} suffix="%" />
        <SliderInput label="Expected Annual Return" icon={Percent} value={rate} min={1} max={20} step={0.5} onChange={setRate} suffix="%" />
        <SliderInput label="Withdrawal Period" icon={Clock} value={years} min={1} max={30} step={1} onChange={setYears} suffix=" Yr" />
        <HowItWorks text={`Your monthly withdrawal increases by ${stepup}% every year to keep pace with inflation. In year ${years}, monthly withdrawal will be ${formatINR(withdrawal * Math.pow(1 + stepup / 100, years - 1))}.`} />
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Step-up Withdrawal Summary</h3>
        {corpusExhausted && (
          <div className="mb-4 rounded-xl border border-destructive/30 bg-destructive/5 px-4 py-3 text-xs text-destructive">
            Corpus exhausted after <strong>{monthsLasted} months</strong>. Consider reducing withdrawal or increasing corpus.
          </div>
        )}
        <div className="mb-4 grid grid-cols-2 gap-3">
          <StatCard label="Total Withdrawn" value={formatINR(totalWithdrawn)} color="text-[hsl(40,70%,40%)]" />
          <StatCard label="Remaining Corpus" value={formatINR(balance)} color="text-primary" />
          <StatCard label="Interest Earned" value={formatINR(interestEarned)} color="text-[hsl(85,50%,35%)]" />
          <StatCard label="Initial Corpus" value={formatINR(corpus)} />
        </div>
        <DonutChart
          data={[
            { name: "Total Withdrawn", value: Math.round(totalWithdrawn) },
            { name: "Remaining Corpus", value: Math.round(balance) },
          ]}
          height={200}
          small
        />
      </div>
    </div>
  );
}

// ─── RETIREMENT CALCULATOR ──────────────────────────────────────────────────

function RetirementCalculator() {
  const [currentAge, setCurrentAge] = useState(30);
  const [retireAge, setRetireAge] = useState(60);
  const [lifeExpectancy, setLifeExpectancy] = useState(80);
  const [monthlyExpenses, setMonthlyExpenses] = useState(50000);
  const [inflation, setInflation] = useState(6);
  const [returnRate, setReturnRate] = useState(12);
  const [postReturnRate, setPostReturnRate] = useState(8);
  const [currentSavings, setCurrentSavings] = useState(500000);

  const yearsToRetire = Math.max(retireAge - currentAge, 1);
  const yearsInRetirement = Math.max(lifeExpectancy - retireAge, 1);

  // Monthly expenses inflation-adjusted to retirement date
  const expensesAtRetirement = monthlyExpenses * Math.pow(1 + inflation / 100, yearsToRetire);

  // Corpus needed: growing monthly annuity — expenses start at retirment level
  // and grow with inflation; corpus earns post-retirement return (conservative allocation)
  const r_ret = Math.pow(1 + postReturnRate / 100, 1 / 12) - 1;
  const g_m = Math.pow(1 + inflation / 100, 1 / 12) - 1;
  const n_ret = yearsInRetirement * 12;
  const corpusNeeded =
    r_ret <= g_m
      ? expensesAtRetirement * n_ret
      : (expensesAtRetirement * (1 - Math.pow((1 + g_m) / (1 + r_ret), n_ret))) / (r_ret - g_m);

  // Future value of current savings at accumulation return rate
  const fvCurrentSavings = currentSavings * Math.pow(1 + returnRate / 100, yearsToRetire);
  const remainingCorpus = Math.max(corpusNeeded - fvCurrentSavings, 0);

  // Monthly SIP needed — effective monthly rate, beginning-of-period (annuity-due)
  const r = Math.pow(1 + returnRate / 100, 1 / 12) - 1;
  const sipMonths = yearsToRetire * 12;
  const monthlySIP =
    remainingCorpus <= 0
      ? 0
      : r === 0
      ? remainingCorpus / sipMonths
      : (remainingCorpus * r) / ((Math.pow(1 + r, sipMonths) - 1) * (1 + r));
  const totalSIPInvested = monthlySIP * sipMonths;
  const sipReturns = remainingCorpus - totalSIPInvested;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="space-y-5 rounded-2xl border border-border bg-card p-6 shadow-sm">
        <CalcHeader icon={Umbrella} title="Retirement Calculator" sub="Plan your retirement corpus" />
        <SliderInput label="Current Age" icon={User} value={currentAge} min={18} max={65} step={1} onChange={(v) => { setCurrentAge(v); if (v >= retireAge) setRetireAge(v + 1); }} suffix=" Yr" />
        <SliderInput label="Retirement Age" icon={User} value={retireAge} min={Math.min(currentAge + 1, 75)} max={75} step={1} onChange={(v) => { setRetireAge(v); if (v >= lifeExpectancy) setLifeExpectancy(v + 1); }} suffix=" Yr" />
        <SliderInput label="Life Expectancy" icon={User} value={lifeExpectancy} min={Math.min(retireAge + 1, 95)} max={95} step={1} onChange={setLifeExpectancy} suffix=" Yr" />
        <SliderInput label="Monthly Expenses Today" icon={IndianRupee} value={monthlyExpenses} min={5000} max={500000} step={1000} onChange={setMonthlyExpenses} prefix="₹" />
        <SliderInput label="Expected Inflation Rate" icon={Percent} value={inflation} min={1} max={15} step={0.5} onChange={setInflation} suffix="%" />
        <SliderInput label="Return During Accumulation" icon={TrendingUp} value={returnRate} min={1} max={20} step={0.5} onChange={setReturnRate} suffix="%" />
        <SliderInput label="Return During Retirement" icon={TrendingUp} value={postReturnRate} min={1} max={15} step={0.5} onChange={setPostReturnRate} suffix="%" />
        <SliderInput label="Current Savings / Corpus" icon={IndianRupee} value={currentSavings} min={0} max={10000000} step={50000} onChange={setCurrentSavings} prefix="₹" />
        <div className="rounded-xl bg-secondary/60 p-3 text-xs text-muted-foreground">
          Post-retirement return is lower because retirees shift to safer funds (e.g. balanced or debt funds).
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
        <h3 className="mb-4 font-semibold text-lg">Retirement Plan Summary</h3>
        <div className="mb-4 grid grid-cols-2 gap-3">
          <StatCard label="Years to Retire" value={`${yearsToRetire} Yrs`} />
          <StatCard label="Monthly Expenses at Retirement" value={formatINR(expensesAtRetirement)} color="text-[hsl(40,70%,40%)]" />
          <StatCard label="Corpus Needed" value={formatINR(corpusNeeded)} color="text-primary" />
          <StatCard
            label={remainingCorpus <= 0 ? "Already Covered!" : "Monthly SIP Required"}
            value={remainingCorpus <= 0 ? "No SIP needed" : formatINR(monthlySIP)}
            color="text-primary"
          />
        </div>
        {remainingCorpus > 0 && (
          <DonutChart
            data={[
              { name: "SIP Invested", value: Math.max(Math.round(totalSIPInvested), 0) },
              { name: "Returns on SIP", value: Math.max(Math.round(sipReturns), 0) },
              { name: "Current Savings (FV)", value: Math.round(fvCurrentSavings) },
            ]}
            height={200}
            small
          />
        )}
        <HighlightBox
          label="Post-retirement duration"
          value={`${yearsInRetirement} years`}
          sub={`Age ${retireAge} to ${lifeExpectancy} — corpus earns ${postReturnRate}% p.a.`}
        />
      </div>
    </div>
  );
}

// ─── shared sub-components ───────────────────────────────────────────────────

function CalcHeader({ icon: Icon, title, sub }: { icon: React.ElementType; title: string; sub: string }) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-xl bg-secondary p-2">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-xs text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function HowItWorks({ text }: { text: string }) {
  return (
    <div className="rounded-xl bg-secondary/60 p-4 text-sm text-muted-foreground">
      <p className="font-medium text-foreground">How it works</p>
      <p className="mt-1">{text}</p>
    </div>
  );
}

function HighlightBox({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-4">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className="text-2xl font-bold text-primary">{value}</p>
      <p className="text-xs text-muted-foreground mt-0.5">{sub}</p>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────

type CalcId = "sip" | "stepup-sip" | "swp" | "stepup-swp" | "emi" | "retirement";

const calculators: {
  id: CalcId;
  label: string;
  icon: React.ElementType;
  desc: string;
  Component: React.ComponentType;
}[] = [
  { id: "sip", label: "SIP Calculator", icon: TrendingUp, desc: "Calculate how much you need to save or how much you will accumulate with your SIP.", Component: SIPCalculator },
  { id: "stepup-sip", label: "Step-up SIP Calculator", icon: Layers, desc: "Calculate returns when you increase your SIP amount by a fixed percentage every year.", Component: StepUpSIPCalculator },
  { id: "swp", label: "SWP Calculator", icon: ArrowDownToLine, desc: "Calculate your final amount with a Systematic Withdrawal Plan (SWP).", Component: SWPCalculator },
  { id: "stepup-swp", label: "Step-up SWP Calculator", icon: ArrowUpDown, desc: "Calculate returns when you increase your withdrawals every year to beat inflation.", Component: StepUpSWPCalculator },
  { id: "emi", label: "EMI Calculator", icon: CreditCard, desc: "Calculate your monthly loan instalment (EMI) and total interest payable.", Component: EMICalculator },
  { id: "retirement", label: "Retirement Calculator", icon: Umbrella, desc: "Calculate the corpus you need to retire comfortably and the SIP to get there.", Component: RetirementCalculator },
];

const Calculators = () => {
  const [active, setActive] = useState<CalcId | null>(null);
  const selected = calculators.find((c) => c.id === active);

  return (
    <>
      <Navbar />
      <main className="py-16">
        <div className="container">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1 text-sm font-semibold uppercase tracking-wider text-primary">
              <Calculator size={14} /> Calculators
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-5xl">Plan Your Financial Future</h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Free, instant calculators for SIP, SWP, EMI, Step-up investments, and retirement planning.
            </p>
          </div>

          {!selected ? (
            /* ─── Card grid (Groww-style landing) ─── */
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {calculators.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActive(c.id)}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 text-left transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-card-hover"
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
                </button>
              ))}
            </div>
          ) : (
            /* ─── Selected calculator ─── */
            <div>
              <button
                onClick={() => setActive(null)}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowLeft size={15} />
                All Calculators
              </button>
              <selected.Component />
            </div>
          )}

          {/* Disclaimer */}
          <div className="mt-10 rounded-2xl border border-border bg-secondary/40 px-6 py-4 text-center text-xs text-muted-foreground">
            <strong>Disclaimer:</strong> These calculators are for illustrative and educational purposes only. Results are based on assumed constant returns and may not reflect actual market performance. Past performance is not indicative of future results. Please consult a SEBI-registered financial advisor before making investment decisions.
          </div>
        </div>
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
};

export default Calculators;
