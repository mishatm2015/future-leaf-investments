import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const PrivacyPolicy = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold">Privacy Policy & Terms of Use</h1>
        
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Privacy Policy */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Privacy Policy</h2>
            <p>
              We value your privacy. Future Leaf Investments collects personal and financial information (such as PAN, bank details, and contact information) strictly to facilitate your mutual fund investments, process transactions, and comply with mandatory regulatory requirements. Your data is securely shared only with authorized entities like AMCs, RTAs (CAMS/KFintech), and regulatory bodies as required by law. We do not sell or share your personal information with unauthorized third parties for marketing purposes.
            </p>
          </section>

          {/* Terms of Use & KYC Compliance */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Terms of Use & KYC Compliance</h2>
            <p className="mb-4">
              The information provided on this website is for general educational and informational purposes only and does not constitute personalized financial or investment advice. While we strive to provide accurate and up-to-date information, Future Leaf Investments makes no warranties regarding the completeness or accuracy of the website content. Any investment decisions should be made after a formal assessment of your individual financial profile.
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="mb-2 font-semibold text-foreground">Investor Responsibility:</h3>
                <p>
                  Investors are solely responsible for their investment decisions. You are strongly advised to consult the Scheme Information Document (SID), Statement of Additional Information (SAI), and Key Information Memorandum (KIM) before making any investment.
                </p>
              </div>
              
              <div>
                <h3 className="mb-2 font-semibold text-foreground">KYC/AML Mandates:</h3>
                <p>
                  All investments made through us are subject to the successful completion of Know Your Customer (KYC) and Anti-Money Laundering (AML) verification processes as mandated by SEBI.
                </p>
              </div>
            </div>
          </section>

          {/* Statutory Warning & No Assurance */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Statutory Warning & No Assurance</h2>
            <p className="font-semibold text-foreground">
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
            </p>
            <p className="mt-4">
              Mutual funds do not offer any guaranteed or assured returns. The principal amount invested may fluctuate in value depending on market conditions. Past performance of mutual funds is not an indicator of future returns.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default PrivacyPolicy;
