import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const RegulatoryDisclosures = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold">Regulatory & Commission Disclosures</h1>
        
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Regulatory Status & Scope of Services */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Regulatory Status & Scope of Services</h2>
            <p>
              Future Leaf Investments is the registered trade name of Krishnanunni, operating as a Sole Proprietorship and an AMFI-Registered Mutual Fund Distributor (ARN-351966). We act strictly as a distributor of mutual fund products and are not a SEBI-Registered Investment Advisor (RIA). The services we provide are limited to the distribution of mutual funds and offering incidental advice regarding those specific products.
            </p>
          </section>

          {/* Suitability & Conflict of Interest */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Suitability & Conflict of Interest</h2>
            <p>
              While we earn a commission from AMCs, our recommendations are based strictly on the suitability of the scheme to your financial goals and risk appetite. We do not promote schemes solely for higher commission income. However, investors should note that we distribute and recommend only those mutual fund schemes from AMCs where we are officially empanelled.
            </p>
          </section>

          {/* Commission & Remuneration Disclosure */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Commission & Remuneration Disclosure</h2>
            <p className="mb-4">
              In accordance with SEBI guidelines, we disclose that Future Leaf Investments distributes 'Regular Plans' of mutual fund schemes. Investors possess the inherent right and option to invest directly in the 'Direct Plans' of mutual funds, which have a lower expense ratio and do not involve any distribution commission. Regarding our remuneration for Regular Plans:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>
                <strong className="text-foreground">No Direct Fees:</strong> We do not charge any direct consultation or advisory fees to our clients.
              </li>
              <li>
                <strong className="text-foreground">Trail Commission:</strong> We earn a trail commission from the Asset Management Companies (AMCs) for the investments routed under our ARN code. This commission is paid from the Total Expense Ratio (TER) of the regular plans of the mutual fund schemes.
              </li>
              <li>
                <strong className="text-foreground">No Upfront Commission & No Rebating:</strong> We do not receive any upfront commission for any schemes. Furthermore, in strict compliance with AMFI guidelines, we strictly do not rebate, pass back, or share any portion of our commission with investors under any circumstances.
              </li>
            </ul>
          </section>

          {/* Indicative Commission Range */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Indicative Commission Range (Annualized Trail Basis):</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Asset Class</th>
                    <th className="border border-border px-4 py-3 text-left font-semibold text-foreground">Commission Range (p.a.)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border px-4 py-3">Equity Schemes</td>
                    <td className="border border-border px-4 py-3">0.50% – 1.50%</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3">Hybrid / Balanced Schemes</td>
                    <td className="border border-border px-4 py-3">0.30% – 1.25%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3">ELSS (Tax Saving)</td>
                    <td className="border border-border px-4 py-3">0.50% – 1.10%</td>
                  </tr>
                  <tr className="bg-muted/50">
                    <td className="border border-border px-4 py-3">Debt / Income Schemes</td>
                    <td className="border border-border px-4 py-3">0.10% – 0.80%</td>
                  </tr>
                  <tr>
                    <td className="border border-border px-4 py-3">Liquid / Overnight Schemes</td>
                    <td className="border border-border px-4 py-3">0.05% – 0.20%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Empanelled AMCs & Commission Validity */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Empanelled AMCs & Commission Validity</h2>
            <p>
              We are currently empanelled to distribute mutual fund schemes for various Asset Management Companies (AMCs). Please refer to the "Partners" section on our Home Page for the complete, updated visual list of our empanelled AMC partners.
            </p>
            <p className="mt-4 italic">
              <strong className="text-foreground">Note:</strong> The indicative commission rates provided above are valid as of March 2026 and are subject to periodic revision based on AMC updates. Detailed scheme-wise commission structures for specific AMCs are available to clients upon request.
            </p>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default RegulatoryDisclosures;
