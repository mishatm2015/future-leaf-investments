import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import hsbcLogo from "@/assets/hsbc-asset-management.png";
import kotakLogo from "@/assets/kotak-mutual-fund.png";
import heliosLogo from "@/assets/helios-mutual-fund.png";
import ppfasLogo from "@/assets/ppfas-mutual-fund..png";
import sundaramLogo from "@/assets/sundaram-mutual.png";
import jmFinancialLogo from "@/assets/jm-financial-mutual-fund.png";
import pgimLogo from "@/assets/pgim-india-mutual-fund.png";
import motilalOswalLogo from "@/assets/motilal-oswal.png";
import asset360Logo from "@/assets/asset-360-one.png";
import dspLogo from "@/assets/dsp-mutual-fund.png";
import axisLogo from "@/assets/axis-mutual-fund.png";
import invescoLogo from "@/assets/invesco-mutual-fund.png";
import iciciPrudentialLogo from "@/assets/icici-prudential-asset-management.png";
import canaraRobecoLogo from "@/assets/canara-robeco-mutual-fund.png";
import sbiLogo from "@/assets/sbi-mutual-fund.png";
import itiLogo from "@/assets/iti-mutual-fund.png";
import bankOfIndiaLogo from "@/assets/bank-of-india-mutual-fund.png";
import quantLogo from "@/assets/quant-mutual-fund.png";
import bandhanLogo from "@/assets/bandhan-mutual-fund.png";
import mahindraManulifeLogo from "@/assets/mahindra-manulife-mutual-fund.png";
import bajajLogo from "@/assets/bajaj-mutual-fund.png";
import tataLogo from "@/assets/tata-mutual-fund.png";
import licLogo from "@/assets/lic-mutual-fund.png";
import miraeLogo from "@/assets/mirae-asset.png";
import edelweissLogo from "@/assets/edelweiss-mutual-fund.png";
import barodaBnppLogo from "@/assets/baroda-bnp-paribas-mutual-fund.png";
import hdfcLogo from "@/assets/hdfc-mutual-fund.png";
import adityaBirlaLogo from "@/assets/aditya-birla-capital-mutual-funds.png";
import nipponLogo from "@/assets/nippon-india-mutual-fund.png";
import franklinTempletonLogo from "@/assets/franklin-templeton-investments.png";
import unionLogo from "@/assets/union-mutual-fund.png";
import whiteOakLogo from "@/assets/white-oak-capital-asset-management.png";
import trustLogo from "@/assets/trust-mutual-fund.png";

const partners = [
  {
    name: "HDFC Mutual Fund",
    logo: hdfcLogo,
    description: "One of India's most trusted mutual fund houses with a strong performance track record.",
  },
  {
    name: "SBI Mutual Fund",
    logo: sbiLogo,
    description: "India's largest mutual fund house, a partner for life in wealth creation.",
  },
  {
    name: "Kotak Mutual Fund",
    logo: kotakLogo,
    description: "One of India's premier mutual fund houses with a strong track record of performance.",
  },
  {
    name: "TATA Mutual Fund",
    logo: tataLogo,
    description: "A trusted name in mutual funds with a legacy of trust and performance.",
  },
  {
    name: "Nippon India Mutual Fund",
    logo: nipponLogo,
    description: "Focused on setting investors free through wealth creation and financial freedom.",
  },
  {
    name: "PPFAS Mutual Fund",
    logo: ppfasLogo,
    description: "Known for their long-term value investing approach and disciplined investment philosophy.",
  },
  {
    name: "Axis Mutual Fund",
    logo: axisLogo,
    description: "A leading mutual fund house focused on delivering consistent returns.",
  },
  {
    name: "ICICI Prudential Asset Management",
    logo: iciciPrudentialLogo,
    description: "One of India's largest asset management companies with a wide range of schemes.",
  },
  {
    name: "Aditya Birla Capital Mutual Funds",
    logo: adityaBirlaLogo,
    description: "One of India's largest mutual fund houses with a comprehensive range of schemes.",
  },
  {
    name: "Mirae Asset",
    logo: miraeLogo,
    description: "Building on principles to create long-term wealth for investors.",
  },
  {
    name: "Baroda BNP Paribas Mutual Fund",
    logo: barodaBnppLogo,
    description: "A joint venture combining global expertise with local market knowledge.",
  },
  {
    name: "Bajaj Mutual Fund",
    logo: bajajLogo,
    description: "A trusted mutual fund house with a focus on investor wealth creation.",
  },
  {
    name: "Motilal Oswal",
    logo: motilalOswalLogo,
    description: "A leading financial services firm with a focus on wealth creation.",
  },
  {
    name: "Canara Robeco Mutual Fund",
    logo: canaraRobecoLogo,
    description: "A joint venture offering innovative mutual fund solutions to investors.",
  },
  {
    name: "HSBC Asset Management",
    logo: hsbcLogo,
    description: "A leading global asset management company offering diverse investment solutions.",
  },
  {
    name: "Franklin Templeton Investments",
    logo: franklinTempletonLogo,
    description: "A global investment management company with decades of experience.",
  },
  {
    name: "Bandhan Mutual Fund",
    logo: bandhanLogo,
    description: "A trusted name in mutual funds with a focus on long-term value creation.",
  },
  {
    name: "Mahindra Manulife Mutual Fund",
    logo: mahindraManulifeLogo,
    description: "A joint venture offering comprehensive mutual fund solutions.",
  },
  {
    name: "Edelweiss Mutual Fund",
    logo: edelweissLogo,
    description: "A trusted mutual fund house focused on creating wealth through innovative strategies.",
  },
  {
    name: "Union Mutual Fund",
    logo: unionLogo,
    description: "A trusted mutual fund house committed to delivering value and growth to investors.",
  },
  {
    name: "White Oak Capital Asset Management",
    logo: whiteOakLogo,
    description: "A professional asset management company focused on long-term wealth creation.",
  },
  {
    name: "DSP Mutual Fund",
    logo: dspLogo,
    description: "One of India's oldest and most respected mutual fund houses.",
  },
  {
    name: "PGIM India Mutual Fund",
    logo: pgimLogo,
    description: "A global asset management company providing innovative investment solutions.",
  },
  {
    name: "LIC Mutual Fund",
    logo: licLogo,
    description: "Backed by LIC, offering trusted mutual fund solutions to investors.",
  },
  {
    name: "Bank of India Mutual Fund",
    logo: bankOfIndiaLogo,
    description: "A trusted mutual fund provider backed by a strong banking heritage.",
  },
  {
    name: "Trust Mutual Fund",
    logo: trustLogo,
    description: "Clear, credible, and consistent mutual fund solutions for investors.",
  },
  {
    name: "Quant Mutual Fund",
    logo: quantLogo,
    description: "A multi-asset, multi-manager approach to wealth creation.",
  },
  {
    name: "ITI Mutual Fund",
    logo: itiLogo,
    description: "Focused on long-term wealth creation through disciplined investment strategies.",
  },
  {
    name: "Invesco Mutual Fund",
    logo: invescoLogo,
    description: "A global investment management company with strong expertise in mutual funds.",
  },
  {
    name: "360 ONE Asset",
    logo: asset360Logo,
    description: "A comprehensive asset management platform offering diverse investment options.",
  },
  {
    name: "JM Financial Mutual Fund",
    logo: jmFinancialLogo,
    description: "A trusted name in financial services with comprehensive mutual fund offerings.",
  },
  {
    name: "Sundaram Mutual",
    logo: sundaramLogo,
    description: "Focused on unearthing opportunities and creating wealth for investors.",
  },
  {
    name: "Helios Mutual Fund",
    logo: heliosLogo,
    description: "A trusted mutual fund provider committed to delivering value to investors.",
  },
];

const Partners = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-6xl">
        <div className="mb-12 text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Partners</span>
          <h1 className="mt-2 text-4xl font-bold md:text-5xl">Our Trusted Partners</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            At Future Leaf Investments, we have partnered with India's most trusted fund houses to ensure your portfolio always has the right funds
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:shadow-card-hover"
            >
              <div className="mb-6 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-20 w-auto object-contain opacity-80 transition-opacity group-hover:opacity-100"
                />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{partner.name}</h3>
              <p className="text-sm text-muted-foreground">{partner.description}</p>
            </div>
          ))}
        </div>

       {/*
       <div className="mt-12 rounded-xl border border-border bg-card p-8 text-center">
         <p className="text-muted-foreground">
           As an AMFI Registered Mutual Fund Distributor (ARN-351966), we work with multiple asset management companies
         </p>
       </div>
       */}

        <p className="mt-8 text-center text-xs text-muted-foreground">
          All AMC logos, trademarks, and brand names displayed on this page are the property of their respective owners. Their inclusion indicates our empanelment as a distributor and does not imply direct endorsement.
        </p>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Partners;
