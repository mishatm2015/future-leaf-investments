import { TrendingUp, Clock, Briefcase } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Mutual Funds",
    desc: "Professional guidance to help you choose mutual funds aligned with your financial goals and risk profile.",
  },
  {
    icon: Clock,
    title: "SIP (Systematic Investment Plan)",
    desc: "Start investing with small monthly amounts and build wealth steadily through disciplined investing.",
  },
  {
    icon: Briefcase,
    title: "Mutual Fund Portfolio Review",
    desc: "We review your current funds to remove low performers, fix overlap, and ensure your money is working correctly for your goals.",
  },
];

const ServicesCards = () => (
  <section className="bg-card py-20">
    <div className="container">
      <div className="mb-12 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Services</span>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">How We Help You Invest</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-border bg-card p-8 transition-all hover:shadow-card-hover hover:gradient-card-hover"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-secondary text-primary">
              <s.icon size={24} />
            </div>
            <h3 className="mb-2 text-xl font-semibold">{s.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCards;
