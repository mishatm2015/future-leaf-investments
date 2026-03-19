import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card py-12">
    <div className="container">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <img src={logo} alt="Future Leaf Investments" className="mb-3 h-10" />
          <p className="text-sm text-muted-foreground">Grow with us 🌱</p>
          <p className="mt-1 text-xs text-muted-foreground">ARN-351966</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-primary">Home</Link>
            <Link to="/about" className="hover:text-primary">About Us</Link>
            <Link to="/services" className="hover:text-primary">Services</Link>
            <Link to="/partners" className="hover:text-primary">Partners</Link>
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Future Leaf: 9400-253-400</p>
            <p>Krishnanunni (Founder): 8086-876-692</p>
            <p>Shini K J (Operations Head): 9354-345-823</p>
            <a
              href="mailto:finances.krishnanunni@gmail.com"
              className="flex w-fit items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              <span>finances.krishnanunni@gmail.com</span>
            </a>
            <a
              href="mailto:finances.shini@gmail.com"
              className="flex w-fit items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail size={14} />
              <span>finances.shini@gmail.com</span>
            </a>
            <a 
              href="https://www.instagram.com/futureleaf.investments/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 mt-3 hover:text-primary transition-colors"
            >
              <Instagram size={16} className="text-pink-500" />
              <span>@futureleaf.investments</span>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p className="mb-2">
          Future Leaf Investments. AMFI-registered Mutual Fund Distributor ARN: 351966 | ARN Holder: Krishnanunni
        </p>
        <p className="mb-2">
          Disclaimer: Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
        </p>
        <p className="flex flex-wrap items-center justify-center gap-2">

          <Link to="/regulatory-disclosures" className="hover:text-primary underline">Regulatory Disclosures</Link>
          <span>|</span>
          <Link to="/investor-grievance" className="hover:text-primary underline">Investor Grievance</Link>
          <span>|</span>
          <Link to="/privacy-policy" className="hover:text-primary underline">Privacy Policy & Terms</Link>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
