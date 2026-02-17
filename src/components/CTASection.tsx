import { Phone, MessageCircle } from "lucide-react";

const CTASection = () => (
  <section className="gradient-cta py-20 text-primary-foreground">
    <div className="container text-center">
      <h2 className="text-3xl font-bold md:text-4xl">Start Your Investment Journey Today</h2>
      <p className="mx-auto mt-4 max-w-xl text-primary-foreground/80">
        Get guidance from an AMFI Registered Mutual Fund Distributor. Let's plan your financial future together.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          href="https://wa.me/918086876692"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-card px-6 py-3 text-sm font-semibold text-primary transition-shadow hover:shadow-card-hover"
        >
          <MessageCircle size={16} /> Chat on WhatsApp
        </a>
        <a
          href="tel:+918086876692"
          className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          <Phone size={16} /> Call Now
        </a>
      </div>
    </div>
  </section>
);

export default CTASection;
