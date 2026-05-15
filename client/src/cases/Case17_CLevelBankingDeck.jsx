const Case17 = () => {

  const slideWrap = {
    background: '#fff',
    border: '1px solid #dde3ea',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
    marginBottom: '44px',
    overflow: 'hidden',
  };

  const slideBar = (label) => ({
    background: '#0D3B6E',
    color: 'white',
    padding: '10px 28px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.13em',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    label,
  });

  const slideBody = {
    padding: '36px 44px',
  };

  const slideHeadline = {
    fontSize: '21px',
    fontWeight: '700',
    color: '#0D3B6E',
    marginBottom: '24px',
    lineHeight: '1.35',
    letterSpacing: '-0.01em',
  };

  const decisionBar = {
    marginTop: '28px',
    paddingTop: '18px',
    borderTop: '1px solid #e8edf2',
    display: 'flex',
    alignItems: 'flex-start',
    gap: '14px',
  };

  const decisionChip = {
    background: '#0D3B6E',
    color: 'white',
    padding: '5px 14px',
    borderRadius: '5px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    whiteSpace: 'nowrap',
    marginTop: '2px',
  };

  const decisionText = {
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.6',
  };

  const annotationBox = {
    background: '#f0f4f9',
    borderLeft: '3px solid #0D3B6E',
    borderRadius: '0 6px 6px 0',
    padding: '14px 18px',
    marginTop: '20px',
    fontSize: '13px',
    color: '#444',
    lineHeight: '1.65',
  };

  const metricGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '8px',
  };

  const metricCard = (accent) => ({
    background: '#f7f9fc',
    border: `1px solid ${accent || '#dde3ea'}`,
    borderRadius: '8px',
    padding: '16px 18px',
  });

  const metricLabel = {
    fontSize: '11px',
    fontWeight: '700',
    color: '#888',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '6px',
  };

  const metricValue = (color) => ({
    fontSize: '22px',
    fontWeight: '800',
    color: color || '#0D3B6E',
    lineHeight: '1.1',
  });

  const metricSub = {
    fontSize: '12px',
    color: '#888',
    marginTop: '4px',
  };

  return (
    <div className="case-study">

      <header className="case-header">
        <span className="case-number">Case 17 &mdash; C-Level Deck</span>
        <h1>Two Banks. One Diagnosis. One Board.</h1>
        <div className="case-meta">
          Industry: Retail Banking / Financial Services &bull; Format: Executive Board Deck &mdash; Synthesised from Cases 02 &amp; 11
        </div>
      </header>

      {/* ── SECTION 1: THE BRIEF ── */}
      <section>
        <h2>The Brief</h2>
        <div className="content">
          <p>
            <strong>Nusantara Banking Group (NBG)</strong> is a regional financial holding company with retail banking subsidiaries in Indonesia and Thailand. Its investment committee &mdash; comprising the Group CEO, Group CFO, and three LP representatives &mdash; convenes quarterly to review portfolio performance and approve capital allocation decisions.
          </p>
          <p>
            Two subsidiaries have surfaced concurrent underperformance signals in the same quarter. <strong>NBG Indonesia</strong> (the PrimaBank retail arm) is growing deposits at 3.2% against an industry average of 11.4%, with its loan-to-deposit ratio climbing toward the regulatory ceiling. <strong>NBG Thailand</strong> (the MerataBank retail division) is reporting 96% customer retention while its net interest income per customer has declined 19% over three years &mdash; the bank is nominally retaining customers and economically losing them.
          </p>
          <div className="highlight-box">
            <strong>Why This Deck Exists</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Group CFO commissioned a cross-subsidiary diagnostic after the Q2 ALCO report flagged both situations simultaneously. The diagnostic team &mdash; four weeks, two markets, six data sources &mdash; found that the two problems share a structural root. This deck presents that finding to the investment committee and requests three decisions. It is not a status update. It is a request for board action.
            </p>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              <strong>Time allocated:</strong> 20 minutes. <strong>Slides:</strong> 5. <strong>Decisions requested:</strong> 3.
            </p>
          </div>
          <p>
            If you have worked through <strong>Case 02 (The Profitable Customer Exodus)</strong> and <strong>Case 11 (The Bank That Cannot Grow Its Deposits)</strong>, you already know the analytical work behind this deck. The question this case answers is different: <em>how do you take two complex, data-heavy diagnostic reports and compress them into five slides that produce board decisions?</em> This is the final output. The analysis is behind you. The deck is what the board sees.
          </p>
        </div>
      </section>

      {/* ── SECTION 2: PEOPLE IN THE ROOM ── */}
      <section>
        <h2>The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Group CEO &mdash; Pak Andrian Wibowo:</strong> Led the regional expansion that created both subsidiaries. Aware that both are underperforming but has not yet seen a unified explanation. His instinct is that the problems are separate &mdash; one a product issue (rates), one a digital lag. He is open to being shown otherwise, but only if the numbers are clean. Will approve the decisions if the ROI is clear.
          </div>
          <div className="highlight-box">
            <strong>Group CFO &mdash; Ibu Renita Soesanto:</strong> Commissioned the diagnostic. The most analytically exacting person in the room. Has already seen the raw ALCO data and knows the LDR ceiling in Indonesia is nine months away. Will stress-test the funnel math on Slide 2. Needs the CLV methodology explained in one sentence before she will accept the Slide 3 number. Pre-brief her the day before.
          </div>
          <div className="highlight-box">
            <strong>LP Representative &mdash; Pak James Hartley:</strong> Represents the Singapore-based anchor LP. Primarily concerned with ROE trajectory across the portfolio. Has seen declining ROE for two consecutive quarters. Does not want to hear about root causes; wants to hear about recovery timelines and the capital required. Slide 5 is the slide he came for.
          </div>
          <div className="highlight-box">
            <strong>Retail Banking Director (Group) &mdash; Ibu Sinta Pramudya:</strong> Oversees both subsidiaries operationally. Has known about the mobile onboarding dropout rate in Indonesia for six months but did not escalate it. Will be defensive about Slide 2. The deck is not designed to expose her &mdash; it is designed to give her the mandate and resources to fix the problem. Frame it as her opportunity, not her failure.
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT THE DECK MUST DO ── */}
      <section>
        <h2>What the Deck Must Do</h2>
        <div className="content">
          <p>
            The diagnostic behind this deck produced hundreds of data points across two markets, two diagnostic frameworks, and six analytical outputs. The board does not need to see all of them. They need to see the <em>minimum set of facts</em> that makes three specific decisions feel necessary, defensible, and urgent &mdash; in that order.
          </p>
          <p>
            The narrative logic connecting the two cases is this: <strong>NBG Indonesia is failing to acquire deposits because its measurement system optimises for loans, not funding. NBG Thailand is losing profitable customers because its measurement system optimises for volume, not value. Both problems are caused by the same structural failure &mdash; the bank measures what is easy to count, not what matters.</strong> Slide 4 is where that connection is made explicit. Slides 2 and 3 build the evidence. Slide 1 creates the frame. Slide 5 names the decisions.
          </p>
          <div className="highlight-box">
            <strong>One Rule for This Deck</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every slide has exactly one idea. If a slide has two ideas, one of them disappears into the conversation that follows &mdash; and usually it is the more important one. The discipline of one idea per slide is not a design preference. It is a decision architecture. A board cannot make two decisions from one slide. A board can make one decision from one slide.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: THE DECK ── */}
      <section>
        <h2>The Deck &mdash; 5 Slides</h2>
        <div className="content">
          <p style={{ marginBottom: '32px', fontSize: '14px', color: '#555' }}>
            Read each slide as it would appear in a boardroom. The annotation below each slide explains the structural choice made &mdash; why this headline, this visual, this decision, in this sequence.
          </p>

          {/* ═══════════════════════════════════════════════════ SLIDE 1 */}
          <div style={slideWrap}>
            <div style={{ background: '#0D3B6E', color: 'white', padding: '10px 28px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SLIDE 1 OF 5</span>
              <span>NBG INVESTMENT COMMITTEE &mdash; CONFIDENTIAL</span>
            </div>
            <div style={slideBody}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Retail Banking Portfolio Review &mdash; Q2 2025</p>
              <h3 style={slideHeadline}>Two retail units. Both sending the same signal.</h3>

              <div style={metricGrid}>
                <div style={metricCard('#c0392b')}>
                  <div style={metricLabel}>NBG Indonesia &mdash; LDR</div>
                  <div style={metricValue('#c0392b')}>89%</div>
                  <div style={metricSub}>Ceiling: 92% &mdash; 9 months away</div>
                </div>
                <div style={metricCard('#c0392b')}>
                  <div style={metricLabel}>NBG Indonesia &mdash; Deposit Growth</div>
                  <div style={metricValue('#c0392b')}>3.2%</div>
                  <div style={metricSub}>Industry avg: 11.4% &mdash; Gap: 8.2pp</div>
                </div>
                <div style={metricCard('#e67e22')}>
                  <div style={metricLabel}>NBG Indonesia &mdash; CASA Ratio</div>
                  <div style={metricValue('#e67e22')}>49%</div>
                  <div style={metricSub}>Was 58% eighteen months ago</div>
                </div>
                <div style={metricCard('#c0392b')}>
                  <div style={metricLabel}>NBG Thailand &mdash; CRM Retention</div>
                  <div style={metricValue('#27ae60')}>96%</div>
                  <div style={metricSub}>Reported &mdash; misleading (see Slide 3)</div>
                </div>
                <div style={metricCard('#c0392b')}>
                  <div style={metricLabel}>NBG Thailand &mdash; NII / Customer</div>
                  <div style={metricValue('#c0392b')}>&minus;19%</div>
                  <div style={metricSub}>Over 36 months &mdash; structural decline</div>
                </div>
                <div style={metricCard('#c0392b')}>
                  <div style={metricLabel}>NBG Thailand &mdash; Cost-to-Serve</div>
                  <div style={metricValue('#c0392b')}>+52%</div>
                  <div style={metricSub}>Per customer over 3 years</div>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: '#555', marginTop: '18px', lineHeight: '1.65' }}>
                Every metric is moving in the same direction. Across two markets, two management teams, and two regulatory environments &mdash; the retail banking units are simultaneously losing funding efficiency and customer value. This is not coincidence. It is architecture.
              </p>

              <div style={decisionBar}>
                <span style={decisionChip}>FRAME</span>
                <span style={decisionText}>No decision requested from this slide. Its job is to produce silence and attention before Slides 2 and 3 introduce the specific evidence.</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════ SLIDE 2 */}
          <div style={slideWrap}>
            <div style={{ background: '#0D3B6E', color: 'white', padding: '10px 28px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SLIDE 2 OF 5</span>
              <span>NBG INVESTMENT COMMITTEE &mdash; CONFIDENTIAL</span>
            </div>
            <div style={slideBody}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>NBG Indonesia &mdash; Deposit Acquisition</p>
              <h3 style={slideHeadline}>We generated 340,000 leads. We converted 91,000.</h3>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>Funnel Stage</th>
                    <th>NBG Indonesia</th>
                    <th>Industry Benchmark</th>
                    <th>Gap</th>
                    <th>IDR Value of Gap</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lead &rarr; Application</td>
                    <td>72%</td>
                    <td>68%</td>
                    <td style={{ color: '#27ae60', fontWeight: '700' }}>+4pp &mdash; above benchmark</td>
                    <td>Not a problem</td>
                  </tr>
                  <tr>
                    <td><strong>Application &rarr; Account Opened</strong></td>
                    <td><strong>36%</strong></td>
                    <td>61%</td>
                    <td style={{ color: '#c0392b', fontWeight: '700' }}>&minus;25pp</td>
                    <td><strong>IDR 1.04 trillion lost</strong></td>
                  </tr>
                  <tr>
                    <td><strong>Account &rarr; Funded (30 days)</strong></td>
                    <td><strong>54%</strong></td>
                    <td>79%</td>
                    <td style={{ color: '#c0392b', fontWeight: '700' }}>&minus;25pp</td>
                    <td><strong>IDR 374 billion dormant</strong></td>
                  </tr>
                  <tr>
                    <td>Funded &rarr; Active (12 months)</td>
                    <td>61%</td>
                    <td>74%</td>
                    <td style={{ color: '#e67e22', fontWeight: '700' }}>&minus;13pp</td>
                    <td>IDR 540 billion churn above benchmark</td>
                  </tr>
                  <tr>
                    <td>Single &rarr; Multi-product (24M)</td>
                    <td>18%</td>
                    <td>31%</td>
                    <td style={{ color: '#e67e22', fontWeight: '700' }}>&minus;13pp</td>
                    <td>IDR 320 billion deepening foregone</td>
                  </tr>
                </tbody>
              </table>

              <p style={{ fontSize: '13px', color: '#444', marginTop: '18px', lineHeight: '1.65' }}>
                <strong>Root cause &mdash; two structural failures operating in parallel:</strong> The digital mobile onboarding flow has a 34% abandonment rate (industry: &lt;15%) and takes 22 minutes to complete vs. 7 minutes at digital competitors. Simultaneously, branch manager KPIs allocate 45% weight to loan disbursements and 10% to new deposit accounts &mdash; with zero weight on CASA growth. The IDR 28 billion &ldquo;Nabung Lebih Untung&rdquo; campaign generated 340,000 leads. The system consumed them.
              </p>

              <div style={decisionBar}>
                <span style={decisionChip}>BOARD DECISION 1</span>
                <span style={decisionText}>
                  Approve reallocation of branch manager KPIs: loan disbursement 45%&rarr;25%, new deposit accounts 10%&rarr;30%, CASA balance growth 0%&rarr;20%. Approve IDR 12 billion digital onboarding sprint to reduce dropout from 34% to &lt;15% within 60 days. Combined 12-month impact: IDR +1.4 trillion in deposit recovery.
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════ SLIDE 3 */}
          <div style={slideWrap}>
            <div style={{ background: '#0D3B6E', color: 'white', padding: '10px 28px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SLIDE 3 OF 5</span>
              <span>NBG INVESTMENT COMMITTEE &mdash; CONFIDENTIAL</span>
            </div>
            <div style={slideBody}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>NBG Thailand &mdash; Customer Economics</p>
              <h3 style={slideHeadline}>96% retention is the wrong metric.</h3>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>Customer Segment</th>
                    <th>CRM &ldquo;Retained&rdquo;</th>
                    <th>Truly Primary</th>
                    <th>Nominal (Migrating)</th>
                    <th>CLV &mdash; Primary</th>
                    <th>CLV &mdash; Nominal</th>
                    <th>CLV at Risk</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Affluent Urban</strong></td>
                    <td>210,000</td>
                    <td>88,000 (42%)</td>
                    <td style={{ color: '#c0392b', fontWeight: '600' }}>96,000 (46%)</td>
                    <td>THB 142,000</td>
                    <td>THB 18,000</td>
                    <td style={{ color: '#c0392b', fontWeight: '700' }}>THB 11.9B</td>
                  </tr>
                  <tr>
                    <td><strong>Mass Affluent Urban</strong></td>
                    <td>580,000</td>
                    <td>298,000 (51%)</td>
                    <td style={{ color: '#c0392b', fontWeight: '600' }}>224,000 (39%)</td>
                    <td>THB 68,400</td>
                    <td>THB 9,200</td>
                    <td style={{ color: '#c0392b', fontWeight: '700' }}>THB 13.2B</td>
                  </tr>
                  <tr>
                    <td>Digital Active Mass</td>
                    <td>940,000</td>
                    <td>376,000 (40%)</td>
                    <td style={{ color: '#e67e22' }}>470,000 (50%)</td>
                    <td>THB 21,600</td>
                    <td>THB 3,400</td>
                    <td style={{ color: '#e67e22' }}>THB 8.7B</td>
                  </tr>
                  <tr>
                    <td>Branch-Dependent Provincial</td>
                    <td>1,620,000</td>
                    <td>1,393,200 (86%)</td>
                    <td>162,000 (10%)</td>
                    <td>THB 14,800</td>
                    <td>THB 4,100</td>
                    <td>THB 0.7B</td>
                  </tr>
                </tbody>
              </table>

              <p style={{ fontSize: '13px', color: '#444', marginTop: '18px', lineHeight: '1.65' }}>
                The CRM calls 96% of these customers &ldquo;retained.&rdquo; The Primary Relationship Score &mdash; built from salary credit frequency, active debit transactions, and transfer origins across 36 months of data &mdash; tells a different story. <strong>320,000 customers in the top two segments have migrated their primary banking relationship to neobank competitors while maintaining a dormant savings account at NBG Thailand.</strong> They count as retained. They are not. Their combined CLV at risk: <strong>THB 25.1 billion</strong>. The bank is currently spending money to serve them as if they were fully active.
              </p>
              <p style={{ fontSize: '13px', color: '#444', marginTop: '10px', lineHeight: '1.65' }}>
                The Bank of Thailand&rsquo;s open banking regulation &mdash; requiring API exposure of customer transaction histories to licensed third parties &mdash; takes effect in Q3 next year. When that happens, neobank targeting precision on NBG Thailand&rsquo;s remaining primary customers improves significantly. The window to act is now.
              </p>

              <div style={decisionBar}>
                <span style={decisionChip}>BOARD DECISION 2</span>
                <span style={decisionText}>
                  Approve a CLV-tier differentiation pilot for Affluent Urban and Mass Affluent primary segments: differentiated digital experience, relationship manager assignment, and product bundling incentives. Halt undifferentiated retention campaign spend (THB 340M annually) and reallocate to primary-segment retention. Target: primary retention rate in Affluent Urban &gt;85% within 12 months.
                </span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════ SLIDE 4 */}
          <div style={slideWrap}>
            <div style={{ background: '#0D3B6E', color: 'white', padding: '10px 28px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SLIDE 4 OF 5</span>
              <span>NBG INVESTMENT COMMITTEE &mdash; CONFIDENTIAL</span>
            </div>
            <div style={slideBody}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Cross-Subsidiary Diagnostic</p>
              <h3 style={slideHeadline}>Both problems have the same root.</h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '24px' }}>
                <div style={{ background: '#f7f9fc', borderRadius: '8px', padding: '22px 24px', borderTop: '3px solid #0D3B6E' }}>
                  <p style={{ fontSize: '12px', fontWeight: '800', color: '#0D3B6E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>NBG Indonesia &mdash; Deposit Failure</p>
                  <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.8' }}>
                    <div style={{ marginBottom: '8px' }}>Branch managers measured on <strong>loan volume</strong></div>
                    <div style={{ marginBottom: '8px', paddingLeft: '14px', color: '#666' }}>&darr; Deposit inquiries deprioritised</div>
                    <div style={{ marginBottom: '8px', paddingLeft: '28px', color: '#666' }}>&darr; 340K leads, 91K conversions</div>
                    <div style={{ paddingLeft: '42px', color: '#c0392b', fontWeight: '700' }}>&darr; IDR 2.6T deposit gap</div>
                  </div>
                </div>
                <div style={{ background: '#f7f9fc', borderRadius: '8px', padding: '22px 24px', borderTop: '3px solid #0D3B6E' }}>
                  <p style={{ fontSize: '12px', fontWeight: '800', color: '#0D3B6E', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px' }}>NBG Thailand &mdash; CLV Erosion</p>
                  <div style={{ fontSize: '13px', color: '#333', lineHeight: '1.8' }}>
                    <div style={{ marginBottom: '8px' }}>CRM measures <strong>account retention</strong></div>
                    <div style={{ marginBottom: '8px', paddingLeft: '14px', color: '#666' }}>&darr; Primary relationship migration invisible</div>
                    <div style={{ marginBottom: '8px', paddingLeft: '28px', color: '#666' }}>&darr; 320K profitable customers migrating</div>
                    <div style={{ paddingLeft: '42px', color: '#c0392b', fontWeight: '700' }}>&darr; THB 25.1B CLV at risk</div>
                  </div>
                </div>
              </div>

              <div style={{ background: '#0D3B6E', color: 'white', borderRadius: '8px', padding: '20px 24px', textAlign: 'center' }}>
                <p style={{ fontSize: '13px', fontWeight: '700', letterSpacing: '0.04em', marginBottom: '6px', opacity: 0.8, textTransform: 'uppercase' }}>Common Root Cause</p>
                <p style={{ fontSize: '17px', fontWeight: '800', lineHeight: '1.4', margin: 0 }}>
                  Both banks measure what is easy to count &mdash; not what drives value.<br />
                  <span style={{ fontWeight: '400', fontSize: '14px', opacity: 0.85 }}>Volume metrics (loan disbursements, account headcount, CRM retention rate) displace value metrics (CASA growth, primary relationship share, CLV by segment).</span>
                </p>
              </div>

              <p style={{ fontSize: '13px', color: '#555', marginTop: '18px', lineHeight: '1.65' }}>
                This is not a product problem. It is not a technology problem. It is a management measurement problem. The incentive and reporting structures in both subsidiaries create rational individual behaviour that produces irrational portfolio outcomes. Changing the metrics changes the behaviour. No new products required.
              </p>

              <div style={decisionBar}>
                <span style={decisionChip}>REFRAME</span>
                <span style={decisionText}>No new decision on this slide. Its job is to connect Slides 2 and 3 into a single diagnosis, so the board approves three decisions on Slide 5 as a coherent programme, not three unrelated fixes.</span>
              </div>
            </div>
          </div>

          {/* ═══════════════════════════════════════════════════ SLIDE 5 */}
          <div style={slideWrap}>
            <div style={{ background: '#0D3B6E', color: 'white', padding: '10px 28px', fontSize: '11px', fontWeight: '700', letterSpacing: '0.13em', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>SLIDE 5 OF 5</span>
              <span>NBG INVESTMENT COMMITTEE &mdash; CONFIDENTIAL</span>
            </div>
            <div style={slideBody}>
              <p style={{ fontSize: '12px', fontWeight: '700', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>Resolution &mdash; Board Actions</p>
              <h3 style={slideHeadline}>Three decisions. Three owners. Ninety days.</h3>

              <table className="data-table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Decision</th>
                    <th>What It Does</th>
                    <th>Owner</th>
                    <th>Timeline</th>
                    <th>Success Metric</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ fontWeight: '800', color: '#0D3B6E', fontSize: '16px' }}>1</td>
                    <td><strong>Realign branch incentives &mdash; Indonesia</strong></td>
                    <td>Redirect front-line effort: loans 45%&rarr;25%; deposits 10%&rarr;30%; CASA 0%&rarr;20%</td>
                    <td>Group CHRO + NBG Indonesia CEO</td>
                    <td>30 days</td>
                    <td>Branch deposit KPI compliance &ge;90%; conversion rate &gt;50% within 90 days</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '800', color: '#0D3B6E', fontSize: '16px' }}>2</td>
                    <td><strong>Fix digital onboarding &mdash; Indonesia</strong></td>
                    <td>Reduce mobile dropout 34%&rarr;&lt;15%; completion time 22&rarr;&lt;10 min; IDR 12B sprint</td>
                    <td>Group CDO + NBG Indonesia Digital Head</td>
                    <td>60 days</td>
                    <td>Mobile conversion &gt;55%; IDR 1.4T deposit recovery (12-month)</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: '800', color: '#0D3B6E', fontSize: '16px' }}>3</td>
                    <td><strong>Launch CLV-tier retention programme &mdash; Thailand</strong></td>
                    <td>Protect THB 25.1B CLV at risk in top 2 segments; halt undifferentiated spend</td>
                    <td>Group CEO + NBG Thailand Retail Head</td>
                    <td>90 days to launch</td>
                    <td>Primary retention in Affluent Urban &gt;85%; NII/customer stabilised within 4 quarters</td>
                  </tr>
                </tbody>
              </table>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '24px' }}>
                <div style={{ background: '#f0f7f0', border: '1px solid #a8d5a8', borderRadius: '8px', padding: '18px 20px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '800', color: '#2e7d32', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>If all three approved</p>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#2e7d32', marginBottom: '4px' }}>IDR 1.4T deposit recovery (12M)</p>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#2e7d32', marginBottom: '4px' }}>THB 25.1B CLV protected (24M)</p>
                  <p style={{ fontSize: '13px', color: '#555', marginTop: '8px' }}>LDR ceiling risk deferred by 18+ months</p>
                </div>
                <div style={{ background: '#fff8f0', border: '1px solid #f0c080', borderRadius: '8px', padding: '18px 20px' }}>
                  <p style={{ fontSize: '11px', fontWeight: '800', color: '#e67e22', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>If no action taken</p>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#c0392b', marginBottom: '4px' }}>LDR ceiling breached: Q1 2026</p>
                  <p style={{ fontSize: '15px', fontWeight: '700', color: '#c0392b', marginBottom: '4px' }}>Open banking regulation: Q3 2026</p>
                  <p style={{ fontSize: '13px', color: '#555', marginTop: '8px' }}>Both deadlines converge without a buffer</p>
                </div>
              </div>

              <div style={decisionBar}>
                <span style={decisionChip}>BOARD DECISION 3</span>
                <span style={decisionText}>
                  Approve all three decisions. Mandate 30/60/90-day progress reporting to Group CFO. No further study required &mdash; the diagnostic is complete. The decisions are in front of the board today.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 5: WHAT MAKES THIS DECK WORK ── */}
      <section>
        <h2>What Makes This Deck Work</h2>
        <div className="content">

          <div className="highlight-box">
            <strong>The Sequence Is the Argument</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Slide 1 does not explain anything. It shows a dashboard of declining metrics across two markets and lets the board sit with that picture for 60 seconds. The instinct to explain immediately &mdash; to jump to root causes before the audience has felt the weight of the problem &mdash; is the most common failure mode in executive presentations. Slide 1 resists that instinct. It creates the emotional precondition for Slides 2 and 3 to land.
            </p>
          </div>

          <div className="highlight-box">
            <strong>Two Separate Cases, One Diagnosis</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Slide 4 is the most important slide in the deck and the most easily cut when presenters run short on time. That would be a mistake. Without Slide 4, the board approves three disconnected fixes. With Slide 4, the board approves a portfolio-level management reset. The distinction matters for implementation: three disconnected fixes get assigned to three middle managers who may or may not share information. A portfolio-level reset gets a Group-level owner with cross-subsidiary mandate. The deck is designed to produce the second outcome, not the first.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The &ldquo;No Decision&rdquo; Slides Are Load-Bearing</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Slides 1 and 4 request no decisions. A common instinct is to remove them to save time or to turn them into decision slides. Both instincts are wrong. Slide 1 creates attention. Slide 4 connects the evidence. Removing either produces a deck where the decisions appear to come from nowhere &mdash; and decisions that appear to come from nowhere get deferred for further study. The board approves decisions it understands. These two slides are what makes the decisions on Slides 2, 3, and 5 understandable.
            </p>
          </div>

          <div className="highlight-box">
            <strong>The Numbers Are From the Analysis. The Slide Is Not the Analysis.</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Every number in this deck &mdash; the 34% dropout rate, the 25pp conversion gap, the THB 25.1B CLV at risk, the IDR 1.4T recovery projection &mdash; is derived from the full analytical work documented in Cases 02 and 11. None of the methodology appears in the deck. None of the sensitivity ranges appear in the deck. None of the data sources appear in the deck. This is intentional. The board is not being asked to review the analysis. It is being asked to act on the finding. The analysis belongs in the appendix, available if challenged. The finding belongs on the slide. Knowing the difference between what you know and what you say is the defining skill of a manager-level BA presenting to a C-suite audience.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Case17;
