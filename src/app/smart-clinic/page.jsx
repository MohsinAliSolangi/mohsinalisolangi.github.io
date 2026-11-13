import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Smart Clinic Solution — Token Queue & OPD System | Mohsin Ali Solangi',
  description: 'A token-based OPD queue system for private clinics. Patients get a live ETA and only arrive when it is nearly their turn. The waiting room stays empty.',
  alternates: { canonical: 'https://mohsinalisolangi.me/smart-clinic/' },
  openGraph: {
    title: 'Smart Clinic Solution — OPD Queue System',
    description: 'Replace broken appointment times with a live token queue.',
    url: 'https://mohsinalisolangi.me/smart-clinic/',
    type: 'article',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Smart Clinic Solution',
      url: 'https://mohsinalisolangi.me/smart-clinic/',
      applicationCategory: 'HealthApplication',
      operatingSystem: 'Web, Android, iOS',
      description: 'Token-based OPD queue management and live ETA engine for private clinics. Reduces average patient waiting time from 45–55 minutes to under 12 minutes.',
      author: { '@id': 'https://mohsinalisolangi.me/#person' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      featureList: ['Live token queue', 'ETA engine', 'SMS/Push notifications', 'Digital prescription pad', 'Insurance claims', 'Financial reports'],
      audience: { '@type': 'Audience', audienceType: 'Private clinics and small hospitals in Pakistan' },
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What problem does Smart Clinic solve?',
          acceptedAnswer: { '@type': 'Answer', text: 'Private clinics in Pakistan assign fixed time slots that collapse by the second hour because consultations are never 15 minutes. Patients wait 45–55 minutes in a crowded waiting room. Smart Clinic replaces time slots with a live token queue — patients are notified when to leave home and only arrive when it is nearly their turn.' },
        },
        {
          '@type': 'Question',
          name: 'How does the queue ETA work?',
          acceptedAnswer: { '@type': 'Answer', text: 'ETA = patients ahead × median consultation time × 1.10 buffer. The median of the last 20 consultations is used — not the mean — so a single long case does not distort all downstream estimates. ETA recalculates every time the doctor presses Next Patient.' },
        },
        {
          '@type': 'Question',
          name: 'Who built Smart Clinic?',
          acceptedAnswer: { '@type': 'Answer', text: 'Smart Clinic was designed and built by Mohsin Ali Solangi, a blockchain and software developer based in Karachi, Pakistan. Portfolio: https://mohsinalisolangi.me/' },
        },
      ],
    },
  ],
}

export default function SmartClinicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        /* ── tokens ── */
        :root {
          --sc-green: #22c55e;
          --sc-green-dim: rgba(34,197,94,.12);
          --sc-gold: #d4a85a;
          --sc-border: #1e1e1e;
          --sc-panel: #0a0a0a;
          --sc-muted: #666;
          --sc-sub: #999;
        }

        /* ── hero ── */
        .sc-hero { padding: clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,6rem); }
        .sc-badge { display: inline-flex; align-items: center; gap: 8px; padding: .35rem .8rem; border: 1px solid rgba(34,197,94,.25); background: rgba(34,197,94,.07); font: 9px "JetBrains Mono",monospace; letter-spacing: .14em; text-transform: uppercase; color: var(--sc-green); margin-bottom: 1.5rem; }
        .sc-badge::before { content:""; width:7px; height:7px; border-radius:50%; background:var(--sc-green); box-shadow:0 0 8px var(--sc-green); flex-shrink:0; }
        .sc-hero h1 { font: 650 clamp(2.8rem,8vw,7rem)/.88 "Space Grotesk",Arial,sans-serif; letter-spacing: -.065em; margin-bottom: 1.5rem; }
        .sc-hero h1 span { color: #444; font-weight: 400; }
        .sc-hero-lead { max-width: 600px; color: var(--sc-sub); font-size: clamp(15px,2vw,18px); line-height: 1.65; margin-bottom: 2rem; }
        .sc-cta-row { display: flex; flex-wrap: wrap; gap: .75rem; }
        .sc-btn-primary { display: inline-flex; align-items: center; gap: .5rem; padding: .9rem 1.5rem; background: #f4f4f1; color: #090909; text-decoration: none; font: 700 10px "JetBrains Mono",monospace; letter-spacing: .12em; text-transform: uppercase; transition: background .2s; }
        .sc-btn-primary:hover { background: #fff; }
        .sc-btn-secondary { display: inline-flex; align-items: center; gap: .5rem; padding: .9rem 1.5rem; border: 1px solid #2a2a2a; color: var(--sc-sub); text-decoration: none; font: 700 10px "JetBrains Mono",monospace; letter-spacing: .12em; text-transform: uppercase; transition: border-color .2s, color .2s; }
        .sc-btn-secondary:hover { border-color: #555; color: #f7f7f5; }

        /* ── stat strip ── */
        .sc-stats { display: grid; grid-template-columns: repeat(4,1fr); gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: clamp(3rem,6vw,5rem); }
        .sc-stat { padding: 1.75rem 1.5rem; background: var(--sc-panel); text-align: center; }
        .sc-stat-val { display: block; font: 700 clamp(2rem,4vw,3rem)/.9 "Space Grotesk",Arial,sans-serif; letter-spacing: -.05em; color: #f7f7f5; }
        .sc-stat-val.green { color: var(--sc-green); }
        .sc-stat-label { display: block; margin-top: .5rem; font: 9px "JetBrains Mono",monospace; letter-spacing: .1em; text-transform: uppercase; color: var(--sc-muted); }

        /* ── section shared ── */
        .sc-section { padding: clamp(4rem,8vw,7rem) 0; border-top: 1px solid var(--sc-border); }
        .sc-eyebrow { font: 9px "JetBrains Mono",monospace; letter-spacing: .17em; text-transform: uppercase; color: var(--sc-muted); margin-bottom: 1rem; }
        .sc-h2 { font: 550 clamp(2rem,5vw,4rem)/.95 "Space Grotesk",Arial,sans-serif; letter-spacing: -.05em; margin-bottom: 1.5rem; }
        .sc-h2 span { color: #444; font-weight: 400; }
        .sc-lead { max-width: 680px; color: var(--sc-sub); font-size: 15px; line-height: 1.75; }

        /* ── problem ── */
        .sc-problem-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: 2.5rem; }
        .sc-problem-item { padding: 1.75rem; background: var(--sc-panel); }
        .sc-problem-item h3 { font: 500 15px "Space Grotesk",Arial,sans-serif; color: #c0bfbc; margin-bottom: .6rem; }
        .sc-problem-item p { font-size: 13px; color: var(--sc-muted); line-height: 1.65; }
        .sc-callout { margin-top: 2rem; padding: 1.5rem 1.75rem; border-left: 3px solid #2a2a2a; background: #0d0d0d; }
        .sc-callout p { font-size: 15px; color: var(--sc-sub); line-height: 1.65; }
        .sc-callout strong { color: #f7f7f5; }

        /* ── flow ── */
        .sc-flow { display: flex; flex-direction: column; gap: 1px; margin-top: 2.5rem; }
        .sc-step { display: grid; grid-template-columns: 64px 1fr; gap: 0; border: 1px solid var(--sc-border); overflow: hidden; }
        .sc-step-num { padding: 1.5rem; background: #0d0d0d; border-right: 1px solid var(--sc-border); display: flex; align-items: center; justify-content: center; font: 700 20px "Space Grotesk",Arial,sans-serif; color: #2a2a2a; }
        .sc-step-body { padding: 1.5rem 1.75rem; }
        .sc-step-body h3 { font: 500 15px "Space Grotesk",Arial,sans-serif; color: #c0bfbc; margin-bottom: .4rem; }
        .sc-step-body p { font-size: 13px; color: var(--sc-muted); line-height: 1.65; }

        /* ── use cases ── */
        .sc-use-grid { display: grid; grid-template-columns: repeat(2,1fr); gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: 2.5rem; }
        .sc-use-card { padding: 1.75rem; background: var(--sc-panel); }
        .sc-use-tag { display: inline-block; font: 9px "JetBrains Mono",monospace; letter-spacing: .1em; text-transform: uppercase; color: #444; border: 1px solid #222; padding: .25rem .6rem; margin-bottom: .9rem; }
        .sc-use-card h3 { font: 500 16px "Space Grotesk",Arial,sans-serif; color: #c0bfbc; margin-bottom: .5rem; }
        .sc-use-card p { font-size: 13px; color: var(--sc-muted); line-height: 1.65; }

        /* ── business model ── */
        .sc-biz-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: 2.5rem; }
        .sc-biz-card { padding: 1.75rem; background: var(--sc-panel); }
        .sc-biz-card h3 { font: 600 13px "JetBrains Mono",monospace; letter-spacing: .08em; text-transform: uppercase; color: var(--sc-gold); margin-bottom: .75rem; }
        .sc-biz-card p { font-size: 13px; color: var(--sc-muted); line-height: 1.65; }

        /* ── how solved ── */
        .sc-solve-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: 2.5rem; }
        .sc-solve-item { padding: 1.75rem; background: var(--sc-panel); }
        .sc-solve-num { font: 700 32px "Space Grotesk",Arial,sans-serif; letter-spacing: -.04em; color: #1e1e1e; margin-bottom: .75rem; }
        .sc-solve-item h3 { font: 500 15px "Space Grotesk",Arial,sans-serif; color: #c0bfbc; margin-bottom: .5rem; }
        .sc-solve-item p { font-size: 13px; color: var(--sc-muted); line-height: 1.65; }

        /* ── objectives ── */
        .sc-obj-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; background: var(--sc-border); border: 1px solid var(--sc-border); margin-top: 2.5rem; }
        .sc-obj-card { padding: 1.75rem; background: var(--sc-panel); }
        .sc-obj-before { font: 9px "JetBrains Mono",monospace; letter-spacing: .1em; text-transform: uppercase; color: #333; margin-bottom: .4rem; }
        .sc-obj-val { font: 700 clamp(1.8rem,3vw,2.6rem)/.9 "Space Grotesk",Arial,sans-serif; letter-spacing: -.04em; margin-bottom: .4rem; }
        .sc-obj-val.bad { color: #ef4444; }
        .sc-obj-val.good { color: var(--sc-green); }
        .sc-obj-label { font-size: 12px; color: var(--sc-muted); }

        /* ── final cta ── */
        .sc-final { padding: clamp(4rem,8vw,7rem) 0; border-top: 1px solid var(--sc-border); text-align: center; }
        .sc-final h2 { font: 550 clamp(2.2rem,5vw,4.5rem)/.95 "Space Grotesk",Arial,sans-serif; letter-spacing: -.055em; margin-bottom: 1rem; }
        .sc-final p { color: var(--sc-sub); font-size: 15px; max-width: 500px; margin: 0 auto 2rem; line-height: 1.65; }
        .sc-final-btn { display: inline-flex; align-items: center; gap: .6rem; padding: 1.1rem 2rem; background: var(--sc-green); color: #050505; text-decoration: none; font: 700 11px "JetBrains Mono",monospace; letter-spacing: .14em; text-transform: uppercase; transition: background .2s, transform .15s; }
        .sc-final-btn:hover { background: #4ade80; transform: translateY(-2px); }
        .sc-related { display: flex; flex-wrap: wrap; justify-content: center; gap: .6rem 1.2rem; margin-top: 2.5rem; }
        .sc-related a { font: 9px "JetBrains Mono",monospace; letter-spacing: .1em; text-transform: uppercase; color: #444; text-decoration: none; transition: color .2s; }
        .sc-related a:hover { color: var(--sc-sub); }

        /* ── responsive ── */
        @media (max-width: 800px) {
          .sc-stats { grid-template-columns: repeat(2,1fr); }
          .sc-problem-grid { grid-template-columns: 1fr; }
          .sc-use-grid { grid-template-columns: 1fr; }
          .sc-biz-grid { grid-template-columns: 1fr; }
          .sc-solve-grid { grid-template-columns: 1fr; }
          .sc-obj-grid { grid-template-columns: repeat(2,1fr); }
        }
        @media (max-width: 540px) {
          .sc-stats { grid-template-columns: repeat(2,1fr); }
          .sc-obj-grid { grid-template-columns: 1fr; }
          .sc-step { grid-template-columns: 48px 1fr; }
          .sc-step-num { font-size: 15px; padding: 1rem; }
        }
      `}</style>

      <SeoLayout navLinks={[
        { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
        { href: '/about-mohsin-ali-solangi/', label: 'About' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
      ]}>

        {/* ── HERO ── */}
        <section className="sc-hero shell">
          <p className="crumbs"><a href="/">Home</a> / <a href="/#products">Products</a> / Smart Clinic</p>
          <span className="sc-badge">Live · v1.0 · Karachi, Pakistan</span>
          <h1>SMART CLINIC<br /><span>SOLUTION.</span></h1>
          <p className="sc-hero-lead">Token-based OPD queue and live ETA engine for private clinics. Patients stop waiting in a crowded room and only arrive when it is nearly their turn.</p>
          <div className="sc-cta-row">
            <a className="sc-btn-primary" href="https://smartclinic-mu.vercel.app/" target="_blank" rel="noopener noreferrer">Go check live project ↗</a>
            <a className="sc-btn-secondary" href="/#contact">Discuss this build</a>
          </div>

          <div className="sc-stats">
            <div className="sc-stat"><span className="sc-stat-val green">12 min</span><span className="sc-stat-label">Avg wait — after</span></div>
            <div className="sc-stat"><span className="sc-stat-val green">&lt; 5</span><span className="sc-stat-label">Patients in room — after</span></div>
            <div className="sc-stat"><span className="sc-stat-val">55 min</span><span className="sc-stat-label">Avg wait — before</span></div>
            <div className="sc-stat"><span className="sc-stat-val">15–25</span><span className="sc-stat-label">Patients in room — before</span></div>
          </div>
        </section>

        {/* ── PROBLEM STATEMENT ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">Problem statement</p>
            <h2 className="sc-h2">THE SCHEDULE BREAKS<br /><span>BY THE SECOND HOUR.</span></h2>
            <p className="sc-lead">Private clinics assign 15-minute slots — but consultations are never 15 minutes. A follow-up takes 4 minutes, a new patient takes 20. By mid-session every patient booked after 5 PM is sitting in the same room at the same time.</p>

            <div className="sc-problem-grid">
              <div className="sc-problem-item">
                <h3>Crowded waiting room</h3>
                <p>15–25 patients waiting simultaneously. Negative reviews, patients leaving before they are seen, and stress on reception staff.</p>
              </div>
              <div className="sc-problem-item">
                <h3>Reception overloaded</h3>
                <p>"Kitni der lagegi?" — one staff member spends the entire day answering this single question by phone and in-person.</p>
              </div>
              <div className="sc-problem-item">
                <h3>No patient history</h3>
                <p>Paper parchi and manual registers mean previous prescriptions are lost. The doctor sees each patient cold, every visit.</p>
              </div>
              <div className="sc-problem-item">
                <h3>Revenue leakage</h3>
                <p>Manual cash tally at day-end. No per-doctor revenue visibility. Insurance claims filed by hand — weeks of delay, frequent rejections.</p>
              </div>
            </div>

            <div className="sc-callout">
              <p><strong>Root cause:</strong> the clinic promises a <em>time</em> it cannot keep. The fix is simple — promise a <em>position</em> instead, and publish a live, honest estimate.</p>
            </div>
          </div>
        </section>

        {/* ── FLOW ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">How it works</p>
            <h2 className="sc-h2">THE FLOW — <span>START TO END.</span></h2>
            <p className="sc-lead">From booking to consultation in five steps. The system does the scheduling work so the patient, doctor, and reception never have to guess.</p>

            <div className="sc-flow">
              <div className="sc-step">
                <div className="sc-step-num">01</div>
                <div className="sc-step-body">
                  <h3>Patient books a token</h3>
                  <p>Patient books for a session window (morning or evening) — not a fixed clock time. They receive a token number and an estimated arrival window.</p>
                </div>
              </div>
              <div className="sc-step">
                <div className="sc-step-num">02</div>
                <div className="sc-step-body">
                  <h3>System calculates live ETA</h3>
                  <p>ETA = patients ahead × doctor's rolling median consultation time × 1.10 buffer. Recalculates every time the doctor presses Next Patient.</p>
                </div>
              </div>
              <div className="sc-step">
                <div className="sc-step-num">03</div>
                <div className="sc-step-body">
                  <h3>Patient gets notified to leave home</h3>
                  <p>Two SMS/push notifications fire relative to the live ETA — 30 minutes before ("leave now") and 10 minutes before ("arrive now"). Never at a fixed time.</p>
                </div>
              </div>
              <div className="sc-step">
                <div className="sc-step-num">04</div>
                <div className="sc-step-body">
                  <h3>Patient arrives — check-in at reception</h3>
                  <p>Reception checks them in. Walk-in tokens are merged into the same queue. The display board shows the now-serving token in real time.</p>
                </div>
              </div>
              <div className="sc-step">
                <div className="sc-step-num">05</div>
                <div className="sc-step-body">
                  <h3>Consultation, prescription, payment — all in one record</h3>
                  <p>Doctor sees patient history, writes the prescription digitally, orders labs, and sets a follow-up. Reception collects payment and closes the visit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── USE CASES ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">Use cases</p>
            <h2 className="sc-h2">FOUR USERS.<br /><span>ONE SHARED SYSTEM.</span></h2>
            <p className="sc-lead">Every role in the clinic gets exactly the view and tools it needs — nothing more, nothing less.</p>

            <div className="sc-use-grid">
              <div className="sc-use-card">
                <span className="sc-use-tag">Patient</span>
                <h3>Books token from phone, waits at home</h3>
                <p>Books a token online, sees their live queue position and ETA countdown, receives SMS when to leave, views prescription history and family profiles.</p>
              </div>
              <div className="sc-use-card">
                <span className="sc-use-tag">Doctor</span>
                <h3>Sees one patient at a time — with full history</h3>
                <p>Opens the console, sees who is next with their previous visits and pre-consultation form, writes the prescription with drug autocomplete, presses Next Patient.</p>
              </div>
              <div className="sc-use-card">
                <span className="sc-use-tag">Reception</span>
                <h3>Check-in, fees, and queue control</h3>
                <p>Issues walk-in tokens, checks in arrivals, collects fees (cash / card / insurance), reschedules when needed, and runs the end-of-day cash report.</p>
              </div>
              <div className="sc-use-card">
                <span className="sc-use-tag">Clinic Owner</span>
                <h3>Reports, revenue, and full visibility</h3>
                <p>Sees per-doctor revenue, waiting time analytics, insurance claim status, daily collection by payment mode, and an audit log of every action.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── BUSINESS MODEL ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">Business model</p>
            <h2 className="sc-h2">HOW IT CREATES<br /><span>VALUE FOR THE CLINIC.</span></h2>
            <p className="sc-lead">The system pays for itself through the efficiency gains it creates from day one.</p>

            <div className="sc-biz-grid">
              <div className="sc-biz-card">
                <h3>More patients seen</h3>
                <p>By capping tokens at the realistic session capacity and eliminating scheduling collapse, doctors see 15–20% more patients per session without working longer.</p>
              </div>
              <div className="sc-biz-card">
                <h3>Reception cost down</h3>
                <p>Reception calls drop from 60–80 per day to under 20. The same staff handles more patients. No dedicated "phone queue" person needed.</p>
              </div>
              <div className="sc-biz-card">
                <h3>Insurance revenue unlocked</h3>
                <p>Claims submitted the same day instead of 5–10 days later. Approval rates improve. Insurance revenue that was delayed for weeks arrives on time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW PROBLEM IS SOLVED ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">How the problem is solved</p>
            <h2 className="sc-h2">THE FOUR DESIGN<br /><span>DECISIONS THAT MATTER.</span></h2>

            <div className="sc-solve-grid">
              <div className="sc-solve-item">
                <div className="sc-solve-num">01</div>
                <h3>Token queue instead of time slots</h3>
                <p>Patients book a position, not a clock time. The ETA is estimated from the actual pace of the session — not an optimistic assumption about how long each consultation takes.</p>
              </div>
              <div className="sc-solve-item">
                <div className="sc-solve-num">02</div>
                <h3>Median — not mean — consultation time</h3>
                <p>One 45-minute emergency case must not shift every downstream ETA by 30 minutes. The median of the last 20 consultations gives an honest, robust estimate.</p>
              </div>
              <div className="sc-solve-item">
                <div className="sc-solve-num">03</div>
                <h3>Notifications reschedule on ETA drift</h3>
                <p>A notification scheduled at booking time will almost always be wrong by the time it fires. Every notification is a delayed job that cancels and reschedules whenever the live ETA shifts by more than 5 minutes.</p>
              </div>
              <div className="sc-solve-item">
                <div className="sc-solve-num">04</div>
                <h3>Cap tokens at realistic capacity</h3>
                <p>max_tokens = floor(session_duration / median_time) × 0.9. This single rule eliminates overbooking — the actual root cause of the long wait — before the first patient even books.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── OBJECTIVES ── */}
        <section className="sc-section">
          <div className="shell">
            <p className="sc-eyebrow">Objectives</p>
            <h2 className="sc-h2">WHAT SUCCESS<br /><span>LOOKS LIKE AT 60 DAYS.</span></h2>

            <div className="sc-obj-grid">
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">45–55 min</div>
                <div className="sc-obj-val good">↓ 12 min</div>
                <div className="sc-obj-label">Average in-clinic wait</div>
              </div>
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">15–25</div>
                <div className="sc-obj-val good">↓ &lt; 5</div>
                <div className="sc-obj-label">Patients in waiting room</div>
              </div>
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">80 calls</div>
                <div className="sc-obj-val good">↓ &lt; 20</div>
                <div className="sc-obj-label">Reception calls per day</div>
              </div>
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">12–18%</div>
                <div className="sc-obj-val good">↓ &lt; 6%</div>
                <div className="sc-obj-label">No-show rate</div>
              </div>
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">5–10 days</div>
                <div className="sc-obj-val good">↓ Same day</div>
                <div className="sc-obj-label">Insurance claim submission</div>
              </div>
              <div className="sc-obj-card">
                <div className="sc-obj-before">Before → Target</div>
                <div className="sc-obj-val bad">Lost</div>
                <div className="sc-obj-val good">100%</div>
                <div className="sc-obj-label">Prescription retrieval on repeat visit</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="sc-final">
          <div className="shell">
            <h2>THE PRODUCT IS LIVE.<br />GO SEE IT WORK.</h2>
            <p>Smart Clinic is deployed and running. Open the live product and explore the queue system, patient flow, and dashboard.</p>
            <a className="sc-final-btn" href="https://smartclinic-mu.vercel.app/" target="_blank" rel="noopener noreferrer">
              Go check live project ↗
            </a>
            <div className="sc-related">
              <a href="/#products">All products</a>
              <a href="/about-mohsin-ali-solangi/">About Mohsin</a>
              <a href="/free-blockchain-consultation/">Free consultation</a>
              <a href="/#contact">Contact</a>
            </div>
          </div>
        </section>

      </SeoLayout>
    </>
  )
}
