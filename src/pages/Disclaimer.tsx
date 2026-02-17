import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Disclaimer = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-3xl">
        <h1 className="text-4xl font-bold">Disclaimer</h1>
        <div className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
          <p>
            <strong className="text-foreground">Mutual fund investments are subject to market risks. Please read all scheme
            related documents carefully before investing.</strong>
          </p>
          <p>
            Future Leaf Investments is an AMFI Registered Mutual Fund Distributor (ARN-351966). We do not provide
            investment advisory services under SEBI (Investment Advisers) Regulations, 2013.
          </p>
          <p>
            The information on this website is for general informational purposes only and does not constitute
            financial advice, an offer, or solicitation for the purchase or sale of any mutual fund scheme.
          </p>
          <p>
            Past performance of any fund does not indicate or guarantee future results. Investors should consider
            their financial situation, investment objectives, and risk tolerance before investing.
          </p>
          <p>
            We do not guarantee any returns on investments. All investment decisions are made at the sole
            discretion of the investor. Future Leaf Investments shall not be responsible for any losses arising
            from investment decisions made based on the information on this website.
          </p>
          <p>
            The NAV of mutual fund schemes can go up or down depending on the factors and forces affecting
            the securities market. Investors are advised to consult their tax advisor regarding tax implications
            of investing in mutual funds.
          </p>
          <p className="pt-4 text-xs">
            © {new Date().getFullYear()} Future Leaf™ Investments | ARN-351966 | AMFI Registered Mutual Fund Distributor
          </p>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default Disclaimer;
