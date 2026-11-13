import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Smart Clinic Solution — Token Queue & OPD System | Mohsin Ali Solangi',
  description: 'A token-based OPD queue, consultation records and reporting system for private clinics. Patients get a live ETA instead of a broken appointment time.',
  alternates: { canonical: 'https://mohsinalisolangi.me/builds/smart-clinic/' },
  openGraph: {
    title: 'Smart Clinic Solution — OPD Queue System',
    description: 'Replace broken time slots with a live token queue. Patients see their real ETA and only arrive when it\'s nearly their turn.',
    url: 'https://mohsinalisolangi.me/builds/smart-clinic/',
    type: 'article',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

export default function SmartClinicPage() {
  return (
    <>
      <style>{`
        .status-badge{display:inline-flex;align-items:center;gap:8px;font:10px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;color:#aaa;margin-bottom:18px}
        .status-badge::before{content:"";width:8px;height:8px;border-radius:50%;background:#22c55e;box-shadow:0 0 8px #22c55e99;flex-shrink:0}
        .ctarow{display:flex;flex-wrap:wrap;align-items:center;gap:14px;margin-top:28px}
        .cta-secondary{display:inline-flex;padding:13px 18px;border:1px solid #353535;color:#bbb;text-decoration:none;font:700 10px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase}
        .cta-secondary:hover{border-color:#666;color:#f7f7f5}
        .problem-table{width:100%;border-collapse:collapse;margin-top:28px;font-size:14px}
        .problem-table th{text-align:left;font:10px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#555;padding:0 0 12px;border-bottom:1px solid #252525}
        .problem-table td{padding:14px 12px 14px 0;border-bottom:1px solid #1a1a1a;vertical-align:top;color:#888;line-height:1.55}
        .problem-table td:first-child{color:#c0bfbc;font-weight:500;width:46%;padding-right:24px}
        .callout{margin-top:36px;padding:24px 28px;border-left:3px solid #333;background:#0d0d0d}
        .callout p{color:#aaa;font-size:15px;line-height:1.65}
        .callout strong{color:#f7f7f5}
        .formula{margin-top:28px;padding:24px 28px;background:#080808;border:1px solid #202020;font:13px/1.8 "JetBrains Mono",monospace;color:#8b9e6e;overflow-x:auto;white-space:pre}
        .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:36px;border:1px solid #252525;background:#252525}
        .metric{padding:24px 20px;background:#090909;text-align:center}
        .metric-before{display:block;font:600 11px "JetBrains Mono",monospace;color:#555;text-transform:uppercase;letter-spacing:.08em;margin-bottom:4px}
        .metric-val{display:block;font:700 clamp(1.6rem,2.8vw,2.4rem)/.9 "Space Grotesk",Arial,sans-serif;letter-spacing:-.04em}
        .metric-val.red{color:#ef4444}
        .metric-val.green{color:#22c55e}
        .metric-label{display:block;font-size:12px;color:#555;margin-top:6px}
        .modules{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;margin-top:28px;border:1px solid #252525;background:#252525}
        .module{padding:24px 26px;background:#090909}
        .module h3{font:600 16px "Space Grotesk",Arial,sans-serif}
        .module p{margin-top:8px;color:#666;font-size:13px;line-height:1.6}
        .module .tag{display:inline-block;margin-top:10px;font:9px "JetBrains Mono",monospace;text-transform:uppercase;letter-spacing:.1em;color:#444;border:1px solid #252525;padding:3px 7px}
        .phases{margin-top:28px;display:flex;flex-direction:column;gap:1px}
        .phase{display:grid;grid-template-columns:120px 1fr;gap:0;border:1px solid #202020;overflow:hidden}
        .phase-num{padding:20px 22px;background:#0d0d0d;border-right:1px solid #202020}
        .phase-num span{display:block;font:700 10px "JetBrains Mono",monospace;text-transform:uppercase;letter-spacing:.1em;color:#555}
        .phase-num strong{display:block;font:600 22px "Space Grotesk",Arial,sans-serif;letter-spacing:-.04em;margin-top:4px}
        .phase-body{padding:20px 24px}
        .phase-body h3{font:500 15px "Space Grotesk",Arial,sans-serif;color:#ccc}
        .phase-body p{margin-top:6px;font-size:13px;color:#666;line-height:1.6}
        .stack-table{width:100%;border-collapse:collapse;margin-top:24px;font-size:13px}
        .stack-table th{text-align:left;font:9px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#555;padding:0 0 10px;border-bottom:1px solid #202020}
        .stack-table td{padding:12px 0;border-bottom:1px solid #161616;color:#888;vertical-align:top}
        .stack-table td:first-child{color:#c0bfbc;width:30%;font:500 13px "Space Grotesk",Arial,sans-serif}
        .stack-table td:last-child{color:#555;font-size:12px}
        @media(max-width:800px){.metrics{grid-template-columns:repeat(2,1fr)}.modules{grid-template-columns:1fr}.phase{grid-template-columns:80px 1fr}}
        @media(max-width:480px){.metrics{grid-template-columns:repeat(2,1fr)}.formula{font-size:11px;padding:16px}}
      `}</style>
      <SeoLayout navLinks={[
        { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
        { href: '/about-mohsin-ali-solangi/', label: 'About' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
      ]}>
        <section className="shell hero">
          <div>
            <p className="crumbs"><a href="/">Home</a> / <a href="/builds/">Builds</a> / Smart Clinic</p>
            <span className="status-badge">Live · v1.0 · Karachi, Pakistan</span>
            <p className="eyebrow">Healthcare · Clinic Operations · Pakistan</p>
            <h1>CLINICS DON&apos;T HAVE<br />A SLOT PROBLEM.<br /><span>THEY HAVE A PROMISE PROBLEM.</span></h1>
            <p className="lede">Token-based OPD queue, live ETA engine, consultation records, and reporting system for private clinics. Patients only come when it is nearly their turn. The waiting room stays empty.</p>
            <div className="ctarow">
              <a className="cta" href="https://smartclinic-mu.vercel.app/" target="_blank" rel="noopener noreferrer">See live product ↗</a>
              <a className="cta-secondary" href="/#contact">Discuss a build like this ↗</a>
            </div>
          </div>
          <aside className="heroaside" style={{display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',gap:'16px',padding:'28px 24px'}}>
            <div style={{font:"600 clamp(2.8rem,5vw,4.5rem)/.9 'Space Grotesk',Arial,sans-serif",letterSpacing:'-.05em',color:'#22c55e'}}>12<span style={{fontSize:'.5em',color:'#555'}}>min</span></div>
            <p style={{fontSize:'13px',color:'#666',maxWidth:'200px'}}>Average in-clinic wait after go-live. Down from 45–55 minutes.</p>
            <div style={{width:'100%',height:'1px',background:'#1e1e1e'}}></div>
            <div style={{font:"600 clamp(2rem,4vw,3.2rem)/.9 'Space Grotesk',Arial,sans-serif",letterSpacing:'-.05em',color:'#f7f7f5'}}>&lt; 5</div>
            <p style={{fontSize:'13px',color:'#666',maxWidth:'200px'}}>Patients simultaneously in waiting room. Down from 15–25.</p>
          </aside>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">The problem</p>
            <h2>THE SCHEDULE COLLAPSES<br />BY THE SECOND HOUR.</h2>
            <p className="sectionintro">Clinics run on 15-minute fixed slots. But a follow-up takes 4 minutes and a new diabetic patient takes 20. By mid-session the schedule is fiction — and everyone booked for the evening is waiting in the same room at the same time.</p>
            <table className="problem-table">
              <thead><tr><th>Problem</th><th>Cost to the clinic</th></tr></thead>
              <tbody>
                <tr><td>15–25 patients waiting simultaneously</td><td>Crowded room, negative reviews, patients leaving mid-wait</td></tr>
                <tr><td>Reception answering &quot;kitni der lagegi?&quot; all day</td><td>One staff member fully occupied on the phone</td></tr>
                <tr><td>Paper parchi / register</td><td>Previous prescriptions lost; no history visible at consultation</td></tr>
                <tr><td>Manual cash tally at end of day</td><td>Revenue leakage, no per-doctor visibility</td></tr>
                <tr><td>Insurance claims filed by hand</td><td>Weeks of delay, frequent rejections</td></tr>
              </tbody>
            </table>
            <div className="callout">
              <p><strong>Root cause:</strong> the system promises a <em>time</em> it cannot keep. The fix is to promise a <em>position</em> and continuously publish an honest estimate.</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">The solution</p>
            <h2>PROMISE A POSITION.<br />PUBLISH A LIVE ETA.</h2>
            <p className="sectionintro">Patients book a token for a session window — not a clock time. The system calculates each patient&apos;s ETA from queue position × the doctor&apos;s rolling median consultation time. Every time the doctor presses Next Patient, every ETA recalculates and every phone updates in real time.</p>
            <div className="formula">{`median_consult_time  =  median(last 20 completed consultations
                         for this doctor AND this session type)

patients_ahead       =  count(appointments WHERE doctor = D
                         AND session = S AND token < my_token
                         AND status IN ('booked','checked_in'))

eta_minutes          =  patients_ahead × median_consult_time × 1.10
eta_timestamp        =  now() + eta_minutes
leave_home_at        =  eta_timestamp − travel_buffer (default 30 min)`}</div>
            <p style={{marginTop:'20px',color:'#666',fontSize:'13px'}}>Median — not mean. A single 45-minute emergency must not distort every downstream ETA.</p>
            <div className="metrics">
              <div className="metric"><span className="metric-before">Before</span><span className="metric-val red">55min</span><span className="metric-label">Average wait</span></div>
              <div className="metric"><span className="metric-before">After</span><span className="metric-val green">&lt;12min</span><span className="metric-label">Average wait</span></div>
              <div className="metric"><span className="metric-before">Before</span><span className="metric-val red">80</span><span className="metric-label">Reception calls/day</span></div>
              <div className="metric"><span className="metric-before">After</span><span className="metric-val green">&lt;20</span><span className="metric-label">Reception calls/day</span></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">What was built</p>
            <h2>FIVE INTERFACES.<br />ONE SHARED RECORD.</h2>
            <div className="modules">
              <div className="module"><span className="tag">Patient · React Native / PWA</span><h3>Patient App</h3><p>Book token, track live queue position, see real-time ETA countdown, receive &quot;leave now&quot; and &quot;arrive now&quot; notifications, view prescription history, manage family profiles.</p></div>
              <div className="module"><span className="tag">Doctor · React + Vite</span><h3>Doctor Console</h3><p>Session dashboard, current patient panel with visit history and pre-consultation form, Rx pad with drug autocomplete (Pakistani market), lab orders, ICD-10 diagnosis, Next Patient button.</p></div>
              <div className="module"><span className="tag">Reception · React + Vite</span><h3>Reception Panel</h3><p>Issue walk-in tokens, check-in arrivals, collect fees (cash / card / insurance), initiate claims, reschedule, reorder queue for emergencies, end-of-day cash reconciliation.</p></div>
              <div className="module"><span className="tag">Public · Any browser or TV</span><h3>Display Board</h3><p>Now-serving token and room number, next 3 tokens, silent WebSocket updates. Runs on any screen in the waiting area with no interaction required.</p></div>
              <div className="module"><span className="tag">Owner · Admin portal</span><h3>Admin & Reports</h3><p>Doctor setup, session config, fee structure, staff roles, full report suite: waiting time analytics, doctor-wise revenue, insurance claims, daily financial ledger.</p></div>
              <div className="module"><span className="tag">Backend · NestJS</span><h3>Queue Engine</h3><p>The heart of the system. Handles the Next Patient state machine, ETA recalculation on every queue change, BullMQ notification scheduling with live reschedule on ETA drift, Redis fan-out to all connected clients.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">Tech stack</p>
            <h2>CHOSEN FOR<br />WHAT THE PROBLEM NEEDS.</h2>
            <table className="stack-table">
              <thead><tr><th>Layer</th><th>Choice</th><th>Why</th></tr></thead>
              <tbody>
                <tr><td>Backend</td><td>Node.js 20 + NestJS + TypeScript</td><td>Modules map cleanly to services; DI makes testing practical</td></tr>
                <tr><td>Database</td><td>PostgreSQL 16</td><td>Token allocation must not race — transactions matter here</td></tr>
                <tr><td>Cache / pub-sub</td><td>Redis 7</td><td>Live queue state + Socket.IO adapter for multi-instance sync</td></tr>
                <tr><td>Job queue</td><td>BullMQ</td><td>Delayed jobs with cancellation — exactly what notification rescheduling needs</td></tr>
                <tr><td>Realtime</td><td>Socket.IO</td><td>Rooms per session, automatic reconnect</td></tr>
                <tr><td>Patient app</td><td>React Native (Expo)</td><td>One codebase, Android-first for Pakistan</td></tr>
                <tr><td>Web consoles</td><td>React 18 + Vite + Tailwind</td><td>Fast build, small team</td></tr>
                <tr><td>SMS</td><td>Local gateway (Veevotech / Jazz)</td><td>10–20× cheaper than Twilio for Pakistan numbers</td></tr>
                <tr><td>Push</td><td>Firebase Cloud Messaging</td><td>Free, instant for app users</td></tr>
                <tr><td>ORM</td><td>Prisma</td><td>Type-safe queries, painless migrations</td></tr>
              </tbody>
            </table>
            <div className="chips" style={{marginTop:'24px'}}>
              <span className="chip">NestJS</span><span className="chip">TypeScript</span><span className="chip">PostgreSQL</span><span className="chip">Redis</span><span className="chip">BullMQ</span><span className="chip">Socket.IO</span><span className="chip">React Native</span><span className="chip">Expo</span><span className="chip">React 18</span><span className="chip">Vite</span><span className="chip">Prisma</span><span className="chip">FCM</span><span className="chip">Docker</span>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">Delivery</p>
            <h2>SHIPPED IN<br />FOUR PHASES.</h2>
            <div className="phases">
              <div className="phase"><div className="phase-num"><span>Phase</span><strong>01</strong></div><div className="phase-body"><h3>Core — 4 weeks</h3><p>Auth and OTP, doctor/session setup, token booking, queue engine with live ETA, doctor console with Next Patient, prescription pad, reception check-in and fee collection, display board, FCM + SMS notifications, daily report.</p></div></div>
              <div className="phase"><div className="phase-num"><span>Phase</span><strong>02</strong></div><div className="phase-body"><h3>Records depth — 3 weeks</h3><p>Full patient history timeline, lab and imaging orders with results, file attachments, follow-up auto-booking, prescription PDF and WhatsApp delivery, doctor-wise and financial reports.</p></div></div>
              <div className="phase"><div className="phase-num"><span>Phase</span><strong>03</strong></div><div className="phase-body"><h3>Insurance & scale — 3 weeks</h3><p>Insurance panels, claim lifecycle and reports, multi-doctor and multi-room sessions, ICD-10 diagnosis coding, admin analytics, audit log.</p></div></div>
              <div className="phase"><div className="phase-num"><span>Phase</span><strong>04</strong></div><div className="phase-body"><h3>Optional expansion</h3><p>Multi-branch support, pharmacy inventory, teleconsultation, Urdu UI, patient feedback and ratings.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">Work with Mohsin</p>
            <h2>HAVE A PROBLEM<br />WORTH BUILDING FOR?</h2>
            <p className="sectionintro">I work with founders and product teams from idea through deployed product. If you have a system problem like this one — bring the problem, not the brief.</p>
            <div className="ctarow" style={{marginTop:'28px'}}>
              <a className="cta" href="https://smartclinic-mu.vercel.app/" target="_blank" rel="noopener noreferrer">See Smart Clinic live ↗</a>
              <a className="cta-secondary" href="/free-blockchain-consultation/">Request a free consultation ↗</a>
            </div>
            <div className="related" style={{marginTop:'40px'}}>
              <a href="/builds/">All builds</a>
              <a href="/about-mohsin-ali-solangi/">About Mohsin</a>
              <a href="/services/web3-dapp-development/">Web3 dApps</a>
              <a href="/blockchain-developer-pakistan/">Blockchain developer Pakistan</a>
            </div>
          </div>
        </section>
      </SeoLayout>
    </>
  )
}
