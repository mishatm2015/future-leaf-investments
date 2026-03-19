import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What does Future Leaf Investments do?",
    a: "We provide guidance on mutual funds, SIPs, and long-term financial planning based on individual goals.",
  },
  {
    q: "Do you guarantee returns?",
    a: "No. Mutual fund investments are subject to market risks. We focus on informed decision-making and long-term planning.",
  },
  {
    q: "Can beginners start investing?",
    a: "Yes. We guide first-time investors step by step based on their comfort and financial goals.",
  },
  {
    q: "Is there a consultation fee?",
    a: "No, our consultations and ongoing mutual fund support are completely free of charge to you. We earn our revenue through trail commissions paid by the Asset Management Companies for the funds we distribute.",
  },
];

const FAQSection = () => (
  <section className="bg-card py-20">
    <div className="container max-w-3xl">
      <div className="mb-10 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</span>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
      </div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="rounded-xl border border-border bg-background px-6"
          >
            <AccordionTrigger className="text-left font-medium hover:no-underline">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
