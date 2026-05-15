import React from 'react'

const Case18 = () => {
  const slideWrap = {
    background: '#fff',
    border: '1px solid #dde3ea',
    borderRadius: '10px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.07)',
    marginBottom: '40px',
    overflow: 'hidden',
  }
  const slideBody = { padding: '36px 44px' }
  const slideCategory = {
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: '#7D2E00',
    marginBottom: '10px',
    textTransform: 'uppercase',
  }
  const slideHeadline = {
    fontSize: '21px',
    fontWeight: '700',
    color: '#1a1a2e',
    marginBottom: '28px',
    lineHeight: '1.35',
  }
  const decisionBar = {
    marginTop: '28px',
    paddingTop: '18px',
    borderTop: '1px solid #e8edf2',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
  }
  const decisionChip = (color = '#7D2E00') => ({
    background: color,
    color: 'white',
    padding: '5px 14px',
    borderRadius: '5px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.08em',
    whiteSpace: 'nowrap',
  })
  const decisionText = { fontSize: '14px', color: '#444', lineHeight: '1.5' }

  const metricGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '8px',
  }
  const metricCard = (accent = '#7D2E00') => ({
    border: `2px solid ${accent}`,
    borderRadius: '8px',
    padding: '16px 18px',
    background: '#fafafa',
  })
  const metricLabel = {
    fontSize: '11px',
    color: '#666',
    fontWeight: '700',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '6px',
  }
  const metricValue = (color = '#1a1a2e') => ({
    fontSize: '26px',
    fontWeight: '800',
    color,
    lineHeight: '1',
    marginBottom: '4px',
  })
  const metricSub = { fontSize: '12px', color: '#888' }

  const slideNavBar = {
    background: '#7D2E00',
    color: 'white',
    padding: '10px 28px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.12em',
    display: 'flex',
    justifyContent: 'space-between',
  }

  return (
    <div className="case-study">
      <header className="case-header">
        <span className="case-number">Use Case 18</span>
        <h1>The Margin That Was Never Going to Recover by Itself</h1>
        <div className="case-meta">
          Industry: FMCG / Consumer Packaged Goods &bull; Format: C-Level Board Deck &bull; Source: Case 01 — The Margin Collapse at NovaCPG
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. The Brief</h2>
        <div className="content">
          <p>
            Eight weeks ago, NovaCPG's investment committee asked a single question: <em>Why is gross margin collapsing — and what do we do about it?</em> Today, the answer is on the table.
          </p>
          <p>
            <strong>NovaCPG</strong> is a mid-sized Indonesian consumer packaged goods company — IDR 18.4 trillion in annual revenue, four categories (personal care, home cleaning, packaged food, infant nutrition), 312 active SKUs, distributed across 420,000 retail outlets. Three years ago, EBITDA margin was 19.2%. Today it is 13.8%. The erosion is 540 basis points. At the current trajectory of −180 bps per year, the PE firm's exit thesis collapses.
          </p>
          <p>
            This is the board deck the CEO presents to the NovaCPG Investment Committee — the Singapore PE firm that holds 60% of the business and has a six-year mandate to take it to strategic sale or IDX IPO. The deck presents the diagnosis, the recovery plan, and three decisions the committee must approve today.
          </p>
          <div className="highlight-box">
            <strong>Format Constraints:</strong> 25 minutes. 5 slides. 3 decisions. The CFO has already seen the numbers. The CCO has been pre-briefed on the findings privately. The IC is hearing this for the first time. The deck cannot afford to educate — it must diagnose and prescribe.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Ibu Sarah Tan — CEO (PE-Appointed, 14 months in role)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Presenting today. Has wanted to rationalize the SKU portfolio for months but needed analytical cover to move against the CCO's institutional resistance. This deck gives her that cover. She needs the IC to make decisions so she can execute — she cannot move on SKU exits or incentive redesign without board-level authority.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Pak Hendra Kusuma — CFO</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Already aligned with the findings. Working capital deterioration from 47 to 68 days is keeping him up at night. He needs this deck to work — it solves his bridge facility problem without requiring a financing event. His credibility is behind the recommendation before the slide deck begins.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Bimo Santoso — Chief Commercial Officer (Founder's Son)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pre-briefed privately on the margin decomposition 72 hours ago. Came in believing the story was raw material cost. Left the pre-brief understanding that his SKU expansion strategy accounts for 69% of the erosion. He has processed this. He is not enthusiastic — but he is not in open opposition. The deck must not embarrass him publicly. It doesn't.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Mr. David Chen — PE Partner (Singapore IC)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The decision-maker. Needs to see: (1) that the problem is correctly diagnosed, (2) that the recovery plan is credible and quantified, and (3) that the management team can execute it. Is not interested in frameworks. Is interested in margin basis points, working capital days, and exit optionality. Numbers only.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. What the Deck Must Do</h2>
        <div className="content">
          <p>
            The fundamental analytical problem is that the margin collapse has three structurally distinct causes — but only one of them is visible to the commercial team, because it is the most politically palatable one. Raw material inflation is real, it is 28.6% of the erosion, and it is also the explanation that requires no organizational change. The other 69.4% — the mix shift caused by SKU proliferation and channel drift toward traditional trade — implicates the commercial strategy the CCO built over three years.
          </p>
          <p>
            The deck's job is not to blame the CCO. Its job is to reframe the question: from "why is gross margin declining?" to "what specific actions recover it, in what sequence, owned by whom?" By the time the IC sees Slide 5, the diagnosis should feel inevitable and the recovery plan should feel like the only rational response.
          </p>
          <div className="highlight-box">
            <strong>The Narrative Spine:</strong> Five slides in one logical arc — <em>here is what is broken</em> (Slide 1) → <em>here is what caused it</em> (Slide 2) → <em>here is where the portfolio damage lives</em> (Slide 3) → <em>here is where the promotional waste lives</em> (Slide 4) → <em>here are the three decisions and the outcomes</em> (Slide 5). No detours. No framework definitions. Each slide earns the next.
          </div>
        </div>
      </section>

      {/* ── SECTION 4 ── */}
      <section>
        <h2>4. The Deck — 5 Slides</h2>

        {/* SLIDE 1 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 1 OF 5</span>
            <span>NOVACPG INVESTMENT COMMITTEE — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>SITUATION</div>
            <h3 style={slideHeadline}>One number. Six metrics. All moving the wrong direction.</h3>
            <div style={metricGrid}>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>EBITDA Margin</div>
                <div style={metricValue('#B22222')}>13.8%</div>
                <div style={metricSub}>Was 19.2% — three years ago (−540 bps)</div>
              </div>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>Gross Margin</div>
                <div style={metricValue('#B22222')}>37.1%</div>
                <div style={metricSub}>Was 41.3% — 18 months ago (−4.2pp)</div>
              </div>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>Working Capital Days</div>
                <div style={metricValue('#B22222')}>68 days</div>
                <div style={metricSub}>Was 47 — bridge facility required by Q1</div>
              </div>
              <div style={metricCard('#CC7722')}>
                <div style={metricLabel}>Active SKU Count</div>
                <div style={metricValue('#CC7722')}>312</div>
                <div style={metricSub}>Was 187 — three years ago (+67%)</div>
              </div>
              <div style={metricCard('#CC7722')}>
                <div style={metricLabel}>Trade Promo Spend</div>
                <div style={metricValue('#CC7722')}>11.4%</div>
                <div style={metricSub}>Of gross revenue (was 8.2% — +IDR 580B/yr)</div>
              </div>
              <div style={metricCard('#CC7722')}>
                <div style={metricLabel}>Erosion Rate</div>
                <div style={metricValue('#CC7722')}>−180 bps</div>
                <div style={metricSub}>Per year — exit thesis at risk by Y3</div>
              </div>
            </div>
            <div style={decisionBar}>
              <span style={decisionChip('#555')}>FRAME</span>
              <span style={decisionText}>These six metrics are one problem with three causes. The next slide shows the decomposition — and which cause owns how much of the damage.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 2 OF 5</span>
            <span>NOVACPG INVESTMENT COMMITTEE — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>COMPLICATION</div>
            <h3 style={slideHeadline}>69% of the gross margin erosion is not coming from raw materials. It is coming from inside the portfolio.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Driver</th>
                  <th>Amount (IDR B)</th>
                  <th>Margin Impact</th>
                  <th>Share of Erosion</th>
                  <th>Accountability</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Raw Material Inflation</strong>
                    <br />
                    <span style={{ fontSize: '12px', color: '#666' }}>Palm oil +18%, packaging resin +22%, IDR/USD depreciation</span>
                  </td>
                  <td>IDR 221B</td>
                  <td>−1.2pp</td>
                  <td><strong>28.6%</strong></td>
                  <td>CFO / Procurement</td>
                </tr>
                <tr style={{ background: '#fff3f0' }}>
                  <td>
                    <strong>Portfolio Mix Shift</strong>
                    <br />
                    <span style={{ fontSize: '12px', color: '#666' }}>Channel drift to traditional trade (34%→47% share) + 125 low-margin new SKUs launched</span>
                  </td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>IDR 537B</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>−2.9pp</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}><strong>69.4%</strong></td>
                  <td>Commercial / CCO</td>
                </tr>
                <tr>
                  <td><strong>Other / Rounding</strong></td>
                  <td>IDR 15B</td>
                  <td>−0.1pp</td>
                  <td>2.0%</td>
                  <td>—</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td><strong>Total Gross Margin Erosion</strong></td>
                  <td><strong>IDR 773B</strong></td>
                  <td><strong>−4.2pp</strong></td>
                  <td><strong>100%</strong></td>
                  <td>—</td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '18px', background: '#fef6f6', border: '1px solid #f5c6c6', borderRadius: '6px', padding: '14px 18px', fontSize: '13px', color: '#7D2E00' }}>
              <strong>The raw material narrative explains 28.6%.</strong> The other 69.4% is the consequence of adding 125 SKUs — predominantly small-pack traditional trade formats at 13–15% gross margin — to a portfolio that already had a channel mix problem. Raw materials are a real cost. The mix shift is a strategic choice. Both are fixable. The mix shift is worth 2.5× more.
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 1</span>
              <span style={decisionText}>Adopt contribution margin per SKU as the standard commercial P&L — not revenue-only. The current measurement system made this IDR 773B erosion invisible until it appeared in the EBITDA line.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 3 OF 5</span>
            <span>NOVACPG INVESTMENT COMMITTEE — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>DIAGNOSIS — PORTFOLIO</div>
            <h3 style={slideHeadline}>40% of our SKUs generate 10% of revenue and destroy IDR 134B per year. We can exit them without losing the business.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Band</th>
                  <th>SKUs</th>
                  <th>Revenue</th>
                  <th>Rev Share</th>
                  <th>Contribution</th>
                  <th>Strategic Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f0faf0' }}>
                  <td><strong>A — CM &gt; 25%</strong></td>
                  <td>87</td>
                  <td>IDR 11,040B</td>
                  <td>60%</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>IDR 3,698B</td>
                  <td>Foundation</td>
                  <td>Protect + price for value</td>
                </tr>
                <tr>
                  <td><strong>B — CM 10–25%</strong></td>
                  <td>100</td>
                  <td>IDR 5,520B</td>
                  <td>30%</td>
                  <td>IDR 798B</td>
                  <td>Supporting</td>
                  <td>Maintain / selective harvest</td>
                </tr>
                <tr style={{ background: '#fff8f0' }}>
                  <td><strong>C — CM 0–10%</strong></td>
                  <td>68</td>
                  <td>IDR 1,288B</td>
                  <td>7%</td>
                  <td style={{ color: '#CC7722' }}>IDR 46B</td>
                  <td>Marginal</td>
                  <td>Raise prices — exit if CM stays below 10% after 6M</td>
                </tr>
                <tr style={{ background: '#fff0f0' }}>
                  <td><strong>D — CM &lt; 0%</strong></td>
                  <td>57</td>
                  <td>IDR 552B</td>
                  <td>3%</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>−IDR 134B</td>
                  <td>Destroying value</td>
                  <td>Structured exit — 6-month program</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td colSpan="4"><strong>Bands C + D: 125 SKUs, 10% of revenue, net −IDR 88B contribution</strong></td>
                  <td colSpan="3" style={{ color: '#B22222' }}><strong>IDR 380B in WC trapped in these SKUs. Exit recovers it — no bridge facility needed.</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 2</span>
              <span style={decisionText}>Approve Band D exit (57 SKUs over 6 months) + Band C harvest program. Approve SKU launch moratorium: no new SKU enters commercialization without a signed-off contribution margin projection above 20%. Releases IDR 380B working capital.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 4 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 4 OF 5</span>
            <span>NOVACPG INVESTMENT COMMITTEE — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>DIAGNOSIS — PROMOTIONS</div>
            <h3 style={slideHeadline}>Personal care is our highest-margin category. It is also where 78% of promotions destroy value — IDR 184B per year.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Promo Events (12M)</th>
                  <th>ROI+ Events</th>
                  <th>ROI– Events</th>
                  <th>Est. Annual Loss</th>
                  <th>Recovery Action</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#fff0f0' }}>
                  <td>
                    <strong>Personal Care</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Highest GM category (42.1%) — largest promotional budget</span>
                  </td>
                  <td>9</td>
                  <td>2 of 9 (22%)</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>7 of 9 (78%)</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>IDR 184B</td>
                  <td>Restructure all 7 — reduce discount depth from 33% to 14%</td>
                </tr>
                <tr style={{ background: '#fff8f0' }}>
                  <td><strong>Packaged Food</strong></td>
                  <td>11</td>
                  <td>5 of 11 (45%)</td>
                  <td style={{ color: '#CC7722' }}>6 of 11 (55%)</td>
                  <td style={{ color: '#CC7722' }}>IDR 97B</td>
                  <td>Restructure 4–5 worst performers; protect noodle SKUs</td>
                </tr>
                <tr>
                  <td><strong>Home Cleaning</strong></td>
                  <td>7</td>
                  <td>4 of 7 (57%)</td>
                  <td>3 of 7 (43%)</td>
                  <td>IDR 62B</td>
                  <td>Review and restructure 2–3 underperformers</td>
                </tr>
                <tr style={{ background: '#f0faf0' }}>
                  <td>
                    <strong>Infant Nutrition</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>PED −0.38 — highly inelastic, brand trust-driven</span>
                  </td>
                  <td>3</td>
                  <td>3 of 3 (100%)</td>
                  <td>0</td>
                  <td style={{ color: '#2E7D52' }}>IDR 0</td>
                  <td>Raise price 8% — do not increase promotional depth</td>
                </tr>
                <tr style={{ background: '#f5f5f5', fontWeight: 'bold' }}>
                  <td><strong>Total</strong></td>
                  <td><strong>30</strong></td>
                  <td>14 (47%)</td>
                  <td style={{ color: '#B22222' }}><strong>16 (53%)</strong></td>
                  <td style={{ color: '#B22222' }}><strong>IDR 343B/yr</strong></td>
                  <td>Restructure 75% → recover IDR 257B annually</td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '16px', background: '#fef6f6', border: '1px solid #f5c6c6', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: '#7D2E00' }}>
              <strong>Restructuring does not mean eliminating promotions.</strong> Changing "Buy 2 Get 1 Free" (33% effective discount) to "IDR 3,000 off second unit" (13.6% effective discount) retains 60–70% of volume uplift at 40% of the promotional cost — ROPI turns positive. 12 Q3 events are already contracted but can still be restructured now.
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 3</span>
              <span style={decisionText}>Approve promotional reform program. Suspend and restructure the 12 Q3 ROI-negative events immediately — IDR 68B Q3 margin protection. At 75% restructuring rate, recovers IDR 257B annually. Highest-return lever in the plan.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 5 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 5 OF 5</span>
            <span>NOVACPG INVESTMENT COMMITTEE — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>RESOLUTION</div>
            <h3 style={slideHeadline}>Three actions. Three owners. Eighteen months. EBITDA 13.8% → 16.5%.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Action</th>
                  <th>Owner</th>
                  <th>GM Recovery</th>
                  <th>Revenue Impact</th>
                  <th>WC Release</th>
                  <th>Success Metric (M12)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>SKU exit + harvest</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>57 Band D exits (6M) + 68 Band C harvest + launch moratorium</span>
                  </td>
                  <td>CEO + Category Mgrs</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+0.84pp</td>
                  <td>−IDR 1,104B (−6%)</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>IDR 380B</td>
                  <td>≤240 active SKUs by Month 9</td>
                </tr>
                <tr>
                  <td>
                    <strong>Promotional reform</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Restructure 75% of ROI-negative events; suspend 12 Q3 events now</span>
                  </td>
                  <td>CCO + Trade Mktg</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+1.40pp</td>
                  <td>−IDR 82B (−0.4%)</td>
                  <td>—</td>
                  <td>Promo spend ≤8.5% of gross rev by M12</td>
                </tr>
                <tr>
                  <td>
                    <strong>Selective price increases</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Personal care +6%, infant nutrition +8%, home cleaning +4%</span>
                  </td>
                  <td>CCO + Rev Mgmt</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+2.28pp</td>
                  <td>−IDR 523B (−2.8%)</td>
                  <td>—</td>
                  <td>Gross margin ≥40.5% by M12</td>
                </tr>
                <tr>
                  <td>
                    <strong>Raw material hedging</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>60% forward coverage — palm oil + packaging resin, 6M rolling</span>
                  </td>
                  <td>CFO + Procurement</td>
                  <td>+0.60pp (est.)</td>
                  <td>—</td>
                  <td>—</td>
                  <td>60% forward coverage by Month 3</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td><strong>Combined — Base Case</strong></td>
                  <td>—</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}><strong>+5.12pp est.</strong></td>
                  <td>−IDR 1,709B (−9.3%)</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}><strong>IDR 380B</strong></td>
                  <td><strong>EBITDA ≥16.5% by Month 18</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
              <div style={{ background: '#f0faf5', border: '1px solid #a8d5b8', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#2E7D52', letterSpacing: '0.08em', marginBottom: '8px' }}>IF APPROVED</div>
                <div style={{ fontSize: '13px', color: '#1a3a2a', lineHeight: '1.7' }}>
                  EBITDA 13.8% → 16.5% in 18 months<br />
                  WC 68 days → 52 days — IDR 380B released<br />
                  Bridge facility no longer required<br />
                  Exit multiple restored — strategic sale viable
                </div>
              </div>
              <div style={{ background: '#fef6f0', border: '1px solid #f5c6a0', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#CC5500', letterSpacing: '0.08em', marginBottom: '8px' }}>IF NO ACTION</div>
                <div style={{ fontSize: '13px', color: '#3a1a0a', lineHeight: '1.7' }}>
                  EBITDA continues at −180 bps/year<br />
                  Bridge facility required by Q1 next year<br />
                  18 new SKUs in pipeline — portfolio gets worse<br />
                  Exit thesis collapses within 24 months
                </div>
              </div>
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD RESOLUTION</span>
              <span style={decisionText}>Approve all three recovery levers. Place commercial KPI redesign (revenue + contribution margin) on the board agenda — not the management agenda. Review Month 6 against red-line metrics.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. What Makes This Deck Work</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>The Decomposition Is the Argument, Not the Conclusion (Slide 2)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The margin collapse could have been presented as a single number: "EBITDA down 540 bps." The deck instead shows its three constituent causes with the exact IDR amount and share attributable to each. The decomposition neutralizes the CCO's raw material narrative without requiring a direct confrontation. The data says "raw materials caused 28.6%." The implication — that commercial strategy caused 69.4% — is left to the audience to draw. They always do. And they draw it in the room, in front of each other, which is far more durable than being told.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The SKU Exit Slide Is a Cash Story, Not a Margin Story (Slide 3)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Presenting the SKU exit recommendation as a gross margin action would have put the CCO in opposition: exiting SKUs means admitting his launches were wrong. Presenting it as a working capital action — IDR 380B released, bridge facility avoided, WC days from 68 to 52 — made the CFO the most enthusiastic champion of the recommendation before the meeting started. By the time the slide appears, the CFO and the IC partner are already aligned. The CCO's only avenue for opposition is to argue that Band D SKUs are strategically worth keeping despite destroying IDR 134B per year. That is a very difficult argument to make with the data visible.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Personal Care as the Counterintuitive Insight (Slide 4)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most psychologically powerful moment in this deck is Slide 4. Personal care is the category the commercial team is most proud of — the highest gross margin, the flagship brands, the largest promotional budgets. Showing that 78% of its promotions are ROI-negative produces cognitive dissonance. The commercial team's instinct is "promotions defend shelf space and brand presence." The data says "these specific promotions are paying to reduce margin faster than they are building volume." Dissonance produces attention. Attention is the prerequisite for a decision to land cleanly.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Slide 5 Is a Resolution, Not a List of Recommendations</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The final slide has three decisions with named owners, quantified outcomes, and a clear timeline. It does not say "we recommend that management consider..." — it says "here is the action, here is who owns it, here is what success looks like at Month 12." The if-approved / if-no-action comparison at the bottom converts the decision from an analytical question into a binary choice. Investment committees do not deliberate over binary choices with this much supporting data behind them. They decide.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Case18
