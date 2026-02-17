import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import advisorImage from "@/assets/advisor-client.jpg";

const About = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Future Leaf™ Investments</h1>
        <p className="mt-1 text-sm text-muted-foreground">Let's Grow Together 🌿</p>

        <div className="mt-10 overflow-hidden rounded-2xl shadow-card">
          <img src={advisorImage} alt="Our team" className="h-64 w-full object-cover" loading="lazy" />
        </div>

        <div className="mt-10 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Future Leaf Investments is an AMFI Registered Mutual Fund Distributor (ARN-351966) committed to
            helping individuals and families make informed financial decisions through mutual funds, SIPs,
            and long-term planning.
          </p>
          <p>
            We believe in transparent, client-focused guidance — not hard selling. Our approach is simple:
            understand your goals, assess your risk profile, and recommend suitable investment options.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Krishnanunni</h3>
            <p className="text-sm text-primary">Founder</p>
            <p className="mt-2 text-sm text-muted-foreground">finances.krishnanunni@gmail.com</p>
            <p className="text-sm text-muted-foreground">8086876692</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6">
            <h3 className="text-lg font-semibold">Shini K J</h3>
            <p className="text-sm text-primary">Operations Head</p>
            <p className="mt-2 text-sm text-muted-foreground">finances.shini@gmail.com</p>
            <p className="text-sm text-muted-foreground">9354345823</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default About;
