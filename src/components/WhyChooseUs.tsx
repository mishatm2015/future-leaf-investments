import { Check } from "lucide-react";
import advisorImage from "@/assets/advisor-meeting-new.png";

const points = [
  "Clear and simple investment guidance",
  "Focus on long-term financial goals",
  "Transparent process and ethical practices",
  "Support throughout your investment journey",
];

const WhyChooseUs = () => (
  <section className="py-20">
    <div className="container grid items-center gap-12 lg:grid-cols-2">
      <div className="overflow-hidden rounded-2xl shadow-card">
        <img
          src={advisorImage}
          alt="Financial advisor discussing investment plan with clients"
          className="h-[280px] w-full object-cover object-center sm:h-[340px] lg:h-[400px]"
          loading="lazy"
        />
      </div>
      <div>
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Why Us</span>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Why Choose Future Leaf Investments?</h2>
        <ul className="mt-6 space-y-4">
          {points.map((p) => (
            <li key={p} className="flex items-start gap-3">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Check size={14} />
              </span>
              <span className="text-muted-foreground">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
