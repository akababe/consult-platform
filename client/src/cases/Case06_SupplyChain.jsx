const Case06 = () => {
  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 06</span>
        <h1>The Supply Chain That Broke</h1>
        <div className="case-meta">
          Industry: Industrial / Manufacturing &bull; Level: Advanced / Strategic &mdash; C-Suite Supply Chain Restructuring &amp; Make-vs-Buy Decision
        </div>
      </header>

      <section>
        <h2>The Company and the Crisis</h2>
        <div className="content">
          <p>
            <strong>Vietronics Precision</strong> is a Vietnamese contract electronics manufacturer headquartered in Binh Duong province, with <strong>USD 380 million in annual revenue</strong> and 4,200 employees across two production facilities. The company sits in the middle tier of the regional electronics supply chain &mdash; it does not design products, and it does not sell to end consumers. It manufactures precision-assembled electronic components and sub-assemblies for six OEM customers: three Japanese (consumer electronics and industrial automation), two European (medical devices and automotive sensors), and one South Korean (display modules). Its value proposition is simple and has worked for 14 years: high-precision manufacturing at Vietnamese cost structures, with quality systems that meet the exacting standards of Japanese and European OEMs.
          </p>
          <p>
            The business model has one structural vulnerability that the board has been aware of and comfortable ignoring for most of that time: <strong>78% of a critical input &mdash; a precision-machined connector assembly used across four of its six product lines &mdash; comes from a single supplier in Dongguan, China.</strong> Guangdong Micro-Tech has been supplying this component since 2011. The relationship is close, the quality is consistent, the price is competitive, and switching costs are high. For 14 years, the arrangement worked.
          </p>
          <p>
            Then, for 11 weeks between March and June of last year, it did not. A combination of COVID-related factory shutdowns, a local government environmental compliance order that suspended Guangdong Micro-Tech's operations, and a logistics crisis at Shenzhen port created an outage that Vietronics' procurement team could not resolve. There was no qualified backup supplier. Emergency sourcing from spot markets produced components that failed incoming quality inspection at a 34% rate. Production lines ran at 22% capacity for seven weeks and were fully stopped for four.
          </p>
          <div className="highlight-box">
            <strong>What the Crisis Cost &mdash; The Number the Board Has Not Seen in Full</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The management accounts recorded the disruption as a USD 28M revenue shortfall. That number is accurate but incomplete. It captures only the revenue not recognised during the outage period. It does not capture: USD 18.4M in contractual penalty payments to OEM customers for missed delivery commitments; USD 6.2M in emergency airfreight and premium-priced spot component purchases; USD 4.8M in overtime and idle labour costs during the stop-start production period; the write-off of USD 3.1M in work-in-progress that failed quality standards when production restarted with inconsistent components; and &mdash; most significantly &mdash; the permanent loss of Hiramoto Electronics, a Japanese OEM that had been a customer for nine years and accounted for USD 42M in annual revenue. Hiramoto cited "supply chain reliability concerns" in its termination letter and awarded its contract to a Taiwanese competitor. The <strong>true cost of the 11-week outage: USD 112.6M</strong>, of which only USD 28M appeared in the accounts.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The board commissioned this engagement after the CFO presented the full cost figure at the most recent audit committee meeting. The reaction was immediate: the existing supply chain structure is not a risk to be managed. It is a liability to be restructured. The question is how, at what cost, and within what timeline &mdash; because Vietronics' five remaining OEM contracts all come up for renewal in the next seven months, and every one of those customers will ask about supply chain resilience before they sign.
            </p>
          </div>
          <p>
            Vietronics has <strong>USD 48M in available capital</strong> (cash on hand plus an undrawn revolving credit facility) for investment in supply chain restructuring. The incoming orders pipeline is strong &mdash; USD 290M in contracted backlog &mdash; but two of the five OEM customers have indicated informally that they are evaluating alternative suppliers in parallel with the renewal negotiation. The restructuring plan must be credible enough to retain those customers and honest enough to be executable before the renewal deadline.
          </p>
        </div>
      </section>

      <section>
        <h2>Who Is in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>CEO &mdash; Nguyen Thanh Liem:</strong> Founded Vietronics in 2009 after 12 years at a Taiwanese contract manufacturer. Operationally excellent &mdash; he built the quality systems that won the Japanese OEM relationships from scratch. His instinct on the supply chain crisis is vertical integration: bring the connector assembly production in-house, eliminate the dependency permanently, and use the capability as a differentiator with OEM customers. His instinct is directionally reasonable. The economics of in-house production at Vietronics' current volume need to be stress-tested before the board commits USD 28&ndash;35M of its USD 48M available capital to a production line for a component it has never manufactured.
          </div>
          <div className="highlight-box">
            <strong>CFO &mdash; Tran Minh Duc:</strong> Joined from KPMG Vietnam four years ago. He is the person who surfaced the USD 112.6M true cost figure and is now the most anxious member of the leadership team. His concern is not just the past disruption &mdash; it is that the OEM contract renewal negotiations will go badly if the company cannot demonstrate a concrete, funded, time-bound resilience plan. He is also concerned about the capital allocation: USD 48M sounds like enough until you model the in-house manufacturing option properly and discover that the tooling, equipment, clean-room buildout, and working capital requirements consume it almost entirely, leaving no buffer for anything else that could go wrong.
          </div>
          <div className="highlight-box">
            <strong>Head of Procurement &mdash; Pham Thi Lan:</strong> The person who lived through the crisis in real time. She spent 11 weeks making calls to every connector assembly supplier in Southeast Asia and finding that none of them could supply to Vietronics' tolerance specifications without a 6&ndash;9 month qualification process. She has already identified two potential alternative suppliers &mdash; one in Penang, Malaysia, and one in Chonburi, Thailand &mdash; and has done preliminary technical discussions with both. Her view: dual-sourcing is achievable, but the qualification process requires resources and a timeline that conflicts with the OEM renewal deadline. She needs budget and a decision to start the process now.
          </div>
          <div className="highlight-box">
            <strong>VP of Engineering &mdash; Dr. Do Quoc Hung:</strong> The person who knows whether product redesign is feasible. He has been quietly exploring whether the four affected product lines could be redesigned to use a more commoditised connector assembly &mdash; one available from multiple suppliers in the region without the precision-machining requirement that makes the current component a specialist product. His preliminary assessment: redesign is technically feasible for two of the four product lines within 18 months; the other two would require OEM requalification that could take 24&ndash;36 months and customer approval that is not guaranteed. He has not presented this analysis to the board because it was not formally requested. It needs to be on the table.
          </div>
          <div className="highlight-box">
            <strong>Key Account Director &mdash; Sandra Wijaya:</strong> Manages the OEM customer relationships. She is the most informed person in the company about what the customers actually think &mdash; and what they will accept as sufficient evidence of supply chain resilience at the renewal negotiation. Her intelligence: two customers (Siemens Automotive and Mitsui Industrial) are seriously evaluating alternatives. Three others are loyal but concerned. All five have asked for a written supply chain resilience plan as part of the renewal process. Sandra's view: the customers do not need Vietronics to have solved the problem by renewal &mdash; they need to see a credible, funded, time-bound plan with named milestones. A plan that starts with "we have begun qualification of a second supplier and expect completion by Q3" is more reassuring to a Japanese OEM than a plan that says "we are building an in-house production line that will be operational in 24 months."
          </div>
        </div>
      </section>

      <section>
        <h2>What the Problem Actually Is</h2>
        <div className="content">
          <p>
            The presenting problem is a supply chain crisis caused by a single-source dependency. The actual problem is more structural: <strong>Vietronics has never systematically assessed which parts of its value chain it should own versus buy, and as a result it has drifted into a configuration that optimises for unit cost at the expense of resilience.</strong> The Guangdong Micro-Tech dependency is the most visible symptom. It is not the only one.
          </p>
          <p>
            A preliminary scan of Vietronics' 14 key input categories reveals that the connector assembly is not the only sole-sourced critical input. A specialised circuit board laminate comes from a single Taiwanese supplier. A precision bearing used in industrial automation sub-assemblies has only one qualified supplier globally. The crisis revealed the connector assembly vulnerability because it materialised. The circuit board laminate and precision bearing vulnerabilities exist in the same structural form and will materialise under the right conditions.
          </p>
          <div className="highlight-box">
            <strong>The Precise Problem Statement</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <em>Which supply chain restructuring option &mdash; vertical integration, dual-sourcing, product redesign, or some combination &mdash; maximises Vietronics' supply chain resilience within the OEM contract renewal timeline and the USD 48M capital constraint, while generating sufficient commercial credibility with OEM customers to retain the USD 290M contracted backlog?</em>
            </p>
          </div>
          <p><strong>Four questions structure the engagement:</strong></p>
          <ol>
            <li><strong>What is the true economics of each restructuring option</strong> &mdash; make, dual-source, or redesign &mdash; at realistic volume and cost assumptions, modelled at three OEM contract scenarios?</li>
            <li><strong>Which option is executable within seven months</strong> to a level of credibility sufficient for OEM contract renewal &mdash; even if full implementation takes longer?</li>
            <li><strong>What is the resilience profile of the other 13 input categories</strong>, and which of them represent the next crisis waiting to happen?</li>
            <li><strong>What is the recoverable value of the lost Hiramoto relationship</strong>, and what restructuring commitment would be required to reopen that conversation?</li>
          </ol>
        </div>
      </section>

      <section>
        <h2>Analytical Frameworks</h2>
        <div className="content">

          <h3 style={{ fontSize: '17px', marginTop: '16px', marginBottom: '10px' }}>Framework 1 &mdash; Value Chain Analysis: Where Should Vietronics Own the Activity?</h3>
          <p>
            Porter's value chain framework, applied to a contract manufacturer, answers a specific question: which activities in the production process generate competitive advantage when owned internally, and which are commodity activities where the market can execute as well or better? For Vietronics, the value chain runs from component procurement through incoming quality inspection, sub-assembly, precision assembly, final test, packaging, and logistics.
          </p>
          <p>
            The analysis identifies Vietronics' genuine differentiating activities: precision assembly (where its process engineering capability is the reason Japanese OEMs chose it over lower-cost competitors), quality systems (where its ISO 13485 medical device certification and IATF 16949 automotive certification are meaningful barriers), and customer-specific process customisation (where its engineering team adapts production processes to individual OEM specifications). These are the activities that justify Vietronics' price premium over commodity contract manufacturers and that should be protected and deepened.
          </p>
          <p>
            The connector assembly manufacturing &mdash; the activity the CEO wants to bring in-house &mdash; is a precision machining activity. It requires different equipment, different process expertise, different quality disciplines, and different raw material procurement capabilities than Vietronics' current operations. The value chain analysis asks: does owning this activity create competitive advantage, or does it create a new area of operational risk in a domain where Vietronics has no incumbent capability? The answer shapes the make-vs-buy recommendation.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 2 &mdash; Make-vs-Buy Economic Model</h3>
          <p>
            For each restructuring option, the team builds a 5-year total cost of ownership model: not just the unit cost of the component, but the full loaded cost including capital amortisation, quality failure costs, supply security premium, and opportunity cost of management attention. The options are:
          </p>
          <p>
            <strong>Option A &mdash; Vertical Integration (Make):</strong> Build an in-house precision machining capability to produce the connector assembly. Requires CNC machining equipment, a clean-room environment, process engineers, quality systems extension, and raw material procurement. High upfront investment, low ongoing unit cost at scale, eliminates external dependency, but creates a new operational risk in an unfamiliar domain.
          </p>
          <p>
            <strong>Option B &mdash; Dual-Sourcing (Buy from two):</strong> Qualify a second supplier alongside Guangdong Micro-Tech. Requires a 6&ndash;9 month qualification process, ongoing price premium (second sources typically price 8&ndash;15% above the incumbent because they carry lower volume), and maintained inventory buffers. Lower upfront investment, faster implementation, preserves asset-light model, but retains external dependency.
          </p>
          <p>
            <strong>Option C &mdash; Product Redesign (Eliminate the dependency):</strong> Redesign affected product lines to use a more commoditised connector assembly available from multiple regional suppliers. Requires R&amp;D investment, OEM requalification (customer approval of the design change), and transition period where both old and new designs are in production. Highest long-term resilience, slowest to implement, highest execution risk from OEM requalification uncertainty.
          </p>
          <p>
            <strong>Option D &mdash; Hybrid (Dual-source now, redesign over 24 months):</strong> Immediately begin dual-source qualification to address the near-term OEM renewal deadline, while investing in product redesign for the two product lines where it is technically feasible. This is the option that scores highest on timeline compatibility with the OEM renewal without betting the company on a single long-horizon solution.
          </p>

          <h3 style={{ fontSize: '17px', marginTop: '20px', marginBottom: '10px' }}>Framework 3 &mdash; Supply Chain Resilience Matrix</h3>
          <p>
            Beyond the connector assembly, the team maps all 14 critical input categories on a resilience matrix with two axes: <strong>disruption probability</strong> (likelihood of supply interruption in the next 36 months, based on supplier concentration, geographic risk, and regulatory exposure) and <strong>disruption impact</strong> (revenue at risk if the input is unavailable for 4, 8, and 12 weeks respectively). The matrix produces four quadrants: monitor (low probability, low impact), contingency plan (low probability, high impact), active management (high probability, low impact), and immediate action (high probability, high impact). The connector assembly sits in "immediate action." The circuit board laminate and precision bearing sit in "contingency plan." The matrix tells the board which vulnerabilities require capital investment now versus which require planning without immediate spend.
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
                <td><strong>Value chain analysis</strong></td>
                <td>Should Vietronics own this activity?</td>
                <td>Differentiating vs. commodity activity map</td>
                <td>Make vs. buy strategic rationale</td>
              </tr>
              <tr>
                <td><strong>Make-vs-buy model</strong></td>
                <td>What does each option actually cost over 5 years?</td>
                <td>Total cost of ownership per option at 3 volume scenarios</td>
                <td>Capital allocation and option selection</td>
              </tr>
              <tr>
                <td><strong>Resilience matrix</strong></td>
                <td>Where is the next crisis?</td>
                <td>14-input heat map by probability and impact</td>
                <td>Prioritisation of remaining vulnerability remediation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Data</h2>
        <div className="content">

          <p><strong>Connector Assembly &mdash; Current State:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Current (Guangdong Micro-Tech)</th>
                <th>Option A: In-House</th>
                <th>Option B: Dual-Source</th>
                <th>Option C: Redesign</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unit cost (connector assembly)</td>
                <td>USD 4.20</td>
                <td>USD 3.10&ndash;4.80 (volume-dependent)</td>
                <td>USD 4.62&ndash;4.83 (incumbent + second source blend)</td>
                <td>USD 1.80&ndash;2.40 (commodity replacement)</td>
              </tr>
              <tr>
                <td>Annual volume (units)</td>
                <td>4.2M</td>
                <td>4.2M (same)</td>
                <td>4.2M (split 60/40)</td>
                <td>Reduces to 1.8M (2 product lines redesigned)</td>
              </tr>
              <tr>
                <td>Lead time</td>
                <td>6 weeks</td>
                <td>2 weeks (in-house)</td>
                <td>6&ndash;8 weeks (dual buffer)</td>
                <td>2&ndash;4 weeks (commodity sourcing)</td>
              </tr>
              <tr>
                <td>Single-source risk</td>
                <td>Critical &mdash; 78% from one supplier</td>
                <td>Eliminated (internal)</td>
                <td>Reduced (max 60% from any one source)</td>
                <td>Eliminated for redesigned lines</td>
              </tr>
              <tr>
                <td>Time to implement</td>
                <td>Current state</td>
                <td>18&ndash;24 months</td>
                <td>6&ndash;9 months (qualification)</td>
                <td>18&ndash;36 months (incl. OEM requalification)</td>
              </tr>
              <tr>
                <td>Capital required</td>
                <td>Nil</td>
                <td>USD 28&ndash;35M</td>
                <td>USD 4.2&ndash;6.8M</td>
                <td>USD 8.4&ndash;12.6M (R&amp;D + transition)</td>
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: '20px' }}><strong>Supply Chain Resilience Matrix &mdash; All 14 Critical Input Categories:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Input Category</th>
                <th>Current Suppliers</th>
                <th>Sole-Sourced?</th>
                <th>Disruption Probability (36M)</th>
                <th>Revenue at Risk (8-week outage)</th>
                <th>Recovery Time</th>
                <th>Quadrant</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Connector assembly (precision)</strong></td>
                <td>1 (CN)</td>
                <td>Yes &mdash; 78%</td>
                <td>High (materialised)</td>
                <td>USD 62M</td>
                <td>11 weeks+</td>
                <td><strong>Immediate Action</strong></td>
              </tr>
              <tr>
                <td><strong>Circuit board laminate (specialty)</strong></td>
                <td>1 (TW)</td>
                <td>Yes &mdash; 100%</td>
                <td>Medium-High</td>
                <td>USD 48M</td>
                <td>14&ndash;20 weeks</td>
                <td><strong>Contingency Plan</strong></td>
              </tr>
              <tr>
                <td><strong>Precision bearing (industrial)</strong></td>
                <td>1 (JP)</td>
                <td>Yes &mdash; 100%</td>
                <td>Low-Medium</td>
                <td>USD 28M</td>
                <td>8&ndash;12 weeks</td>
                <td><strong>Contingency Plan</strong></td>
              </tr>
              <tr>
                <td><strong>Standard PCB</strong></td>
                <td>4 (CN, VN, MY, TH)</td>
                <td>No</td>
                <td>Low</td>
                <td>USD 12M</td>
                <td>2&ndash;3 weeks</td>
                <td>Monitor</td>
              </tr>
              <tr>
                <td><strong>Copper wire harness</strong></td>
                <td>3 (VN, CN, PH)</td>
                <td>No</td>
                <td>Low</td>
                <td>USD 18M</td>
                <td>3&ndash;4 weeks</td>
                <td>Monitor</td>
              </tr>
              <tr>
                <td><strong>Adhesive compounds (medical grade)</strong></td>
                <td>2 (DE, US)</td>
                <td>No (2 sources)</td>
                <td>Medium</td>
                <td>USD 8M</td>
                <td>4&ndash;6 weeks</td>
                <td>Active Management</td>
              </tr>
              <tr>
                <td><strong>Optical sensors</strong></td>
                <td>2 (JP, KR)</td>
                <td>No</td>
                <td>Low-Medium</td>
                <td>USD 22M</td>
                <td>5&ndash;8 weeks</td>
                <td>Active Management</td>
              </tr>
              <tr>
                <td><strong>Packaging materials</strong></td>
                <td>6 (VN domestic)</td>
                <td>No</td>
                <td>Very Low</td>
                <td>USD 2M</td>
                <td>&lt; 1 week</td>
                <td>Monitor</td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '14px', marginTop: '12px' }}>
            <strong>Note:</strong> Table shows 8 of 14 input categories. Remaining 6 are all in the Monitor quadrant with revenue at risk below USD 5M and recovery times under 3 weeks. Full matrix available in appendix. The three inputs in Immediate Action and Contingency Plan account for 89% of the total supply chain risk exposure.
          </p>

          <p style={{ marginTop: '20px' }}><strong>OEM Customer Renewal Status:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Annual Revenue</th>
                <th>Contract Expiry</th>
                <th>Renewal Risk</th>
                <th>Supply Chain Concern Expressed</th>
                <th>Minimum Credibility Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Siemens Automotive (DE)</strong></td>
                <td>USD 84M</td>
                <td>Month 5</td>
                <td>High &mdash; evaluating alternatives</td>
                <td>Yes &mdash; formal written concern</td>
                <td>Named second supplier + qualification timeline</td>
              </tr>
              <tr>
                <td><strong>Mitsui Industrial (JP)</strong></td>
                <td>USD 68M</td>
                <td>Month 6</td>
                <td>High &mdash; evaluating alternatives</td>
                <td>Yes &mdash; site audit requested</td>
                <td>Dual-source operational OR in-house FID approved</td>
              </tr>
              <tr>
                <td><strong>Medtrex Europe (NL)</strong></td>
                <td>USD 52M</td>
                <td>Month 7</td>
                <td>Medium &mdash; loyal but concerned</td>
                <td>Yes &mdash; verbal in last QBR</td>
                <td>Written resilience plan with board approval</td>
              </tr>
              <tr>
                <td><strong>LG Display (KR)</strong></td>
                <td>USD 48M</td>
                <td>Month 7</td>
                <td>Low &mdash; satisfied with response</td>
                <td>Informal only</td>
                <td>Written plan sufficient</td>
              </tr>
              <tr>
                <td><strong>Bosch Vietnam (DE/VN)</strong></td>
                <td>USD 38M</td>
                <td>Month 7</td>
                <td>Low &mdash; strong relationship</td>
                <td>None</td>
                <td>Standard renewal process</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>The Calculations</h2>
        <div className="content">

          <p><strong>Calculation 1 &mdash; The True Cost of the Disruption: USD 112.6M</strong></p>
          <div className="calculation">
{`The management accounts recorded: USD 28M revenue shortfall
The full cost, properly counted:

Direct financial losses:
  Revenue not recognised (11 weeks at 22% capacity then zero):
    Normal weekly revenue: $380M \xf7 52 = $7.31M/week
    Weeks 1\u20137 (22% capacity): $7.31M \xd7 7 \xd7 78% foregone = $39.8M
    Weeks 8\u201311 (full stop): $7.31M \xd7 4 = $29.2M
    Gross revenue impact:                               $69.0M
    Less: variable cost avoided during outage:         \u2212$41.0M
    Net revenue shortfall (what accounts captured):     $28.0M \u2713

  Contractual penalties paid to OEM customers:
    Siemens Automotive:    $6.8M  (delivery SLA breach)
    Mitsui Industrial:     $5.4M  (JIT schedule failure)
    Medtrex Europe:        $4.2M  (medical device delivery breach)
    LG Display:            $1.6M  (display module delay)
    Bosch Vietnam:         $0.4M  (minor, goodwill resolution)
    Total penalties:                                    $18.4M

  Emergency procurement and logistics:
    Spot market components (34% rejection rate):
      Purchased: 480,000 units \xd7 $6.80 spot price = $3.3M
      Rejected (163,200 units): $3.3M \xd7 34% = $1.1M wasted
    Emergency airfreight (vs. normal sea freight):       $3.2M
    Premium overtime labour (restart surge):             $1.8M
    Total emergency costs:                               $6.2M

  Production quality losses:
    WIP scrapped on restart (inconsistent components):   $3.1M
    Customer returns and rework post-delivery:           $1.8M
    Total quality losses:                                $4.9M

  Permanent customer loss \u2014 Hiramoto Electronics:
    Annual revenue lost:          $42.0M
    Average OEM relationship duration: 8 years remaining
    Gross margin on Hiramoto revenue: 18%
    Annual gross profit lost:     $7.56M
    NPV of lost relationship (WACC 14%, 8yr):
      $7.56M \xd7 [(1\u2212(1.14)\u207b\u2078) \xf7 0.14] = $7.56M \xd7 4.639 = $35.1M
    (Conservative \u2014 excludes growth and relationship referral value)

TOTAL TRUE COST:
  Management accounts (net revenue):  $28.0M
  Contractual penalties:              $18.4M
  Emergency procurement/logistics:     $6.2M
  Quality losses:                      $4.9M
  Lost Hiramoto NPV:                  $35.1M (excluded from accounts)
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  TRUE COST:                         $92.6M direct + $35.1M NPV = $127.7M

  vs. annual cost of dual-sourcing (Calc 3): $1.8M/year premium
  Payback on dual-source investment:  $6.8M \xf7 $1.8M = 3.8 years
  vs. one disruption cost:           $127.7M
  The resilience investment pays for itself in 0.05 disruptions.
  \u27f9 The board debated whether to qualify a second supplier for years.
     The cost of that debate: $127.7M.
     The cost of qualifying the second supplier: $6.8M.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 2 &mdash; Option A: Vertical Integration Economics</strong></p>
          <div className="calculation">
{`In-house connector assembly production \u2014 full economics

Capital investment required:
  CNC machining equipment (12 machines @ $1.4M each):    $16.8M
  Clean-room facility buildout (2,400 sqm):               $6.2M
  Tooling and fixtures (product-specific):                $3.8M
  Quality systems extension (ISO certification):          $1.2M
  ERP and production management systems:                  $0.8M
  Working capital (3-month raw material inventory):       $4.6M
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  Total capital investment:                              $33.4M
  Available capital:                                     $48.0M
  Remaining after investment:                            $14.6M  (dangerously thin)

Unit economics at 4.2M units/year (steady state, Year 3+):
  Raw materials (precision steel rod, machining consumables): $1.84/unit
  Direct labour (12 operators, 2 shifts):                     $0.48/unit
  Overhead allocation (facility, utilities, depreciation):    $0.62/unit
  Quality control and rejection allowance (3.2% scrap rate):  $0.16/unit
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  In-house unit cost (Year 3+ at full utilisation):          $3.10/unit
  vs. current buy price:                                      $4.20/unit
  Annual savings at full utilisation:                         $1.10 \xd7 4.2M = $4.62M/yr

Learning curve problem (Years 1\u20132):
  CNC machining has a steep learning curve. Industry benchmark:
  a new precision machining operation reaches 85% yield in Year 1,
  92% in Year 2, 96.8% (steady state) in Year 3.
  Year 1 effective unit cost: $3.10 \xf7 85% yield = $3.65/unit (before scrap)
    Plus scrap cost: 15% \xd7 $1.84 material = $0.28/unit
    True Year 1 unit cost: $3.93/unit \u2014 barely below buy price
  Year 2 unit cost: $3.10 \xf7 92% yield + scrap = $3.42/unit \u2014 still close to buy

NPV analysis (5-year, WACC 14%):
  Year 0: \u2212$33.4M (capital)
  Year 1: savings vs. buy = $4.20\u2212$3.93 = $0.27 \xd7 4.2M = $1.13M   PV: $0.99M
  Year 2: savings = $4.20\u2212$3.42 = $0.78 \xd7 4.2M = $3.28M            PV: $2.52M
  Year 3: savings = $4.20\u2212$3.10 = $1.10 \xd7 4.2M = $4.62M            PV: $3.12M
  Year 4: $4.62M savings                                              PV: $2.74M
  Year 5: $4.62M savings                                              PV: $2.40M
  5-year NPV: \u2212$33.4M + $0.99+2.52+3.12+2.74+2.40 = \u2212$21.6M

  Break-even (undiscounted): $33.4M \xf7 $4.62M = 7.2 years
  Break-even (discounted):   Never within a 10-year planning horizon at WACC 14%

  Additional risks not in NPV:
    \u2022 Vietronics has zero precision machining experience \u2014 execution risk HIGH
    \u2022 $14.6M remaining capital leaves no buffer for other disruptions
    \u2022 24-month build timeline means no resilience benefit before OEM renewals
    \u2022 If volumes decline 20%, unit economics deteriorate materially

\u27f9 Vertical integration has negative NPV, consumes 70% of available capital,
   provides no benefit before the OEM renewal deadline, and introduces
   a new operational risk in a domain where Vietronics has no capability.
   The CEO's instinct to own the supply chain is understandable.
   The economics do not support this specific option.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 3 &mdash; Option B: Dual-Sourcing Economics</strong></p>
          <div className="calculation">
{`Dual-source qualification \u2014 Penang supplier (Nexus Precision, MY)

Qualification costs (one-time):
  Technical assessment and audit:                         $0.28M
  Sample production runs and testing:                     $0.84M
  Process validation (PPAP for automotive customers):     $1.12M
  Quality system alignment and documentation:             $0.46M
  Initial tooling at second supplier:                     $1.64M
  Vietronics procurement team time (6 months):            $0.34M
  \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
  Total qualification investment:                         $4.68M
  Timeline to qualified:                                  6\u20139 months  \u2713 (before OEM renewals)

Ongoing cost premium (dual-source vs. single-source):
  Guangdong Micro-Tech volume (60%): 2.52M units \xd7 $4.20 = $10.58M/yr
  Nexus Precision volume (40%):      1.68M units \xd7 $4.83 = $8.11M/yr
    (Nexus priced at 15% premium as second-source \u2014 market standard)
  Total dual-source annual spend:                        $18.69M/yr
  vs. single-source annual spend: 4.2M \xd7 $4.20 =    $17.64M/yr
  Annual cost premium:                                    $1.05M/yr

Buffer inventory requirement:
  With dual-source, safety stock can reduce from 8 weeks to 4 weeks
  (because recovery time from a single-source failure drops from 11+ weeks to
   4\u20136 weeks \u2014 the time to redirect volume to the remaining supplier)
  Inventory reduction: 4 weeks \xd7 $17.64M/52 =        \u2212$1.36M (cash release)
  Net working capital impact: positive $1.36M offset against premium

5-year NPV of dual-source option:
  Year 0: \u2212$4.68M qualification
  Years 1\u20135: \u2212$1.05M/yr ongoing premium
  Working capital release Year 1: +$1.36M
  5-year NPV: \u2212$4.68M + ($1.36M \u2212 $1.05M \xd7 5yr discounted)
    = \u2212$4.68M + $1.36M \u2212 $3.62M = \u2212$6.94M

  But: disruption cost avoided (probability-weighted):
    Probability of major disruption (>4 weeks) in 5 years: 35%
    (based on Guangdong Micro-Tech's track record + geopolitical risk)
    Expected disruption cost (from Calc 1, partial): $127.7M \xd7 35% = $44.7M
    With dual-source, disruption probability falls to ~8%
    Disruption cost reduction: (35% \u2212 8%) \xd7 $127.7M = $34.5M
    NPV of disruption cost avoided (discounted): $24.6M

  Risk-adjusted NPV: \u2212$6.94M + $24.6M = +$17.7M  \u2713 POSITIVE

  Capital consumed:  $4.68M  (leaves $43.3M remaining \u2014 comfortable buffer)
  Implementation:    6\u20139 months  (before OEM renewal deadlines)
  OEM credibility:   HIGH \u2014 named supplier, qualification in progress

\u27f9 Dual-sourcing is the only option with positive risk-adjusted NPV,
   feasibility within the OEM renewal timeline, and capital consumption
   that preserves financial flexibility. This is the base recommendation.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 4 &mdash; Option C/D: Product Redesign as a Complement</strong></p>
          <div className="calculation">
{`Product redesign feasibility (Dr. Do's engineering assessment):

Product lines using the precision connector assembly:
  Line A \u2014 Industrial automation sub-assemblies: REDESIGNABLE
    Technical path: replace precision connector with IEC standard connector
    R&D cost: $2.4M  Timeline: 14 months
    OEM requalification: Bosch Vietnam \u2014 LOW RISK (internal approval process)
    Unit cost reduction: $4.20 \u2192 $1.90 = $2.30/unit
    Annual volume: 1.1M units \u2192 annual saving: $2.53M/yr
    NPV of redesign (5yr, WACC 14%): \u2212$2.4M + $2.53M \xd7 3.433 = +$6.28M  \u2713

  Line B \u2014 Display module connectors: REDESIGNABLE
    Technical path: surface-mount alternative connector
    R&D cost: $1.8M  Timeline: 16 months
    OEM requalification: LG Display \u2014 MEDIUM RISK (12\u201318 month review)
    Unit cost reduction: $4.20 \u2192 $2.10 = $2.10/unit
    Annual volume: 0.7M units \u2192 annual saving: $1.47M/yr
    NPV: \u2212$1.8M + $1.47M \xd7 3.433 = +$3.25M  \u2713  (but long OEM requalification)

  Line C \u2014 Medical device connectors: NOT REDESIGNABLE
    Precision connector is functionally required by Medtrex specification.
    Redesign would require Medtrex to re-file with regulatory authorities.
    Timeline: 3\u20135 years, probability of approval: uncertain.
    Recommendation: Do not pursue. Maintain dual-source for this line.

  Line D \u2014 Automotive sensor connectors: NOT REDESIGNABLE (short term)
    IATF 16949 certification means any design change requires full customer
    PPAP reapproval from Siemens Automotive. Timeline: 24\u201336 months.
    Recommendation: Begin design exploration in Year 2. Not a near-term fix.

Redesign combined NPV (Lines A + B): +$9.53M
Combined investment: $4.2M over 16 months
Remaining connector volume (Lines C + D): 2.4M units still need dual-source

Hybrid Option D (Dual-source now + Redesign Lines A and B):
  Immediate action: Qualify Nexus Precision (6\u20139 months, $4.68M)
  Parallel: Begin Line A redesign (14 months, $2.4M)
  Year 2: Begin Line B redesign (16 months, $1.8M)
  Total investment: $4.68M + $2.4M + $1.8M = $8.88M
  Total NPV: +$17.7M (dual-source) + $9.53M (redesign) = +$27.2M  \u2713\u2713
  Capital consumed: $8.88M (leaves $39.1M \u2014 strong buffer)
  5-year risk-adjusted NPV of Hybrid: +$27.2M  \u2190 HIGHEST OF ALL OPTIONS

\u27f9 The hybrid is unambiguously the best option:
   fastest to OEM renewal credibility (dual-source in Month 7\u20139),
   highest long-term NPV (redesign eliminates 50% of remaining exposure),
   lowest capital consumption ($8.88M vs. $33.4M for vertical integration),
   and preserves $39M of financial flexibility for other supply chain investments.`}
          </div>

          <p style={{ marginTop: '20px' }}><strong>Calculation 5 &mdash; The Hiramoto Recovery: What It Would Take</strong></p>
          <div className="calculation">
{`Hiramoto Electronics lost relationship:
  Annual revenue lost:        $42.0M
  Gross margin:               18%
  Annual gross profit:        $7.56M
  NPV of relationship (8yr):  $35.1M (from Calc 1)

Hiramoto context (from Sandra Wijaya's intelligence):
  Hiramoto awarded its contract to Forza Electronics (Taiwan), but the
  transition is not complete. Forza is currently in qualification for
  two of the four Vietronics product lines. The other two lines are
  still being supplied by Vietronics on a short-term extension.
  The window to propose re-engagement is approximately 6 months.

What Hiramoto would require to reconsider:
  (Based on Sandra's knowledge of Japanese OEM procurement culture)
  1. Qualified second supplier with PPAP documentation: mandatory
  2. Written board-level supply chain policy: mandatory
  3. Safety stock commitment (8 weeks on-hand for Hiramoto components): mandatory
  4. Price concession (typical re-engagement demand): 4\u20136% reduction
  5. Penalty cap revision (new contract): lower caps on future disruptions

Cost of re-engagement:
  Dual-source qualification (already in plan):                $4.68M
  Safety stock for Hiramoto lines (8 weeks \xd7 $0.8M/week):  $6.4M additional WC
  Price concession (5% on $42M):                             \u2212$2.1M/yr ongoing
  Relationship re-investment (site visits, engineering support): $0.4M
  Total incremental cost vs. base plan:                       $7.2M + $2.1M/yr

NPV of Hiramoto re-engagement:
  Revenue recovered: $42.0M/yr
  Gross profit recovered: $7.56M/yr
  Less price concession: \u2212$2.1M/yr
  Net additional gross profit: $5.46M/yr
  Less: incremental WC cost ($6.4M \xd7 14% annual cost):     \u2212$0.90M/yr
  Net annual benefit: $4.56M/yr
  Less: $7.2M one-time re-engagement cost
  NPV (6yr remaining, WACC 14%): \u2212$7.2M + $4.56M \xd7 3.889 = +$10.5M  \u2713

  Probability of successful re-engagement (Sandra's estimate): 55%
  Risk-adjusted NPV: $10.5M \xd7 55% = $5.8M

\u27f9 Pursuing Hiramoto re-engagement is NPV-positive at $5.8M risk-adjusted.
   The prerequisite is completing the dual-source qualification \u2014 which
   is already the base recommendation. The incremental cost of pursuing
   Hiramoto is the safety stock working capital ($6.4M) and the price
   concession ($2.1M/yr). Authorise Sandra to open the conversation
   once the Nexus Precision qualification is formally underway
   (Month 2\u20133 of execution). The window closes in 6 months.`}
          </div>
        </div>
      </section>

      <section>
        <h2>Findings</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Finding 1 &mdash; The Crisis Cost USD 127.7M, Not the USD 28M in the Accounts</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The management accounts captured the net revenue shortfall during the outage period. They did not capture penalty payments, emergency procurement losses, quality write-offs, or the NPV of the lost Hiramoto relationship. When the full cost is properly counted, the 11-week outage cost USD 127.7M &mdash; 4.6 times what the accounts recorded. This is the number that reframes the board's risk appetite. A supply chain restructuring investment of USD 8.88M to prevent future disruptions at this cost level is not a cost to be minimised. It is a capital allocation that pays for itself at a disruption probability of 7% or higher &mdash; a threshold the historical evidence already exceeds.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 2 &mdash; Vertical Integration Has Negative NPV and Should Not Be Built</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The CEO's instinct to own the supply chain is strategically understandable. The economics do not support this specific implementation. An in-house precision machining operation requires USD 33.4M in capital (70% of available reserves), takes 24 months to operational (after the OEM renewal deadline), has a negative 5-year NPV at Vietronics' WACC, and introduces a new operational risk domain where the company has no incumbent capability. The break-even on an undiscounted basis is 7.2 years. Precision machining is not a differentiating activity for a contract electronics manufacturer &mdash; it is a specialist trade that Guangdong Micro-Tech has spent 20 years developing. The value chain analysis is unambiguous: this is a buy, not a make.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 3 &mdash; Dual-Sourcing Is the Immediate Priority and the OEM Renewal Enabler</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Qualifying Nexus Precision in Penang costs USD 4.68M, takes 6&ndash;9 months (before all five OEM renewals), and generates a risk-adjusted NPV of +USD 17.7M by reducing the probability of a repeat disruption from 35% to 8%. The annual cost premium of USD 1.05M is the smallest ongoing cost of any option and is partially offset by the safety stock reduction that dual-sourcing enables. Most critically, it produces the specific deliverable that Siemens Automotive and Mitsui Industrial have stated is their minimum requirement for contract renewal: a named second supplier with a qualification timeline.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 4 &mdash; Product Redesign on Lines A and B Is Highly Attractive but Cannot Replace Dual-Sourcing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The engineering team's redesign path for Lines A and B generates a combined NPV of USD 9.53M at a USD 4.2M investment &mdash; strong returns. But redesign takes 14&ndash;16 months and requires OEM requalification, meaning it cannot address the OEM renewal deadline. It should run in parallel with dual-sourcing as a complementary long-term resilience measure, not as an alternative. Lines C and D cannot be redesigned within any commercially relevant timeline and will remain dependent on the connector assembly supply chain indefinitely &mdash; making dual-sourcing a permanent requirement, not a transitional one.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Finding 5 &mdash; The Next Crisis Is Already Visible in the Resilience Matrix</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The connector assembly is resolved by the hybrid plan. The circuit board laminate (sole-sourced from Taiwan, USD 48M revenue at risk, 14&ndash;20 week recovery time) and the precision bearing (sole-sourced from Japan, USD 28M revenue at risk) are the next two vulnerabilities. Neither requires immediate capital investment &mdash; both require contingency planning: identifying and technically assessing alternative suppliers, negotiating dual-qualification agreements with reasonable volume commitments, and maintaining sample inventory buffers. The board should approve a program to address these two vulnerabilities in Year 2, funded from operating cash flow rather than the restructuring capital.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2>Recommendations</h2>
        <div className="content">
          <h3 style={{ fontSize: '17px', marginBottom: '12px' }}>Phase 1 &mdash; Before OEM Renewals (Months 1&ndash;7)</h3>
          <div className="highlight-box">
            <strong>R1. Immediately Begin Nexus Precision Qualification</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Assign Pham Thi Lan and a dedicated qualification team to begin the Nexus Precision (Penang) supplier qualification process this month. Initiate technical assessment, sample production runs, and PPAP process in parallel. Target: PPAP approval by Month 7.
              <br /><strong>Investment:</strong> USD 4.68M.
              <br /><strong>Why this month:</strong> Siemens Automotive and Mitsui Industrial renewals are in Months 5&ndash;6. Sandra Wijaya needs to walk into those negotiations with a qualification process formally underway and a documented timeline, not a plan to begin one. The process must start now or the renewal window closes.
              <br /><strong>Owner:</strong> Head of Procurement + CEO sponsorship.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R2. Produce and Distribute Written Supply Chain Resilience Plan to All Five OEM Customers</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Board-approved document covering: (a) root cause analysis of the disruption, (b) dual-source qualification status and timeline, (c) safety stock commitment per customer, (d) resilience matrix summary for all 14 input categories, (e) governance: monthly supply chain risk review with results shared quarterly with OEM customers.
              <br /><strong>Why:</strong> Medtrex Europe, LG Display, and Bosch Vietnam have all indicated that a written board-approved plan is sufficient for renewal. This document converts three renewals from "at risk" to "confirmed" without any additional commercial concession.
              <br /><strong>Owner:</strong> CFO (document owner) + CEO (board approval) + Sandra Wijaya (customer delivery).
              <br /><strong>Timeline:</strong> Distributed by Month 2.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R3. Open Hiramoto Re-Engagement Conversation in Month 2&ndash;3</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Sandra Wijaya to contact Hiramoto procurement with a meeting request framed around "sharing our supply chain restructuring plan and discussing whether there is a basis for renewed partnership." Do not lead with the price concession. Lead with the dual-source qualification progress and the safety stock commitment. The commercial terms (price concession) come after Hiramoto signals receptivity.
              <br /><strong>Why now:</strong> The 6-month window before Forza's qualification is complete is closing. A risk-adjusted NPV of USD 5.8M justifies the investment in the conversation.
              <br /><strong>Owner:</strong> Sandra Wijaya + CEO for executive relationship.
            </p>
          </div>

          <h3 style={{ fontSize: '17px', marginBottom: '12px', marginTop: '24px' }}>Phase 2 &mdash; Structural Resilience (Months 8&ndash;24)</h3>
          <div className="highlight-box">
            <strong>R4. Begin Product Redesign on Lines A and B</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Authorise Dr. Do Quoc Hung to begin formal redesign programs for Line A (industrial automation, USD 2.4M, 14 months) and Line B (display modules, USD 1.8M, 16 months). Initiate Bosch Vietnam and LG Display design change notification processes in parallel.
              <br /><strong>Investment:</strong> USD 4.2M (phased: USD 2.4M Month 8, USD 1.8M Month 12).
              <br /><strong>Expected NPV:</strong> USD 9.53M over 5 years. Eliminates the connector assembly dependency for 50% of current volume once complete.
            </p>
          </div>
          <div className="highlight-box">
            <strong>R5. Circuit Board Laminate and Precision Bearing &mdash; Contingency Planning Program</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>What:</strong> Assign procurement to identify and technically assess alternative suppliers for both inputs. No qualification investment in Year 1 &mdash; assessment only. If viable alternatives exist, proceed to qualification in Year 2 from operating cash flow. Maintain 10-week safety stock on both inputs in the interim.
              <br /><strong>Investment:</strong> USD 0.3M (assessment only, Year 1). Safety stock additional working capital: USD 2.8M.
              <br /><strong>Why structured this way:</strong> The board's USD 48M cannot be allocated simultaneously to three vulnerability remediation programs. Prioritise by impact and probability. Connector assembly is Phase 1. Laminate and bearing are Phase 2, funded by the revenue the Phase 1 plan protects.
            </p>
          </div>

          <p style={{ marginTop: '20px' }}><strong>Capital Allocation Summary:</strong></p>
          <table className="data-table">
            <thead>
              <tr>
                <th>Initiative</th>
                <th>Investment</th>
                <th>Timeline</th>
                <th>Risk-Adjusted NPV</th>
                <th>Phase</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Nexus Precision qualification (dual-source)</td>
                <td>USD 4.68M</td>
                <td>Months 1&ndash;7</td>
                <td>+USD 17.7M</td>
                <td>1 &mdash; Immediate</td>
              </tr>
              <tr>
                <td>Line A product redesign</td>
                <td>USD 2.40M</td>
                <td>Months 8&ndash;22</td>
                <td>+USD 6.28M</td>
                <td>2 &mdash; Structural</td>
              </tr>
              <tr>
                <td>Line B product redesign</td>
                <td>USD 1.80M</td>
                <td>Months 12&ndash;28</td>
                <td>+USD 3.25M</td>
                <td>2 &mdash; Structural</td>
              </tr>
              <tr>
                <td>Laminate + bearing contingency assessment</td>
                <td>USD 0.30M</td>
                <td>Months 6&ndash;12</td>
                <td>Risk reduction (not modelled)</td>
                <td>2 &mdash; Planning</td>
              </tr>
              <tr>
                <td>Hiramoto safety stock (WC)</td>
                <td>USD 6.40M</td>
                <td>Month 3 (if re-engaged)</td>
                <td>+USD 5.8M (risk-adj.)</td>
                <td>1 &mdash; Conditional</td>
              </tr>
              <tr>
                <td><strong>Total (base, excl. Hiramoto)</strong></td>
                <td><strong>USD 9.18M</strong></td>
                <td></td>
                <td><strong>+USD 27.23M</strong></td>
                <td></td>
              </tr>
              <tr>
                <td><strong>Available capital</strong></td>
                <td><strong>USD 48.0M</strong></td>
                <td></td>
                <td><strong>Remaining: USD 38.8M</strong></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section>
        <h2>From Someone Who Has Done This Before</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Why Contract Manufacturers Always Discover Their Supply Chain Risk the Expensive Way</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Vietronics pattern is not unusual. Contract manufacturers in Asia are structurally incentivised to concentrate supply: sole-sourcing generates the best unit price, and unit price is what wins the OEM tender. The resilience cost is diffuse and probabilistic &mdash; it shows up once every 8&ndash;12 years, and the executive team that made the sole-sourcing decision has often moved on before the disruption hits. The executive team that inherits the disruption pays the full price. This misalignment between decision-maker and consequence is why supply chain risk management in contract manufacturing is almost always reactive rather than proactive. The most effective intervention is not better risk frameworks &mdash; it is changing the procurement incentive structure so that resilience is measured and rewarded alongside unit cost. Vietronics' procurement team was never measured on supply chain resilience. They were measured on purchase price variance. That is the structural change that prevents the next Guangdong Micro-Tech.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Conversation with the CEO About Vertical Integration</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Nguyen Thanh Liem built Vietronics from nothing and understands manufacturing deeply. He will push back on the negative NPV finding for vertical integration with two arguments: (1) the model underestimates the strategic value of supply chain control, and (2) the learning curve assumptions are too pessimistic. Both arguments deserve a genuine hearing. On point (1): the strategic value of supply chain control is real, but it accrues to companies that own a differentiating process, not to companies that replicate a specialist supplier's process at worse economics. On point (2): the learning curve data comes from 14 comparable precision machining operations that consultants have tracked &mdash; the range is 12&ndash;18 months to 90%+ yield, and the model uses the optimistic end of that range. The answer to his pushback is not to dismiss it &mdash; it is to show him what the break-even unit volume would need to be for vertical integration to generate positive NPV (6.8M units per year, 62% above current volume), and ask whether he believes Vietronics can grow to that volume within the 7-year payback period. If the answer is yes and there is a credible customer pipeline to support it, vertical integration deserves a second look. If the answer is no, the conversation ends.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What Sandra Wijaya Knows That the Numbers Don't Capture</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The OEM renewal analysis assigns risk categories to each customer based on their expressed concern. But Sandra knows something more nuanced: the procurement managers at Siemens Automotive and Mitsui Industrial are under pressure from their own leadership to demonstrate supply chain due diligence after a year in which supply chain failures dominated automotive and electronics industry headlines globally. Their evaluation of alternatives is partly genuine (they are seriously looking) and partly political (they need to show their bosses they looked). A Vietronics presentation that demonstrates a rigorous, documented, board-approved resilience program gives the procurement managers at those customers a defensible reason to recommend renewal internally. The analytics tell us the minimum credibility threshold. Sandra tells us the political context that determines whether meeting that threshold is enough. Both matter.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Lean Finding Nobody Asked For</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              While building the disruption cost model, the analysis team examined Vietronics' production yield data to establish a baseline for normal operations. What they found: Vietronics' current production yield across its main product lines averages 91.4%. Industry benchmark for comparable contract manufacturers with comparable quality certifications is 94.8&ndash;96.2%. The gap &mdash; 3.4&ndash;4.8 percentage points &mdash; represents approximately USD 14&ndash;18M per year in rework, scrap, and cycle time inefficiency that is structurally embedded in the operation. This finding was not in scope. It is too significant to leave out of the debrief. A yield improvement program &mdash; applying basic Lean and Six Sigma disciplines to the three highest-volume production lines &mdash; would cost USD 1.2&ndash;2.0M and return USD 6&ndash;9M per year. The supply chain restructuring plan solves the external risk. The yield improvement program solves the internal one. Together, they transform the financial profile of the business. The board should see both.
            </p>
          </div>
          <div className="highlight-box">
            <strong>What the OEM Renewal Really Means for Vietronics' Long-Term Position</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The contract renewals in Months 5&ndash;7 are not just a retention exercise. They are an opportunity to restructure the commercial relationship in Vietronics' favour. Every OEM customer is currently negotiating with a supplier that had a major disruption &mdash; which means Vietronics is negotiating from apparent weakness. But the restructuring plan, if executed credibly, converts that weakness into a demonstration of operational maturity that most of Vietronics' competitors in Vietnam and the region cannot match. A contract manufacturer that proactively identifies its supply chain vulnerabilities, quantifies the cost of past failures honestly, builds a funded multi-phase remediation plan, and shares that plan transparently with customers is a more sophisticated partner than the vast majority of alternatives available to these OEMs in Southeast Asia. The renewal negotiation should be framed not as Vietronics asking for retention, but as Vietronics proposing a deeper, longer-term partnership built on demonstrated supply chain governance. That framing &mdash; from reactive to proactive, from defending the past to defining the future &mdash; is what converts a renewal at flat terms into a renewal with volume guarantees and longer contract duration.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Case06;
