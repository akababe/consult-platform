const Case04 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 04</span>
        <h1>The Unit Economics Trap</h1>
        <div className="case-meta">
          Industry: Tech / SaaS &bull; Level: Advanced / Strategic — C-Suite Growth vs. Profitability Decision
        </div>
      </header>

      <section>
        <h2>The Company That Looks Like It Is Winning</h2>
        <div className="content">
          <p>
            <strong>Karta</strong> is a Jakarta-headquartered super-app with <strong>38 million registered users</strong> across Indonesia, the Philippines, and Vietnam. It offers ride-hailing, food delivery, digital payments, and — since 18 months ago — a buy-now-pay-later product called KartaCredit. The company raised a <strong>$620 million Series D</strong> at a $4.1 billion valuation 26 months ago, led by a Singapore-based growth equity fund. That valuation was justified by a narrative of compounding network effects, a path to regional dominance, and a unit economics model that showed — on paper — a payback period of 14 months on customer acquisition cost.
          </p>
          <p>
            From the outside, Karta looks like it is executing. Monthly active users grew 41% last year. Gross transaction value is up 67%. The food delivery vertical crossed 2 million orders per day. Every slide in the investor deck tells a story of momentum.
          </p>
          <p>
            From the inside, the picture is different. The CFO's monthly management accounts show a different story: <strong>EBITDA loss has widened from $48M per quarter to $94M per quarter over 18 months</strong> — precisely the period in which growth accelerated. The Series D runway, originally projected at 36 months, now looks like 19 months at current burn. KartaCredit has a non-performing loan rate the risk team privately flags as dangerous. And the cohort data — which shows how users actually behave over time — has never been shared with the board in its complete form.
          </p>
          <div className="highlight-box">
            <strong>The Trigger: The Series E Process Is Not Going the Way It Should</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Karta opened a Series E fundraising process six weeks ago, targeting $400 million. Three of five lead prospects have passed after reviewing the data room. The fourth submitted a term sheet with a <em>35% valuation haircut and a ratchet clause</em> tied to EBITDA breakeven within 24 months. The fifth asked for cohort-level retention data going back to the Series B cohorts — data the CFO is reluctant to share because the 36-month retention curves contradict the investor deck's unit economics narrative.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CEO has engaged a consulting team with an unusually candid brief: <em>"I need to know if our unit economics are actually working, and if they are not, I need to know which parts of the business are salvageable and what we need to cut before we run out of runway."</em> That brief — honest and self-aware — is the best brief a consulting team can receive.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Who Is in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>CEO — Arief Santoso:</strong> Co-founder, 34, product background. Built Karta over seven years. Unusually willing to act on honest findings rather than suppress them. Commissioned this engagement because the Series E surfaced something he suspected: that the unit economics model presented to investors may not reflect how users behave after month 6.
          </div>
          <div className="highlight-box">
            <strong>CFO — Melissa Tan:</strong> Hired from a regional investment bank 14 months ago to manage the Series E. Privately alarmed by the KartaCredit NPL data. Has been managing two competing imperatives: investor confidence (requires optimistic framing) and the actual financial position (requires brutal honesty). The engagement gives her analytical authority to push the founder toward the hard decisions she has been advocating privately.
          </div>
          <div className="highlight-box">
            <strong>Chief Growth Officer — Budi Hartono:</strong> Architect of Karta's acquisition strategy. The most vocal internal critic of "premature profitability obsession." His argument: Karta is in a land-grab market and reducing acquisition spend now cedes ground to Gojek and Grab permanently. He is not wrong that competitive dynamics matter — but he is building his argument on a unit economics model that has never been stress-tested against cohort data. He controls the data pipelines the team needs.
          </div>
          <div className="highlight-box">
            <strong>Head of KartaCredit — Putri Rahayu:</strong> Built the BNPL product in 18 months. The product works operationally. The problem is the credit underwriting model, calibrated on 6 months of data and never recalibrated as the customer base expanded into higher-risk segments. She attributes rising NPL rates to "portfolio seasoning" — partially correct but not explaining why the 12-month NPL on the most recent cohorts is tracking 340 bps above the cohorts that informed the original model.
          </div>
        </div>
      </section>

      <section>
        <h2>What the Problem Actually Is</h2>
        <div className="content">
          <p>
            The presenting problem is a difficult fundraise. The actual problem is a measurement failure. Karta tracks <strong>cohort-entry unit economics</strong> — what a user looks like in the first 30 to 90 days. These numbers are good. The problem is that they measure the honeymoon period. They do not measure what a user is worth at month 12, 18, or 24 — when the claimed 14-month CAC payback is supposed to materialise.
          </p>
          <p>
            When you track cohorts acquired 24 months ago, a different picture emerges. Month-12 retention in ride-hailing is 34%. Month-18 is 22%. The 14-month payback calculation was built on a retention curve that does not exist in the actual data.
          </p>
          <div className="highlight-box">
            <strong>The Precise Problem Statement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>Which of Karta's verticals and geographies generate positive lifetime value at observed retention rates — and what is the minimum restructuring of acquisition spend, product investment, and credit exposure required to reach EBITDA breakeven within 24 months without destroying the strategic position in the verticals that actually work?</em>
            </p>
          </div>
          <p><strong>Three questions drive the engagement:</strong></p>
          <ol>
            <li><strong>What is the actual LTV of each cohort by vertical and geography at observed retention?</strong> Not modelled LTV — realised LTV from cohorts with 18+ months of history.</li>
            <li><strong>Which acquisition channels generate LTV/CAC above 3× at observed retention?</strong> These are the parts worth defending. Everything else is burning capital.</li>
            <li><strong>What is KartaCredit's true risk exposure and what does a responsible restructure look like?</strong> The question nobody wants to ask. The one the Series E investor already answered privately.</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Analytical Frameworks</h2>
        <div className="content">
          <h3 style={{ fontSize: '17px', marginTop: '16px', marginBottom: '10px' }}>Framework 1 — Cohort-Level LTV/CAC Analysis</h3>
          <p>
            For every acquisition cohort — defined by the month the user first transacted — the team reconstructs the actual gross margin contribution at each monthly interval. This produces a <strong>cohort LTV curve</strong>: cumulative gross profit per acquired user plotted over time, compared against the CAC paid to acquire that cohort. The payback period is where the LTV curve crosses the CAC line. Done separately for each vertical and geography — because blended unit economics conceal which parts of the portfolio are genuinely working.
          </p>
          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 2 — Funnel Decomposition</h3>
          <p>
            LTV/CAC tells you the outcome. Funnel decomposition tells you the mechanism. For each vertical, the team maps the user journey from acquisition through activation, first transaction, repeat transaction, and 90-day retention — identifying where users fall out and what the margin profile of retained users looks like. It also identifies whether high-CAC channels are also high-retention channels, which determines whether the fix is a product problem or an acquisition problem.
          </p>
          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 3 — Contribution Margin Waterfall by Vertical</h3>
          <p>
            Revenue minus variable costs minus channel-allocated CAC minus credit loss provisions equals contribution margin per vertical. This is the number that determines whether a vertical is cash-generative or cash-consuming at the unit level, before any corporate overhead. The waterfall makes explicit what blended P&amp;L hides: that Indonesia is subsidising Philippines, Vietnam, and the KartaCredit NPL provisioning simultaneously.
          </p>
          <table className="data-table" style={{ marginTop: '20px' }}>
            <thead>
              <tr>
                <th>Framework</th>
                <th>Question</th>
                <th>Output</th>
                <th>Decision It Drives</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Cohort LTV/CAC</strong></td>
                <td>Are we paying back CAC at the rate we claim?</td>
                <td>Realised payback by cohort, vertical, geography</td>
                <td>Which acquisition spend to cut and which to protect</td>
              </tr>
              <tr>
                <td><strong>Funnel decomposition</strong></td>
                <td>Where exactly are users being lost?</td>
                <td>Drop-off rate and margin profile at each stage</td>
                <td>Product investment priorities to improve retention</td>
              </tr>
              <tr>
                <td><strong>Contribution margin waterfall</strong></td>
                <td>Which verticals fund themselves?</td>
                <td>Contribution margin per vertical and geography</td>
                <td>Restructuring scope — fix, scale, or exit</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Data</h2>
        <div className="content">
          <p><strong>Platform Overview:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Indonesia</th>
                <th>Philippines</th>
                <th>Vietnam</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Registered users</td>
                <td>24.2M</td>
                <td>8.6M</td>
                <td>5.2M</td>
                <td>38.0M</td>
              </tr>
              <tr>
                <td>Monthly active users</td>
                <td>11.4M</td>
                <td>3.1M</td>
                <td>1.8M</td>
                <td>16.3M</td>
              </tr>
              <tr>
                <td>Blended CAC (2024)</td>
                <td>$4.20</td>
                <td>$6.80</td>
                <td>$8.40</td>
                <td>$5.10 avg</td>
              </tr>
              <tr>
                <td>Monthly acquisition spend</td>
                <td>$18.4M</td>
                <td>$8.2M</td>
                <td>$6.6M</td>
                <td>$33.2M</td>
              </tr>
              <tr>
                <td>Organic acquisition %</td>
                <td>38%</td>
                <td>22%</td>
                <td>14%</td>
                <td>31%</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Vertical Contribution Margin (Monthly, per MAU):</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Vertical</th>
                <th>MAU</th>
                <th>Revenue/User</th>
                <th>Variable Cost/User</th>
                <th>Gross Margin/User</th>
                <th>CAC Amort./User</th>
                <th>Contribution Margin</th>
                <th>Monthly Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Ride-hailing (ID)</strong></td>
                <td>7.2M</td>
                <td>$3.80</td>
                <td>$2.10</td>
                <td>$1.70</td>
                <td>$0.62</td>
                <td><strong>$1.08</strong></td>
                <td>+$7.8M</td>
              </tr>
              <tr>
                <td><strong>Food delivery (ID)</strong></td>
                <td>5.8M</td>
                <td>$6.20</td>
                <td>$4.80</td>
                <td>$1.40</td>
                <td>$0.84</td>
                <td><strong>$0.56</strong></td>
                <td>+$3.2M</td>
              </tr>
              <tr>
                <td><strong>Payments / wallet (ID)</strong></td>
                <td>9.1M</td>
                <td>$1.20</td>
                <td>$0.38</td>
                <td>$0.82</td>
                <td>$0.22</td>
                <td><strong>$0.60</strong></td>
                <td>+$5.5M</td>
              </tr>
              <tr>
                <td><strong>KartaCredit (ID)</strong></td>
                <td>2.4M</td>
                <td>$9.40</td>
                <td>$3.20</td>
                <td>$6.20</td>
                <td>$1.40</td>
                <td>$4.80 pre-provision</td>
                <td>see calc</td>
              </tr>
              <tr>
                <td><strong>All verticals (PH)</strong></td>
                <td>3.1M</td>
                <td>$4.10</td>
                <td>$3.60</td>
                <td>$0.50</td>
                <td>$1.18</td>
                <td><strong>−$0.68</strong></td>
                <td>−$2.1M</td>
              </tr>
              <tr>
                <td><strong>All verticals (VN)</strong></td>
                <td>1.8M</td>
                <td>$3.20</td>
                <td>$3.80</td>
                <td>−$0.60</td>
                <td>$1.44</td>
                <td><strong>−$2.04</strong></td>
                <td>−$3.7M</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Cohort Retention — Indonesia Ride-Hailing:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Cohort</th>
                <th>Users Acquired</th>
                <th>CAC</th>
                <th>M3 Retention</th>
                <th>M6</th>
                <th>M12</th>
                <th>M18</th>
                <th>M24</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Q1 2022 (Series B)</td>
                <td>420,000</td>
                <td>$3.10</td>
                <td>61%</td>
                <td>48%</td>
                <td>38%</td>
                <td>31%</td>
                <td>27%</td>
              </tr>
              <tr>
                <td>Q3 2022</td>
                <td>680,000</td>
                <td>$3.40</td>
                <td>58%</td>
                <td>44%</td>
                <td>35%</td>
                <td>28%</td>
                <td>24%</td>
              </tr>
              <tr>
                <td>Q1 2023</td>
                <td>920,000</td>
                <td>$3.90</td>
                <td>54%</td>
                <td>41%</td>
                <td>32%</td>
                <td>25%</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Q3 2023 (Series D)</td>
                <td>1,480,000</td>
                <td>$4.60</td>
                <td>49%</td>
                <td>36%</td>
                <td>27%</td>
                <td>—</td>
                <td>—</td>
              </tr>
              <tr>
                <td>Q1 2024 (most recent)</td>
                <td>1,820,000</td>
                <td>$5.20</td>
                <td>44%</td>
                <td>31%</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Calculations</h2>
        <div className="content">

          <p><strong>Calculation 1 — Realised LTV vs. Claimed LTV: The Gap That Explains the Series E</strong></p>
          <div className="calculation">
{`Investor deck LTV model (presented to Series D):
  Assumed month-12 retention: 42%
  Assumed month-24 retention: 35%
  Monthly gross margin/user:  $1.70 (correct)
  Assumed CAC:                $3.90 (correct for 2023)
  Projected 24M LTV:          $1.70 × 14.8 = $25.16
  Modelled LTV/CAC:           $25.16 ÷ $3.90 = 6.5×
  Modelled payback:           14 months ✓ (the model works; the retention does not)

Realised LTV — Q1 2023 cohort (oldest with 18M of data):
  Actual M3  retention: 54%  (model assumed 66%)
  Actual M6  retention: 41%  (model assumed 52%)
  Actual M12 retention: 32%  (model assumed 42%)
  Actual M18 retention: 25%  (model assumed 35%)

  Realised cumulative LTV (month by month):
    M1:        100% × $1.70 =                       $1.70
    M2:         78% × $1.70 =                       $1.33
    M3:         54% × $1.70 =                       $0.92
    M4–M6:  avg 45% × $1.70 × 3 months =       $2.30
    M7–M12: avg 37% × $1.70 × 6 months =       $3.78
    M13–M18: avg 29% × $1.70 × 6 months =      $2.96
    ──────────────────────────────────────────────────────
    Realised cumulative LTV at 18 months:          $12.99

  Payback check: CAC = $3.90, realised LTV crosses $3.90 at ~month 8–10 ✓
  The payback claim is broadly true. The 6.5× LTV/CAC claim is not.

  Projected 24M LTV (extrapolating from M18 trend):
    M19–24: avg 21% retention × $1.70 × 6 = $2.14
    Realised 24M LTV: $12.99 + $2.14 = $15.13

  LTV/CAC claimed: $25.16 ÷ $3.90 = 6.5×  ← investor deck
  LTV/CAC realised: $15.13 ÷ $3.90 = 3.9×  ← actual data
  Gap per user: $10.03

  Across all 2022–2023 cohorts (~4.2M users):
    $10.03 × 4.2M = $42.1M in aggregate LTV overstatement

  ⟹ The business does pay back CAC in Indonesia ride-hailing.
     But at 3.9×, not 6.5×. Every marginal dollar of acquisition
     spend is 40% less productive than the model assumes —
     which is exactly why EBITDA losses widen as growth accelerates.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 — Channel LTV/CAC: What Actually Works</strong></p>
          <div className="calculation">
{`Indonesia acquisition channels — all vintages combined:

Channel              CAC     M12 Ret.  24M LTV   LTV/CAC  Monthly $   Verdict
──────────────────────────────────────────────────────────────────────────────
Organic / referral   $1.20    44%      $18.40    15.3×   $7.0M    SCALE ✓✓
App store / SEO      $2.10    39%      $16.20     7.7×   $3.8M    SCALE ✓
Performance (Meta)   $4.80    28%      $11.80     2.5×   $9.2M    REDUCE ✗
Performance (TikTok) $6.20    22%      $ 9.40     1.5×   $4.6M    CUT ✗✗
Influencer / brand   $3.60    31%      $12.90     3.6×   $2.8M    MAINTAIN ∼
Promo-driven         $7.40    14%      $ 5.80     0.8×   $3.0M    ELIMINATE ✗✗✗
──────────────────────────────────────────────────────────────────────────────
Blended              $4.20    31%      $15.13     3.9×  $30.4M

Restructured mix (same total budget, reallocated):
  Organic (referral program):   $7.0M → $10.0M   (+$3.0M from promo)
  App store / SEO:              $3.8M →  $5.2M   (+$1.4M from TikTok cut)
  Performance (Meta):           $9.2M →  $7.0M   (reduce 24%)
  Performance (TikTok):         $4.6M →     $0   (eliminate)
  Influencer / brand:           $2.8M →  $5.0M   (+$2.2M reinvest)
  Promo-driven:                 $3.0M →     $0   (eliminate)
  ──────────────────────────────────────────────────────
  Total:                       $30.4M → $27.2M   (save $3.2M/month)
  New blended LTV/CAC:                   ∼5.2×   (up from 3.9×)

  ⟹ Channel reallocation saves $3.2M/month ($38.4M annualised)
     AND improves unit economics because promo-driven users
     were churning before generating any positive return anyway.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 — KartaCredit: The Hidden Liability</strong></p>
          <div className="calculation">
{`KartaCredit portfolio:
  Active borrowers:            2.4M
  Avg loan outstanding:        $48
  Total loan book:             $115.2M
  Stated NPL (30-day):         6.8%
  Current provisioning:        $115.2M × 6.8% × 50% = $3.9M/month

NPL by cohort vintage (from internal risk committee data):
  Q1 2023:   4.2% (30-day)  |  2.8% (90-day)  |  3.1% write-off
  Q3 2023:   5.8%           |  4.1%            |  pending
  Q1 2024:   7.4%           |  5.6%            |  pending
  Q3 2024:   9.2%           |  not yet aged    |  pending

  NPL is rising ~180 bps per cohort vintage. This is NOT seasoning.
  This is credit quality deterioration as the product expands
  into lower-creditworthiness segments.

Corrected provisioning (using cohort-weighted 90-day NPL):
  Weighted 90-day NPL on current book:    5.4%
  BUT newest 40% of book tracking 8.5%+
  True expected loss rate:                7.2%
  Required provision (80% coverage):      $115.2M × 7.2% × 80% = $6.6M/month
  Current provision:                                                $3.9M/month
  Shortfall:                                                        $2.7M/month = $32.4M/yr

If trajectory continues (new cohorts +180bps/vintage):
  By Q2 2025: portfolio NPL approaches 12%
  At 12%, 80% provision: $115.2M × 12% × 80% = $11.1M/month
  That eliminates KartaCredit's gross margin contribution entirely.

KartaCredit true contribution margin (corrected):
  Revenue/user/month:               $9.40
  Variable cost:                    $3.20
  Gross margin:                     $6.20
  Corrected provision/user:         $2.75  (=$6.6M ÷ 2.4M users)
  True contribution margin:         $3.45/user/month
  vs. stated (underprovision):      $4.80/user/month

  ⟹ KartaCredit is still contribution-positive at corrected provisioning.
     The business works — but only if credit quality stabilises now.
     Continuing the current trajectory turns it contribution-negative
     by Q3 2025 and into the largest single source of cash burn.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 — Philippines &amp; Vietnam: The International Expansion Tax</strong></p>
          <div className="calculation">
{`Philippines unit economics:
  MAU:                3.1M
  CAC:                $6.80  (no organic base — pure paid)
  M12 retention:      19%    (vs 32% in Indonesia — weak product-market fit)
  Monthly GM/user:    $0.50
  Realised 24M LTV:   ~$4.20
  LTV/CAC:            $4.20 ÷ $6.80 = 0.62×   ← below 1.0×: destroys value

  Every Philippine user acquired at current CAC destroys $2.60 in value.
  The Philippines has never had positive unit economics.

Vietnam unit economics:
  MAU:                1.8M
  CAC:                $8.40  (highest in portfolio)
  Monthly GM/user:    −$0.60  (below variable cost breakeven)
  LTV/CAC:            Cannot be calculated positively — negative gross margin
  Monthly total burn: $6.6M acquisition + $4.8M fixed ops = $11.4M/month

Combined international drag:
  Philippines CM loss:         −$2.1M/month
  Vietnam total burn:         −$11.4M/month
  ─────────────────────────────────────────
  Monthly drag:               −$13.5M/month
  Annualised:                 −$162M/year

  Indonesia generates +$16.5M/month contribution margin.
  International expansion consumes the entire Indonesia surplus and more.
  The international expansion tax = $162M/year.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 5 — Path to Breakeven: The 24-Month Model</strong></p>
          <div className="calculation">
{`Current run-rate P&L (monthly):
  Indonesia CM:              +$16.5M
  Philippines CM:             −$2.1M
  Vietnam burn:              −$11.4M
  KartaCredit (corrected):    +$8.3M  (2.4M × $3.45)
  Corporate overhead:        −$29.8M
  ─────────────────────────────────────────
  Current EBITDA:            −$18.5M/month (−$222M annualised)

Restructuring levers:
  A. Channel reallocation (immediate):       +$3.2M/month
  B. Vietnam suspension (immediate):        +$11.4M/month  (−$10M one-time)
  C. Philippines wind-down (12 months):      +$6.9M/month avg (−$18M one-time)
  D. KartaCredit underwriting tightening:    +$2.7M/month by M12
  E. Overhead reduction (months 3–9):       +$8.6M/month

Combined impact by Month 12:
  Indonesia CM (growing +8%):     +$17.8M
  Philippines drag eliminated:    +$6.9M
  Vietnam suspension:             +$11.4M
  KartaCredit improvement:        +$2.7M
  Channel reallocation:           +$3.2M
  Overhead reduction:             +$8.6M
  ─────────────────────────────────────────
  Monthly improvement vs. current: +$50.6M/month
  New EBITDA at Month 12:           −$18.5M + $50.6M = +$32.1M/month ✓
  One-time restructuring costs:    −$28M total

  Current runway: 19 months at current burn
  Post-restructuring: breakeven at month 8–10
  ⟹ Runway constraint eliminated. Series E from a profitable business,
     not a distressed one. The 35% haircut term sheet is the price
     of inaction — not the price of this business restructured.`}
          </div>
        </div>
      </section>

      <section>
        <h2>Findings</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 — The Unit Economics Work in Indonesia. Nowhere Else.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Indonesia ride-hailing and payments have genuine positive LTV/CAC at observed retention — 3.9× blended, improving to 5.2× with channel reallocation. Philippines LTV/CAC is 0.62×: every user acquired destroys value. Vietnam has not reached transaction density where unit economics can be positive. The international expansion narrative is consuming the Indonesia surplus and threatening the company's survival. The core is healthy. The expansion is the problem.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 — The Payback Is Real. The 6.5× LTV/CAC Is Not.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              CAC payback in Indonesia occurs around month 8–10. Genuine and defensible. The problem is the long-tail LTV assumed to compound beyond payback and justify the 6.5× ratio. At observed 24-month retention, realised LTV is $15, not $25. That 40% gap explains why growth acceleration widens the EBITDA loss: the company is acquiring users faster than it can pay back CAC on the marginal cohorts, because marginal cohorts have worse retention than the model assumed.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 — Promo-Driven Users Destroy Value. Eliminate Immediately.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              $3.0M/month on promotion-driven acquisition generates users with 0.8× LTV/CAC and 14% month-12 retention. These users come for the discount and leave when it ends. This is not a product problem. It is an acquisition channel problem. Eliminating promo-driven acquisition saves $3.0M/month and improves the installed user base quality. It can be executed in 30 days. It has no downside.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 — KartaCredit Is Salvageable, But Only With Immediate Underwriting Reform</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At corrected provisioning, KartaCredit contributes $3.45/user/month — still positive, still strategically important. The NPL trajectory is the threat. If underwriting is recalibrated now — halting new issuance to segments with predicted NPL above 8%, raising minimum creditworthiness thresholds — the portfolio stabilises. The cost is 30% reduction in new loan issuance. The alternative converts KartaCredit from the highest-margin product to the largest loss-maker within 12 months.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 — The 35% Haircut Reflects Current Karta. Not Restructured Karta.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              At current trajectory, the investor's valuation haircut is analytically defensible. A company with 19 months of runway, widening EBITDA losses, two negative-LTV geographies, and an underprovision credit book is worth less than its Series D valuation. The restructured business — Indonesia profitable at breakeven by month 8–10, KartaCredit stabilised, international optionality preserved — has a fundamentally different risk profile and justifies a materially different valuation.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>Immediate — Days 1 to 30</h3>
          <div className="highlight-box">
            <strong>R1. Eliminate Promo-Driven Acquisition</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Zero the budget on all promotion-led acquisition. Reallocate $3.0M/month to organic referral and SEO. Impact: $3.0M/month immediate saving, no strategic downside. Can be executed in 30 days. Owner: Chief Growth Officer.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R2. Suspend Vietnam Operations</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Halt all Vietnam paid acquisition immediately. Reduce to skeleton team (4–6 people) for regulatory presence. Begin managed wind-down. Save $10.2M/month net. One-time cost: $10M. Owner: CFO + Country GM Vietnam.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R3. Halt KartaCredit Issuance to High-Risk Segments</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Hard cap: no new loans to users with predicted NPL above 8%. Integrate external credit bureau data. Target: stabilise portfolio NPL at 7.2%. Result: 30% reduction in new loan issuance, provisioning shortfall resolved within 6 months. Owner: Head of KartaCredit + Risk Committee.
            </p>
          </div>
          <h3 style={{ fontSize: '17px', marginBottom: '12px', marginTop: '24px' }}>Months 1–6</h3>
          <div className="highlight-box">
            <strong>R4. Philippines Managed Wind-Down</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Halt Philippines paid acquisition ($8.2M/month). Maintain existing active users on reduced support. Full wind-down over 12 months, preserving regulatory licences for future re-entry. Save $10.3M/month by Month 6. One-time cost: $18M. LTV/CAC of 0.62× cannot be fixed with product improvement alone — the CAC is structurally too high.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R5. Restructure Indonesia Acquisition Mix</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Shift budget from paid performance toward organic referral. Launch structured referral program with $0.80 incentive per referred user completing 3 transactions within 30 days. Organic acquisition at $1.20 CAC with 44% M12 retention = 15.3× LTV/CAC — the most capital-efficient growth mechanism in the portfolio. Blended LTV/CAC improves to 5.2×.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R6. Decline the 35% Haircut. Restructure First. Raise in 12 Months.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Rationale:</strong> Restructuring actions generate +$50.6M/month EBITDA improvement by Month 12 against current −$18.5M. Breakeven at month 8–10 without new capital — because the cash burned by international operations and promo acquisition is freed before runway expires.
              <br /><strong>Risk:</strong> If Vietnam wind-down slips or KartaCredit NPL doesn't stabilise, activate a $50–80M bridge from existing investors at modest dilution.
              <br /><strong>To the term sheet investor:</strong> "We respect the analysis behind your offer. We are executing a restructuring that will make this a materially different business in 12 months. We will be back." Don't burn the relationship — they may lead the Series E on better terms.
            </p>
          </div>

          <p style={{ marginTop: '20px' }}><strong>24-Month Monitoring Dashboard:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Metric</th>
                <th>Current</th>
                <th>Month 6 Target</th>
                <th>Month 12 Target</th>
                <th>Red Line</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly EBITDA</td>
                <td>−$18.5M</td>
                <td>−$6M</td>
                <td>+$32M</td>
                <td>Worse than −$22M at M6 = plan failing</td>
              </tr>
              <tr>
                <td>Indonesia LTV/CAC</td>
                <td>3.9×</td>
                <td>4.4×</td>
                <td>5.2×</td>
                <td>Below 3.5× at M6 = channel reallocation not working</td>
              </tr>
              <tr>
                <td>KartaCredit NPL (90-day)</td>
                <td>5.4%</td>
                <td>≤ 5.8%</td>
                <td>≤ 6.0% stabilised</td>
                <td>Above 7.5% at M6 = underwriting reform insufficient</td>
              </tr>
              <tr>
                <td>Cash runway</td>
                <td>19 months</td>
                <td>22M (improving)</td>
                <td>Breakeven — no longer binding</td>
                <td>Below 14 months at M3 = activate bridge</td>
              </tr>
              <tr>
                <td>Promo-driven acquisition spend</td>
                <td>$3.0M/month</td>
                <td>$0</td>
                <td>$0</td>
                <td>Any spend here = execution failure on R1</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>From Someone Who Has Seen This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Pattern That Repeats Across Every Overextended Super-App</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Southeast Asia produced twelve companies between 2019 and 2023 that described themselves as super-apps with compounding network effects. Every one built a unit economics model on first-30-day user behaviour. Every one launched in three or more geographies before the home market was profitable. Every one had a BNPL product launched before 18 months of underwriting data existed. The companies that survived were the ones that recognised the pattern early enough to concentrate — cutting international, focusing on the geography with genuine unit economics, and re-entering international markets from a position of profitability rather than desperation. Karta is at that moment.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Conversation with Budi Hartono</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              He will argue that cutting acquisition cedes market share to Gojek and Grab permanently. He is wrong in a sophisticated way that requires a sophisticated answer. The correct response: Karta is not acquiring market share in the Philippines or Vietnam — it is acquiring registered users who do not retain and destroying capital in the process. Ceding users with 0.62× LTV/CAC is not a strategic loss. The reframe that works: "We are concentrating resources on the market where we are winning, to re-enter international markets from a position we can afford to defend." Give him the Indonesia referral program to run. It is genuinely growth-oriented work with the best unit economics in the portfolio. Keep him building, not opposing.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What the Cohort Data Means for the Series E Narrative</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The investors who passed ran the cohort analysis themselves and found the same retention curves the consulting team found. Sophisticated growth investors do this as standard diligence. The error was not having cohort data in the data room — it was not having the restructuring plan to accompany it. A data room showing deteriorating retention with no plan is an invitation to pass. A data room showing the same data alongside six months of evidence that the restructuring is working is a fundamentally different conversation. Transparency paired with execution is the most compelling Series E narrative available.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Junior Analysts Get Wrong in Unit Economics Engagements</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              They calculate LTV/CAC at the blended level and stop. Blended LTV/CAC at Karta is 3.9× — which sounds acceptable and obscures that Philippines is at 0.62×, TikTok performance is at 1.5×, and promo-driven is at 0.8×. The analytic value is entirely in the disaggregation — by channel, geography, and cohort vintage, and ultimately by the cross-tabulation of all three. A TikTok-acquired Philippine user from Q4 2023 has different unit economics from an organic Indonesian user from Q1 2022, and treating them as one number is how a company builds a narrative that sounds compelling and a business that does not compound. Disaggregate everything. The answer is always in the tail.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The 48-Hour Window Before the Board Meeting</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Arief Santoso will sit with this analysis for 48 hours before presenting it to the board. At some point he will ask himself whether he has the stomach to tell the board that the international expansion he championed — the expansion central to the Series D narrative he personally delivered — was premature. That is not an analytical question. It is a leadership question. The consulting team can give him the numbers. The courage to present them accurately, to own the pivot as a strategic choice rather than a failure — that is his work. The board does not need to hear "we were wrong about international expansion." It needs to hear: "We now know exactly where we win, and we are concentrating everything there."
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case04;
