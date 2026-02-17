import { Shield, Handshake, Target, HeartHandshake } from "lucide-react";

const items = [
  { icon: Shield, text: "AMFI Registered Mutual Fund Distributor" },
  { icon: Handshake, text: "Transparent & Client-Focused Approach" },
  { icon: Target, text: "Long-Term Financial Planning" },
  { icon: HeartHandshake, text: "Simple & Clear Guidance" },
];

const TrustStrip = () => (
  <section className="border-y border-border bg-secondary py-10">
    <div className="container grid grid-cols-2 gap-6 md:grid-cols-4">
      {items.map((i) => (
        <div key={i.text} className="flex flex-col items-center gap-3 text-center">
          <i.icon className="text-primary" size={28} />
          <span className="text-sm font-medium text-secondary-foreground">{i.text}</span>
        </div>
      ))}
    </div>
  </section>
);

export default TrustStrip;
