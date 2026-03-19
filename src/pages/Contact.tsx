import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Phone, Mail, MessageCircle, MapPin, Instagram } from "lucide-react";

const Contact = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-muted-foreground">We're here to help you with your financial planning needs.</p>
        </div>

        <div className="mb-8 rounded-xl border border-border bg-card p-8">
          <h3 className="mb-4 text-xl font-semibold">Future Leaf</h3>
          <div className="space-y-4">
            <a href="tel:+919400253400" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Phone size={16} /> 9400-253-400
            </a>
            <a href="https://wa.me/919400253400" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="https://www.instagram.com/futureleaf.investments/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
              <Instagram size={16} className="text-pink-500" /> Instagram
            </a>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Krishnanunni */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold">Krishnanunni</h3>
             <p className="text-sm text-muted-foreground">ARN-351966</p>
            <p className="text-sm text-primary">Founder</p>
            <div className="mt-6 space-y-4">
              <a href="tel:+918086876692" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <Phone size={16} /> 8086-876-692
              </a>
              <a href="https://wa.me/918086876692" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="mailto:finances.krishnanunni@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <Mail size={16} /> finances.krishnanunni@gmail.com
              </a>
            </div>
          </div>

          {/* Shini */}
          <div className="rounded-xl border border-border bg-card p-8">
            <h3 className="text-xl font-semibold">Shini K J</h3>
            <p className="text-sm text-primary">Operations Head</p>
            <div className="mt-6 space-y-4">
              <a href="tel:+919354345823" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <Phone size={16} /> 9354-345-823
              </a>
              <a href="https://wa.me/919354345823" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href="mailto:finances.shini@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary">
                <Mail size={16} /> finances.shini@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-secondary p-6 text-center text-sm text-muted-foreground">
          <p className="font-medium text-secondary-foreground">ARN-351966 | AMFI Registered Mutual Fund Distributor</p>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Contact;
