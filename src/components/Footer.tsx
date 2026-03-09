import { Link } from "react-router-dom";
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
            <Link to="/contact" className="hover:text-primary">Contact</Link>
            <Link to="/disclaimer" className="hover:text-primary">Disclaimer</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-semibold">Contact</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            <p>Krishnanunni (Founder): 8086876692</p>
            <p>Shini K J (Operations Head): 9354345823</p>
            <p>finances.krishnanunni@gmail.com</p>
            <p>finances.shini@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        <p className="mb-2">
          Mutual fund investments are subject to market risks. Please read all scheme related documents carefully.
        </p>
        <p>
          © {new Date().getFullYear()} Future Leaf™ Investments — AMFI Registered Mutual Fund Distributor | ARN-351966
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
