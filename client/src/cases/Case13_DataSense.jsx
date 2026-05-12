const Case13 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Week 3 &mdash; Data Sense</span>
        <h1>The Lending Business With Three Conflicting Signals</h1>
        <div className="case-meta">
          Industry: Consumer Lending / Multifinance &bull; Level: BA Manager Track &mdash; Ambiguous Data, Defensible Decisions
        </div>
      </header>

      <section>
        <h2>The Situation</h2>
        <div className="content">
          <p>
            <strong>KreditNusa</strong> is a mid-sized multifinance company headquartered in Surabaya, licensed by OJK, and operating across 14 provinces. Its core product is consumer instalment lending &mdash; primarily for motorcycles (58% of receivables), consumer electronics (24%), and small business working capital (18%). Total managed receivables stand at IDR 8.4 trillion. The company is 71% owned by a regional bank holding group and is expected to deliver consistent returns to its parent.
          </p>
          <p>
            The Head of Risk has called an urgent internal review. Three data signals have arrived simultaneously, and they point in different directions. The business development team is presenting one story. The collections team is presenting another. The finance team&apos;s numbers appear to support both and neither. The Head of Risk needs a clear, defensible decision recommendation within 72 hours because the board has scheduled an emergency credit committee meeting &mdash; triggered by a rating agency inquiry &mdash; and she needs to walk in with a position, not a list of competing interpretations.
          </p>
          <div className="highlight-box">
            <strong>The Three Conflicting Signals</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Signal 1 — Business Development:</strong> New loan disbursements grew 22.4% year-on-year to IDR 3.1 trillion. The BD team is presenting this as evidence of strong market demand and healthy origination quality. Their NPL ratio on the new book (loans originated in the past 12 months) is 1.8% &mdash; well within the 3.0% internal threshold. They are recommending expanding disbursements by 30% in the next two quarters.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Signal 2 — Collections:</strong> The collections team is reporting that 30-day past due (DPD 30+) rates on the 18&ndash;36 month vintage cohorts have accelerated from 6.2% to 9.8% in the past two quarters. They are also seeing a 34% increase in restructuring requests in the motorcycle segment. They are recommending a credit tightening immediately. They do not trust the 1.8% NPL on the new book because new loans are too young to have defaulted yet.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Signal 3 — Finance:</strong> The reported NPL ratio for the total portfolio is 2.9% &mdash; just inside the 3.0% threshold. Provision coverage is 108%. Net interest margin is holding at 12.4%. On paper the portfolio looks controlled. But the finance team has flagged that the write-off rate has been running below historical norms for two quarters, which has kept the reported NPL ratio artificially lower than the underlying credit quality would suggest.
            </p>
          </div>
          <p>
            This is the most important data sense scenario a manager-level BA faces: not missing data, not unclear data &mdash; but <em>conflicting</em> data, where each signal is technically accurate and tells a different story. Data sense means knowing which signal to trust, which to interrogate, and which to set aside &mdash; and being able to defend that judgment with numbers in a board-level meeting.
          </p>
        </div>
      </section>

      <section>
        <h2>The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Head of Risk &mdash; Ibu Kartika Dewi:</strong> The person who commissioned this review. Has been Head of Risk for three years. Technically rigorous, politically cautious. Her instinct is that the collections signal is the most reliable leading indicator but she cannot walk into the credit committee with instinct &mdash; she needs to be able to show the math. She is not going to tell you what conclusion she wants. She wants you to reach the right one.
          </div>
          <div className="highlight-box">
            <strong>Head of Business Development &mdash; Pak Fauzi Rachman:</strong> Has hit his disbursement target for 11 consecutive quarters. His incentive is volume. His NPL figure (1.8% on new book) is technically accurate &mdash; new loans issued in the last 12 months have not had time to season into default. He is not lying. He is presenting the metric that makes his business look best, which is not the same as presenting the most informative metric. He genuinely believes the new book is healthy.
          </div>
          <div className="highlight-box">
            <strong>Head of Collections &mdash; Ibu Rina Susanti:</strong> Has been watching the DPD 30+ acceleration for two quarters and raising it through internal channels. Her teams are on the ground and see borrower stress before it appears in NPL data. She tends to be conservative by nature, which means she has called false alarms before &mdash; which is why her warnings have not been escalated urgently. This time, the data behind her concern is more structured than her previous flags.
          </div>
          <div className="highlight-box">
            <strong>CFO &mdash; Pak Dimas Pratama:</strong> Responsible for the reported financials. Aware that the write-off rate has been suppressed. Has not proactively disclosed this to the credit committee because the NPL ratio is still technically inside the threshold. Is not comfortable with the current situation but has not been asked to present a normalised view. Will support a more transparent presentation if asked &mdash; but will not volunteer it without being asked.
          </div>
          <div className="highlight-box">
            <strong>Rating Agency Analyst (external trigger):</strong> Has sent an inquiry letter asking for a breakdown of DPD buckets by vintage, write-off rates by quarter for the past 8 quarters, and restructuring volumes in the motorcycle segment. The fact that these three questions were asked together tells you the agency has already spotted the same inconsistency you are now investigating. The credit committee meeting was called in response to this letter.
          </div>
        </div>
      </section>

      <section>
        <h2>The Data Sense Frame</h2>
        <div className="content">
          <p>
            Data sense is not about having clean data. It is about knowing how to read dirty data &mdash; data that is incomplete, aged, conflicting, or incentive-distorted &mdash; and still arriving at a position you can defend. The three skills this case trains are: <strong>vintage analysis</strong> (understanding that loan performance data must be read by origination cohort, not aggregate), <strong>leading vs lagging indicators</strong> (understanding which metrics predict future performance and which report past performance), and <strong>normalisation</strong> (adjusting reported metrics to remove accounting or policy distortions before drawing conclusions).
          </p>
          <div className="highlight-box">
            <strong>The Key Consumer Lending Metrics You Must Know</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>NPL Ratio:</strong> Non-performing loans (DPD 90+) &divide; Total managed receivables. The standard reported measure. Lagging indicator &mdash; a loan must be 90 days past due before it is classified NPL. Easily distorted by write-off policy. &bull; <strong>DPD 30+ Rate:</strong> Loans 30+ days past due &divide; Total managed receivables. Leading indicator &mdash; appears 60 days before NPL classification. More sensitive to emerging stress. &bull; <strong>Vintage Analysis:</strong> Tracking the NPL or DPD performance of loans by the quarter they were originated. Reveals whether newer cohorts are performing worse than older ones at the same age &mdash; the earliest signal of underwriting quality deterioration. &bull; <strong>Write-off Rate:</strong> Loans written off in a period &divide; Opening receivables. If this is suppressed below historical norms, the NPL ratio is artificially low. Normalising for write-offs gives a truer picture of credit quality. &bull; <strong>Restructuring Rate:</strong> Loans restructured (repayment terms changed) &divide; Total managed receivables. A leading indicator of borrower stress. Restructured loans often default later; they also mask NPL because restructuring resets the DPD clock. &bull; <strong>Coverage Ratio:</strong> Loan loss provisions &divide; NPL balance. Measures how much of the NPL exposure is covered by provisions. Above 100% appears safe; below 80% is concerning.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Precise Problem Statement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>KreditNusa&apos;s aggregate portfolio metrics appear controlled, but three signals &mdash; accelerating DPD 30+ in mid-vintage cohorts, a rising restructuring rate in motorcycle, and a suppressed write-off rate that is flattering the reported NPL &mdash; suggest the underlying credit quality is deteriorating faster than the headline numbers show. The decision required is: does the credit committee approve the BD team&apos;s request to expand disbursements by 30%, tighten underwriting standards while maintaining current volume, or halt expansion and implement credit tightening across specific segments? The answer must be defensible with data, not instinct.</em>
            </p>
          </div>
          <p><strong>Four diagnostic questions structure this engagement:</strong></p>
          <ol>
            <li><strong>Which signal is most reliable?</strong> Between the BD team&apos;s new book NPL (1.8%), the collections team&apos;s DPD 30+ acceleration (6.2% to 9.8%), and the finance team&apos;s aggregate NPL (2.9%), which metric most accurately predicts where the portfolio will be in 6&ndash;12 months?</li>
            <li><strong>What does the vintage data actually show?</strong> Are newer cohorts performing worse than older cohorts at the same age in their lifecycle &mdash; and if so, by how much?</li>
            <li><strong>What is the true NPL if write-offs are normalised?</strong> Adjust the reported NPL for suppressed write-offs and restructuring masking. What does the portfolio actually look like?</li>
            <li><strong>What is the defensible decision?</strong> Given the data, what does the board approve &mdash; and what is the financial cost of getting the decision wrong in either direction?</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>The Data</h2>
        <div className="content">

          <p><strong>Portfolio Overview &mdash; KreditNusa, Current Period:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Motorcycle</th>
                <th>Electronics</th>
                <th>SME Working Capital</th>
                <th>Total Portfolio</th>
                <th>Trend vs 6M Prior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Managed Receivables (IDR B)</td>
                <td>4,872</td>
                <td>2,016</td>
                <td>1,512</td>
                <td>8,400</td>
                <td>+18.3% YoY</td>
              </tr>
              <tr>
                <td>Reported NPL Ratio (DPD 90+)</td>
                <td>3.4%</td>
                <td>2.1%</td>
                <td>2.8%</td>
                <td>2.9%</td>
                <td>Stable (was 2.8% six months ago)</td>
              </tr>
              <tr>
                <td>DPD 30+ Rate</td>
                <td><strong>9.8%</strong></td>
                <td>5.2%</td>
                <td>6.4%</td>
                <td>7.8%</td>
                <td><strong>Motorcycle: was 6.2% six months ago (+3.6pp)</strong></td>
              </tr>
              <tr>
                <td>Restructuring Rate (current period)</td>
                <td><strong>4.2%</strong></td>
                <td>1.8%</td>
                <td>2.1%</td>
                <td>3.1%</td>
                <td><strong>Motorcycle: was 3.1% six months ago (+34% increase)</strong></td>
              </tr>
              <tr>
                <td>Write-off Rate (annualised)</td>
                <td>1.2%</td>
                <td>0.9%</td>
                <td>1.4%</td>
                <td>1.1%</td>
                <td>Below 3-yr historical average of 1.8% &mdash; suppressed</td>
              </tr>
              <tr>
                <td>Provision Coverage</td>
                <td>104%</td>
                <td>118%</td>
                <td>96%</td>
                <td>108%</td>
                <td>SME coverage declining; was 112% six months ago</td>
              </tr>
              <tr>
                <td>New Book NPL (originated &lt;12M ago)</td>
                <td>2.1%</td>
                <td>1.4%</td>
                <td>1.8%</td>
                <td>1.8%</td>
                <td>Appears healthy &mdash; but new loans have not seasoned yet</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Vintage Analysis &mdash; DPD 30+ Rate by Origination Quarter at 12 Months of Age (Motorcycle Only):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Origination Vintage</th>
                <th>DPD 30+ at Month 6</th>
                <th>DPD 30+ at Month 12</th>
                <th>DPD 30+ at Month 18</th>
                <th>DPD 30+ at Month 24</th>
                <th>Reading</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1 2022 (oldest)</td>
                <td>2.8%</td>
                <td>4.1%</td>
                <td>5.2%</td>
                <td>5.8%</td>
                <td>Baseline performance — stable cohort</td>
              </tr>
              <tr>
                <td>Q2 2022</td>
                <td>2.9%</td>
                <td>4.3%</td>
                <td>5.4%</td>
                <td>6.0%</td>
                <td>Consistent with Q1 2022 — no signal</td>
              </tr>
              <tr>
                <td>Q3 2022</td>
                <td>3.1%</td>
                <td>4.8%</td>
                <td>6.2%</td>
                <td>&mdash;</td>
                <td>Slight uptick at M18 — early signal, not yet actionable</td>
              </tr>
              <tr>
                <td>Q4 2022</td>
                <td>3.4%</td>
                <td>5.6%</td>
                <td>7.4%</td>
                <td>&mdash;</td>
                <td><strong>M18 DPD 7.4% vs Q1 2022 baseline of 5.2% — +2.2pp deterioration at same age</strong></td>
              </tr>
              <tr>
                <td>Q1 2023</td>
                <td>3.8%</td>
                <td>6.4%</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td><strong>M12 DPD 6.4% vs Q1 2022 baseline of 4.1% — +2.3pp deterioration at same age</strong></td>
              </tr>
              <tr>
                <td>Q2 2023</td>
                <td>4.2%</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td><strong>M6 DPD 4.2% vs Q1 2022 baseline of 2.8% — +1.4pp deterioration at same age. This is the &ldquo;healthy&rdquo; new book.</strong></td>
              </tr>
              <tr>
                <td>Q3 2023 (newest with M6 data)</td>
                <td>4.6%</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td>&mdash;</td>
                <td><strong>M6 DPD 4.6% — worst M6 performance in the dataset. Trend is accelerating, not stabilising.</strong></td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Write-off Normalisation Analysis &mdash; 8 Quarters:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Quarter</th>
                <th>Reported Write-off Rate (ann.)</th>
                <th>Historical Norm</th>
                <th>Shortfall vs Norm</th>
                <th>Receivables Base (IDR B)</th>
                <th>Cumulative Under-Write-off (IDR B)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1 2022</td>
                <td>1.9%</td>
                <td>1.8%</td>
                <td>+0.1% (above norm)</td>
                <td>5,820</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Q2 2022</td>
                <td>1.8%</td>
                <td>1.8%</td>
                <td>0 (at norm)</td>
                <td>6,080</td>
                <td>&mdash;</td>
              </tr>
              <tr>
                <td>Q3 2022</td>
                <td>1.7%</td>
                <td>1.8%</td>
                <td>&minus;0.1%</td>
                <td>6,340</td>
                <td>IDR 1.6B</td>
              </tr>
              <tr>
                <td>Q4 2022</td>
                <td>1.6%</td>
                <td>1.8%</td>
                <td>&minus;0.2%</td>
                <td>6,640</td>
                <td>IDR 14.9B (cumulative)</td>
              </tr>
              <tr>
                <td>Q1 2023</td>
                <td>1.4%</td>
                <td>1.8%</td>
                <td>&minus;0.4%</td>
                <td>7,020</td>
                <td>IDR 42.9B (cumulative)</td>
              </tr>
              <tr>
                <td>Q2 2023</td>
                <td>1.2%</td>
                <td>1.8%</td>
                <td>&minus;0.6%</td>
                <td>7,480</td>
                <td>IDR 87.7B (cumulative)</td>
              </tr>
              <tr>
                <td>Q3 2023</td>
                <td>1.1%</td>
                <td>1.8%</td>
                <td>&minus;0.7%</td>
                <td>7,980</td>
                <td>IDR 143.5B (cumulative)</td>
              </tr>
              <tr>
                <td><strong>Q4 2023 (current)</strong></td>
                <td><strong>1.1%</strong></td>
                <td><strong>1.8%</strong></td>
                <td><strong>&minus;0.7%</strong></td>
                <td><strong>8,400</strong></td>
                <td><strong>IDR 202.4B (cumulative)</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Calculations</h2>
        <div className="content">

          <p><strong>Calculation 1 &mdash; Reading the Vintage Data: What It Tells You That the NPL Ratio Does Not</strong></p>
          <div className="calculation">
{`The vintage table reveals the pattern the aggregate NPL ratio hides.

Step 1 — Identify the baseline cohort performance:
  Q1 2022 (stable, mature cohort):
    DPD 30+ at M6:  2.8%
    DPD 30+ at M12: 4.1%
    DPD 30+ at M18: 5.2%
    DPD 30+ at M24: 5.8%
  This is what a "healthy" cohort looks like at each age.

Step 2 — Compare newer cohorts at the same age:
  At Month 6 (the earliest comparable data point):
    Q1 2022 baseline M6:    2.8%
    Q2 2023 M6:             4.2%  → +1.4pp worse than baseline at same age
    Q3 2023 M6:             4.6%  → +1.8pp worse than baseline at same age

  At Month 12:
    Q1 2022 baseline M12:   4.1%
    Q1 2023 M12:            6.4%  → +2.3pp worse than baseline at same age
    Q4 2022 M12:            5.6%  → +1.5pp worse at same age (earlier deterioration visible)

  At Month 18:
    Q1 2022 baseline M18:   5.2%
    Q4 2022 M18:            7.4%  → +2.2pp worse at same age

Step 3 — Project where newer cohorts will be at maturity:
  If the Q2 2023 cohort (currently at M6 DPD 4.2%) follows the same
  deterioration pattern as Q4 2022 (which was 3.4% at M6, 5.6% at M12,
  7.4% at M18):
    Estimated Q2 2023 at M12: 4.2% × (5.6/3.4) = 6.9%
    Estimated Q2 2023 at M18: 4.2% × (7.4/3.4) = 9.1%
    Estimated Q2 2023 at M24: 4.2% × (5.8/2.8) = 8.7% (peak then slight drop)

  The BD team's "healthy" new book with 1.8% NPL is made of loans
  that are 0–12 months old. The vintage data shows that DPD 30+ at M6
  is already 4.2–4.6% for the newest cohorts — 50–64% worse than the
  2022 baseline at the same age.

  ⟹ The new book is not healthy. It is young.
     The 1.8% NPL figure is correct and meaningless at the same time.
     The vintage data shows the new book will perform materially worse
     than the 2022 cohort when it seasons. The collections team is right.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 &mdash; Normalising the NPL Ratio: What Does the Portfolio Actually Look Like?</strong></p>
          <div className="calculation">
{`The reported NPL ratio is 2.9%. The write-off rate has been suppressed
below historical norms for 6 consecutive quarters. This means loans that
should have been written off are still sitting on the book — classified
as NPL or near-NPL — making the NPL stock larger than it would be
if write-offs were at normal pace.

Normalisation approach:
  Cumulative under-write-off over 8 quarters: IDR 202.4 billion
  This represents loans that should have been written off at the
  historical 1.8% rate but were not.

  At normal write-off pace, these IDR 202.4B would have been removed
  from the NPL stock over the period. Instead, they remain.

  Reported NPL balance:
    Total managed receivables: IDR 8,400B
    Reported NPL ratio:        2.9%
    Reported NPL balance:      IDR 8,400B × 2.9% = IDR 243.6 billion

  Normalised NPL balance (remove the accumulated under-write-off backlog):
    But wait — not all the under-write-off is in the NPL bucket.
    Assume 70% of the backlog is DPD 90+ (NPL-classified):
    Under-write-off in NPL bucket: IDR 202.4B × 70% = IDR 141.7B

    However, the correct normalisation is:
    If we had written off at historical rates, the NPL balance would be:
    IDR 243.6B − IDR 141.7B = IDR 101.9B (loans already removed)
    But the book would also be smaller due to write-offs:
    Normalised receivables: IDR 8,400B − IDR 202.4B = IDR 8,197.6B

  Normalised NPL ratio:
    IDR 101.9B ÷ IDR 8,197.6B = 1.24%
    Wait — this goes the wrong direction. Let's think clearly:

  The right question is: if we apply normal write-offs NOW to catch up,
  what happens to the reported NPL ratio?
    Catch-up write-off required: IDR 202.4B (the backlog)
    Of this backlog, how much is already classified NPL?
      Assume 70%: IDR 141.7B removed from NPL stock
      Remaining NPL after write-off: IDR 243.6B − IDR 141.7B = IDR 101.9B
    New receivables base after write-off: IDR 8,400B − IDR 202.4B = IDR 8,197.6B

    But — the 30% of backlog not yet NPL (IDR 60.7B) is in DPD 30–89:
    These will likely migrate to NPL over the next 2 quarters.
    Forward NPL estimate: IDR 101.9B + IDR 60.7B = IDR 162.6B

  True forward NPL ratio (after write-off normalisation + migration):
    IDR 162.6B ÷ IDR 8,197.6B = 1.98%

  ⟹ But the denominator effect works the other way for growing books.
     The more honest normalised current NPL without catch-up write-off:
     Add back the 70% backlog to numerator (it should be NPL but was written off):
     Normalised NPL = (IDR 243.6B + IDR 0) → this is already the NPL stock.
     The suppressed write-off KEPT these in the book inflating NPL.
     True NPL if written off at normal pace: IDR 243.6B − IDR 141.7B = IDR 101.9B
     Normalised NPL ratio on normalised base: IDR 101.9B ÷ IDR 8,197.6B = 1.24%

  Reconciliation: The suppressed write-offs have kept bad loans ON the book
  rather than removing them. Paradoxically, this makes the NPL ratio look
  worse than it would if write-offs were normal — BUT the receivables base
  is also larger. The net effect on NPL ratio is marginal (+0.1pp).

  The REAL risk is not the NPL ratio calculation — it is that IDR 202.4B
  in loans that should have been written off are still sitting on the book,
  with provisions that may be inadequate if the loss-given-default is higher
  than modelled. The provision coverage of 108% on the reported NPL looks
  safe. On a normalised basis with the backlog properly provisioned:
    Additional provision required: IDR 202.4B × 45% LGD = IDR 91.1B
    Current provision balance: IDR 243.6B × 108% = IDR 263.1B
    Provisions after normalisation: IDR 263.1B already covers the backlog
    Net: the provision buffer is thinner than it looks but not critically so.

  ⟹ The write-off suppression is a transparency problem, not immediately
     a solvency problem — but it means the rating agency's questions are
     exactly right, and the answers will look uncomfortable.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 &mdash; The Decision: What Is the Cost of Getting It Wrong?</strong></p>
          <div className="calculation">
{`Three options on the table for the credit committee:

OPTION A — Approve 30% disbursement expansion (BD recommendation)
  New disbursements: IDR 3.1T × 130% = IDR 4.0 trillion
  Additional receivables generated: IDR 900B in new originations
  New cohort DPD 30+ at M6 (based on Q3 2023 trend): ~4.6% and rising
  Projected new cohort NPL at maturity (M18): ~9.1% (vintage projection)
  Expected loss on new originations: IDR 900B × 9.1% × 45% LGD = IDR 36.9B
  Revenue generated on IDR 900B (12.4% NIM × 1yr): IDR 111.6B
  Net contribution if credit quality holds at 9.1% NPL: IDR 111.6B − IDR 36.9B = IDR 74.7B
  Net contribution if NPL reaches 12% (stress): IDR 111.6B − (IDR 900B × 12% × 45%) = IDR 111.6B − IDR 48.6B = IDR 63.0B
  Net contribution if NPL reaches 15% (severe stress): IDR 111.6B − IDR 60.75B = IDR 50.85B

  But: expanding 30% while DPD 30+ is accelerating and the rating agency
  is asking questions = reputational and regulatory risk not in the model.
  If OJK reviews the write-off suppression during this period: fine and
  remediation cost estimated IDR 25–50B, plus rating downgrade risk.

OPTION B — Maintain volume, tighten underwriting standards
  Keep disbursements at IDR 3.1T but raise minimum credit score by 15 points
  and reduce maximum tenor on motorcycle from 36M to 30M.
  Expected volume impact: −10 to −15% in motorcycle (price-inelastic demand drops)
  Motorcycle disbursements: IDR 1,798B × 87.5% = IDR 1,573B
  Revenue impact: −IDR 28B in NIM vs Option A
  But: DPD 30+ on new motorcycle cohorts projected to fall from 4.6% to 3.2%
  at M6 (based on historical performance of higher credit score tiers)
  NPL at maturity projection: 6.8% (vs 9.1% in Option A)
  Expected loss saving vs Option A: IDR 1,573B × (9.1%−6.8%) × 45% = IDR 16.3B
  Net benefit of tightening vs expansion: −IDR 28B revenue + IDR 16.3B loss saving = −IDR 11.7B
  But: removes the reputational and regulatory risk. Positions KreditNusa
  better for the rating agency conversation.

OPTION C — Credit tightening: halt motorcycle expansion, continue electronics + SME
  Halt motorcycle disbursements growth (cap at flat vs prior year)
  Motorcycle disbursements: IDR 1,798B (flat)
  Continue electronics and SME at +15% growth (these segments are performing in line)
  Electronics: IDR 2,016B × 15% = IDR 302B new disbursements at healthy loss rates
  SME: IDR 1,512B × 15% = IDR 227B new disbursements
  Net revenue impact vs Option A: −IDR 68B
  But: directly addresses the segment generating the most risk
  DPD 30+ in motorcycle drops as new low-quality originations stop
  Vintage trajectory stabilises within 3 quarters
  Rating agency sees decisive action — downgrade risk reduced materially

⟹ Defensible Decision: OPTION B, with a committed path to OPTION C
   if motorcycle DPD 30+ does not improve within 2 quarters.

   Rationale:
   (1) Vintage data proves the new book is not as healthy as the NPL ratio shows.
   (2) DPD 30+ at 9.8% in motorcycle is the leading indicator; NPL of 3.4%
       is where it will be in 60–90 days if nothing changes.
   (3) Option A generates IDR 74.7B in expected net contribution but creates
       IDR 25–50B in regulatory risk and accelerates a problem that is
       already moving faster than the aggregate metrics reveal.
   (4) Option B gives the credit committee a defensible position for the
       rating agency: "We identified the deterioration in vintage data and
       tightened standards proactively." That sentence is worth more than
       the IDR 11.7B revenue cost.
   (5) If DPD 30+ does not respond to tighter standards in 2 quarters,
       Option C (halt motorcycle expansion) is triggered automatically —
       the committee pre-commits to this escalation path today.`}
          </div>
        </div>
      </section>

      <section>
        <h2>The Defensible Decision Memo</h2>
        <div className="content">
          <p>
            The Week 3 deliverable is a one-page Defensible Decision Memo &mdash; a document that states your recommendation, the data behind it, and what would have to be true for you to be wrong. This is the document a manager-level BA produces when the data is ambiguous and the stakes are real. Write yours before reading the model below.
          </p>
          <div className="highlight-box">
            <strong>Model Defensible Decision Memo (Manager-Level)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Recommendation:</strong> Option B &mdash; maintain current disbursement volume with immediate underwriting tightening in the motorcycle segment. Do not approve the 30% expansion. Do not halt motorcycle lending. Commit to an automatic escalation to Option C if DPD 30+ in motorcycle does not decline below 8.5% within two quarters.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>The data that drives this recommendation:</strong> The BD team&apos;s 1.8% new book NPL is a lagging metric on an immature cohort. Vintage analysis shows that the newest motorcycle cohorts are performing 50&ndash;64% worse than the 2022 baseline at the same age in their lifecycle &mdash; DPD 30+ at Month 6 has risen from 2.8% (2022 baseline) to 4.6% (Q3 2023 cohort). Projecting forward using observed deterioration rates, the Q2 2023 cohort will reach DPD 30+ of approximately 9.1% at Month 18, compared to the 2022 baseline of 5.2% at the same age. The collections team&apos;s concern is analytically correct. The aggregate NPL of 2.9% will reach 3.8&ndash;4.2% within two quarters as these cohorts age, breaching the internal 3.0% threshold.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What would have to be true for this recommendation to be wrong:</strong> The vintage deterioration is driven by a temporary macroeconomic factor (fuel price spike, regional employment shock) that has already corrected &mdash; in which case the Q4 2023 cohort would show M6 DPD reverting toward 3.0&ndash;3.5%. Monitor the Q4 2023 cohort at Month 6 (two quarters from now) as the primary trigger metric. If it shows deterioration continuing, move immediately to Option C.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What we tell the rating agency:</strong> &ldquo;We identified accelerating DPD 30+ in our 18&ndash;36 month motorcycle vintage cohorts in Q3 2023 and immediately tightened underwriting standards, raising the minimum credit score threshold and reducing maximum tenor. We are monitoring the Q4 2023 cohort as the primary leading indicator of portfolio quality and have pre-committed a further tightening action if the trend does not reverse within two quarters.&rdquo; This is a stronger position than any alternative. It demonstrates that management identified the problem, understood its source, and acted before it became an NPL event.
            </p>
          </div>

          <p style={{ marginTop: '16px' }}><strong>Decision Trigger Framework &mdash; Pre-Committed Escalation Path:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Trigger Metric</th>
                <th>Current</th>
                <th>Watch Level</th>
                <th>Action Level</th>
                <th>Action Required</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Motorcycle DPD 30+</td>
                <td>9.8%</td>
                <td>&le; 8.5% in 2Q (improving)</td>
                <td>&ge; 10.5% in 2Q (worsening)</td>
                <td>If action level reached: immediately move to Option C (halt motorcycle expansion)</td>
              </tr>
              <tr>
                <td>Q4 2023 cohort DPD 30+ at M6</td>
                <td>Not yet measurable</td>
                <td>&le; 3.8% (trend reversing)</td>
                <td>&ge; 4.8% (trend accelerating)</td>
                <td>If action level: halt all new motorcycle originations for 60 days; full underwriting model review</td>
              </tr>
              <tr>
                <td>Aggregate NPL ratio</td>
                <td>2.9%</td>
                <td>&le; 3.0% (within threshold)</td>
                <td>&ge; 3.5% (threshold breach)</td>
                <td>If action level: immediate OJK notification + board emergency session + Option C</td>
              </tr>
              <tr>
                <td>Motorcycle restructuring rate</td>
                <td>4.2%</td>
                <td>&le; 3.5% in 2Q</td>
                <td>&ge; 5.0% in 2Q</td>
                <td>If action level: restructuring freeze; review borrower segment for systemic income stress</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>From Someone Who Has Done This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Most Dangerous Sentence in a Credit Meeting Is &ldquo;The NPL Is Still Within Threshold&rdquo;</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              NPL is a lagging indicator. By the time a loan appears in the NPL ratio, the credit decision that caused it was made 18&ndash;36 months ago. A business-fluent analyst knows that the NPL ratio tells you where the portfolio was; DPD 30+ tells you where it is going; vintage analysis tells you whether the decisions being made today will make it better or worse. At KreditNusa, the reported NPL of 2.9% is the result of lending decisions made in 2021&ndash;2022. The vintage data on the 2022&ndash;2023 book is telling you what the NPL will be in 2024&ndash;2025. The credit committee that approves expansion based on the current NPL ratio is making a decision with an 18-month time lag. Your job is to close that lag &mdash; to bring the future into the room today.
            </p>
          </div>
          <div className="highlight-box">
            <strong>How to Handle the BD Team in the Meeting</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pak Fauzi Rachman is not wrong that the new book NPL is 1.8%. He is using the metric his team is measured on, which is the metric that makes his recommendation look strongest. The way to handle this in the credit committee is not to say he is wrong &mdash; it is to add a dimension he has not shown. &ldquo;The new book NPL of 1.8% is correct. Let me add the vintage analysis, which shows how loans at the same age performed two years ago compared to today. At 6 months of age, the 2022 cohort showed 2.8% DPD 30+. The most recent cohort at 6 months shows 4.6% &mdash; 64% worse at the same point in its lifecycle. The 1.8% NPL will not stay at 1.8%. The question is where it will be at Month 18, and the vintage data gives us the answer.&rdquo; You are not attacking him. You are completing his analysis. That is the posture of a manager-level BA.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Pre-Committing to an Escalation Path Is Not Weakness &mdash; It Is Governance</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The trigger framework in the decision memo is one of the most valuable things a BA can produce in a credit committee context. It answers the question that always hangs in the room: &ldquo;What will we do if we are wrong?&rdquo; By pre-committing to specific metrics and specific actions, you remove the decision from the political negotiation that happens in real time when things go wrong. The credit committee agreed in advance that if motorcycle DPD 30+ reaches 10.5%, Option C is triggered. That agreement made in a calm moment produces better decisions than a reactive meeting held when the numbers are already bad and reputational stakes are high. Senior managers who see a BA produce a trigger framework for the first time often do not have language for why it is good. They just know it is. This is the kind of thinking that gets you promoted.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Transfer Question &mdash; Where Else Does This Logic Apply?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Vintage analysis is one of the most transferable analytical tools in a BA&apos;s toolkit. The principle &mdash; track cohorts by when they started, compare them at the same age, identify whether newer cohorts perform better or worse than older ones at the same point in their lifecycle &mdash; applies directly to: a SaaS company tracking whether customers acquired in Q3 2023 retain at Month 12 as well as customers acquired in Q3 2021; an e-commerce platform asking whether customers who made their first purchase in the last six months are returning at the same rate as those who joined two years ago; a hospital tracking whether patients admitted in the post-COVID period have the same readmission rate at 90 days as the pre-COVID cohort. The application changes. The question &mdash; are we getting better or worse at the same point in the lifecycle? &mdash; never does.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case13;
