import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Instagram } from "lucide-react";
import advisorImage from "@/assets/advisor-client.jpg";
import krishnanunniImage from "@/assets/Krishnanunni.png";
import shiniImage from "@/assets/Shini.png";

const About = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Us</span>
        <h1 className="mt-2 text-4xl font-bold md:text-5xl">Future Leaf™ Investments</h1>
        <p className="mt-1 text-sm text-muted-foreground">Grow with us 🌱</p>

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
           understand your goals, assess your risk profile, and recommend suitable investment options so that you can
           <span className="font-bold"> Grow with us</span>.
         </p>
        </div>

        <div className="mt-12 rounded-xl border border-border bg-card p-6">
          <h3 className="mb-4 text-lg font-semibold">Contact Information</h3>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><span className="font-semibold text-foreground">Future Leaf:</span> 9400-253-400</p>
            <p><span className="font-semibold text-foreground">Krishnanunni:</span> 8086-876-692</p>
            <p><span className="font-semibold text-foreground">Shini:</span> 9354-345-823</p>
            <a 
              href="https://www.instagram.com/futureleafinvestments" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 mt-4 hover:text-primary transition-colors"
            >
              <Instagram size={16} className="text-pink-500" />
              <span>@futureleafinvestments</span>
            </a>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={krishnanunniImage} 
                alt="Krishnanunni" 
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <h3 className="text-lg font-semibold">Krishnanunni</h3>
            <p className="text-sm text-muted-foreground"> ARN-351966</p>
            <p className="text-sm text-primary">Founder</p>
            <p className="mt-2 text-sm text-muted-foreground">finances.krishnanunni@gmail.com</p>
            <p className="text-sm text-muted-foreground">8086-876-692</p>
          </div>
          <div className="rounded-xl border border-border bg-card p-6 text-center">
            <div className="flex justify-center mb-4">
              <img 
                src={shiniImage} 
                alt="Shini K J" 
                className="w-32 h-32 rounded-full object-cover border-4 border-primary/20 shadow-lg"
              />
            </div>
            <h3 className="text-lg font-semibold">Shini K J</h3>
            <p className="text-sm text-primary">Operations Head</p>
            <p className="mt-2 text-sm text-muted-foreground">finances.shini@gmail.com</p>
            <p className="text-sm text-muted-foreground">9354-345-823</p>
          </div>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default About;
