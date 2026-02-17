import { Phone, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-family.jpg";

const HeroSection = () => (
  <section className="gradient-hero relative overflow-hidden">
    <div className="container grid min-h-[85vh] items-center gap-12 py-16 lg:grid-cols-2">
      {/* Text */}
      <div className="animate-fade-up space-y-6">
        <span className="inline-block rounded-full border border-primary/20 bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-secondary-foreground">
          AMFI Registered Mutual Fund Distributor
        </span>
        <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
          Grow Your Wealth.{" "}
          <span className="text-gradient-leaf">Plan Your Future</span> with Confidence.
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          Guidance for mutual funds, SIPs, and long-term financial planning — helping you make
          informed decisions for a secure tomorrow.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <a
            href="tel:+918086876692"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-shadow hover:shadow-card-hover"
          >
            <Phone size={16} /> Call Now
          </a>
          <a
            href="https://wa.me/918086876692"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary bg-card px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-secondary"
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>
        </div>
        <p className="text-xs text-muted-foreground">ARN-351966 | Let's Grow Together 🌿</p>
      </div>

      {/* Image */}
      <div className="relative hidden lg:block" style={{ animationDelay: "0.2s" }}>
        <div className="overflow-hidden rounded-2xl shadow-card-hover">
          <img
            src={heroImage}
            alt="Happy Indian family planning their financial future"
            className="h-[500px] w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
