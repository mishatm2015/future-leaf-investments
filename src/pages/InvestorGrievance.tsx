import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const InvestorGrievance = () => (
  <>
    <Navbar />
    <main className="py-20">
      <div className="container max-w-4xl">
        <h1 className="text-4xl font-bold">Investor Grievance Redressal</h1>
        
        <div className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
          {/* Grievance Redressal Mechanism */}
          <section>
            <h2 className="mb-4 text-xl font-semibold text-foreground">Grievance Redressal Mechanism</h2>
            <p className="mb-6">
              We are committed to providing a seamless and transparent investment experience. If you have any concerns or complaints regarding your investments or our services, please follow the escalation matrix below:
            </p>

            {/* Level 1 */}
            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Level 1: Contact Us Directly</h3>
              <p className="mb-3">
                For any complaints regarding our distribution services or incidental advice, please reach out to us at:
              </p>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">Email:</strong>{" "}
                  <a 
                    href="mailto:finances.krishnanunni@gmail.com" 
                    className="text-primary hover:underline"
                  >
                    finances.krishnanunni@gmail.com
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">Phone:</strong>{" "}
                  <a 
                    href="tel:9400253400" 
                    className="text-primary hover:underline"
                  >
                    9400-253-400
                  </a>
                </p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Level 2: Contact the AMC or RTA</h3>
              <p>
                For operational issues regarding transaction processing, auto-debit failures, unit allotment, or account statements, please contact the respective Asset Management Company (AMC) or their Registrar and Transfer Agents (RTAs like CAMS or KFintech), as they manage the backend processing of your funds.
              </p>
            </div>

            {/* Level 3 */}
            <div className="mb-6 rounded-xl border border-border bg-card p-6">
              <h3 className="mb-3 text-lg font-semibold text-foreground">Level 3: SEBI SCORES 2.0 & SMART ODR</h3>
              <p className="mb-4">
                If your grievance remains unresolved after contacting us and the AMC, you can lodge a formal complaint with the Securities and Exchange Board of India (SEBI) through the SCORES 2.0 portal at scores.sebi.gov.in. Alternatively, you can initiate online dispute resolution through the SMART ODR portal at smartodr.in.
              </p>
              <div className="space-y-2">
                <p>
                  <strong className="text-foreground">SEBI SCORES Portal:</strong>{" "}
                  <a 
                    href="https://scores.sebi.gov.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://scores.sebi.gov.in/
                  </a>
                </p>
                <p>
                  <strong className="text-foreground">SMART ODR Portal:</strong>{" "}
                  <a 
                    href="https://smartodr.in/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    https://smartodr.in/
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
    <Footer />
    <FloatingButtons />
  </>
);

export default InvestorGrievance;
