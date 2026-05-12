const Case11 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Week 1 &mdash; Systems Thinking</span>
        <h1>The Bank That Cannot Grow Its Deposits</h1>
        <div className="case-meta">
          Industry: Retail Banking &bull; Level: BA Manager Track &mdash; Systems Thinking &amp; Root Cause Diagnosis
        </div>
      </header>

      <section>
        <h2>The Situation</h2>
        <div className="content">
          <p>
            <strong>PrimaBank</strong> is a mid-sized retail bank headquartered in Jakarta with IDR 42 trillion in total assets, 187 branch locations across Java and Sumatra, and 2.3 million active retail customers. For the past three years, PrimaBank has held a stable position as the fourth-largest retail bank in its core markets &mdash; not a challenger, not a leader, but dependable. That stability is now under threat.
          </p>
          <p>
            Over the past 18 months, <strong>PrimaBank&apos;s total deposit base has grown only 3.2% year-on-year</strong>, against an industry average of 11.4% and a board-approved target of 9%. The gap is not a rounding error. It represents IDR 2.6 trillion in deposits that should be on PrimaBank&apos;s balance sheet but are sitting at competitors instead. Because deposits are the primary funding source for PrimaBank&apos;s lending business, the shortfall is now beginning to constrain the loan book &mdash; and with it, net interest income, which accounts for 68% of total revenue.
          </p>
          <div className="highlight-box">
            <strong>What the CFO Is Seeing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CFO&apos;s most recent ALCO (Asset and Liability Committee) presentation flagged three compounding problems. First: the loan-to-deposit ratio has risen from 81% to 89% in 18 months &mdash; approaching the internal risk threshold of 92%, beyond which PrimaBank cannot grow its loan book without additional capital or new deposit inflows. Second: the cost of funds has increased 0.4 percentage points as the treasury team has been forced to rely more heavily on interbank borrowing and time deposits at higher rates to plug the funding gap. Third: the current account and savings account (CASA) ratio &mdash; the proportion of low-cost deposits relative to total deposits &mdash; has declined from 58% to 49%, meaning PrimaBank is increasingly funding itself with expensive money.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Head of Retail Banking has been asked to present a diagnosis and recovery plan to the board in six weeks. She has retained an internal BA team &mdash; you are on it &mdash; with one clear mandate: <em>identify why deposit growth is underperforming, determine which parts of the problem are structural versus cyclical, and produce a prioritised intervention plan that the board can act on.</em> The plan must be financially grounded, not a list of marketing ideas.
            </p>
          </div>
          <p>
            This is exactly the kind of problem that separates an analyst from a manager-level BA. The surface answer &mdash; &ldquo;customers are choosing competitors&rdquo; &mdash; is obvious and useless. The real work is understanding <em>why</em> the system is producing this outcome: which decisions, processes, incentives, and structural factors are interacting to create the deposit gap, and which levers, if pulled, would change the system&apos;s behaviour.
          </p>
        </div>
      </section>

      <section>
        <h2>The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Head of Retail Banking &mdash; Ibu Ratna Kusuma:</strong> Has run PrimaBank&apos;s retail division for six years. Built the branch network from 140 to 187 locations. Her instinct is that the problem is product-related &mdash; PrimaBank&apos;s savings rates are not competitive with digital banks. She is partially right. She is underweighting the role of the branch experience and the onboarding dropout rate, which her team does not currently measure.
          </div>
          <div className="highlight-box">
            <strong>Head of Digital Banking &mdash; Pak Denny Hartono:</strong> Joined 14 months ago from a fintech background. Has been pushing aggressively for a digital-first savings product. His team&apos;s data shows that 34% of new account applications via the mobile app are abandoned before completion. He has flagged this twice in the product review meeting. It has not been escalated to Ibu Ratna.
          </div>
          <div className="highlight-box">
            <strong>Head of Branch Network &mdash; Ibu Sri Wahyuni:</strong> Manages 187 branch managers across two regions. Branch manager incentives are currently tied to loan disbursement targets, not deposit acquisition targets. She is aware of this misalignment but does not control the incentive structure &mdash; that sits with HR and Finance. Branch managers are spending the majority of their customer-facing time on loan applications, which is what they are measured on.
          </div>
          <div className="highlight-box">
            <strong>Chief Marketing Officer &mdash; Pak Arief Santoso:</strong> Launched a deposit acquisition campaign six months ago &mdash; &ldquo;Nabung Lebih Untung&rdquo; &mdash; with IDR 28 billion in media spend. The campaign generated 340,000 new account inquiries. Only 91,000 accounts were actually opened. He does not know where the other 249,000 inquiries went. His team tracks campaign awareness and lead volume; it does not track conversion.
          </div>
          <div className="highlight-box">
            <strong>Head of Treasury &mdash; Pak Budi Setiawan:</strong> The most financially precise person in the room. He can tell you to the basis point what the deposit shortfall is costing PrimaBank in funding costs. He cannot tell you why customers are leaving or not coming. His concern is the LDR and the cost of funds. He is the person who will validate or reject whatever financial projections the BA team produces.
          </div>
        </div>
      </section>

      <section>
        <h2>The Systems Thinking Frame</h2>
        <div className="content">
          <p>
            Most analysts approach a problem like this by asking: <em>what is the metric and how do we improve it?</em> A manager-level analyst asks a different question: <em>what is the system producing this metric, and which parts of the system need to change?</em>
          </p>
          <p>
            Deposit growth is not a single variable. It is the output of a system with five interconnected stages: <strong>Awareness</strong> (does the customer know PrimaBank exists and offers a relevant product?), <strong>Acquisition</strong> (does the customer open an account?), <strong>Activation</strong> (does the customer fund the account and use it?), <strong>Retention</strong> (does the customer keep their deposits at PrimaBank over time?), and <strong>Growth</strong> (does the customer deepen their relationship and increase their balance?). A problem at any stage suppresses the final output &mdash; but the intervention required is completely different depending on where the breakdown is.
          </p>
          <div className="highlight-box">
            <strong>The Precise Problem Statement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>Which stage or stages of PrimaBank&apos;s deposit acquisition and retention system are underperforming relative to industry benchmarks, what structural or process factors are causing the underperformance at each stage, and what sequence of interventions would recover the IDR 2.6 trillion deposit gap within 12 months while improving the CASA ratio from 49% back toward 58%?</em>
            </p>
          </div>
          <p><strong>Four diagnostic questions structure this engagement:</strong></p>
          <ol>
            <li><strong>Where in the funnel is the biggest leak?</strong> Is PrimaBank losing at awareness, acquisition, activation, retention, or growth &mdash; and what is the quantified size of each leak?</li>
            <li><strong>Are the incentives aligned to the goal?</strong> Are branch managers, relationship officers, and digital teams measured and rewarded on deposit growth &mdash; or are they optimising for something else?</li>
            <li><strong>Is the product competitive?</strong> Are PrimaBank&apos;s deposit rates, product features, and digital experience materially worse than alternatives &mdash; and if so, which customer segments are most sensitive to the gap?</li>
            <li><strong>What is the cost of inaction?</strong> If the deposit gap is not closed, what happens to the loan book, NII, and ROE over the next 12&ndash;24 months?</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>The Business Situation Map</h2>
        <div className="content">
          <p>
            The map below shows how the deposit problem connects across the organisation. This is the systems thinking output &mdash; the view a manager-level analyst produces before touching a single number.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>System Layer</th>
                <th>What Should Be Happening</th>
                <th>What Is Actually Happening</th>
                <th>Connection to Deposit Gap</th>
                <th>Severity</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Incentives</strong></td>
                <td>Branch managers rewarded for deposit acquisition and CASA growth</td>
                <td>Branch managers rewarded for loan disbursement volume; deposit targets are secondary with no financial consequence for missing them</td>
                <td>Direct: front-line effort is allocated to loans, not deposits. Customers entering branches for savings inquiries are deprioritised.</td>
                <td><strong>Critical</strong></td>
              </tr>
              <tr>
                <td><strong>Digital Funnel</strong></td>
                <td>Mobile account opening completed in &lt;10 minutes with &lt;15% abandonment</td>
                <td>34% abandonment rate on mobile account applications; average completion time 22 minutes; 3 document re-submission requests on average</td>
                <td>Direct: 249,000 marketing-generated leads did not convert. At average deposit balance of IDR 8.5M, that is IDR 2.1 trillion in deposits not acquired.</td>
                <td><strong>Critical</strong></td>
              </tr>
              <tr>
                <td><strong>Product Pricing</strong></td>
                <td>Savings rates within 25bps of top 3 competitors in each customer segment</td>
                <td>PrimaBank&apos;s regular savings rate is 2.75%; digital bank competitors average 4.1%; gap of 135bps is above customer sensitivity threshold in the mass-market segment</td>
                <td>Indirect: rate gap is not the primary driver (activation and incentive failures are larger), but it makes customer retention harder once acquired</td>
                <td>High</td>
              </tr>
              <tr>
                <td><strong>Activation</strong></td>
                <td>80%+ of new accounts funded within 30 days; average initial deposit &ge;IDR 5M</td>
                <td>Only 54% of new accounts are funded within 30 days; 31% of accounts opened remain dormant at 90 days; average initial deposit IDR 2.8M</td>
                <td>Direct: dormant accounts do not contribute to deposit base. 31% dormancy on new accounts means acquisition spend is generating balance sheet noise, not funding.</td>
                <td>High</td>
              </tr>
              <tr>
                <td><strong>Retention</strong></td>
                <td>Annual deposit churn &lt;8% in mass-market segment; &lt;5% in mass-affluent</td>
                <td>Mass-market churn 14.2%; mass-affluent churn 9.8%; primary exit reason: competitor offers higher rate or better digital experience</td>
                <td>Indirect but compounding: each percentage point of additional churn costs approximately IDR 420 billion in annual deposit outflows</td>
                <td>Medium-High</td>
              </tr>
              <tr>
                <td><strong>Cross-sell / Deepening</strong></td>
                <td>30%+ of savings customers also hold a second PrimaBank product (loan, insurance, or investment)</td>
                <td>Multi-product ratio is 18%; customers with only one product churn at 2.3x the rate of multi-product customers</td>
                <td>Indirect: low cross-sell means low stickiness, which amplifies retention problem. Multi-product customers have average deposit balance 3.1x higher than single-product customers.</td>
                <td>Medium</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '16px', fontSize: '14px' }}>
            <strong>The systems insight:</strong> PrimaBank does not have a deposit rate problem. It has an <em>execution system</em> problem. The incentives direct front-line effort away from deposits. The digital funnel leaks 34% of leads before account opening. Activation is weak, so acquired customers do not fund their accounts. And low cross-sell means the customers who do fund their accounts churn faster. Each failure reinforces the others: a branch manager who does not prioritise deposits also does not prioritise onboarding follow-up, which worsens activation, which worsens retention. Fixing the rate alone would not solve this. The system needs to change.
          </p>
        </div>
      </section>

      <section>
        <h2>The Data</h2>
        <div className="content">

          <p><strong>Deposit Funnel Performance &mdash; PrimaBank vs Industry Benchmark:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Funnel Stage</th>
                <th>PrimaBank</th>
                <th>Industry Benchmark</th>
                <th>Gap</th>
                <th>IDR Impact of Gap</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lead-to-application rate</td>
                <td>72%</td>
                <td>68%</td>
                <td>+4pp (above benchmark)</td>
                <td>Not a problem &mdash; marketing is generating applications</td>
              </tr>
              <tr>
                <td>Application-to-account opened</td>
                <td>36%</td>
                <td>61%</td>
                <td><strong>&minus;25pp</strong></td>
                <td>IDR 2.1T in lost deposit potential from 2023 campaign alone</td>
              </tr>
              <tr>
                <td>Account opened to funded (30 days)</td>
                <td>54%</td>
                <td>79%</td>
                <td><strong>&minus;25pp</strong></td>
                <td>IDR 890B in dormant account opportunity</td>
              </tr>
              <tr>
                <td>Funded to active at 12 months</td>
                <td>61%</td>
                <td>74%</td>
                <td>&minus;13pp</td>
                <td>IDR 540B in annual churn above benchmark</td>
              </tr>
              <tr>
                <td>Single-product to multi-product (24 months)</td>
                <td>18%</td>
                <td>31%</td>
                <td>&minus;13pp</td>
                <td>IDR 320B in balance deepening foregone</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Branch Incentive Structure &mdash; Current vs Required:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Weight in Branch Manager KPI</th>
                <th>Weight Required (Deposit Recovery)</th>
                <th>Consequence of Current Structure</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Loan disbursement volume</td>
                <td>45%</td>
                <td>25%</td>
                <td>Branch managers prioritise loan customers; deposit inquiries wait or are handled by junior staff</td>
              </tr>
              <tr>
                <td>New deposit accounts opened</td>
                <td>10%</td>
                <td>30%</td>
                <td>No meaningful consequence for missing deposit targets; effort not allocated</td>
              </tr>
              <tr>
                <td>CASA balance growth</td>
                <td>0%</td>
                <td>20%</td>
                <td>Branch manager has no financial reason to care whether accounts are funded or dormant</td>
              </tr>
              <tr>
                <td>Customer satisfaction (NPS)</td>
                <td>15%</td>
                <td>15%</td>
                <td>Neutral &mdash; no change needed</td>
              </tr>
              <tr>
                <td>Cross-sell ratio</td>
                <td>5%</td>
                <td>10%</td>
                <td>Underpowered; multi-product penetration is the primary retention lever and it has minimal incentive weight</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Competitor Rate Comparison &mdash; Mass Market Savings (May 2025):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Institution</th>
                <th>Regular Savings Rate</th>
                <th>Digital Savings Rate</th>
                <th>Account Opening Time</th>
                <th>Customer Segment Strength</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>PrimaBank</strong></td>
                <td>2.75%</td>
                <td>3.10%</td>
                <td>22 min (mobile); 35 min (branch)</td>
                <td>Mass market, existing customers</td>
              </tr>
              <tr>
                <td>BankCentral (Competitor A)</td>
                <td>3.00%</td>
                <td>3.50%</td>
                <td>18 min (mobile)</td>
                <td>Mass market, salaried workers</td>
              </tr>
              <tr>
                <td>NeoBank Digital (Competitor B)</td>
                <td>N/A (digital only)</td>
                <td>4.25%</td>
                <td>7 min (mobile)</td>
                <td>Urban millennials, gig economy</td>
              </tr>
              <tr>
                <td>BankRaya (Competitor C)</td>
                <td>2.90%</td>
                <td>4.10%</td>
                <td>12 min (mobile)</td>
                <td>Mass-affluent, small business owners</td>
              </tr>
              <tr>
                <td>PrimaBank gap to digital average</td>
                <td>&mdash;</td>
                <td><strong>&minus;135bps</strong></td>
                <td><strong>+10&ndash;15 min slower</strong></td>
                <td>Rate and UX both below par</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Calculations</h2>
        <div className="content">

          <p><strong>Calculation 1 &mdash; Quantifying the Funnel Leak: Where Did IDR 2.6 Trillion Go?</strong></p>
          <div className="calculation">
{`Total deposit gap vs target (18 months):
  Target deposit growth:              9.0% YoY
  Actual deposit growth:              3.2% YoY
  Growth shortfall:                   5.8pp
  Deposit base at start of period:    IDR 28.4 trillion
  IDR value of shortfall:             IDR 28.4T × 5.8% = IDR 1.65 trillion/yr
  Cumulative 18-month shortfall:      ≈ IDR 2.6 trillion

Funnel decomposition of IDR 2.6 trillion gap:

  Stage 1 — Application-to-account conversion failure:
    Marketing leads generated (2023 campaign + organic): 680,000
    Applications submitted:                               490,000  (72% of leads)
    Accounts actually opened:                             176,000  (36% of applications)
    Benchmark conversion:                                 61%
    Accounts lost to poor conversion:                     (61%−36%) × 490,000 = 122,500 accounts
    Average initial deposit:                              IDR 8.5M
    Deposit potential lost:                               122,500 × IDR 8.5M = IDR 1.04 trillion

  Stage 2 — Activation failure (funded within 30 days):
    Accounts opened:                                      176,000
    Funded within 30 days (54%):                          95,040
    Benchmark (79%):                                      139,040
    Accounts opened but not funded:                       44,000
    Average deposit if funded:                            IDR 8.5M
    Deposit potential lost to dormancy:                   44,000 × IDR 8.5M = IDR 374 billion

  Stage 3 — Retention failure above benchmark:
    Active deposit base:                                  IDR 28.4 trillion
    Excess churn vs benchmark:
      Mass market: (14.2% − 8.0%) × 65% of base         = 4.03pp × IDR 18.5T = IDR 745B/yr
      Mass affluent: (9.8% − 5.0%) × 35% of base        = 4.8pp × IDR 9.9T  = IDR 475B/yr
    Total excess annual deposit outflow from churn:       IDR 1.22 trillion/yr
    18-month impact:                                      ≈ IDR 1.83 trillion

  Stage 4 — Cross-sell deepening gap:
    Multi-product customers hold 3.1× deposit of single-product customers
    If cross-sell ratio moved from 18% to 31% (benchmark):
      Additional customers with second product:           13pp × 2.3M = 299,000 customers
      Incremental deposit per converted customer:         IDR 8.5M × (3.1−1) = IDR 17.85M
      Deposit deepening potential:                        299,000 × IDR 17.85M = IDR 5.3 trillion
      (This is a long-term lever; 12-month realisation: ≈ 20%) = IDR 1.06 trillion

  ⟹ Total recoverable deposit gap breakdown:
     Conversion fix (digital UX + process):              +IDR 1.04 trillion
     Activation fix (onboarding follow-up + incentives): +IDR 374 billion
     Retention fix (rate + cross-sell):                  +IDR 1.22 trillion/yr
     Cross-sell deepening (12-month):                    +IDR 1.06 trillion
     Three highest-impact interventions alone recover:    IDR 2.67 trillion
     Target gap to close:                                 IDR 2.60 trillion ✓`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 &mdash; Cost of Funding Gap: What the Deposit Shortfall Is Costing PrimaBank</strong></p>
          <div className="calculation">
{`Funding cost impact of IDR 2.6 trillion deposit shortfall:

  If IDR 2.6T were CASA deposits:
    Average CASA cost of funds:        1.8% per annum
    Annual cost of IDR 2.6T in CASA:   IDR 2.6T × 1.8% = IDR 46.8 billion/yr

  Actual funding source (interbank + time deposits):
    Average interbank rate (JIBOR 3M):  6.2% per annum
    Average time deposit rate offered:  5.8% per annum
    Blended replacement cost:           ≈ 6.0% per annum
    Annual cost of IDR 2.6T at 6.0%:   IDR 2.6T × 6.0% = IDR 156 billion/yr

  Excess funding cost from deposit gap:
    IDR 156B − IDR 46.8B               = IDR 109.2 billion per year
    Over 18 months:                     ≈ IDR 164 billion in excess cost incurred

  Net Interest Margin compression:
    NIM impact of 0.4pp cost of funds increase:
    NII base (68% of IDR 8.2T revenue): IDR 5.6 trillion
    NIM compression cost:               IDR 42.4T (earning assets) × 0.4% = IDR 170 billion/yr

  ⟹ Total annual financial cost of the deposit gap:
     Excess funding cost:               IDR 109 billion
     NIM compression:                   IDR 170 billion
     Total annual drag:                 IDR 279 billion/yr
     This is 4.97% of PrimaBank's net interest income — a material drag
     that grows each quarter the deposit gap is not closed.`}
          </div>
        </div>
      </section>

      <section>
        <h2>The Intervention Plan</h2>
        <div className="content">

          <p><strong>Prioritised Recovery Interventions &mdash; 12-Month Horizon:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Intervention</th>
                <th>Target Stage Fixed</th>
                <th>Estimated Deposit Recovery</th>
                <th>Implementation Time</th>
                <th>Cost to Implement</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Restructure branch manager KPI: add CASA growth (20%) and new deposit accounts (30%); reduce loan weight to 25%</strong></td>
                <td>Incentives → Activation → Retention</td>
                <td>IDR 520&ndash;680 billion (improved activation + branch-driven cross-sell)</td>
                <td>6&ndash;8 weeks (HR and finance sign-off required)</td>
                <td>IDR 12&ndash;18 billion (incentive top-up for transition quarter)</td>
                <td><strong>#1 — Do First</strong></td>
              </tr>
              <tr>
                <td><strong>Rebuild mobile account opening flow: target &lt;8 min, zero document resubmission, e-KYC integration</strong></td>
                <td>Digital Funnel → Acquisition</td>
                <td>IDR 820&ndash;1,040 billion (conversion rate from 36% toward 55%)</td>
                <td>4&ndash;6 months (tech build)</td>
                <td>IDR 45&ndash;65 billion (development + e-KYC vendor)</td>
                <td><strong>#2 — Start Immediately, Results in M4</strong></td>
              </tr>
              <tr>
                <td><strong>30-day activation programme: automated SMS + branch call for unfunded accounts on days 3, 7, and 14</strong></td>
                <td>Activation</td>
                <td>IDR 250&ndash;375 billion (fund 15pp more accounts within 30 days)</td>
                <td>3&ndash;4 weeks (CRM workflow, no tech build needed)</td>
                <td>IDR 3&ndash;5 billion (campaign ops)</td>
                <td><strong>#3 — Quickest Win</strong></td>
              </tr>
              <tr>
                <td><strong>Introduce tiered digital savings rate: 4.0% for balances &gt;IDR 5M, funded digitally within 30 days</strong></td>
                <td>Product Pricing → Retention</td>
                <td>IDR 380&ndash;520 billion (reduce mass-market churn from 14.2% toward 10%)</td>
                <td>4&ndash;6 weeks (product and treasury approval)</td>
                <td>IDR 28&ndash;38 billion/yr in additional interest expense</td>
                <td><strong>#4 — Do After Incentive Fix</strong></td>
              </tr>
              <tr>
                <td><strong>Cross-sell trigger: offer investment or insurance product at account activation (day 30 if funded)</strong></td>
                <td>Cross-sell → Retention → Growth</td>
                <td>IDR 320&ndash;480 billion (12-month balance deepening)</td>
                <td>6&ndash;10 weeks (product bundling + RM training)</td>
                <td>IDR 8&ndash;12 billion</td>
                <td><strong>#5 — Medium Term</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '16px', fontSize: '14px' }}>
            <strong>Sequencing rationale:</strong> The incentive restructure must come first because it changes the behaviour of 187 branch managers overnight &mdash; and those branch managers are the delivery mechanism for interventions #3, #4, and #5. Fixing the digital funnel (#2) addresses the largest single deposit opportunity but takes 4&ndash;6 months to build; it must start immediately but will not produce results until Month 4. Intervention #3 (activation programme) costs almost nothing and can be live in three weeks &mdash; it is the fastest IDR on the board. Together, interventions #1, #2, and #3 are projected to recover IDR 1.6&ndash;2.1 trillion within 12 months, closing 60&ndash;80% of the deposit gap before the LDR reaches the 92% risk threshold.
          </p>
        </div>
      </section>

      <section>
        <h2>Your Executive Summary &mdash; Practice This</h2>
        <div className="content">
          <p>
            Every case in this programme ends with the same deliverable: a three-sentence executive summary that a head of division can read in 30 seconds and act on. This is the skill that gets you promoted. Write it before you read the model answer below.
          </p>
          <div className="highlight-box">
            <strong>The Model Answer (Manager-Level)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>&ldquo;PrimaBank&apos;s IDR 2.6 trillion deposit gap is not a product pricing problem &mdash; it is an execution system failure: branch managers are incentivised to chase loans, 34% of digital account applications are abandoned before completion, and 46% of accounts that are opened are never funded. Three targeted interventions &mdash; restructuring branch KPIs, rebuilding the mobile account opening flow, and launching a 30-day activation programme &mdash; are projected to recover IDR 1.6&ndash;2.1 trillion in deposits within 12 months and reduce the funding cost drag of IDR 279 billion per year, addressing the structural causes rather than the symptoms.&rdquo;</em>
            </p>
          </div>
          <p style={{ fontSize: '14px', marginTop: '12px' }}>
            <strong>Why this works:</strong> It leads with what it is <em>not</em> (pre-empts the wrong instinct). It names the system failure in concrete terms. It gives three specific actions with a financial outcome. It ends with a principle, not just a number. A senior stakeholder reading this knows exactly what is broken, what to do, and what it is worth &mdash; without asking a follow-up question.
          </p>
        </div>
      </section>

      <section>
        <h2>From Someone Who Has Done This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Why the Obvious Answer (Rate) Is Wrong &mdash; and How to Prove It</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              When a bank loses deposits, the first instinct of almost everyone in the room is to blame the rate. It is the most visible variable, it is easy to benchmark, and it feels like something that can be fixed in a week. The problem is that a rate increase is the most expensive intervention per IDR recovered &mdash; and in PrimaBank&apos;s case, it addresses Stage 5 (retention of existing customers) while the biggest leaks are at Stage 2 (conversion) and Stage 3 (activation). You prove the rate answer is wrong not by arguing against it, but by quantifying the funnel: if PrimaBank raised its rate by 135bps tomorrow and nothing else changed, 34% of new applicants would still abandon the digital process, and 46% of accounts would still go unfunded. The rate fix would cost IDR 28&ndash;38 billion per year and recover IDR 380&ndash;520 billion in deposits &mdash; a 13&times; return. The digital funnel fix costs IDR 45&ndash;65 billion and recovers IDR 820&ndash;1,040 billion &mdash; a 16&times; return. Show the numbers. Let the math make the argument.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Incentive Problem Is Always Political</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Recommending that branch manager KPIs be restructured is analytically straightforward and politically complex. The Head of Branch Network knows the incentives are wrong. HR controls the incentive structure. Finance has to approve any incentive top-up cost. And branch managers who have been optimising for loans for three years will resist a change that makes their targets harder. The way to navigate this is to present the current incentive structure not as someone&apos;s fault but as a design that made sense when loan growth was the priority and is now misaligned to the current strategic need. Frame it as a recalibration, not an indictment. Then quantify the cost of not changing: every quarter the incentive structure stays unchanged, PrimaBank loses approximately IDR 65 billion in avoidable deposit outflows. That number makes the conversation easier.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What the Board Will Ask</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At some point a board member will ask: &ldquo;If the digital funnel has been leaking 34% of applications, why are we only finding out now?&rdquo; The honest answer is that PrimaBank has been measuring campaign outputs (leads, applications) but not campaign outcomes (funded accounts, 90-day balance). This is a measurement system failure as much as a process failure. The correct response is not to deflect but to acknowledge it and show what the new measurement framework looks like: lead &rarr; application &rarr; account opened &rarr; funded within 30 days &rarr; active at 90 days &rarr; multi-product at 12 months. Every stage tracked, every stage owned by a named accountable leader. The board needs to know the organisation can see the problem now &mdash; and that this visibility is permanent, not a one-time diagnostic.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Transfer Question &mdash; Where Else Does This Logic Apply?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The systems thinking pattern in this case &mdash; a funnel with multiple leak points, incentives misaligned to the goal, and measurement focused on inputs rather than outcomes &mdash; applies identically to: an e-commerce platform losing customers between cart and checkout; a hospital losing patients between referral and first appointment; a SaaS company losing users between free trial sign-up and first active use. The industry changes. The funnel structure, the incentive misalignment pattern, and the measurement gap are the same. A manager-level analyst recognises the pattern and knows which questions to ask before seeing a single number.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case11;
