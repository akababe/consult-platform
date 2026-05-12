const Case12 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Week 2 &mdash; Business Fluency</span>
        <h1>The Insurance Company That Looks Healthy But Isn&apos;t</h1>
        <div className="case-meta">
          Industry: General Insurance &bull; Level: BA Manager Track &mdash; Reading Between the Numbers &amp; Executive Risk Brief
        </div>
      </header>

      <section>
        <h2>The Situation</h2>
        <div className="content">
          <p>
            <strong>ArkaInsurance</strong> is a mid-sized general insurance company based in Jakarta, operating across three product lines: motor vehicle insurance (52% of gross written premium), property insurance (31%), and personal accident &amp; health (17%). The company has been in operation for 22 years, holds an A- financial strength rating from Pefindo, and is majority-owned by a regional conglomerate that treats it as a stable, dividend-generating asset.
          </p>
          <p>
            At the last board meeting, the CEO presented a set of results that generated positive reactions: gross written premium grew 14.2% year-on-year to IDR 3.8 trillion, net profit after tax increased 8.1% to IDR 312 billion, and the dividend payout ratio was maintained at 65%. The CFO noted that the balance sheet remained &ldquo;solid.&rdquo; Three board members congratulated management on a strong year.
          </p>
          <div className="highlight-box">
            <strong>What the Numbers Are Not Saying</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Two weeks after the board meeting, the Head of Actuarial quietly flagged a set of concerns to the CFO in a private memo. The concerns did not make it into the board presentation. The combined ratio &mdash; the single most important measure of insurance underwriting profitability &mdash; has deteriorated from 91.4% to 97.8% over three years. The motor vehicle loss ratio has crossed 72%, a threshold that historically precedes underwriting losses in the Indonesian market. The company&apos;s reserve adequacy ratio has declined for the second consecutive year. And the investment portfolio, which has been masking underwriting deterioration through capital gains, is now 68% allocated to fixed-income instruments whose yields are compressing as rates plateau.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              You have been brought in as the lead BA on an internal strategic review commissioned by the CFO. Your mandate: <em>produce an Executive Risk Brief that tells the CFO and ultimately the board what the financials actually mean for the business &mdash; not what they appear to say on the surface &mdash; and identify which risks are material enough to require board-level intervention before the next annual cycle.</em> The CFO has been explicit: she does not want a list of concerns. She wants a prioritised, financially grounded brief that tells her what is healthy, what is quietly dangerous, and where to focus first.
            </p>
          </div>
          <p>
            Business fluency means reading a financial result the way a senior executive does &mdash; not as a set of numbers to be reported, but as a signal system that tells you something about the underlying health of the business. The headline numbers at ArkaInsurance are reassuring. The underlying numbers tell a different story. Your job is to read that story before anyone asks you to.
          </p>
        </div>
      </section>

      <section>
        <h2>The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>CFO &mdash; Ibu Dewi Anggraeni:</strong> The person who commissioned this review. Has been CFO for four years. Came from a Big Four audit background and has strong technical financial skills. Her concern is that the board is reading headline premium growth and profit as confirmation that the business model is working, when her instinct is that the underwriting quality is deteriorating and the investment income is flattering the P&amp;L. She needs an analytically rigorous brief that gives her the language and evidence to have a difficult conversation with the CEO and the board.
          </div>
          <div className="highlight-box">
            <strong>CEO &mdash; Pak Hendra Wijaya:</strong> Has been CEO for eight years. Built the premium base from IDR 1.4 trillion to IDR 3.8 trillion through aggressive distribution expansion &mdash; adding 340 new agency relationships and winning three major bancassurance partnerships. His view of the business is through the lens of premium volume and market share. He is aware that margins are tightening in motor but believes this is an industry-wide cycle that will correct. He is not wrong that it is industry-wide. He is wrong that ArkaInsurance can afford to wait for the cycle to turn.
          </div>
          <div className="highlight-box">
            <strong>Head of Actuarial &mdash; Pak Rizal Hakim:</strong> The person who flagged the concerns. Has been raising reserve adequacy concerns for 18 months through internal channels. Has not been given a platform to present his findings to the board because the CEO has consistently framed his concerns as &ldquo;overly conservative actuarial caution.&rdquo; His analysis is correct. His communication style is technical and does not translate well to a board audience. He is the BA team&apos;s most important analytical ally.
          </div>
          <div className="highlight-box">
            <strong>Head of Motor Underwriting &mdash; Ibu Sari Puspita:</strong> Has been under significant pressure from distribution partners to keep motor premiums competitive. Has been approving risks at rates she privately considers too low in order to maintain volume targets. Has not escalated this to the CEO because her KPI is gross written premium in motor, not loss ratio. The incentive structure is producing exactly the behaviour you would predict from it.
          </div>
          <div className="highlight-box">
            <strong>Head of Investments &mdash; Pak Agus Nugroho:</strong> Manages IDR 4.2 trillion in invested assets. The investment portfolio has generated IDR 89 billion in unrealised capital gains over the past two years from equity holdings, which have been partially realised to support profit figures. With the equity market having run strongly, the remaining unrealised gains buffer is IDR 34 billion &mdash; materially smaller than it was. He is aware that the investment income contribution to profit is unsustainable at current levels but has not been asked to present this analysis to the board.
          </div>
        </div>
      </section>

      <section>
        <h2>The Business Fluency Frame</h2>
        <div className="content">
          <p>
            Insurance financials are deliberately structured to look better than they are at the headline level. Gross written premium measures sales, not profitability. Net profit includes investment income, which can mask underwriting losses. The combined ratio is the number that tells the truth &mdash; and it is rarely the first number a board sees.
          </p>
          <p>
            Business fluency in insurance means knowing which numbers to interrogate before forming a view. A manager-level BA does not accept the headline P&amp;L as the story. They ask: <em>where is the profit actually coming from, is that source sustainable, and what happens to the business if it stops?</em> At ArkaInsurance, those three questions produce a very different picture than the board presentation.
          </p>
          <div className="highlight-box">
            <strong>The Key Insurance Metrics You Must Know</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Loss Ratio:</strong> Claims paid &divide; Net earned premium. Measures how much of every premium rupiah goes to claims. Below 60% is excellent; 60&ndash;70% is healthy; above 70% in motor is a warning; above 75% means underwriting losses are likely. &bull; <strong>Expense Ratio:</strong> Operating expenses &divide; Net earned premium. Measures the cost of running the business relative to premium. Industry benchmark in Indonesia: 28&ndash;33%. &bull; <strong>Combined Ratio:</strong> Loss ratio + Expense ratio. The definitive measure of underwriting profitability. Below 100% = underwriting profit. Above 100% = underwriting loss, must be covered by investment income. &bull; <strong>Reserve Adequacy Ratio:</strong> Actual reserves &divide; Required reserves (actuarial estimate). Below 100% means the company is holding less in reserves than its claims exposure requires &mdash; a solvency risk if claims develop worse than expected. &bull; <strong>Investment Yield:</strong> Investment income &divide; Average invested assets. Measures how hard the investment portfolio is working. When investment income subsidises underwriting losses, the business is structurally fragile.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Precise Problem Statement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>ArkaInsurance&apos;s headline financial results are flattering a deteriorating underwriting position: which product lines are generating genuine underwriting profit, which are being cross-subsidised by investment income, what is the true profitability of the business once investment income normalises, and what interventions are required before the combined ratio crosses 100% and the business enters structural underwriting loss?</em>
            </p>
          </div>
          <p><strong>Four diagnostic questions structure this engagement:</strong></p>
          <ol>
            <li><strong>Is the profit real?</strong> How much of net profit is underwriting profit versus investment income &mdash; and how sustainable is each component?</li>
            <li><strong>Which product lines are healthy?</strong> Strip out investment income and assess each line on its underwriting result alone. Which lines are profitable, which are loss-making, and which are approaching the threshold?</li>
            <li><strong>What is the reserve risk?</strong> If reserves are inadequate, what is the financial exposure if claims develop worse than expected &mdash; and what does that mean for the solvency position?</li>
            <li><strong>What does the business look like in 18 months if nothing changes?</strong> Project the combined ratio, investment yield, and net profit forward under current trends. That is the number the board needs to see.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>The Data</h2>
        <div className="content">

          <p><strong>Three-Year Financial Summary &mdash; ArkaInsurance:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>FY2022</th>
                <th>FY2023</th>
                <th>FY2024</th>
                <th>Trend</th>
                <th>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gross Written Premium (IDR B)</td>
                <td>2,910</td>
                <td>3,327</td>
                <td>3,800</td>
                <td>+14.2% YoY</td>
                <td>Strong top-line growth &mdash; this is the headline number the board sees</td>
              </tr>
              <tr>
                <td>Net Earned Premium (IDR B)</td>
                <td>1,890</td>
                <td>2,104</td>
                <td>2,318</td>
                <td>+10.2% YoY</td>
                <td>After reinsurance cessions; actual risk retained by ArkaInsurance</td>
              </tr>
              <tr>
                <td>Net Claims Incurred (IDR B)</td>
                <td>1,134</td>
                <td>1,368</td>
                <td>1,669</td>
                <td>+22.0% YoY</td>
                <td><strong>Claims growing faster than premium &mdash; this is the warning signal</strong></td>
              </tr>
              <tr>
                <td>Loss Ratio</td>
                <td>60.0%</td>
                <td>65.0%</td>
                <td>72.0%</td>
                <td>+12pp in 3 years</td>
                <td><strong>Crossed the 70% warning threshold; motor loss ratio now 78%</strong></td>
              </tr>
              <tr>
                <td>Expense Ratio</td>
                <td>31.4%</td>
                <td>30.8%</td>
                <td>25.8%</td>
                <td>Improving</td>
                <td>Expense control is good; this is masking the loss ratio deterioration in the combined ratio</td>
              </tr>
              <tr>
                <td><strong>Combined Ratio</strong></td>
                <td><strong>91.4%</strong></td>
                <td><strong>95.8%</strong></td>
                <td><strong>97.8%</strong></td>
                <td><strong>+6.4pp in 3 years</strong></td>
                <td><strong>Approaching 100% — underwriting breakeven. At current trajectory, crosses in 12–15 months.</strong></td>
              </tr>
              <tr>
                <td>Underwriting Profit (IDR B)</td>
                <td>166</td>
                <td>88</td>
                <td>51</td>
                <td>&minus;69% in 3 years</td>
                <td>The core business is generating almost no profit; it is surviving on investment income</td>
              </tr>
              <tr>
                <td>Investment Income (IDR B)</td>
                <td>198</td>
                <td>224</td>
                <td>261</td>
                <td>+17.4% YoY</td>
                <td>Rising &mdash; but driven partly by realised capital gains that are a one-time source</td>
              </tr>
              <tr>
                <td>Net Profit After Tax (IDR B)</td>
                <td>288</td>
                <td>289</td>
                <td>312</td>
                <td>+8.1% YoY</td>
                <td>Stable profit &mdash; this is what the board sees. Investment income is subsidising a deteriorating underwriting result.</td>
              </tr>
              <tr>
                <td>Reserve Adequacy Ratio</td>
                <td>108%</td>
                <td>103%</td>
                <td>97%</td>
                <td>Declining</td>
                <td><strong>Below 100% for first time — company holds less in reserves than its actuarial exposure requires</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Product Line Underwriting Performance &mdash; FY2024:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Product Line</th>
                <th>GWP (IDR B)</th>
                <th>% of Portfolio</th>
                <th>Loss Ratio</th>
                <th>Expense Ratio</th>
                <th>Combined Ratio</th>
                <th>Underwriting Result</th>
                <th>Assessment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Motor Vehicle</strong></td>
                <td>1,976</td>
                <td>52%</td>
                <td>78.4%</td>
                <td>24.2%</td>
                <td><strong>102.6%</strong></td>
                <td><strong>IDR &minus;51B loss</strong></td>
                <td><strong>Underwriting loss. Largest line. Driving the aggregate deterioration.</strong></td>
              </tr>
              <tr>
                <td>Property</td>
                <td>1,178</td>
                <td>31%</td>
                <td>58.2%</td>
                <td>27.4%</td>
                <td>85.6%</td>
                <td>IDR +170B profit</td>
                <td>Healthy. Strong underwriting discipline. Cross-subsidising motor losses.</td>
              </tr>
              <tr>
                <td>Personal Accident &amp; Health</td>
                <td>646</td>
                <td>17%</td>
                <td>69.8%</td>
                <td>28.1%</td>
                <td>97.9%</td>
                <td>IDR +14B profit</td>
                <td>Borderline. Marginal underwriting profit. One bad claims year converts this to a loss.</td>
              </tr>
              <tr>
                <td><strong>Total Portfolio</strong></td>
                <td><strong>3,800</strong></td>
                <td><strong>100%</strong></td>
                <td><strong>72.0%</strong></td>
                <td><strong>25.8%</strong></td>
                <td><strong>97.8%</strong></td>
                <td><strong>IDR +133B</strong></td>
                <td>Aggregate underwriting profit is real but fragile &mdash; motor is consuming property&apos;s surplus</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Investment Portfolio Composition &amp; Sustainability Analysis:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Asset Class</th>
                <th>Value (IDR B)</th>
                <th>% of Portfolio</th>
                <th>Current Yield / Return</th>
                <th>Sustainability</th>
                <th>Risk</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Government Bonds (SBN)</td>
                <td>1,848</td>
                <td>44%</td>
                <td>6.8% coupon</td>
                <td>Stable but declining on reinvestment</td>
                <td>Low. Yield compressing as older high-rate bonds mature and are reinvested at lower current rates.</td>
              </tr>
              <tr>
                <td>Corporate Bonds</td>
                <td>1,008</td>
                <td>24%</td>
                <td>8.2% coupon</td>
                <td>Moderate</td>
                <td>Credit risk on lower-rated issuers; 18% of corporate bond portfolio is rated BBB or below.</td>
              </tr>
              <tr>
                <td>Equity (Public)</td>
                <td>588</td>
                <td>14%</td>
                <td>IDR 89B unrealised gains (historical); IDR 34B remaining</td>
                <td><strong>Unsustainable as income source</strong></td>
                <td><strong>Unrealised gains buffer nearly depleted. IDR 34B remaining vs IDR 89B realised over 2 years. Cannot repeat this contribution.</strong></td>
              </tr>
              <tr>
                <td>Time Deposits</td>
                <td>630</td>
                <td>15%</td>
                <td>5.1%</td>
                <td>Declining</td>
                <td>Rate compression likely as BI rate cycle turns; yield will fall on rollover.</td>
              </tr>
              <tr>
                <td>Property &amp; Other</td>
                <td>126</td>
                <td>3%</td>
                <td>4.2% rental yield</td>
                <td>Stable</td>
                <td>Low liquidity; not a meaningful income lever.</td>
              </tr>
              <tr>
                <td><strong>Total Invested Assets</strong></td>
                <td><strong>4,200</strong></td>
                <td><strong>100%</strong></td>
                <td><strong>6.2% blended yield</strong></td>
                <td><strong>Declining</strong></td>
                <td><strong>Investment income will compress as capital gains buffer depletes and bond yields fall on reinvestment.</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Calculations</h2>
        <div className="content">

          <p><strong>Calculation 1 &mdash; Stripping Out Investment Income: What Is the Business Really Worth?</strong></p>
          <div className="calculation">
{`The core question a business-fluent analyst asks:
  "If investment income went to zero, what would this business earn?"
  That question reveals the true quality of the underwriting model.

FY2024 reported P&L:
  Net Earned Premium:              IDR 2,318 billion
  Net Claims Incurred:             IDR 1,669 billion
  Operating Expenses:              IDR   598 billion
  Underwriting Profit:             IDR   133 billion   (combined ratio 97.8%)
  Investment Income:               IDR   261 billion
  Net Profit Before Tax:           IDR   394 billion
  Tax (21%):                       IDR    83 billion
  Net Profit After Tax:            IDR   312 billion  ← Board sees this number

Now decompose investment income:
  Recurring investment income (bonds + deposits):
    SBN:          IDR 1,848B × 6.8%    = IDR 126 billion
    Corp bonds:   IDR 1,008B × 8.2%    = IDR  83 billion
    Time deposits: IDR 630B × 5.1%     = IDR  32 billion
    Property yield: IDR 126B × 4.2%    = IDR   5 billion
    Total recurring:                    = IDR 246 billion  (sustainable)

  Non-recurring income (realised equity capital gains):
    Total investment income reported:   IDR 261 billion
    Less recurring:                     IDR 246 billion
    Realised gains component:           IDR  15 billion  (FY2024 — lower than prior years)
    Note: FY2022–23 realised gains were IDR 74B cumulatively; this source is nearly exhausted.

  Normalised P&L (recurring investment income only, no capital gains):
    Underwriting Profit:             IDR   133 billion
    Recurring Investment Income:     IDR   246 billion
    Net Profit Before Tax:           IDR   379 billion
    Tax:                             IDR    80 billion
    Normalised NPAT:                 IDR   299 billion

  ⟹ Normalised profit is IDR 299B vs reported IDR 312B — gap is modest in FY2024.
     The danger is the forward trajectory, not the current gap.
     If combined ratio reaches 100% (underwriting breakeven):
       Underwriting Profit drops from IDR 133B to IDR 0
       Investment income must carry the entire profit
       Normalised NPAT: IDR 246B × (1−21%) = IDR 194 billion
       That is a 38% decline in net profit from today's reported IDR 312B
       On a dividend payout of 65%, the dividend falls from IDR 203B to IDR 126B
       The conglomerate parent notices a 38% dividend cut.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 &mdash; Projecting the Combined Ratio: When Does ArkaInsurance Cross 100%?</strong></p>
          <div className="calculation">
{`Combined ratio trend:
  FY2022: 91.4%
  FY2023: 95.8%  (+4.4pp)
  FY2024: 97.8%  (+2.0pp)
  Average annual deterioration: +3.2pp per year

  At +3.2pp per year:
    FY2025 projected: 97.8% + 3.2% = 101.0%  ← Crosses 100% (underwriting loss)
    FY2026 projected: 101.0% + 3.2% = 104.2%  ← Structural loss territory

  Sensitivity: What if motor loss ratio deteriorates faster?
    Motor GWP: IDR 1,976B (52% of portfolio)
    Motor loss ratio FY2024: 78.4%
    Motor loss ratio rising +3pp/yr (consistent with recent trend):
      FY2025: 81.4% motor loss ratio
      Impact on aggregate combined ratio: 3pp × 52% weight = +1.56pp above trend
      FY2025 combined ratio (motor sensitivity): 97.8% + 3.2% + 1.56% = 102.6%
      Underwriting loss in FY2025: −IDR 60 billion (vs +IDR 133B today)
      Swing: IDR 193 billion in underwriting result in one year

  Reserve inadequacy amplification:
    Current reserve adequacy: 97% (IDR 3B below required)
    If claims develop 5% worse than expected (normal actuarial variance):
      Reserve shortfall: IDR 1,669B claims × 5% = IDR 83 billion additional claims
      Must be recognised in the P&L as a reserve strengthening charge
      After-tax impact: IDR 83B × (1−21%) = IDR 65.6 billion reduction in NPAT
      NPAT after reserve charge: IDR 312B − IDR 66B = IDR 246 billion
      That is a 21% decline in profit — from a single actuarial correction.

  ⟹ Base case: ArkaInsurance crosses 100% combined ratio in FY2025.
     Stress case (motor deterioration + reserve correction): FY2025 NPAT
     could fall to IDR 180–220 billion — a 30–40% decline from FY2024.
     The board needs to see this number before it happens, not after.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 &mdash; The Motor Problem: How Much Is the Bad Business Worth Stopping?</strong></p>
          <div className="calculation">
{`Motor vehicle underwriting is generating a loss of IDR 51B on IDR 1,976B GWP.
  Loss ratio: 78.4% on Net Earned Premium (NEP) of IDR 1,185B
  Claims: IDR 1,185B × 78.4% = IDR 929 billion
  Expenses: IDR 1,185B × 24.2% = IDR 287 billion
  NEP: IDR 1,185 billion
  Underwriting result: IDR 1,185B − IDR 929B − IDR 287B = −IDR 31B
  (Difference from −IDR 51B due to allocated overhead; segment reporting basis)

  Scenario A — Do nothing:
    Motor loss ratio rises to 81.4% in FY2025 (trend continuation)
    Motor underwriting loss: IDR 1,185B × (81.4%+24.2%−100%) = −IDR 64B
    This is a IDR 13B larger loss than FY2024, compounding annually.

  Scenario B — Rate correction: increase motor premiums 8% to restore loss ratio
    Current average motor premium: IDR 2.8M per policy
    Required increase: 8% → IDR 3.0M per policy
    Expected volume loss from rate increase: 12–18% (price-elastic segment)
    Volume retained: 82–88% of current book
    New GWP: IDR 1,976B × (1+8%) × 87.5% midpoint = IDR 1,853B
    GWP reduction: IDR 123B — but loss ratio improves to ~72%
    New motor underwriting result: approximately breakeven (+IDR 8–12B)
    Net benefit vs Scenario A: IDR 72–76 billion in underwriting improvement

  Scenario C — Exit unprofitable motor segments (high-risk vehicles, >5yr age)
    High-risk segment: est. 22% of motor GWP, loss ratio 91%+
    Exit GWP: IDR 1,976B × 22% = IDR 434B
    Claims eliminated: IDR 434B × 60% NEP retention × 91% = IDR 237B
    Cost eliminated: IDR 434B × 60% × 24.2% = IDR 63B
    Net underwriting improvement from exit: IDR 237B + IDR 63B − IDR 260B NEP lost = IDR 40B
    Combined with B (rate on retained book): total improvement IDR 80–90B

  ⟹ The motor book is generating a loss and worsening.
     A rate correction of 8% with strategic exit of the highest-risk segment
     would improve underwriting result by IDR 80–90 billion annually —
     converting motor from the company's largest liability into a breakeven line.
     The cost is a 10–15% reduction in motor GWP (visible metric) in exchange for
     a IDR 80–90B improvement in underwriting profit (less visible metric).
     That trade is unambiguously correct. The CEO will resist it because his
     KPI is premium volume. That is an incentive problem, not a strategy problem.`}
          </div>
        </div>
      </section>

      <section>
        <h2>The Executive Risk Brief</h2>
        <div className="content">
          <p>
            This is the Week 2 deliverable. The Executive Risk Brief is a one-page document that tells a senior leader what is healthy, what is quietly dangerous, and where to focus first &mdash; in language they can act on. Write yours before reading the model below.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Risk Area</th>
                <th>Current Signal</th>
                <th>Forward Implication</th>
                <th>Urgency</th>
                <th>Recommended Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Motor Underwriting Loss</strong></td>
                <td>Combined ratio 102.6%; underwriting loss IDR 51B in FY2024</td>
                <td>At current trend, motor loss compounds to IDR 64B+ in FY2025. Motor is the largest line (52% of GWP) &mdash; it cannot be managed by the portfolio average.</td>
                <td><strong>Immediate</strong></td>
                <td>8% rate correction on retained book + exit of high-risk segment (&gt;5yr vehicles). Recovers IDR 80&ndash;90B in underwriting result annually. CEO approval required; frame as risk management, not retreat.</td>
              </tr>
              <tr>
                <td><strong>Combined Ratio Trajectory</strong></td>
                <td>97.8% in FY2024; deteriorating at 3.2pp per year for 3 consecutive years</td>
                <td>Crosses 100% in FY2025 on base case; 102.6% in stress case. At 100%+, investment income must cover all profit &mdash; eliminating the underwriting contribution entirely.</td>
                <td><strong>Immediate</strong></td>
                <td>Board must see the forward projection. Present the 18-month combined ratio trajectory, not the FY2024 result. The board is making decisions with a rearview mirror.</td>
              </tr>
              <tr>
                <td><strong>Reserve Adequacy Below 100%</strong></td>
                <td>97% reserve adequacy ratio; first time below 100% in company history</td>
                <td>If claims develop 5% worse than expected (actuarially normal variance), reserve strengthening charge of IDR 83B hits P&amp;L. After-tax NPAT impact: &minus;IDR 66B (21% decline in one adjustment).</td>
                <td><strong>High</strong></td>
                <td>Immediate reserve strengthening to restore adequacy to &ge;103%. Cost: IDR 60&ndash;80B in reserve top-up charge this year. Painful now; catastrophic if deferred.</td>
              </tr>
              <tr>
                <td><strong>Investment Income Sustainability</strong></td>
                <td>IDR 261B investment income in FY2024; equity capital gains buffer of IDR 34B remaining (down from IDR 89B)</td>
                <td>Recurring investment income (bonds + deposits) can sustain IDR 240&ndash;250B. Capital gains contribution is effectively exhausted after FY2025. Investment income will compress 8&ndash;12% over 24 months.</td>
                <td>Medium</td>
                <td>No immediate action required but board must be told that the profit backstop is narrowing. Investment income cannot be assumed to grow in line with the premium book.</td>
              </tr>
              <tr>
                <td><strong>Property Line &mdash; Healthy</strong></td>
                <td>Combined ratio 85.6%; underwriting profit IDR 170B</td>
                <td>The business has one genuinely profitable product line. It is currently cross-subsidising motor losses. If motor deteriorates further, property profit is consumed faster.</td>
                <td>Monitor</td>
                <td>Protect the property book. Do not allow pricing pressure to erode the one line generating real underwriting profit. Consider growing the property book to offset motor risk concentration.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '20px' }}>
            <strong>The Model Executive Summary (Manager-Level)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>&ldquo;ArkaInsurance&apos;s reported IDR 312 billion profit flatters the underlying business: the combined ratio has deteriorated 6.4 points in three years and will cross 100% in FY2025, meaning the core insurance business will no longer generate an underwriting profit, and the investment income buffer that has masked this trend is compressing as the equity capital gains pool depletes from IDR 89 billion to IDR 34 billion. The immediate priority is a motor vehicle rate correction of 8% and exit of the highest-risk segment, which recovers IDR 80&ndash;90 billion in annual underwriting result &mdash; the alternative is a 30&ndash;40% decline in net profit within 18 months that will trigger a dividend cut the parent group is not expecting.&rdquo;</em>
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Why this works:</strong> It names the hidden truth in the first clause (profit flatters). It gives a specific timeline (FY2025). It quantifies the safety net that is disappearing (IDR 89B to IDR 34B). It names the action and the number it recovers. It ends with the consequence of inaction in the language the parent group cares about: the dividend. A CFO reading this knows exactly what to table with the board &mdash; and exactly what happens if she does not.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>From Someone Who Has Done This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Profit Quality Test &mdash; Use This on Every Business You Analyse</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every business has a headline profit number and a quality-of-profit question underneath it. The question is: where is the profit actually coming from, and is that source repeatable? At ArkaInsurance, net profit grew 8.1% &mdash; but underwriting profit fell 42% over three years, and investment income (including non-recurring capital gains) filled the gap. The profit number is real. The profit quality is deteriorating. This distinction &mdash; profit level versus profit quality &mdash; is one of the most important things a manager-level BA learns to read. It applies in every industry: a retailer whose profit grows because it sold a store, a bank whose profit grows because loan provisions were released, a tech company whose profit grows because R&amp;D was cut. The number is true. The story is incomplete. Your job is to complete the story.
            </p>
          </div>
          <div className="highlight-box">
            <strong>How to Tell the CEO His Best-Performing Division Is Actually Losing Money</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Hendra Wijaya built the motor business from scratch. It is 52% of GWP. Telling him it is generating a loss and needs to be repriced and partially exited is one of the harder stakeholder conversations in this engagement. The technique is not to frame it as &ldquo;motor is failing&rdquo; but as &ldquo;the motor book has reached the natural limit of its current pricing model, and a disciplined correction now produces a stronger motor business in 24 months than the one we have today.&rdquo; Show the 24-month trajectory with and without intervention. The &ldquo;without&rdquo; scenario does the work &mdash; it is harder to defend a 38% profit decline than it is to accept an 8% price increase. The numbers should make the argument; your job is to make sure they are seen.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Reserve Problem Is the One That Can Move Fastest</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Of all the risks in this brief, the reserve adequacy shortfall is the one that can produce a sudden, large, and unexpected P&amp;L charge. Claims do not develop on a schedule. An earthquake, a flood season worse than modelled, a cluster of large property claims &mdash; any of these can trigger a reserve review that produces a charge in a single quarter. A business-fluent BA flags this not because the probability is high in any given quarter, but because the consequence is nonlinear: a reserve strengthening charge of IDR 83B is not painful in the same way a 1% miss on GWP growth is. It lands all at once, it is external and auditor-driven, and it cannot be smoothed. That asymmetry &mdash; low probability, high consequence, rapid onset &mdash; is exactly what a risk brief exists to surface.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Transfer Question &mdash; Where Else Does This Logic Apply?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The profit quality analysis pattern &mdash; separating recurring from non-recurring income, identifying which business lines are genuinely profitable and which are cross-subsidised, and projecting the forward trajectory if nothing changes &mdash; applies identically across industries. A retail chain whose profit grows because it sold property it owned. A bank whose NII grows because of a one-time interest rate environment that is now reversing. A media company whose digital revenue growth masks a print revenue cliff. In every case, the method is the same: strip out the one-time, project the recurring, and ask what the business earns on a normalised basis. The industry changes. The analytical habit does not.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case12;
