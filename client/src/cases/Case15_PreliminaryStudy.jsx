const Case15 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Preliminary Study</span>
        <h1>Before You Read a Case — How a Business Analyst Actually Thinks</h1>
        <div className="case-meta">
          Industry: Cross-Industry Foundation &bull; Level: Foundational — Read This Before Case 01 &bull; No Prior BA Experience Required
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. Why This Exists</h2>
        <div className="content">
          <p>
            The cases in this library — from margin collapse in FMCG to post-merger integration in financial services — are written for someone who already knows how to think analytically. They assume you can read a set of numbers and hear the story underneath them. They assume you know why a framework is chosen, not just how it works. They assume you understand the difference between a finding and a recommendation, between a symptom and a root cause, between what the data says and what the data means.
          </p>
          <p>
            If you already have that foundation, start with Case 01. This preliminary study is for everyone else — and for the experienced analysts who want to make sure their foundation is solid before they try to build on it.
          </p>
          <div className="highlight-box">
            <strong>What This Study Covers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Six foundational ideas that run through every case in this library. Not frameworks — those are in the cases. Not industry knowledge — that comes with practice. These are the mental habits that separate a business analyst who produces correct outputs from one who produces useful ones. They are: <strong>(1) the difference between symptoms and causes</strong>, <strong>(2) how to read a business number</strong>, <strong>(3) what a framework actually does</strong>, <strong>(4) how to structure a problem before touching data</strong>, <strong>(5) what a defensible recommendation looks like</strong>, and <strong>(6) how to communicate a finding to someone who does not want to hear it</strong>. Each section ends with a short exercise drawn from the cases in this library.
            </p>
          </div>
          <p>
            This is not a textbook chapter. It is the briefing a senior consultant gives a junior team member on the flight to the client. It assumes you are intelligent, it does not assume you have done this before, and it will not waste your time explaining things that do not matter in practice.
          </p>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The Most Important Distinction in Business Analysis: Symptom vs. Cause</h2>
        <div className="content">
          <p>
            Every business problem that reaches a senior analyst has already been described by someone. The description is almost always a symptom. Your job is to find the cause. These are not the same thing, and confusing them is the most expensive mistake in consulting.
          </p>
          <div className="highlight-box">
            <strong>What a Symptom Is</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A symptom is the observable, measurable manifestation of an underlying problem. It is what the client tells you in the first meeting. It is what appears in the management accounts, the board report, or the rating agency letter. Symptoms are real — they are not wrong — but they are downstream of the cause, and treating them without finding the cause is how you produce recommendations that fix nothing.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Common symptoms across the cases in this library: a margin that is falling (Case 01), a customer base that is shrinking in revenue but not in count (Case 02), an NPL ratio that appears stable but will not stay that way (Case 13), a profit number that is growing while the underlying business quality is deteriorating (Case 12). Each of these is a real number. None of them is the problem. They are signals that a problem exists.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What a Cause Is</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              A cause is the structural condition, decision, or incentive that is producing the symptom. Causes are almost always less visible than symptoms — they live inside business processes, incentive structures, organisational designs, and strategic decisions that seemed reasonable at the time they were made. Finding a cause requires asking "why" repeatedly until you reach something that, if changed, would produce a different outcome.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              In Case 01 (NovaCPG), the symptom is a 540 bps margin collapse. The first-level cause is SKU proliferation and channel mix shift. The second-level cause is a category manager incentive structure that rewards revenue growth, not margin contribution. The third-level cause is a PE firm that set revenue growth as the primary KPI for its first 18 months of ownership without specifying what kind of revenue. Each level is more actionable than the last. Treating the symptom (cutting costs) does nothing. Treating the first-level cause (rationalising SKUs) helps but recurs. Treating the second-level cause (realigning incentives) is what actually changes the system.
            </p>
          </div>
          <p>
            <strong>The practical test:</strong> If the action you recommend could have been recommended without your analysis — if it was obvious before you started — you have treated a symptom, not a cause. A recommendation that requires your specific analytical work to be credible is almost always a cause-level recommendation. A recommendation that anyone in the room already knew was the answer is almost always symptom-level.
          </p>

          <table className="data-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>The Symptom (What the Client Describes)</th>
                <th>The Cause (What the Analysis Reveals)</th>
                <th>Why the Distinction Matters</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Case 01 — NovaCPG</td>
                <td>"Our margins are falling because raw material costs are rising."</td>
                <td>SKU proliferation and channel mix shift account for 69% of the erosion. Raw materials account for 29%.</td>
                <td>Treating only the raw material cost (supplier renegotiation) recovers 29% of the problem. Treating the cause recovers the rest.</td>
              </tr>
              <tr>
                <td>Case 02 — MerataBank</td>
                <td>"We are losing customers to neobanks."</td>
                <td>The bank is not losing customers — it is losing the primary banking relationship of high-value customers who remain as account holders but move their transactions elsewhere.</td>
                <td>Treating the symptom (build a better app) addresses the wrong problem. Treating the cause requires understanding which customers to fight for and at what cost.</td>
              </tr>
              <tr>
                <td>Case 10 — NovaBridge</td>
                <td>"The merger is underperforming because of cultural friction."</td>
                <td>Cultural friction is real but secondary. The primary cause is an incentive structure where cross-referral generates no financial credit and an onboarding process that makes cross-referral operationally painful.</td>
                <td>A culture program takes 2 years and may not work. Fixing the incentive structure takes 90 days and produces measurable results.</td>
              </tr>
              <tr>
                <td>Case 13 — KreditNusa</td>
                <td>"Our NPL ratio is 2.9% — within the threshold."</td>
                <td>The aggregate NPL masks vintage-level deterioration: newer cohorts are performing 50–64% worse than 2022 cohorts at the same age in their lifecycle.</td>
                <td>The reported metric says the portfolio is controlled. The vintage data says it will breach the threshold in two quarters. The cause-level analysis produces a different — and correct — recommendation.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 1 — Symptom or Cause?</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before reading Case 04 (Karta, the super-app), read only the first two sections — the company description and the trigger event. Write down: (a) the symptom as the CEO would describe it, (b) your hypothesis for the cause before you see the data, and (c) what data you would want to look at first. Then read the rest of the case and compare your hypothesis to what the analysis reveals. The gap between your hypothesis and the actual cause is your current diagnostic blind spot.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. How to Read a Business Number</h2>
        <div className="content">
          <p>
            Numbers in business do not speak for themselves. A 14% revenue growth rate is excellent in one context and a warning signal in another. An NPL ratio of 3.4% is fine in isolation and alarming when the vintage data shows the newest cohort is tracking to 6.2% at maturity. A profit of IDR 312 billion is a success story when the underlying business is healthy and a structural deterioration story when investment income is masking an underwriting loss. Reading a business number means understanding what it is measuring, what it is not measuring, what trend it is part of, and what would have to be true for it to change.
          </p>
          <div className="highlight-box">
            <strong>The Five Questions to Ask Every Business Number</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>1. What is this number actually measuring?</strong> Revenue is not profit. Gross profit is not net profit. NPL is not credit quality. Customer count is not customer value. Every metric measures one specific thing and excludes everything else. Before you use a number, know exactly what it includes and what it does not.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>2. Is this a leading indicator or a lagging indicator?</strong> A leading indicator tells you where the business is going. A lagging indicator tells you where it has been. NPL ratio is lagging — the loan must be 90 days overdue before it is counted. DPD 30+ is leading — it shows stress 60 days before NPL classification. Revenue growth is lagging. Churn rate is leading. Building your analysis on lagging indicators means you are always reading the past. Building it on leading indicators means you can see the future.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>3. What is the trend, not just the level?</strong> A 97.8% combined ratio is not alarming on its own. A combined ratio that has risen from 91.4% to 95.8% to 97.8% over three consecutive years, with no intervention in place, tells you exactly where it will be in 12 months. The trend is the signal. The level is just where you are on the trajectory.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>4. What is the denominator?</strong> Revenue per customer looks healthy if the customer base is growing but the high-value customers are leaving. Revenue share looks stable if total revenue is growing but through low-margin channels. Return on assets looks reasonable if assets are growing but earnings are growing slower. The denominator changes the story. Always ask what the number is being divided by and whether that denominator is hiding or revealing the truth.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>5. What is the number not measuring that matters?</strong> Every metric has a shadow — the dimension of performance it leaves out. Revenue does not measure margin. Customer count does not measure engagement. NPL ratio does not measure the future credit quality of the current book. Market share does not measure profit. The shadow is where the real insight usually lives.
            </p>
          </div>

          <p style={{ marginTop: '16px' }}><strong>Worked Example — Reading One Number Five Ways:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>The Number</th>
                <th>The Naive Reading</th>
                <th>The Analytical Reading</th>
                <th>What It Actually Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BSN Net Profit: IDR 978 billion (+8.1% YoY)</td>
                <td>"Profit is growing — the business is healthy."</td>
                <td>Decompose into underwriting profit (IDR 133B, declining) + investment income (IDR 261B, partly non-recurring). ROA fell from 1.85% to 1.44%.</td>
                <td>Profit is growing in absolute terms because the asset base grew faster than ROA fell. The business is becoming less efficient with every rupiah of new asset. At current trajectory, NPAT falls 60% in FY2025.</td>
              </tr>
              <tr>
                <td>MerataBank Customer Count: +6% over 3 years</td>
                <td>"The customer base is growing — retention is working."</td>
                <td>NII per active customer fell 19% over the same period. Cost-to-serve rose 52%. The customers are staying but decamping their primary relationship.</td>
                <td>The bank is counting bodies, not relationships. A customer with a dormant savings account is not a retained customer. They are a leakage statistic waiting to be classified correctly.</td>
              </tr>
              <tr>
                <td>KreditNusa NPL: 2.9% (vs 3.0% threshold)</td>
                <td>"We are within threshold — the portfolio is controlled."</td>
                <td>Write-off rate suppressed for 6 consecutive quarters. Vintage data shows 2023 H1 cohort at 5.2% DPD 30+ at M18 — above the 5.0% OJK watch threshold.</td>
                <td>The aggregate metric is technically correct. It is also meaningless as a forward indicator. The portfolio will breach 3.0% NPL within two quarters as newer vintages age. The threshold has already been breached in the data that is not being reported.</td>
              </tr>
              <tr>
                <td>Karta Monthly Active Users: +41% YoY</td>
                <td>"Strong user growth — the platform is gaining traction."</td>
                <td>Cohort retention data (not shared in investor deck): month-12 retention in ride-hailing is 34%, month-18 is 22%. The 14-month CAC payback assumes a retention curve that does not exist in the data.</td>
                <td>User growth is real. The unit economics model built on that user growth is not. The company is acquiring users at a faster rate than it is retaining them, and the acquisition cost is not being recovered before the user churns.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 2 — The Five-Question Drill</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Take any three numbers from the data tables in Case 06 (Vietronics, the supply chain crisis). For each number, apply the five questions: what is it measuring, is it leading or lagging, what is the trend, what is the denominator, and what is it not measuring. Write one sentence per question. Do this before reading the analytical sections of the case. The gap between your five-question reading and the case's analysis is your current number-reading gap.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. What a Framework Actually Does — and What It Cannot Do</h2>
        <div className="content">
          <p>
            A framework is a structured way of organising incomplete information so that the gaps become visible and the interactions become clear. It is not an answer. It is not a checklist. It is not a substitute for thinking. A framework used correctly accelerates insight. A framework used incorrectly produces the appearance of analysis without the substance.
          </p>
          <div className="highlight-box">
            <strong>The Three Things a Framework Does</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It structures the problem space.</strong> A framework tells you what dimensions of a problem to examine and in what relationship to each other. The McKinsey 7S framework (used in Case 10) says: look at strategy, structure, systems, shared values, style, staff, and skills — and look at how they interact. Without the framework, an analyst examining NovaBridge's integration failure might focus on the two or three most visible symptoms. The framework forces coverage of all seven elements, revealing that the real problem is not cultural (shared values) but structural and systemic — a finding that changes the entire intervention.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It creates a shared language.</strong> When a consulting team says the cross-sell problem is a "Structure-Systems misalignment" in 7S terms, every member of the team knows what that means and where to look for evidence. When they say a market is a "Dog" in BCG terms, the strategic implication (exit) is understood without further explanation. Frameworks are not jargon — they are compression. They reduce a complex idea to a shared shorthand that enables faster, cleaner communication.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It reveals interactions.</strong> The most valuable thing a framework does is not classify individual elements — it is show how elements relate to each other. In Case 01, the BCG matrix classifies each SKU individually. But the real insight is that the company's "Cash Cows" are being drained by promotional spend that makes sense for "Question Marks" but is unnecessary for products with high market share. The framework surfaces an interaction that no individual SKU analysis would reveal.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Three Things a Framework Cannot Do</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It cannot replace data.</strong> A BCG matrix with no market share data is a 2×2 with labels. A 7S analysis with no interviews is a list of headings. A customer segmentation with no transaction data is a hypothesis. Frameworks give you the structure. You have to fill it with evidence. The framework tells you what to look for. The data tells you what is there.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It cannot make the decision.</strong> Every case in this library ends with a recommendation made by a human being weighing analytical findings against political realities, stakeholder constraints, and judgment about what is actually executable. No framework produces a recommendation. It produces inputs to a recommendation. The analyst's job is to translate those inputs into a specific, defensible, ownable action — and that translation requires judgment that no framework can provide.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>It cannot replace industry knowledge.</strong> A market sizing framework tells you how to build a bottom-up estimate. It does not tell you that the modern trade penetration rate in Vietnam for premium RTD beverages is 34%, that Grab dominates the Indonesia ride-hailing market in a way that makes customer acquisition in that segment disproportionately expensive, or that OJK's informal NPF watch threshold is 5% at 18 months. That knowledge comes from experience and research. The framework is the vessel. Domain knowledge is the content.
            </p>
          </div>

          <p><strong>Framework Selection Guide — Used Across This Case Library:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Framework</th>
                <th>Best Used When</th>
                <th>Produces</th>
                <th>Cases Where It Appears</th>
                <th>Common Misuse</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>BCG Growth-Share Matrix</strong></td>
                <td>You have a portfolio of products, markets, or business units and need to classify each by strategic role</td>
                <td>A classification of each unit into Invest, Maintain, Harvest, or Exit — and a conversation about portfolio balance</td>
                <td>Case 01 (SKU portfolio), Case 09 (market portfolio)</td>
                <td>Using it without real market share data; treating the quadrant as the answer rather than the starting point for strategic discussion</td>
              </tr>
              <tr>
                <td><strong>McKinsey 7S</strong></td>
                <td>An organisation is failing to execute a strategy that appears sound on paper and you need to understand why</td>
                <td>A diagnosis of which organisational elements are misaligned and how they are compounding each other's dysfunction</td>
                <td>Case 10 (NovaBridge PMI)</td>
                <td>Using it as a checklist rather than a map of interactions; listing 7S elements without analysing how they compound each other</td>
              </tr>
              <tr>
                <td><strong>Customer Lifetime Value (CLV / LTV)</strong></td>
                <td>You need to understand the economic value of different customer segments over time, not just at the point of acquisition</td>
                <td>A ranking of customer segments by economic value, which drives capital allocation toward retention, acquisition, or exit of specific segments</td>
                <td>Case 02 (MerataBank), Case 04 (Karta), Case 07 (CentralMart)</td>
                <td>Using modelled LTV instead of observed LTV from cohort data; building the model on assumed retention rates rather than actual behaviour</td>
              </tr>
              <tr>
                <td><strong>Gross-to-Net Margin Waterfall</strong></td>
                <td>Margin is declining and you need to decompose the decline into specific, quantified drivers</td>
                <td>A precise attribution of margin erosion to individual causes — raw material, mix shift, promotional spend, pricing — each with a quantified IDR and percentage point value</td>
                <td>Case 01 (NovaCPG), Case 12 (ArkaInsurance)</td>
                <td>Building the waterfall at the aggregate level rather than at the SKU or product line level; missing the mix shift story that lives inside the aggregate</td>
              </tr>
              <tr>
                <td><strong>Vintage Analysis</strong></td>
                <td>You have cohort data and need to understand whether performance is improving or deteriorating over time by controlling for age in the lifecycle</td>
                <td>A comparison of cohorts at the same age that reveals whether newer cohorts are performing better or worse than older ones — the earliest signal of systemic quality change</td>
                <td>Case 13 (KreditNusa), Case 04 (Karta cohort retention)</td>
                <td>Comparing cohorts at different ages (which produces meaningless noise); using aggregate metrics instead of cohort-level data</td>
              </tr>
              <tr>
                <td><strong>Minto Pyramid (SCR)</strong></td>
                <td>You need to communicate findings to a senior audience that does not yet know it has a problem, in a way that produces action rather than defensiveness</td>
                <td>A communication structure: Situation (shared ground) → Complication (the finding that challenges shared ground) → Resolution (the specific action required)</td>
                <td>Case 14 (BSN board presentation), Cases 11–14 (BA career track)</td>
                <td>Using it as a presentation template without the underlying analysis being complete; reversing the structure by leading with the recommendation before establishing credibility</td>
              </tr>
              <tr>
                <td><strong>LBO / Returns Model</strong></td>
                <td>A PE investor is evaluating an acquisition and needs to determine the maximum entry price that generates the required return under realistic (not optimistic) assumptions</td>
                <td>An entry price range, a returns sensitivity table, and a clear view of which assumptions are most critical to the investment thesis</td>
                <td>Case 08 (Nortek / Adriatic Capital)</td>
                <td>Running the model on reported EBITDA without normalisation; treating the returns model as a validation tool rather than a stress-testing tool</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 3 — Framework Selection Before the Case</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before reading Case 05 (Veridian Therapeutics, the drug launch), read only the business background and the problem statement. Write down: which two frameworks you would use for this problem and why. Then read the Framework Selection section of Case 05 and compare. If your selection matches, you understand framework-to-problem mapping. If it does not, the gap is instructive — read the case's rationale for why it selected the frameworks it did.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. How to Structure a Problem Before Touching Data</h2>
        <div className="content">
          <p>
            The single most common mistake in business analysis is starting with data. Data is not the beginning of analysis. It is the middle. The beginning is the problem structure — a clear, precise statement of what question you are trying to answer, why that question matters, and what the answer will make possible that is currently impossible.
          </p>
          <p>
            Every case in this library opens with what it calls a "precise problem statement." That statement is not the client's presenting question. It is the analytical question that, if answered, produces the decision the client needs to make. The gap between the client's presenting question and the precise problem statement is where the consultant's value lives.
          </p>
          <div className="highlight-box">
            <strong>The Three-Step Problem Structuring Process</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Step 1 — Translate the presenting question into an analytical question.</strong> The client says: "Our margins are falling — what do we do?" The analytical question is: "Which structural, commercial, and operational factors account for the 540 bps margin erosion, and which combination of interventions — at what revenue cost — recovers margin to the target level within 18 months?" The analytical question is specific enough to tell you what data you need, what analysis you will run, and what the output will look like. The presenting question is not.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Step 2 — Decompose the analytical question into three to five sub-questions.</strong> Each sub-question should be independently answerable with data and should contribute a distinct piece of the overall answer. In Case 01, the sub-questions are: (1) What is the margin waterfall at SKU level? (2) Which SKUs are structurally margin-negative? (3) What is the ROI of each promotional mechanic? (4) What are the price elasticities for each category? (5) What does the recovery scenario look like under different lever combinations? Each sub-question produces an output that feeds the next.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Step 3 — Define what "done" looks like before you start.</strong> Before touching a single spreadsheet, write down in one paragraph what the deliverable is: who will receive it, what decision it will enable, what format it takes, and what it will contain. This paragraph is your north star. Every analysis you run should either contribute to it or be cut. If you cannot write this paragraph before you start, you do not yet understand the problem well enough to begin.
            </p>
          </div>

          <p><strong>Problem Structure Comparison — Client's Question vs Analytical Question:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Case</th>
                <th>Client's Presenting Question</th>
                <th>The Analytical Question</th>
                <th>What the Reframe Unlocks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Case 02 — MerataBank</td>
                <td>"How do we compete with neobanks?"</td>
                <td>"Which customer segments generate economic profit sufficient to justify the cost of digital retention investment — and what is the minimum viable investment to protect those segments in the next 24 months?"</td>
                <td>Shifts the analysis from product development (build a better app) to customer economics (which customers are worth fighting for and at what cost)</td>
              </tr>
              <tr>
                <td>Case 03 — Meridian Energy</td>
                <td>"Tell us what the coal assets are worth and when to exit them."</td>
                <td>"What is each coal asset worth under realistic NEM price and carbon cost scenarios, what is the optimal retirement sequence given financial, regulatory, and community constraints, and what capital reallocation plan makes Meridian an attractive equity story rather than a managed-decline vehicle?"</td>
                <td>Separates the asset valuation question from the sequencing question from the investor narrative question — three different analytical problems that require different approaches</td>
              </tr>
              <tr>
                <td>Case 07 — CentralMart</td>
                <td>"Is our loyalty program worth the investment?"</td>
                <td>"Which customer segments generate positive economic profit at fully-loaded contribution margin, and what restructuring of the loyalty program, promotional investment, and channel cost allocation is required to shift customer behaviour toward the segments and channels where CentralMart actually makes money?"</td>
                <td>Shifts from a binary "yes/no" program evaluation to a customer economics and channel profitability problem that produces specific, actionable redesign recommendations</td>
              </tr>
              <tr>
                <td>Case 09 — BrewStar</td>
                <td>"Which two markets should we enter first?"</td>
                <td>"Which two of the four target markets offer the combination of realistic serviceable market size, time-to-positive-EBITDA, and capital efficiency that maximises BrewStar's return on its SGD 180M expansion budget while building the regional scale the Series C thesis requires?"</td>
                <td>Adds the capital efficiency and EBITDA timeline dimensions that the client's question ignores — dimensions that completely change the market ranking once applied</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 4 — Reframe Before You Read</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Choose any case you have not read. Read only the title, the industry tag, and the first paragraph. Write your own version of the precise problem statement — the analytical question you would set before touching data. Then read the case's problem statement and compare. The quality of your reframe tells you where you are in your problem structuring ability. If your version is vaguer than the case's, practise being more specific. If your version is more specific in ways the case does not cover, you may have identified a dimension the case underweights.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6 ── */}
      <section>
        <h2>6. What a Defensible Recommendation Looks Like</h2>
        <div className="content">
          <p>
            A recommendation is defensible when it meets four tests simultaneously: it is <strong>specific</strong> enough to act on, it is <strong>grounded</strong> in the data you have presented, it is <strong>bounded</strong> by an honest acknowledgement of what would have to be true for it to be wrong, and it is <strong>owned</strong> by a named person with a defined timeline. A recommendation that fails any of these tests is not a recommendation — it is an opinion, and opinions do not survive board scrutiny.
          </p>
          <div className="highlight-box">
            <strong>The Four Tests of a Defensible Recommendation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Test 1 — Specific enough to act on.</strong> "Improve the digital experience" is not a recommendation. "Rebuild the mobile account opening flow to achieve a completion time under 8 minutes and a zero document re-submission requirement, targeting a conversion rate improvement from 36% to 55% within 4 months of deployment" is a recommendation. Specificity is not pedantry — it is the difference between something a decision-maker can approve and something they will nod at and then forget.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Test 2 — Grounded in the data.</strong> Every recommendation should trace back to a specific number in your analysis. "We recommend pausing new branch openings" should be followed by: "because the 2024 cohort is currently generating a monthly loss of IDR 316 million per branch, and opening 40 additional branches in FY2025 would increase the annual branch drag from IDR 270 billion to IDR 422 billion, consuming 80% of the mature network's profit." The data is not background — it is the load-bearing wall of the recommendation.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Test 3 — Bounded by honest uncertainty.</strong> Every recommendation should state, explicitly, what would have to be true for it to be wrong. In Case 13 (KreditNusa), the recommendation to tighten motorcycle underwriting is bounded by: "if the DPD 30+ deterioration is driven by a temporary macroeconomic factor that has already corrected, the Q4 2023 cohort will show M6 DPD reverting toward 3.0–3.5%. Monitor the Q4 2023 cohort at Month 6 as the primary trigger metric." This is not weakness — it is intellectual honesty that makes the recommendation more credible, not less.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Test 4 — Owned by a named person with a timeline.</strong> "The company should restructure its incentives" is not ownable. "The CFO, with sign-off from the CEO, will produce a revised branch manager KPI structure within 6 weeks, replacing the current 45% loan disbursement weight with a 30% deposit accounts opened weight and a new 20% CASA balance growth component" is ownable. The owner and timeline are not bureaucratic additions — they are the difference between a recommendation and a plan.
            </p>
          </div>

          <p><strong>Recommendation Quality Spectrum — From Vague to Defensible:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Quality Level</th>
                <th>Example</th>
                <th>What Is Missing</th>
                <th>How to Fix It</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Opinion</strong> (not a recommendation)</td>
                <td>"We should focus more on customer retention."</td>
                <td>No specificity, no data grounding, no owner, no timeline, no quantified outcome</td>
                <td>Start with the data: which customers, at what retention cost, generating what incremental value. Build up from there.</td>
              </tr>
              <tr>
                <td><strong>Direction</strong> (barely a recommendation)</td>
                <td>"We recommend restructuring the loyalty program to reward higher-margin behaviours."</td>
                <td>Specific direction but no quantification, no owner, no timeline, no test for wrongness</td>
                <td>Add: which behaviours, what change to the point structure, what is the expected shift in contribution margin, who owns it and by when.</td>
              </tr>
              <tr>
                <td><strong>Grounded recommendation</strong></td>
                <td>"We recommend reducing the e-commerce point multiplier from 3× to 1.5× for orders below THB 500, which reduces loyalty cost by THB 180M/year by shifting incentives away from the order segment with the highest return rate and lowest gross margin."</td>
                <td>Specific and data-grounded but missing owner, timeline, and uncertainty bounds</td>
                <td>Add: CMO owns implementation by Q2; monitor e-commerce NPS for 90 days; if NPS drops more than 8 points, review the threshold.</td>
              </tr>
              <tr>
                <td><strong>Defensible recommendation</strong></td>
                <td>"The CMO, with CFO approval, will reduce the e-commerce point multiplier from 3× to 1.5× for orders below THB 500, effective Q2. This recovers THB 180M/year in loyalty cost and shifts 12% of high-frequency low-margin orders toward the in-store channel. If 90-day NPS among affected members drops more than 8 points, a tiered threshold review is triggered. Owner: CMO. Decision deadline: 30 days."</td>
                <td>Nothing material</td>
                <td>This is the standard to aim for.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 5 — Write One Defensible Recommendation</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              After reading Case 07 (CentralMart, the loyalty paradox), write one recommendation from the Recommendations section in your own words, applying all four tests: specific, grounded, bounded, owned. Compare your version to the case's recommendation. The gap in specificity, grounding, or ownership framing is your current recommendation-writing gap.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 7 ── */}
      <section>
        <h2>7. How to Communicate a Finding Someone Does Not Want to Hear</h2>
        <div className="content">
          <p>
            The most important analytical work in this library is worthless if it cannot be communicated to the person who needs to act on it. Every case in this library involves at least one stakeholder who does not want to hear the finding — the CCO who built the commercial strategy the analysis implicates, the CEO who championed the growth narrative the numbers contradict, the CFO who has been presenting a metric that is technically accurate and substantively misleading. Learning to deliver a finding that contradicts a senior stakeholder's beliefs, in a way that produces action rather than defensiveness, is the highest-order skill in business analysis.
          </p>
          <div className="highlight-box">
            <strong>The Four Principles of Communicating Unwelcome Findings</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Principle 1 — Lead with shared ground, not with the finding.</strong> The instinct is to open with your most important finding because it is what you have been working toward. The instinct is wrong. A senior stakeholder who is surprised by an opening finding immediately becomes defensive — and a defensive audience does not absorb information. Open with something they know and believe: the growth story, the market position, the achievement they are proud of. Establish that you understand and respect what they have built. Then introduce the complication from within that shared ground.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Principle 2 — Let the data make the argument.</strong> When you deliver an unwelcome finding, you are not arguing with the stakeholder — you are showing them a number they have not seen and asking them to update their view. "You are wrong" is an argument. "The 2023 H1 mudharabah cohort is at 5.2% DPD 30+ at month 18, versus the OJK watch threshold of 5.0% and the 2021 baseline of 3.2% at the same age" is a number. Numbers do not argue. They present. The stakeholder's resistance is directed at you if you argue; at the data if you present. Make the data do the work.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Principle 3 — Give the decision-maker a way to lead the response.</strong> Every unwelcome finding creates a moment where the stakeholder can either defend or act. The way you structure the recommendation determines which they do. If the recommendation is framed as a correction of their mistake, they defend. If it is framed as a course correction they can champion — "the President Director will lead the mortgage underwriting review" — they act. You are not giving them credit for a finding they did not make. You are giving them ownership of the solution, which is the thing that actually matters.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Principle 4 — Know which question is coming and have the answer ready.</strong> Every board presentation of unwelcome findings produces one question that is harder than all the others — the question that goes to the credibility of the analysis, or to the political implication the finding creates. In Case 14 (BSN), the hardest question is: "If this is the situation, what should we have been told and when?" The answer to that question must be prepared before the meeting, not improvised in the room. An answer improvised under pressure sounds defensive. An answer prepared and delivered clearly sounds like a practitioner who has thought about all dimensions of the problem — which is what you want them to believe, because it is true.
            </p>
          </div>

          <p><strong>Stakeholder Response Patterns and How to Handle Them:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Response Pattern</th>
                <th>What the Stakeholder Is Really Saying</th>
                <th>The Wrong Response</th>
                <th>The Right Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>"This is a market-wide phenomenon, not specific to us."</td>
                <td>Is this my fault? Can I deflect the finding to external factors?</td>
                <td>Agree and soften the finding to preserve the relationship</td>
                <td>"You are right that [market factor] is real. What is specific to [company] is [precise metric] — which has moved [X] while the industry benchmark has moved [Y]. That gap is what we are here to address."</td>
              </tr>
              <tr>
                <td>"We knew about this. It is being managed."</td>
                <td>I do not want to look like I was unaware of a problem in front of the board</td>
                <td>Back down and reframe the finding as less significant</td>
                <td>"The trend has been visible. What the vintage analysis adds is a forward projection: at the current trajectory, this reaches [threshold] in [timeline]. The question for the board is whether the current management response is sufficient to prevent that outcome, and the data suggests it is not."</td>
              </tr>
              <tr>
                <td>"You are being too conservative."</td>
                <td>Your finding threatens something I have built or am responsible for</td>
                <td>Defend your assumptions in a way that escalates to an argument</td>
                <td>"That is a fair challenge. Here is the assumption that drives the conservative case: [specific assumption]. If [alternative assumption] holds instead, the outcome improves to [better number]. The question is which assumption is better supported by the evidence — and here is the evidence."</td>
              </tr>
              <tr>
                <td>"What about [data point that contradicts your finding]?"</td>
                <td>I have a piece of evidence I believe undermines your analysis</td>
                <td>Dismiss it without engaging</td>
                <td>"That is an important data point. Let me show you how it fits into the overall picture" — then show exactly where it sits in your analysis and why it does not change the conclusion, or, if it does change the conclusion, say so and update.</td>
              </tr>
            </tbody>
          </table>

          <div className="highlight-box" style={{ marginTop: '16px' }}>
            <strong>Exercise 6 — Pre-Brief Before the Case</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Before reading Case 08 (Nortek / Adriatic Capital, the acquisition diligence), read the stakeholder section and identify the one person whose resistance to the findings is most likely to derail the recommendation. Write down: what they are afraid of, what question they will ask, and what the right response is. Then read the case's board room and war room sections. Compare your preparation to what the case surfaces. This exercise builds the stakeholder anticipation muscle — the skill that makes the difference between a presentation that produces action and one that produces a request for further analysis.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 8 ── */}
      <section>
        <h2>8. How to Use This Case Library</h2>
        <div className="content">
          <p>
            The cases in this library are not meant to be read like articles. They are meant to be worked like problems. The difference is this: reading a case produces familiarity. Working a case produces capability.
          </p>
          <div className="highlight-box">
            <strong>The Working Protocol — Applied to Every Case</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Before you read the data:</strong> Read the business background, the stakeholder section, and the problem statement. Then stop. Write down: (1) your hypothesis for the root cause, (2) the three questions you would want answered, (3) the two frameworks you would use and why. This takes 10 minutes. It is the most important 10 minutes of the case.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>When you read the data:</strong> Do not read it passively. For each table, identify: the most surprising number, the number you would have missed without the framework, and the number the client would have used to tell a different story. Write one sentence per table before moving to the next section.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Before you read the calculations:</strong> Attempt one calculation yourself. Pick the most important calculation in the section and do it with the data provided, before reading the case's version. The gap between your calculation and the case's calculation reveals: whether you chose the right formula, whether you made the right assumptions, and whether you interpreted the result correctly.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Before you read the recommendations:</strong> Write your own recommendation in three sentences using the four-test framework from Section 6. Then read the case's recommendation and compare. The gap is your current recommendation gap. Track it across cases to see if it narrows.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>After you read the war room / practitioner notes:</strong> Identify the one thing you would not have thought of that the practitioner notes surfaced. Write it down. Over time, these form a personal library of the things experienced practitioners know that analysts do not — which is the most valuable knowledge in this field.
            </p>
          </div>

          <p><strong>Reading Sequence Recommendation — By Learning Goal:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>If Your Goal Is</th>
                <th>Start With</th>
                <th>Then Read</th>
                <th>Why This Sequence</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Build BA foundations for a career transition</td>
                <td>This Preliminary Study → Cases 11–14 (BA Career Track)</td>
                <td>Cases 01, 07, 10 in that order</td>
                <td>The career track builds the four core skills in sequence. Cases 01, 07, 10 are the most broadly applicable to corporate BA work across industries.</td>
              </tr>
              <tr>
                <td>Prepare for a consulting interview</td>
                <td>Cases 01, 04, 08 (margin, unit economics, M&amp;A)</td>
                <td>Cases 09, 05, 06 (market sizing, pharma, supply chain)</td>
                <td>Cases 01, 04, 08 cover the three most common consulting case archetypes. The second group covers the specialist case types that appear in final-round interviews.</td>
              </tr>
              <tr>
                <td>Deepen financial industry knowledge</td>
                <td>Cases 11–14 (BA Career Track) → Case 02 (banking)</td>
                <td>Cases 12, 13, 14 (insurance, lending, Islamic banking)</td>
                <td>The BA career track is built on Indonesian financial industry cases. Case 02 adds the Thai banking context. Together they cover the full spectrum of financial sector BA work.</td>
              </tr>
              <tr>
                <td>Improve executive communication</td>
                <td>Case 14 (board presentation) → Case 10 (PMI findings)</td>
                <td>Cases 02, 03, 08 (each has a strong board room section)</td>
                <td>Cases 14 and 10 have the most developed communication sections. Cases 02, 03, and 08 have board dynamics that are the most politically complex.</td>
              </tr>
              <tr>
                <td>Build data sense and analytical depth</td>
                <td>Cases 13, 04, 01 (lending, SaaS, FMCG)</td>
                <td>Cases 03, 06, 08 (energy, supply chain, PE)</td>
                <td>Cases 13 and 04 have the most developed vintage and cohort analysis sections. Cases 01 and 03 have the most detailed financial modelling. Cases 06 and 08 have the most rigorous quantitative decision frameworks.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ── SECTION 9 ── */}
      <section>
        <h2>9. The One Thing That Makes the Difference</h2>
        <div className="content">
          <p>
            Every section in this preliminary study points at a skill: symptom versus cause diagnosis, number reading, framework selection, problem structuring, recommendation quality, communication under pressure. These are all real skills and they all matter.
          </p>
          <p>
            But they are not the thing that actually separates the analysts who produce correct outputs from the analysts who produce useful ones. The thing that makes the difference is simpler and harder: <strong>intellectual honesty</strong>.
          </p>
          <div className="highlight-box">
            <strong>What Intellectual Honesty Means in Practice</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              It means saying, in the middle of Case 13, that the write-off normalisation calculation goes in a surprising direction — and working through it carefully rather than presenting a number that sounds right. It means acknowledging, in Case 08, that the normalised EBITDA calculation is uncertain and building a range rather than a point estimate. It means telling the BSN board in Case 14 that the information that would have prevented this situation was available internally and was not presented — not because it is comfortable, but because it is true and the board needs to know it to make better decisions in the future.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The cases in this library are written by practitioners who have sat in the rooms described. Every "From Someone Who Has Done This Before" section reflects a moment where the correct analytical answer and the comfortable political answer were different — and where choosing the correct answer required something more than technique. That something is intellectual honesty: the commitment to saying what the data says, even when the data is inconvenient, even when the stakeholder does not want to hear it, even when you are not entirely sure you are right.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The techniques in this library can be learned. The cases can be read. The frameworks can be memorised. But intellectual honesty cannot be taught — it can only be practised, in every analysis you do, every finding you present, and every recommendation you make. It is the thing that makes everything else in this library worth doing.
            </p>
          </div>
          <p>
            Now read Case 01. Stop before the data section. Write your hypothesis. Then see what the analysis reveals. Do this for every case, and by Case 10 you will think differently than you do today.
          </p>
        </div>
      </section>

    </div>
  );
};

export default Case15;
