import { Suspense, lazy, Component } from 'react'

const FinancialLiteracy = lazy(() => import('./FinancialLiteracy'))

class ModuleErrorBoundary extends Component {
  state = { error: null }
  static getDerivedStateFromError(error) { return { error } }
  render() {
    if (this.state.error) {
      return (
        <div className="highlight-box" style={{ color: 'var(--ink-3)', fontSize: '13px' }}>
          Module failed to load: {this.state.error.message}
        </div>
      )
    }
    return this.props.children
  }
}

const Case16 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Preliminary Study</span>
        <h1>The Subject Matter You Need Before the Cases Make Sense</h1>
        <div className="case-meta">
          Coverage: P&amp;L · Banking · Insurance · Private Equity · SaaS · Pharma · Supply Chain · Retail · Energy · Consulting &bull; Read Before Case 01
        </div>
      </header>

      {/* ── INTRO ── */}
      <section>
        <h2>Why This Exists</h2>
        <div className="content">
          <p>
            The 14 cases in this library span ten industries. Each one drops you directly into a board-level crisis at a company you have never heard of, in a sector you may not know deeply, using financial and operational language that is assumed, not explained. If you already work in consulting, investment banking, or corporate finance, most of the language is familiar. If you do not, reading Case 01 without preparation feels like arriving at a meeting where everyone else has the briefing pack and you do not.
          </p>
          <p>
            This study is the briefing pack. It does not teach you everything about each industry — that takes years. It teaches you exactly what you need to understand the cases: the core mechanics of each business model, the metrics that matter in each industry, and the vocabulary that appears in the cases without definition. Ten sections. One per subject area. Each section ends with the specific cases that require it.
          </p>
          <div className="highlight-box">
            <strong>How to Use This Study</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              If you plan to read all 14 cases: read this study in full first. It takes approximately 45 minutes and will save you hours of confusion later. If you plan to start with a specific case: find the section that covers that case's industry and read that section first. The master reference table at the end maps every case to its required sections. If you are already fluent in an industry: skip that section. Each section stands alone.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>1. How a Business Makes Money — The P&amp;L Every Case Assumes You Can Read</h2>
        <div className="content">
          <p>
            Every case in this library involves a company whose financial performance is either deteriorating or under threat. To understand what is wrong and why it matters, you need to read a Profit and Loss statement the way a strategist does — not "are these numbers correct?" but "what story do these numbers tell about the health of the business model?"
          </p>

          <p><strong>The P&amp;L from Top to Bottom:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>P&amp;L Line</th>
                <th>What It Measures</th>
                <th>What It Does Not Measure</th>
                <th>The Question It Answers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gross Revenue</strong></td>
                <td>Total value of goods or services sold before any deductions</td>
                <td>Whether those sales were profitable; whether the customer will return</td>
                <td>"How big is the business and is it growing?"</td>
              </tr>
              <tr>
                <td><strong>Net Revenue</strong></td>
                <td>Revenue after trade discounts, promotional allowances, and returns</td>
                <td>The cost of producing the goods</td>
                <td>"What did the customer actually pay after all deals?"</td>
              </tr>
              <tr>
                <td><strong>Cost of Goods Sold (COGS)</strong></td>
                <td>Direct cost of producing what was sold: raw materials, direct labour, packaging</td>
                <td>The cost of selling, marketing, or managing the business</td>
                <td>"What does it cost to make the product?"</td>
              </tr>
              <tr>
                <td><strong>Gross Profit / Gross Margin %</strong></td>
                <td>Revenue minus COGS. Expressed as a percentage of revenue.</td>
                <td>Whether the business is profitable after overhead and selling costs</td>
                <td>"How much is left after making the product, before anything else?"</td>
              </tr>
              <tr>
                <td><strong>SG&amp;A</strong></td>
                <td>Selling, General &amp; Administrative costs: sales teams, marketing, head office, IT</td>
                <td>The cost of making the product (that is COGS)</td>
                <td>"How much does it cost to run and sell the business?"</td>
              </tr>
              <tr>
                <td><strong>EBITDA</strong></td>
                <td>Earnings Before Interest, Tax, Depreciation and Amortisation. The cash-generative power of the core business.</td>
                <td>The cost of debt, taxes, or declining asset value; not the same as cash flow</td>
                <td>"How profitable is the core operation, before financing and accounting decisions?"</td>
              </tr>
              <tr>
                <td><strong>Net Profit / NPAT</strong></td>
                <td>What remains after all costs, interest, and tax — the bottom line</td>
                <td>Cash generation (profit and cash flow differ due to timing and working capital)</td>
                <td>"What does the business earn for its owners after every obligation is paid?"</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>The Four Margin Concepts That Appear in Every Case</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Gross Margin %</strong> = Gross Profit ÷ Revenue. In Case 01 (NovaCPG), gross margin fell from 41.3% to 37.1%. That 4.2 percentage point drop on IDR 18.4 trillion in revenue = IDR 773 billion in absolute margin destroyed. Gross margin tells you how profitable the product is before overhead.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>EBITDA Margin %</strong> = EBITDA ÷ Revenue. In Case 01, EBITDA margin fell from 19.2% to 13.8%. PE firms use EBITDA margin to value businesses — lower margin means lower acquisition multiple means lower exit price. This is why the PE firm is alarmed.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Contribution Margin</strong> = Revenue minus variable costs only. Contribution margin tells you how much each unit of sales contributes toward covering fixed costs. A product can have a positive gross margin but a negative contribution margin if promotional spend exceeds the net margin it generates. In Case 01, 57 SKUs have negative contribution margins — actively destroying value with every unit sold.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Return on Assets (ROA)</strong> = Net Profit ÷ Total Assets. In Case 14 (BSN Islamic Bank), ROA fell from 1.85% to 1.44% as the asset base grew faster than earnings. ROA is the efficiency metric for asset-heavy businesses. When a business grows assets faster than profit, ROA falls — every new asset works less hard than the previous one.
            </p>
          </div>

          <div className="highlight-box">
            <strong>Working Capital — The Cash Trap That Appears in Case 01</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Working capital is the cash tied up in running the business day-to-day: inventory you have bought but not yet sold, invoices sent but not collected (accounts receivable), minus invoices received but not yet paid (accounts payable). Working capital increases when a business grows or becomes less efficient at managing cash. In Case 01, working capital days rose from 47 to 68 because SKU proliferation required more inventory — tying up approximately IDR 1.1 trillion in cash the business cannot use for anything else.
            </p>
          </div>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> All 14 cases — but especially Cases 01, 03, 04, 07, 08, 12, 14.</p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. How Banking Works — For Cases 02, 11, 13, and 14</h2>
        <div className="content">
          <p>
            A bank buys money cheaply (from depositors) and lends it expensively (to borrowers). The difference between what it pays for money and what it earns on money is its core income. Every banking metric traces back to this spread.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Banking Metric</th>
                <th>What It Measures</th>
                <th>How It Appears in the Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Net Interest Margin (NIM)</strong></td>
                <td>The spread between yield on loans and cost of deposits, as % of earning assets. Core income measure.</td>
                <td>Case 14: NIM fell from 5.8% to 4.6% as deposit costs rose faster than loan yields. On IDR 62T of assets, each 0.1pp = IDR 62B in lost income annually.</td>
              </tr>
              <tr>
                <td><strong>Loan-to-Deposit Ratio (LDR)</strong></td>
                <td>Total loans ÷ Total deposits. Above ~90%, the bank cannot grow loans without new deposits or expensive wholesale funding.</td>
                <td>Case 11: LDR rose from 81% to 89%, approaching the 92% internal threshold beyond which PrimaBank cannot grow its loan book.</td>
              </tr>
              <tr>
                <td><strong>CASA Ratio</strong></td>
                <td>Current Account &amp; Savings Account deposits ÷ Total deposits. CASA is low-cost funding. Falling CASA means funding gets more expensive.</td>
                <td>Case 11: CASA fell from 58% to 49% — PrimaBank increasingly funding itself with expensive time deposits, compressing NIM.</td>
              </tr>
              <tr>
                <td><strong>Non-Performing Loan (NPL) Ratio</strong></td>
                <td>Loans 90+ days overdue ÷ Total loans. The standard credit quality measure. Above 5% triggers OJK regulatory concern in Indonesia.</td>
                <td>Case 13: The aggregate NPL of 2.9% looked safe. Vintage analysis showed the 2023 H1 cohort was tracking to 5.8% at 18 months — above the OJK watch threshold. The aggregate masked the deterioration.</td>
              </tr>
              <tr>
                <td><strong>DPD 30+ Rate</strong></td>
                <td>Loans 30+ days past due ÷ Total loans. A leading indicator — appears 60 days before NPL classification. Shows stress before it hits the NPL ratio.</td>
                <td>Case 13: DPD 30+ in motorcycle lending rose from 6.2% to 9.8% — signalling what the NPL would look like in two quarters. The collections team saw it first. The NPL ratio had not moved yet.</td>
              </tr>
              <tr>
                <td><strong>Provision Coverage Ratio</strong></td>
                <td>Loan loss provisions ÷ NPL balance. Above 100% = more than enough set aside. Below 80% = concern.</td>
                <td>Case 13: 108% looked safe, but suppressed write-offs meant the NPL stock was understated — making real coverage thinner than it appeared.</td>
              </tr>
              <tr>
                <td><strong>Write-off Rate</strong></td>
                <td>Rate at which bad loans are removed from the books. Suppressing write-offs makes the NPL ratio look better than it is.</td>
                <td>Case 13: Write-off rate was 1.1% vs the 1.8% historical norm for 6 consecutive quarters — leaving IDR 202B of bad loans on the book and flattering the NPL ratio.</td>
              </tr>
              <tr>
                <td><strong>Net Interest Income (NII) per Customer</strong></td>
                <td>The income a bank earns from the spread on one customer's balances. Falling NII per customer means the bank is earning less per relationship.</td>
                <td>Case 02: NII per active retail customer fell 19% over three years while total customer count grew 6%. The bank served more people and made less money per person.</td>
              </tr>
              <tr>
                <td><strong>Mudharabah (Islamic Banking)</strong></td>
                <td>A profit-sharing financing structure replacing interest. The bank and borrower share profit and loss at a fixed ratio.</td>
                <td>Case 14: BSN's mudharabah portfolio was its primary growth vehicle. The fixed profit-sharing ratio meant BSN could not reprice upward as funding costs rose — structurally compressing NIM.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 02 (MerataBank), Case 11 (PrimaBank), Case 13 (KreditNusa), Case 14 (BSN).</p>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. How Insurance Works — For Case 12</h2>
        <div className="content">
          <p>
            An insurance company collects premiums, invests them until claims are paid, and earns profit from two sources: the underwriting result (premiums minus claims and expenses) and investment income. The critical insight: these two profit sources can move in opposite directions. A deteriorating underwriting result can be hidden by strong investment income — making the business look healthy when the core operation is failing. This is exactly the situation in Case 12.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Insurance Metric</th>
                <th>What It Measures</th>
                <th>Threshold / Benchmark</th>
                <th>Case 12 Reading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Gross Written Premium (GWP)</strong></td>
                <td>Total value of insurance policies sold. Revenue in insurance language.</td>
                <td>Growing GWP looks good — but measures sales, not profitability</td>
                <td>GWP grew 14.2% — the number the board celebrated. It masked everything below.</td>
              </tr>
              <tr>
                <td><strong>Loss Ratio</strong></td>
                <td>Claims paid ÷ Net earned premium. How much of every premium rupiah goes to claims.</td>
                <td>Below 60% = excellent. 60–70% = healthy. Above 70% in motor = warning. Above 75% = underwriting losses likely.</td>
                <td>Motor vehicle loss ratio reached 78.4% — the line has crossed into underwriting loss territory.</td>
              </tr>
              <tr>
                <td><strong>Expense Ratio</strong></td>
                <td>Operating expenses ÷ Net earned premium. The administrative cost of running the business.</td>
                <td>Indonesia benchmark: 28–33%</td>
                <td>Expense ratio improved (cost control was good) — which partially masked the loss ratio deterioration in the combined ratio.</td>
              </tr>
              <tr>
                <td><strong>Combined Ratio</strong></td>
                <td>Loss Ratio + Expense Ratio. The definitive underwriting profitability measure.</td>
                <td>Below 100% = underwriting profit. Above 100% = underwriting loss, must be covered by investment income.</td>
                <td>Rose from 91.4% to 97.8% over 3 years. Projected to cross 100% in 12 months — at which point all profit depends on investment returns.</td>
              </tr>
              <tr>
                <td><strong>Reserve Adequacy Ratio</strong></td>
                <td>Actual reserves ÷ Required reserves (actuarial estimate). Insurance companies must hold reserves against future claims.</td>
                <td>Below 100% = underfunded, exposed to sudden large charge if claims develop worse than expected</td>
                <td>Fell below 100% for the first time — the signal the CFO's "solid balance sheet" description was optimistic.</td>
              </tr>
              <tr>
                <td><strong>Investment Income as Profit Backstop</strong></td>
                <td>The income earned on the premium pool invested in bonds, equities, and deposits — used to supplement (or mask) underwriting losses.</td>
                <td>Sustainable when from recurring bond yields; unsustainable when from realised equity capital gains</td>
                <td>IDR 89B in equity capital gains had been realised over 2 years to support profit. Only IDR 34B of unrealised gains remained — the backstop was nearly exhausted.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 12 (ArkaInsurance profit quality and executive risk brief).</p>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. How Private Equity Works — For Cases 01 and 08</h2>
        <div className="content">
          <p>
            A PE firm raises money from institutional investors, acquires controlling stakes in private companies, improves them over 5–7 years, and exits at a higher price. The entire model depends on buying well, improving the business, and exiting at the right time. Understanding the PE lens changes how you read Cases 01 and 08 — the decisions that appear "management" decisions are actually investment decisions being made by a financial owner with a specific exit timeline.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>PE Term</th>
                <th>What It Means</th>
                <th>How It Appears in the Cases</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>EBITDA Multiple / Entry Multiple</strong></td>
                <td>Price paid ÷ EBITDA. The valuation lens. 8.3× means the buyer paid 8.3 years of earnings.</td>
                <td>Case 08: Adriatic offered EUR 680M for Nortek at EUR 82M reported EBITDA = 8.3×. Every EUR 1M of EBITDA normalised away reduces the justifiable price by EUR 8.3M.</td>
              </tr>
              <tr>
                <td><strong>EBITDA Normalisation</strong></td>
                <td>Stripping reported EBITDA of non-recurring items: founder personal expenses, family salaries, one-time revenue, aggressive accounting. Gives "maintainable EBITDA" — what a new owner actually receives.</td>
                <td>Case 08: The engagement's core task. The CFO acknowledged items "Klaus has always run through the business." Each EUR 1M of normalisation = EUR 8.3M off the justifiable price.</td>
              </tr>
              <tr>
                <td><strong>LBO (Leveraged Buyout)</strong></td>
                <td>Acquisition financed partly with debt secured against the target company's cash flows. Leverage amplifies returns in good scenarios and risk in bad ones.</td>
                <td>Case 08: Adriatic planned EUR 340–380M senior debt + EUR 300–340M equity for EUR 680M total. Debt capacity is calculated as a multiple of EBITDA — which is why EBITDA normalisation changes the financing structure.</td>
              </tr>
              <tr>
                <td><strong>MOIC (Multiple on Invested Capital)</strong></td>
                <td>The equity return. 2.5× MOIC means EUR 1 invested returns EUR 2.50. Adriatic's target is 2.5× at a 5-year hold.</td>
                <td>Case 08: The returns model tests at what entry price 2.5× MOIC is achievable under realistic (not optimistic) EBITDA and exit multiple assumptions.</td>
              </tr>
              <tr>
                <td><strong>Exit Thesis</strong></td>
                <td>The plan for how the PE firm eventually sells. Strategic sale to a corporate buyer, or IPO. The exit multiple they can achieve determines the entire return.</td>
                <td>Case 01: The PE firm's exit thesis is a strategic sale to a global FMCG multinational or IDX IPO. Margin recovery to 17–18% is not just operational improvement — it is the condition for achieving the target exit multiple.</td>
              </tr>
              <tr>
                <td><strong>Customer Concentration Risk</strong></td>
                <td>The risk that a large portion of revenue is dependent on a small number of customers. If a concentrated customer leaves, revenue falls suddenly.</td>
                <td>Case 08: Three customers represent 41% of Nortek's revenue. Two of those contracts renew in 14 months. This is a central risk the IC needs quantified before approving the deal.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 01 (NovaCPG, PE-owned FMCG margin recovery), Case 08 (Nortek acquisition diligence).</p>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How SaaS and Tech Unit Economics Work — For Case 04</h2>
        <div className="content">
          <p>
            A tech platform grows by spending money to acquire users (CAC), then earning revenue from those users over time (LTV). The model works when LTV significantly exceeds CAC. When it does not — or when the model is built on retention assumptions that do not match actual user behaviour — the growth engine is burning capital without building a sustainable business. Case 04 (Karta) is entirely about this gap.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>SaaS / Tech Term</th>
                <th>What It Measures</th>
                <th>Case 04 Reading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>CAC (Customer Acquisition Cost)</strong></td>
                <td>Total sales &amp; marketing spend ÷ New customers acquired. What it costs to bring one customer in.</td>
                <td>Karta's Series D pitch implied a 14-month CAC payback period. The cohort data revealed the retention assumption underlying that payback did not exist in practice.</td>
              </tr>
              <tr>
                <td><strong>LTV (Lifetime Value)</strong></td>
                <td>Total revenue or margin a customer generates over their entire relationship. Depends on: revenue per user × gross margin × retention duration.</td>
                <td>If month-12 retention is 34% (not the assumed higher rate), the user churns before recovering the acquisition cost. LTV collapses with each percentage point of retention shortfall.</td>
              </tr>
              <tr>
                <td><strong>LTV/CAC Ratio</strong></td>
                <td>Customer lifetime value ÷ acquisition cost. Below 1× = losing money on every customer. Above 3× = healthy SaaS unit economics.</td>
                <td>The investor deck implied a healthy ratio. Cohort data — 34% retention at month 12, 22% at month 18 — implied a ratio materially below the threshold. The investor who asked for cohort data already knew this.</td>
              </tr>
              <tr>
                <td><strong>Cohort Retention</strong></td>
                <td>% of users acquired in a given period who are still active at a later point. The single most important number in a subscription or engagement business.</td>
                <td>Month-12 retention of 34% means 66 of every 100 users acquired today will be gone in 12 months — before generating the revenue the 14-month payback model assumed.</td>
              </tr>
              <tr>
                <td><strong>Burn Rate / Runway</strong></td>
                <td>Cash lost per quarter (burn rate). Quarters of cash remaining (runway). When runway runs out, the company raises capital or stops operating.</td>
                <td>Karta's EBITDA loss widened from $48M to $94M/quarter. Runway fell from 36 to 19 months. The Series E is not optional — it is existential. This is why the CEO was willing to commission an honest internal review.</td>
              </tr>
              <tr>
                <td><strong>GTV vs Revenue</strong></td>
                <td>Gross Transaction Value = total value of transactions processed. Revenue = the commission or fee the platform earns. GTV growing while losses widen = unit economics trap: scale without profitability.</td>
                <td>Karta's GTV grew 67%. This is the headline number. Revenue is a fraction of GTV (the commission). And revenue minus driver subsidies, food merchant promotions, and payment costs = the actual margin, which was negative and worsening.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 04 (Karta super-app unit economics trap).</p>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. How Pharma Market Access Works — For Case 05</h2>
        <div className="content">
          <p>
            A pharmaceutical company that develops a drug does not simply sell it at its chosen price. In most markets, the drug must pass through a reimbursement process — a negotiation with government payers or insurance systems — before it can be prescribed at scale. The economics of a launch are determined as much by the reimbursement pathway as by the clinical evidence. Case 05 is a capital allocation problem disguised as a market prioritisation question.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Pharma Term</th>
                <th>What It Means</th>
                <th>Why It Matters in Case 05</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Reimbursement</strong></td>
                <td>A government health system or insurer agrees to pay for a drug on behalf of patients. Without reimbursement, only out-of-pocket patients can access the drug — a fraction of the addressable population.</td>
                <td>Time-to-reimbursement varies dramatically: Singapore 12–18 months, Japan 2–4 years with outcome uncertainty. A market that is large by patient count is unattractive if reimbursement takes 3 years and Veridian's cash cannot fund the wait.</td>
              </tr>
              <tr>
                <td><strong>Formulary Inclusion</strong></td>
                <td>Placement on an approved drug list. On the formulary = physicians can prescribe for reimbursed patients at scale. Off formulary = prescribed only to patients who pay out-of-pocket.</td>
                <td>The commercial goal for Relvoxa in every market. Formulary inclusion timeline is a core input to the market NPV model.</td>
              </tr>
              <tr>
                <td><strong>Reference Pricing</strong></td>
                <td>The practice of government payers using the price of a drug in one country to set a ceiling for the price in their own country.</td>
                <td>If Veridian launches in Thailand at a low government-mandated price, South Korean regulators can use that Thai price as a negotiating floor. The Head of Market Access warns that launching Thailand first could erode the net price across the entire portfolio by $28–$45M NPV.</td>
              </tr>
              <tr>
                <td><strong>Gross-to-Net Waterfall</strong></td>
                <td>The actual price received after mandatory discounts, rebates, patient assistance programs, and reimbursement conditions. A drug listed at $10,000/patient/year may generate only $6,000–7,000 in net revenue.</td>
                <td>In Thailand and Indonesia, government price ceilings make the gross-to-net gap so large that the economics are structurally unattractive regardless of patient population size. This is the quantitative basis for deprioritising these markets.</td>
              </tr>
              <tr>
                <td><strong>TAM vs Serviceable Market</strong></td>
                <td>Total Addressable Market = all patients with the condition. Serviceable Market = those who are diagnosed, eligible, in a reimbursed channel, and accessible at a viable price. The gap between them is where consumer brand and pharma expansions die.</td>
                <td>The investor deck used India's TAM for hypertension: enormous. Veridian's serviceable market — treatment-resistant patients, Tier 1 cities, specialist-prescribed, reimbursed — is a small fraction. The distinction between these two numbers is the entire analytical task of the case.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 05 (Veridian Therapeutics drug launch sequencing across Asia Pacific).</p>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. How Supply Chains Work — For Case 06</h2>
        <div className="content">
          <p>
            A supply chain is the end-to-end system converting inputs into outputs and delivering them to customers. In Case 06, Vietronics does not design or sell products — it manufactures them on behalf of OEM customers. Its supply chain is its product. When one critical input fails, the entire value proposition fails with it.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Supply Chain Term</th>
                <th>What It Means</th>
                <th>How It Appears in Case 06</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>OEM (Original Equipment Manufacturer)</strong></td>
                <td>A company that designs and brands products but outsources manufacturing. The OEM sets specifications; the contract manufacturer builds to them.</td>
                <td>Vietronics has 6 OEM customers: Japanese, European, South Korean. The OEM relationship is both the revenue source and the primary commercial risk — losing Hiramoto cost Vietronics USD 42M in annual revenue from one contract termination.</td>
              </tr>
              <tr>
                <td><strong>Single-Source Dependency</strong></td>
                <td>Relying on one supplier for a critical component with no qualified backup.</td>
                <td>78% of a critical connector assembly came from one Chinese supplier. Invisible for 14 years. Catastrophic during the 11-week outage. True cost: USD 112.6M, of which only USD 28M appeared in the management accounts.</td>
              </tr>
              <tr>
                <td><strong>Supplier Qualification</strong></td>
                <td>The process of testing and approving a new supplier to meet technical and quality standards. For precision components in Japanese/European OEM products: 6–9 months minimum.</td>
                <td>Why Vietronics could not switch suppliers during the crisis — the qualification process had never been started for a backup. Emergency spot-market purchases had a 34% incoming quality failure rate.</td>
              </tr>
              <tr>
                <td><strong>Make vs Buy</strong></td>
                <td>The decision of whether to produce a component internally (make) or purchase it from a supplier (buy).</td>
                <td>Vietronics' CEO wants to bring connector assembly in-house. The case tests whether the economics are viable: tooling, clean-room buildout, equipment, and working capital requirements may consume almost all of the USD 48M available capital.</td>
              </tr>
              <tr>
                <td><strong>Dual Sourcing</strong></td>
                <td>Qualifying two suppliers for the same component. If one fails, the other supplies. Cheaper and faster than in-house production, but does not eliminate the risk if both suppliers are in the same region.</td>
                <td>The Head of Procurement identified potential suppliers in Malaysia and Thailand. Dual sourcing is achievable but requires 6–9 months of qualification — which conflicts with the 7-month OEM contract renewal deadline.</td>
              </tr>
              <tr>
                <td><strong>SLA Penalties</strong></td>
                <td>Service Level Agreement financial penalties for missed delivery commitments to OEM customers.</td>
                <td>During the 11-week outage: USD 18.4M in contractual penalties. This cost did not appear in the "USD 28M revenue shortfall" summary — making the true cost USD 112.6M, more than 4× the reported figure.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 06 (Vietronics supply chain restructuring and make-vs-buy decision).</p>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. How Retail Economics Work — For Case 07</h2>
        <div className="content">
          <p>
            A retailer buys goods at wholesale prices and sells them at retail prices. The gross margin between the two must cover stores, staff, logistics, and marketing — and still leave profit. Case 07 (CentralMart) is about a retailer that grew revenue while destroying margin, because its loyalty program rewarded the customers who were most expensive to serve.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Retail Term</th>
                <th>What It Means</th>
                <th>How It Appears in Case 07</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Omnichannel</strong></td>
                <td>A retail model where customers shop across physical stores, website, and app. Each channel has different unit economics — e-commerce costs more per order to fulfil than in-store.</td>
                <td>CentralMart's e-commerce cost per order was 34% higher than comparable operators because logistics infrastructure had not kept pace with digital growth. E-commerce posted losses for 6 consecutive quarters.</td>
              </tr>
              <tr>
                <td><strong>Fully-Loaded Contribution Margin per Customer</strong></td>
                <td>The margin per customer after allocating not just COGS but promotional discounts, loyalty point liability, channel fulfilment costs, and return processing. What a customer is actually worth after every cost is accounted for.</td>
                <td>The first-ever customer-level P&amp;L revealed that some highest-revenue members — heavy e-commerce users, aggressive promotion redeemers, high return rates — were economically negative on a fully-loaded basis.</td>
              </tr>
              <tr>
                <td><strong>Loyalty Program Economics</strong></td>
                <td>Points accumulated by members represent a future liability — when redeemed, they cost the retailer margin. The total outstanding points liability is a balance sheet item.</td>
                <td>The loyalty program rewarded revenue metrics (spend per member) with no margin dimension. A member spending THB 120,000/year across 40 e-commerce orders, with 22% returns and maximum promotion usage, looked like a star member and was an economic loss.</td>
              </tr>
              <tr>
                <td><strong>Return Rate</strong></td>
                <td>% of e-commerce orders returned. High return rates are a structural cost — outbound shipping, return logistics, inspection, and reprocessing costs apply to every return.</td>
                <td>Heavy loyalty members had return rates driving significant cost per order that did not appear in their revenue contribution. This was invisible until the fully-loaded customer P&amp;L was built.</td>
              </tr>
              <tr>
                <td><strong>Promotional Cherry-Picking</strong></td>
                <td>Customers who only purchase when promotions are active — buying more than their baseline when discounts apply, but generating negative ROI on the promotion because the incremental margin does not cover the promotional cost.</td>
                <td>The loyalty program's promotional mechanics trained the highest-spending members to wait for promotional events. 60% of promotional events in some categories generated less than 0.8× return — every IDR of promotional spend recovered less than IDR 0.80 in margin.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 07 (CentralMart loyalty paradox and customer investment restructuring).</p>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. How Energy Markets Work — For Case 03</h2>
        <div className="content">
          <p>
            An electricity generator produces power and sells it into a market. Its economics are determined by the wholesale electricity price it receives, the fuel and carbon cost of producing electricity, and the value of its physical generation assets. Case 03 is about Meridian Energy, whose coal-fired assets are being economically stranded as the market moves against them faster than the board anticipated.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Energy Term</th>
                <th>What It Means</th>
                <th>How It Appears in Case 03</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Wholesale Electricity Price</strong></td>
                <td>The price at which electricity is bought and sold in the market before reaching end consumers. Determined by real-time supply and demand.</td>
                <td>Rooftop solar above 35% penetration floods the market during daylight hours with zero-marginal-cost electricity — collapsing wholesale prices in the hours when coal was previously most valuable. Meridian's generation EBITDA margin fell from 38% to 21% in 3 years.</td>
              </tr>
              <tr>
                <td><strong>Baseload Generation</strong></td>
                <td>Power generation operating continuously to serve minimum demand at all times. Coal plants are classic baseload — high startup/shutdown costs make intermittent operation uneconomical.</td>
                <td>The "base" load coal used to serve is now partially covered by solar during the day, leaving coal competing with zero-cost solar at depressed prices during peak hours — destroying the economics that justified the original capital investment.</td>
              </tr>
              <tr>
                <td><strong>Carbon Cost / Safeguard Mechanism</strong></td>
                <td>A regulatory charge per tonne of CO₂ emitted. Hits coal hardest because coal generates more CO₂ per megawatt-hour than gas or renewables.</td>
                <td>Australia's updated Safeguard Mechanism added a carbon cost not modelled in Meridian's capital plan. Combined with lower wholesale prices: EBITDA margin compressed from 38% to 21%. S&amp;P has the BBB+ rating under review.</td>
              </tr>
              <tr>
                <td><strong>Stranded Asset</strong></td>
                <td>A physical asset whose economic value (present value of future cash flows) has fallen below its book value due to market, regulatory, or technology change. The gap between book value and economic value is a hidden impairment.</td>
                <td>Meridian's coal plants appear on the balance sheet at historical cost less depreciation. Under realistic electricity price and carbon cost scenarios, their economic value is materially below book value. This is what S&amp;P is pricing into its credit review.</td>
              </tr>
              <tr>
                <td><strong>DCF with Scenario Analysis</strong></td>
                <td>Discounted Cash Flow valuation: calculating the present value of future cash flows under multiple scenarios (bear, base, bull) to produce a value range rather than a single number.</td>
                <td>The engagement must value each coal plant under nine scenario combinations. The scenario range makes explicit what assumptions drive the valuation and how sensitive it is to each. This is what separates analytical rigour from a single optimistic number.</td>
              </tr>
              <tr>
                <td><strong>Renewables Capital Allocation</strong></td>
                <td>The investment in wind, solar, and battery assets to replace retiring fossil fuel generation. The transition plan must show how the company reinvests the proceeds from coal asset disposition.</td>
                <td>Priya Nair's AUD 820M renewables proposal cannot be approved until the coal disposition plan is decided. The consulting team must break this deadlock by producing integrated analysis: what the coal assets are worth, when to sell or retire them, and how much capital that frees for renewables investment.</td>
              </tr>
            </tbody>
          </table>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> Case 03 (Meridian Energy stranded asset management and transition capital allocation).</p>
        </div>
      </section>

      {/* ── SECTION 10 ── */}
      <section>
        <h2>10. How a Consulting Engagement Works — The Structure Behind All 14 Cases</h2>
        <div className="content">
          <p>
            Every case is structured as a consulting engagement — a defined-scope analytical project commissioned by a client to answer a specific strategic question. Understanding this structure explains why every case has the same sections in roughly the same order: business background, stakeholders, problem definition, frameworks, data, calculations, findings, recommendations, war room. These are not arbitrary — they follow the logic of how senior consultants actually approach a new engagement.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Engagement Phase</th>
                <th>What Happens</th>
                <th>The Case Section That Covers It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Context and Trigger</strong></td>
                <td>The consulting team learns the business model, what changed, and why the client needs help now. The trigger is always a specific event — a board reaction, a rating agency letter, a failed fundraise, a crisis.</td>
                <td>"Business Background" / "The Situation" — the opening section of every case</td>
              </tr>
              <tr>
                <td><strong>Stakeholder Mapping</strong></td>
                <td>Before analysis begins, the team maps who wants what conclusion and why. Every engagement has stakeholders who want the analysis to confirm their view and those who want it to challenge someone else's. Knowing this determines how findings are framed and sequenced.</td>
                <td>"The People in the Room" / "Who Is in the Room" — the stakeholder section in every case</td>
              </tr>
              <tr>
                <td><strong>Problem Reframing</strong></td>
                <td>The client's presenting question is almost never the right analytical question. Reframing it into a precise, answerable question is the first and most valuable consulting act. The gap between the presenting question and the analytical question is where the consultant's value lives.</td>
                <td>"The Problem, Precisely Defined" / "Analytics Objective" — every case has this section</td>
              </tr>
              <tr>
                <td><strong>Framework Selection</strong></td>
                <td>The team selects analytical frameworks based on the type of problem, not familiarity. Each case explains not just which frameworks were chosen but why others were rejected — because applying the wrong framework to a problem produces the wrong structure, and therefore the wrong answers.</td>
                <td>"Framework Selection &amp; Rationale" / "Analytical Framework" sections</td>
              </tr>
              <tr>
                <td><strong>Analysis and Calculations</strong></td>
                <td>The data collection, modelling, and calculation work. In the cases, this is the longest section. In practice, this phase produces far more output than what is presented — the consultant's job is to identify which findings are material enough to include.</td>
                <td>"Data Perspective" / "The Data", "Calculations &amp; Financial Modeling" sections</td>
              </tr>
              <tr>
                <td><strong>Recommendations</strong></td>
                <td>Converting findings into specific, ownable, time-bound actions. A recommendation without an owner and a timeline is an observation. The cases distinguish between what the analysis recommends and what will actually pass in the political environment of the client organisation.</td>
                <td>"Recommendations" section — every case</td>
              </tr>
              <tr>
                <td><strong>War Room / Practitioner Knowledge</strong></td>
                <td>The informal knowledge that determines how findings are actually received and acted on. What the data cannot tell you: the stakeholder who will kill the recommendation, the framing that converts resistance into support, the political sequence that makes the difference between a report that is implemented and one that is buried.</td>
                <td>"Senior Practitioner's War Room Notes" / "From Someone Who Has Done This Before" — the closing section of every case</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>The Term "Hypothesis-Driven" — Used Constantly in Consulting</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Consulting engagements do not start with data collection. They start with a hypothesis — a specific, testable answer to the analytical question — and then collect data to prove or disprove it. This is faster and more focused than collecting all possible data and hoping a conclusion emerges. In Case 06, the team enters with the hypothesis that the supply chain crisis is not unique to the connector assembly — and tests it by auditing other key input categories. In Case 13, the hypothesis is that the aggregate NPL masks vintage-level deterioration — and the vintage table either confirms or disproves it. The hypothesis shapes what data is collected, which is why problem structuring comes before data collection.
            </p>
          </div>

          <p style={{ fontSize: '14px', marginTop: '12px' }}><strong>Cases requiring this foundation:</strong> All 14 cases. The consulting engagement structure runs through every one.</p>
        </div>
      </section>

      {/* ── MASTER REFERENCE ── */}
      <section>
        <h2>Master Reference — Which Sections to Read Before Which Case</h2>
        <div className="content">
          <table className="data-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Title</th>
                <th>Read These Sections First</th>
                <th>Key Metrics You Must Know Before Starting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Case 01</strong></td>
                <td>The Margin Collapse at NovaCPG (FMCG)</td>
                <td>§1 P&amp;L, §4 Private Equity, §10 Consulting</td>
                <td>Gross margin %, EBITDA margin %, contribution margin, working capital, ROPI, price elasticity, SKU, trade promotion</td>
              </tr>
              <tr>
                <td><strong>Case 02</strong></td>
                <td>The Profitable Customer Exodus (Retail Banking Thailand)</td>
                <td>§1 P&amp;L, §2 Banking, §10 Consulting</td>
                <td>NII per customer, cost-to-serve, CLV, LTV, primary banking relationship vs account retention, open banking</td>
              </tr>
              <tr>
                <td><strong>Case 03</strong></td>
                <td>The Last Decade of Coal (Energy Australia)</td>
                <td>§1 P&amp;L, §9 Energy, §10 Consulting</td>
                <td>Wholesale electricity price, baseload, EBITDA margin, stranded asset, DCF, carbon cost, NEM, vertical integration</td>
              </tr>
              <tr>
                <td><strong>Case 04</strong></td>
                <td>The Unit Economics Trap (Tech / Super-App Indonesia)</td>
                <td>§1 P&amp;L, §5 SaaS, §10 Consulting</td>
                <td>CAC, LTV, LTV/CAC, cohort retention, burn rate, runway, GTV vs revenue, BNPL NPL</td>
              </tr>
              <tr>
                <td><strong>Case 05</strong></td>
                <td>The Drug That Cannot Launch Everywhere (Pharma Asia Pacific)</td>
                <td>§1 P&amp;L, §6 Pharma, §10 Consulting</td>
                <td>Reimbursement, formulary, reference pricing, gross-to-net waterfall, TAM vs serviceable market, NPV, cash runway</td>
              </tr>
              <tr>
                <td><strong>Case 06</strong></td>
                <td>The Supply Chain That Broke (Manufacturing Vietnam)</td>
                <td>§1 P&amp;L, §7 Supply Chain, §10 Consulting</td>
                <td>OEM, single-source dependency, make vs buy, dual sourcing, supplier qualification, SLA penalties, true cost vs reported cost</td>
              </tr>
              <tr>
                <td><strong>Case 07</strong></td>
                <td>The Loyalty Paradox (Retail Thailand)</td>
                <td>§1 P&amp;L, §8 Retail, §10 Consulting</td>
                <td>Gross margin %, contribution margin, omnichannel cost-to-serve, fulfilment cost, return rate, loyalty point liability, ROPI</td>
              </tr>
              <tr>
                <td><strong>Case 08</strong></td>
                <td>The Acquisition That Should Not Happen (PE / M&amp;A Europe)</td>
                <td>§1 P&amp;L, §4 Private Equity, §10 Consulting</td>
                <td>EBITDA, EBITDA normalisation, entry multiple, LBO, MOIC, debt capacity, customer concentration, maintainable earnings</td>
              </tr>
              <tr>
                <td><strong>Case 09</strong></td>
                <td>The Market That Looks Big But Isn't (Consumer / Market Entry Asia)</td>
                <td>§1 P&amp;L, §10 Consulting</td>
                <td>TAM vs serviceable market, EBITDA contribution timeline, capital efficiency, time-to-revenue, NPV, distribution channel economics</td>
              </tr>
              <tr>
                <td><strong>Case 10</strong></td>
                <td>The Organisation That Cannot Execute (Post-Merger Integration)</td>
                <td>§1 P&amp;L, §10 Consulting</td>
                <td>Revenue synergies, cost synergies, ROE, cross-sell rate, attrition rate, decision rights, incentive alignment</td>
              </tr>
              <tr>
                <td><strong>Cases 11–14</strong></td>
                <td>BA Career Track: Systems Thinking, Business Fluency, Data Sense, Executive Communication</td>
                <td>§1 P&amp;L, §2 Banking, §3 Insurance, §10 Consulting</td>
                <td>NIM, LDR, CASA, NPL, DPD 30+, vintage analysis, combined ratio, loss ratio, reserve adequacy, mudharabah, Minto SCR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── CLOSING ── */}
      <section>
        <h2>You Are Ready. One Last Thing.</h2>
        <div className="content">
          <p>
            Every case in this library was built from real business situations — the numbers are analytically realistic, the stakeholders drawn from real archetypes, and the political dynamics from real board rooms across Southeast Asia, Europe, and Australia. The cases do not have clean answers. They have defensible answers, built from evidence, bounded by honest uncertainty, and owned by named people with timelines.
          </p>
          <div className="highlight-box">
            <strong>The Single Most Useful Habit Before Reading Any Case</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before you read the analysis, write down your hypothesis. Read the business background, the stakeholder section, and the problem statement. Then stop. Write one paragraph: what do you think is causing the problem, what data would you want to see first, and what do you expect the recommendation to be. Then read the case and compare.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The gap between your hypothesis and the case's analysis is your current analytical gap. It is not a failure — it is a map. Every gap you close across 14 cases is a diagnostic instinct you now own permanently. The cases are the practice court. The real board room is the destination — where you are the one who needs to have the answer.
            </p>
          </div>
          <p>
            Start with Case 01. The P&amp;L is familiar now. The PE lens is clear. The problem structure makes sense. Read it differently than you would have an hour ago.
          </p>
        </div>
      </section>

      <section>
        <h2>Interactive Financial Literacy Modules</h2>
        <div className="content">
          <p>
            Module A is the first POC slice of the financial literacy builder. It starts with the two core language-of-money panes so the interactive structure can be validated before the rest of the module is migrated.
          </p>
          <ModuleErrorBoundary>
            <Suspense fallback={<div className="highlight-box">Loading Financial Literacy modules...</div>}>
              <FinancialLiteracy />
            </Suspense>
          </ModuleErrorBoundary>
        </div>
      </section>

    </div>
  );
};

export default Case16;
