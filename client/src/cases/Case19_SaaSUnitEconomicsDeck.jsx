import React from 'react'

const Case19 = () => {
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
    color: '#3B2F8F',
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
  const decisionChip = (color = '#3B2F8F') => ({
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
  const metricCard = (accent = '#3B2F8F') => ({
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
    background: '#3B2F8F',
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
        <span className="case-number">Use Case 19</span>
        <h1>The Cohort Data the Investor Deck Never Showed the Board</h1>
        <div className="case-meta">
          Industry: Tech / SaaS / Super-App &bull; Format: C-Level Board Deck &bull; Source: Case 04 — The Unit Economics Trap
        </div>
      </header>

      {/* ── SECTION 1 ── */}
      <section>
        <h2>1. The Brief</h2>
        <div className="content">
          <p>
            Three of five Series E lead prospects have passed. A fourth submitted a term sheet with a 35% valuation haircut and a ratchet clause. The fifth asked for cohort-level retention data the CFO has been reluctant to share — because it contradicts the unit economics narrative in the investor deck.
          </p>
          <p>
            <strong>Karta</strong> is a Jakarta-headquartered super-app with 38 million registered users across Indonesia, the Philippines, and Vietnam. It raised a $620M Series D at a $4.1B valuation 26 months ago. Since then: EBITDA loss has widened from $48M to $94M per quarter. Runway has compressed from 36 months to 19 months. Monthly active user growth is 41% — and every dollar of that growth is making the financial position worse, not better.
          </p>
          <p>
            This is the board deck CEO Arief Santoso presents to the Karta board of directors and the Series D lead investor. It shows the full cohort data — the picture the data room has never contained — and makes the case for a restructuring that eliminates the need for a distressed raise.
          </p>
          <div className="highlight-box">
            <strong>Format Constraints:</strong> 30 minutes. 5 slides. 3 decisions. The board has seen the headline metrics. They have not seen the cohort data, the channel breakdown, or the KartaCredit NPL by vintage. This deck shows all three — and concludes with a recommendation to decline the term sheet.
          </div>
        </div>
      </section>

      {/* ── SECTION 2 ── */}
      <section>
        <h2>2. The People in the Room</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Arief Santoso — CEO &amp; Co-Founder</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Presenting. Built Karta over seven years. Commissioned this engagement with unusual candour: "I need to know if our unit economics are actually working, and if they are not, I need to know which parts are salvageable." Is prepared to show the board the data that contradicts his own Series D narrative. That willingness is rare — and is the reason the deck is credible rather than defensive.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Melissa Tan — CFO</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Aligned with the findings. Has been managing two competing imperatives for 14 months: investor confidence and the actual financial position. This deck resolves the tension — it presents the real position alongside a plan that makes the financial trajectory better, not worse. Her credibility is behind the restructuring recommendation before the first slide.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Budi Hartono — Chief Growth Officer</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Pre-briefed. The architect of Karta's acquisition strategy. Will argue that reducing acquisition spend cedes market share permanently to Gojek and Grab. Has been given the Indonesia referral program to own as part of the restructured plan — a genuine growth mandate with the best unit economics in the portfolio. His energy needs to be redirected, not suppressed.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Series D Lead Partner — Singapore Growth Equity Fund</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The investor whose capital is at risk. Ran cohort analysis privately during Series E diligence and found the same retention deterioration. Is expecting the management team to either defend a story he has already disproved — or show up with the same data he has, plus a plan. The deck takes the second path. Do not disappoint him twice.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION 3 ── */}
      <section>
        <h2>3. What the Deck Must Do</h2>
        <div className="content">
          <p>
            The fundamental problem is not the Series E. The Series E is a symptom. The underlying problem is that Karta's growth model was built on a unit economics assumption — 42% month-12 retention — that observed cohort data has never supported. Actual month-12 retention in Indonesia ride-hailing is 32%. In the Philippines it is 19%. The 14-month CAC payback claim is broadly true in Indonesia. The 6.5× LTV/CAC claim is not.
          </p>
          <p>
            The deck's job is to do what the Series D data room should have done: show the cohort data accurately, segment it by geography and acquisition channel, and demonstrate that the restructured business — Indonesia-focused, promo-free, KartaCredit underwriting tightened — reaches EBITDA breakeven before the current runway expires. The distressed term sheet is the price of inaction. The restructuring is the price of honesty.
          </p>
          <div className="highlight-box">
            <strong>The Narrative Spine:</strong> Five slides in one logical arc — <em>the investor deck's assumption vs. the cohort reality</em> (Slide 1) → <em>which geography generates value and which destroys it</em> (Slide 2) → <em>which acquisition channels earn their CAC and which do not</em> (Slide 3) → <em>KartaCredit's true risk exposure and what stabilises it</em> (Slide 4) → <em>decline the term sheet, restructure, raise in 12 months from a profitable business</em> (Slide 5).
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
            <span>KARTA BOARD OF DIRECTORS — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>SITUATION</div>
            <h3 style={slideHeadline}>The investor deck says 6.5×. The cohort data says 3.9×. The gap explains the Series E.</h3>
            <div style={metricGrid}>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>Claimed LTV/CAC</div>
                <div style={metricValue('#3B2F8F')}>6.5×</div>
                <div style={metricSub}>Presented to Series D — $25.16 per user at 24M</div>
              </div>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>Realised LTV/CAC</div>
                <div style={metricValue('#B22222')}>3.9×</div>
                <div style={metricSub}>Q1 2023 cohort, 18M of observed data — $15.13/user</div>
              </div>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>LTV Overstatement</div>
                <div style={metricValue('#B22222')}>$42M</div>
                <div style={metricSub}>$10.03/user × 4.2M users across 2022–2023 cohorts</div>
              </div>
              <div style={metricCard('#CC7722')}>
                <div style={metricLabel}>Monthly EBITDA</div>
                <div style={metricValue('#CC7722')}>−$18.5M</div>
                <div style={metricSub}>Was −$16M. Growth acceleration widens the loss.</div>
              </div>
              <div style={metricCard('#B22222')}>
                <div style={metricLabel}>Runway</div>
                <div style={metricValue('#B22222')}>19 months</div>
                <div style={metricSub}>Was 36M at Series D close — 26 months ago</div>
              </div>
              <div style={metricCard('#CC7722')}>
                <div style={metricLabel}>Series E Status</div>
                <div style={metricValue('#CC7722')}>1 sheet</div>
                <div style={metricSub}>3 passed, 1 at −35% haircut, 1 awaiting cohort data</div>
              </div>
            </div>
            <div style={{ marginTop: '18px', background: '#f3f0ff', border: '1px solid #ccc0f5', borderRadius: '6px', padding: '14px 18px', fontSize: '13px', color: '#3B2F8F' }}>
              <strong>The payback is real.</strong> CAC payback in Indonesia occurs at month 8–10. The 14-month claim is broadly true. The problem is the long-tail assumption: the model assumed 35% retention at month 24 to justify the 6.5× ratio. The cohort shows 24%. That 40% retention gap is exactly why accelerating growth widens EBITDA losses — marginal cohorts are worse than early cohorts, and the model has never been recalibrated.
            </div>
            <div style={decisionBar}>
              <span style={decisionChip('#555')}>FRAME</span>
              <span style={decisionText}>This is not a funding problem. It is a measurement problem. The next three slides show where the value is and where the capital is being destroyed. Slide 5 shows what we do about it.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 2 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 2 OF 5</span>
            <span>KARTA BOARD OF DIRECTORS — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>COMPLICATION — GEOGRAPHY</div>
            <h3 style={slideHeadline}>Indonesia generates $16.5M per month. International expansion consumes every dollar of it — and then $5M more.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Market</th>
                  <th>MAU</th>
                  <th>CAC</th>
                  <th>M12 Retention</th>
                  <th>LTV/CAC</th>
                  <th>Monthly CM</th>
                  <th>Verdict</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f0faf0' }}>
                  <td>
                    <strong>Indonesia</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>38% organic acquisition — structural cost advantage</span>
                  </td>
                  <td>11.4M</td>
                  <td>$4.20</td>
                  <td>32%</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>3.9×</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$16.5M</td>
                  <td>Concentrate here</td>
                </tr>
                <tr style={{ background: '#fff8f0' }}>
                  <td>
                    <strong>Philippines</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>22% organic — no referral base established</span>
                  </td>
                  <td>3.1M</td>
                  <td>$6.80</td>
                  <td>19%</td>
                  <td style={{ color: '#CC5500', fontWeight: '700' }}>0.62×</td>
                  <td style={{ color: '#CC5500', fontWeight: '700' }}>−$2.1M</td>
                  <td>Managed wind-down (12M)</td>
                </tr>
                <tr style={{ background: '#fff0f0' }}>
                  <td>
                    <strong>Vietnam</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>14% organic — negative gross margin per user</span>
                  </td>
                  <td>1.8M</td>
                  <td>$8.40</td>
                  <td>n/a</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>Negative</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>−$11.4M</td>
                  <td>Suspend immediately</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td colSpan="5"><strong>International expansion tax — annualised</strong></td>
                  <td style={{ color: '#B22222', fontWeight: '700' }} colSpan="2"><strong>−$162M/year consuming the entire Indonesia surplus</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '16px', background: '#fef6f6', border: '1px solid #f5c6c6', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: '#7D2E00' }}>
              <strong>Philippines LTV/CAC of 0.62× cannot be fixed with product improvement.</strong> The CAC is structurally too high because there is no organic acquisition base. Maintaining the Philippines burns capital and dilutes management focus from the market that actually works. Vietnam has never been above variable cost breakeven.
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 1</span>
              <span style={decisionText}>Suspend Vietnam immediately (saves $11.4M/month, one-time cost $10M). Begin Philippines managed wind-down over 12 months (saves $6.9M/month avg, one-time cost $18M). Preserve regulatory licences for future re-entry from profitability.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 3 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 3 OF 5</span>
            <span>KARTA BOARD OF DIRECTORS — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>DIAGNOSIS — ACQUISITION CHANNELS</div>
            <h3 style={slideHeadline}>The channels that look like growth are the ones destroying unit economics. $7M per month is burning capital, not building it.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Channel</th>
                  <th>CAC</th>
                  <th>M12 Retention</th>
                  <th>Realised 24M LTV</th>
                  <th>LTV/CAC</th>
                  <th>Monthly Spend</th>
                  <th>Decision</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#f0faf0' }}>
                  <td><strong>Organic / referral</strong></td>
                  <td>$1.20</td>
                  <td>44%</td>
                  <td>$18.40</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>15.3×</td>
                  <td>$7.0M</td>
                  <td>Scale — increase to $10M</td>
                </tr>
                <tr style={{ background: '#f0faf0' }}>
                  <td><strong>App store / SEO</strong></td>
                  <td>$2.10</td>
                  <td>39%</td>
                  <td>$16.20</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>7.7×</td>
                  <td>$3.8M</td>
                  <td>Scale — increase to $5.2M</td>
                </tr>
                <tr>
                  <td><strong>Influencer / brand</strong></td>
                  <td>$3.60</td>
                  <td>31%</td>
                  <td>$12.90</td>
                  <td>3.6×</td>
                  <td>$2.8M</td>
                  <td>Maintain — increase to $5M</td>
                </tr>
                <tr style={{ background: '#fff8f0' }}>
                  <td><strong>Performance (Meta)</strong></td>
                  <td>$4.80</td>
                  <td>28%</td>
                  <td>$11.80</td>
                  <td style={{ color: '#CC5500' }}>2.5×</td>
                  <td>$9.2M</td>
                  <td>Reduce 24% → $7M</td>
                </tr>
                <tr style={{ background: '#fff0f0' }}>
                  <td><strong>Performance (TikTok)</strong></td>
                  <td>$6.20</td>
                  <td>22%</td>
                  <td>$9.40</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>1.5×</td>
                  <td>$4.6M</td>
                  <td>Eliminate — reallocate to organic</td>
                </tr>
                <tr style={{ background: '#fff0f0' }}>
                  <td><strong>Promo-driven</strong></td>
                  <td>$7.40</td>
                  <td>14%</td>
                  <td>$5.80</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>0.8×</td>
                  <td>$3.0M</td>
                  <td>Eliminate immediately — no downside</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td colSpan="4"><strong>Restructured blended LTV/CAC (same budget, reallocated)</strong></td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}><strong>5.2×</strong></td>
                  <td><strong>$27.2M (−$3.2M/month)</strong></td>
                  <td><strong>Save $38.4M/year AND improve quality</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={{ marginTop: '16px', background: '#f3f0ff', border: '1px solid #ccc0f5', borderRadius: '6px', padding: '12px 16px', fontSize: '13px', color: '#3B2F8F' }}>
              <strong>Promo-driven users come for the discount and leave when it ends.</strong> 14% M12 retention — the lowest in the portfolio. Eliminating this channel saves $3M/month and simultaneously improves the installed user base retention quality. It can be executed in 30 days and has no strategic downside.
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 2</span>
              <span style={decisionText}>Eliminate promo-driven acquisition and TikTok performance spend immediately. Reallocate $7M/month to organic referral and brand. Saves $3.2M/month. Blended LTV/CAC improves from 3.9× to 5.2×. Owner: Chief Growth Officer — with the Indonesia referral programme as his primary growth mandate.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 4 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 4 OF 5</span>
            <span>KARTA BOARD OF DIRECTORS — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>DIAGNOSIS — KARTACREDIT</div>
            <h3 style={slideHeadline}>KartaCredit is contribution-positive — at corrected provisioning. The NPL trajectory is the threat. Tighten underwriting now or it becomes our largest loss-maker.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Cohort Vintage</th>
                  <th>30-Day NPL</th>
                  <th>90-Day NPL</th>
                  <th>Trend</th>
                  <th>Implication</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Q1 2023</strong></td>
                  <td>4.2%</td>
                  <td>2.8%</td>
                  <td>—</td>
                  <td>Original underwriting model vintage</td>
                </tr>
                <tr>
                  <td><strong>Q3 2023</strong></td>
                  <td>5.8%</td>
                  <td>4.1%</td>
                  <td style={{ color: '#CC5500' }}>+160 bps</td>
                  <td>First sign of segment expansion risk</td>
                </tr>
                <tr>
                  <td><strong>Q1 2024</strong></td>
                  <td>7.4%</td>
                  <td>5.6%</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>+150 bps</td>
                  <td>Consistent deterioration — not seasoning</td>
                </tr>
                <tr>
                  <td><strong>Q3 2024 (most recent)</strong></td>
                  <td>9.2%</td>
                  <td>aging</td>
                  <td style={{ color: '#B22222', fontWeight: '700' }}>+180 bps</td>
                  <td>Projected 90-day NPL: 7.1%+ at aging</td>
                </tr>
                <tr style={{ background: '#fff0f0' }}>
                  <td colSpan="4"><strong>If trajectory continues: portfolio NPL approaches 12% by Q2 2025</strong></td>
                  <td style={{ color: '#B22222' }}><strong>Eliminates all CM contribution — largest burn source by Q3 2025</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
              <div style={{ background: '#fef6f6', border: '1px solid #f5c6c6', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#B22222', letterSpacing: '0.08em', marginBottom: '8px' }}>CURRENT (UNDERSTATED)</div>
                <div style={{ fontSize: '13px', color: '#3a1a0a', lineHeight: '1.7' }}>
                  Provisioning: $3.9M/month<br />
                  Based on 6.8% stated NPL at 50% coverage<br />
                  Contribution margin (stated): $4.80/user/month<br />
                  <span style={{ color: '#B22222' }}>Understates risk by $2.7M/month ($32.4M/yr)</span>
                </div>
              </div>
              <div style={{ background: '#f0faf5', border: '1px solid #a8d5b8', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#2E7D52', letterSpacing: '0.08em', marginBottom: '8px' }}>CORRECTED + TIGHTENED UNDERWRITING</div>
                <div style={{ fontSize: '13px', color: '#1a3a2a', lineHeight: '1.7' }}>
                  Provisioning: $6.6M/month (7.2% NPL, 80% coverage)<br />
                  30% reduction in new loan issuance to high-risk segments<br />
                  Contribution margin (corrected): $3.45/user/month<br />
                  <span style={{ color: '#2E7D52' }}>Still positive — stabilises within 6 months</span>
                </div>
              </div>
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD DECISION 3</span>
              <span style={decisionText}>Hard cap: no new KartaCredit issuance to users with predicted NPL above 8%. Integrate external credit bureau data. Target: stabilise portfolio NPL at 7.2%. Cost: 30% reduction in new loan issuance. The alternative — continuing current trajectory — turns KartaCredit contribution-negative by Q3 2025. Owner: Head of KartaCredit + Risk Committee.</span>
            </div>
          </div>
        </div>

        {/* SLIDE 5 */}
        <div style={slideWrap}>
          <div style={slideNavBar}>
            <span>SLIDE 5 OF 5</span>
            <span>KARTA BOARD OF DIRECTORS — CONFIDENTIAL</span>
          </div>
          <div style={slideBody}>
            <div style={slideCategory}>RESOLUTION</div>
            <h3 style={slideHeadline}>Decline the term sheet. Restructure. Raise in 12 months from a profitable business — not a distressed one.</h3>
            <table className="data-table">
              <thead>
                <tr>
                  <th>Lever</th>
                  <th>Owner</th>
                  <th>Monthly EBITDA Impact</th>
                  <th>One-Time Cost</th>
                  <th>Timeline</th>
                  <th>Success Metric (M12)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <strong>Channel reallocation</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Eliminate promo + TikTok; scale organic referral</span>
                  </td>
                  <td>CGO (Budi)</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$3.2M</td>
                  <td>—</td>
                  <td>Days 1–30</td>
                  <td>LTV/CAC ≥5.0× by M6</td>
                </tr>
                <tr>
                  <td>
                    <strong>Vietnam suspension</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Skeleton team for regulatory presence; paid acq halted</span>
                  </td>
                  <td>CFO + Country GM</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$11.4M</td>
                  <td>$10M</td>
                  <td>Days 1–30</td>
                  <td>Vietnam monthly burn = $0 by M2</td>
                </tr>
                <tr>
                  <td>
                    <strong>Philippines wind-down</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>12-month managed exit; licences preserved for re-entry</span>
                  </td>
                  <td>CFO + Country GM</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$6.9M avg</td>
                  <td>$18M</td>
                  <td>M1–M12</td>
                  <td>PH acquisition spend = $0 by M3</td>
                </tr>
                <tr>
                  <td>
                    <strong>KartaCredit underwriting reform</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>Hard cap at predicted NPL &gt;8%; credit bureau integration</span>
                  </td>
                  <td>Head of Credit + Risk Committee</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$2.7M</td>
                  <td>—</td>
                  <td>M1–M6</td>
                  <td>NPL (90-day) ≤6.0% stabilised by M6</td>
                </tr>
                <tr>
                  <td>
                    <strong>Overhead reduction</strong>
                    <br />
                    <span style={{ fontSize: '11px', color: '#666' }}>International team restructure + shared services consolidation</span>
                  </td>
                  <td>CEO + COO</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}>+$8.6M</td>
                  <td>—</td>
                  <td>M3–M9</td>
                  <td>Corp overhead ≤$21M/month by M9</td>
                </tr>
                <tr style={{ background: '#f5f5f5' }}>
                  <td><strong>Combined improvement</strong></td>
                  <td>—</td>
                  <td style={{ color: '#2E7D52', fontWeight: '700' }}><strong>+$50.6M/month by M12</strong></td>
                  <td><strong>$28M total</strong></td>
                  <td>—</td>
                  <td><strong>EBITDA breakeven M8–M10</strong></td>
                </tr>
              </tbody>
            </table>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '20px' }}>
              <div style={{ background: '#f0faf5', border: '1px solid #a8d5b8', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#2E7D52', letterSpacing: '0.08em', marginBottom: '8px' }}>IF APPROVED — DECLINE TERM SHEET</div>
                <div style={{ fontSize: '13px', color: '#1a3a2a', lineHeight: '1.7' }}>
                  EBITDA breakeven at Month 8–10<br />
                  Runway constraint eliminated without new capital<br />
                  Indonesia LTV/CAC improves to 5.2×<br />
                  Series E in 12 months — from a profitable business<br />
                  No valuation ratchet. No 35% haircut.
                </div>
              </div>
              <div style={{ background: '#fef6f0', border: '1px solid #f5c6a0', borderRadius: '6px', padding: '14px 16px' }}>
                <div style={{ fontSize: '11px', fontWeight: '700', color: '#CC5500', letterSpacing: '0.08em', marginBottom: '8px' }}>IF TERM SHEET ACCEPTED — NO RESTRUCTURING</div>
                <div style={{ fontSize: '13px', color: '#3a1a0a', lineHeight: '1.7' }}>
                  35% valuation haircut — $1.4B lower than Series D<br />
                  Ratchet clause tied to EBITDA breakeven in 24M<br />
                  International burn continues to consume Indonesia CM<br />
                  KartaCredit NPL trajectory unaddressed<br />
                  Haircut deepens as runway shrinks if restructuring delayed
                </div>
              </div>
            </div>
            <div style={decisionBar}>
              <span style={decisionChip()}>BOARD RESOLUTION</span>
              <span style={decisionText}>Approve all five restructuring levers. Decline the current term sheet. Return to the Series E process in 12 months with six months of EBITDA improvement data and cohort data showing LTV/CAC at 5.2×. Do not burn the term sheet investor — they may lead the next round on materially better terms.</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 ── */}
      <section>
        <h2>5. What Makes This Deck Work</h2>
        <div className="content">
          <div className="highlight-box">
            <strong>Showing the Data the Board Hasn't Seen (Slide 1)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The most powerful decision in this deck is made before the first slide: to show the cohort data accurately. Sophisticated investors run this analysis during diligence — three of the five Series E prospects already had. Walking into the board meeting with the same data they found, paired with a restructuring plan, converts a defensive conversation into a strategic one. Presenting it yourself before it is forced on you is the difference between "management is transparent" and "management was caught." Only one of those narratives can support a Series E.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The International Slide Reframes the Growth Story (Slide 2)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              The Chief Growth Officer's instinct is that cutting international cedes market share permanently. The correct reframe: Karta is not acquiring market share in the Philippines or Vietnam — it is acquiring registered users who do not retain and destroying $162M of capital per year in the process. Ceding users with 0.62× LTV/CAC is not a strategic loss. The board decision frame makes this binary and forces clarity: "Vietnam suspension: saves $11.4M/month" is not ambiguous. The question is not whether to stop — it is who owns the wind-down.
            </p>
          </div>
          <div className="highlight-box">
            <strong>The Channel Table Does What Budi Cannot Block (Slide 3)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Budi Hartono controls the data pipelines and will argue against acquisition cuts. Presenting LTV/CAC by channel — with the promo-driven channel at 0.8× and 14% M12 retention — removes his ability to argue that all acquisition spend is productive. The critical design choice: giving him the referral programme as his primary mandate. He is not being cut out of growth. He is being directed toward the highest-return growth in the portfolio. People who feel they are building rarely oppose. People who feel they are losing always do.
            </p>
          </div>
          <div className="highlight-box">
            <strong>Slide 5 Makes the Choice Irreversible-Looking (Slide 5)</strong>
            <p style={{ marginTop: '8px', fontSize: '14px' }}>
              Boards stall when options feel equal. The final slide makes the options visibly unequal: one path reaches EBITDA breakeven before the current runway expires without new capital and raises in 12 months at no haircut. The other path accepts a 35% valuation haircut, a ratchet clause, and leaves the underlying unit economics unreformed — meaning the same conversation happens again in 18 months from a weaker position. The if-approved / if-declined comparison is not rhetorical. It is the analytical output of the restructuring model. The board's job is to approve the numbers, not evaluate the framing.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Case19
