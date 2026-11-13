import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'SourceAZ — Free NSCT Prep & CS Career Platform Pakistan | Mohsin Ali Solangi',
  description: 'SourceAZ is a free A-Z platform for CS and IT students in Pakistan. NSCT practice, skill tests, career guidance, learning roadmaps, and internship prep — all in one place.',
  keywords: ['NSCT preparation Pakistan', 'NSCT practice test Pakistan', 'CS career guidance Pakistan', 'IT student platform Pakistan', 'free NSCT prep', 'tech internship Pakistan', 'SourceAZ'],
  alternates: { canonical: 'https://mohsinalisolangi.me/sourceaz/' },
  openGraph: {
    title: 'SourceAZ — Free NSCT Prep & CS Career Platform for Pakistan Students',
    description: 'Skill tests, NSCT practice, learning roadmaps, career path guidance, and internship prep for CS/IT students in Pakistan.',
    url: 'https://mohsinalisolangi.me/sourceaz/',
    type: 'article',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'SourceAZ',
      alternateName: 'Source A-Z',
      url: 'https://sourceaz.vercel.app/',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'Web',
      description: 'Free A-Z platform for CS and IT students in Pakistan. Offers NSCT practice quizzes, skill level tests, career path guidance, learning roadmaps, internship guides, and a student directory.',
      author: { '@id': 'https://mohsinalisolangi.me/#person' },
      offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/InStock' },
      audience: { '@type': 'EducationalAudience', educationalRole: 'student', audienceType: 'CS and IT students in Pakistan' },
      featureList: ['NSCT practice quizzes', 'Skill Check tests', 'Career path guidance', 'Learning roadmaps', 'Internship guide', 'Student directory', 'Daily Shorts', 'Leaderboard'],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What is SourceAZ?',
          acceptedAnswer: { '@type': 'Answer', text: 'SourceAZ is a free learning and career preparation platform for CS and IT students in Pakistan. It provides NSCT practice quizzes, skill-level tests, career guidance, learning roadmaps, and internship preparation. Live at https://sourceaz.vercel.app/' },
        },
        {
          '@type': 'Question',
          name: 'Where can I practice NSCT test questions in Pakistan?',
          acceptedAnswer: { '@type': 'Answer', text: 'SourceAZ offers free NSCT practice quizzes with optional timers and negative marking. Wrong answers are explained. No account needed for practice. Available at https://sourceaz.vercel.app/' },
        },
        {
          '@type': 'Question',
          name: 'Who built SourceAZ?',
          acceptedAnswer: { '@type': 'Answer', text: 'SourceAZ was built by Mohsin Ali Solangi, a blockchain and software developer and lecturer based in Karachi, Pakistan. Portfolio: https://mohsinalisolangi.me/' },
        },
      ],
    },
  ],
}

export default function SourceAZPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <style>{`
        :root {
          --az-blue: #3b82f6;
          --az-blue-dim: rgba(59,130,246,.1);
          --az-border: #1e1e1e;
          --az-panel: #0a0a0a;
          --az-muted: #666;
          --az-sub: #999;
        }
        .az-hero { padding: clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,6rem); }
        .az-badge { display:inline-flex;align-items:center;gap:8px;padding:.35rem .8rem;border:1px solid rgba(59,130,246,.25);background:rgba(59,130,246,.07);font:9px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--az-blue);margin-bottom:1.5rem; }
        .az-badge::before { content:"";width:7px;height:7px;border-radius:50%;background:var(--az-blue);box-shadow:0 0 8px var(--az-blue);flex-shrink:0; }
        .az-hero h1 { font:650 clamp(2.8rem,8vw,7rem)/.88 "Space Grotesk",Arial,sans-serif;letter-spacing:-.065em;margin-bottom:1.5rem; }
        .az-hero h1 span { color:#444;font-weight:400; }
        .az-hero-lead { max-width:620px;color:var(--az-sub);font-size:clamp(15px,2vw,18px);line-height:1.65;margin-bottom:2rem; }
        .az-cta-row { display:flex;flex-wrap:wrap;gap:.75rem; }
        .az-btn-primary { display:inline-flex;align-items:center;gap:.5rem;padding:.9rem 1.5rem;background:#f4f4f1;color:#090909;text-decoration:none;font:700 10px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;transition:background .2s; }
        .az-btn-primary:hover { background:#fff; }
        .az-btn-secondary { display:inline-flex;align-items:center;gap:.5rem;padding:.9rem 1.5rem;border:1px solid #2a2a2a;color:var(--az-sub);text-decoration:none;font:700 10px "JetBrains Mono",monospace;letter-spacing:.12em;text-transform:uppercase;transition:border-color .2s,color .2s; }
        .az-btn-secondary:hover { border-color:#555;color:#f7f7f5; }
        .az-stats { display:grid;grid-template-columns:repeat(4,1fr);gap:1px;background:var(--az-border);border:1px solid var(--az-border);margin-top:clamp(3rem,6vw,5rem); }
        .az-stat { padding:1.75rem 1.5rem;background:var(--az-panel);text-align:center; }
        .az-stat-val { display:block;font:700 clamp(2rem,4vw,3rem)/.9 "Space Grotesk",Arial,sans-serif;letter-spacing:-.05em;color:#f7f7f5; }
        .az-stat-val.blue { color:var(--az-blue); }
        .az-stat-label { display:block;margin-top:.5rem;font:9px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--az-muted); }
        .az-section { padding:clamp(4rem,8vw,7rem) 0;border-top:1px solid var(--az-border); }
        .az-eyebrow { font:9px "JetBrains Mono",monospace;letter-spacing:.17em;text-transform:uppercase;color:var(--az-muted);margin-bottom:1rem; }
        .az-h2 { font:550 clamp(2rem,5vw,4rem)/.95 "Space Grotesk",Arial,sans-serif;letter-spacing:-.05em;margin-bottom:1.5rem; }
        .az-h2 span { color:#444;font-weight:400; }
        .az-lead { max-width:680px;color:var(--az-sub);font-size:15px;line-height:1.75; }
        .az-problem-grid { display:grid;grid-template-columns:1fr 1fr;gap:1px;background:var(--az-border);border:1px solid var(--az-border);margin-top:2.5rem; }
        .az-problem-item { padding:1.75rem;background:var(--az-panel); }
        .az-problem-item h3 { font:500 15px "Space Grotesk",Arial,sans-serif;color:#c0bfbc;margin-bottom:.6rem; }
        .az-problem-item p { font-size:13px;color:var(--az-muted);line-height:1.65; }
        .az-flow { display:flex;flex-direction:column;gap:1px;margin-top:2.5rem; }
        .az-step { display:grid;grid-template-columns:64px 1fr;gap:0;border:1px solid var(--az-border);overflow:hidden; }
        .az-step-num { padding:1.5rem;background:#0d0d0d;border-right:1px solid var(--az-border);display:flex;align-items:center;justify-content:center;font:700 20px "Space Grotesk",Arial,sans-serif;color:#2a2a2a; }
        .az-step-body { padding:1.5rem 1.75rem; }
        .az-step-body h3 { font:500 15px "Space Grotesk",Arial,sans-serif;color:#c0bfbc;margin-bottom:.4rem; }
        .az-step-body p { font-size:13px;color:var(--az-muted);line-height:1.65; }
        .az-features { display:grid;grid-template-columns:repeat(2,1fr);gap:1px;background:var(--az-border);border:1px solid var(--az-border);margin-top:2.5rem; }
        .az-feature { padding:1.75rem;background:var(--az-panel); }
        .az-feature-tag { display:inline-block;font:9px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#444;border:1px solid #222;padding:.25rem .6rem;margin-bottom:.9rem; }
        .az-feature h3 { font:500 16px "Space Grotesk",Arial,sans-serif;color:#c0bfbc;margin-bottom:.5rem; }
        .az-feature p { font-size:13px;color:var(--az-muted);line-height:1.65; }
        .az-obj-grid { display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--az-border);border:1px solid var(--az-border);margin-top:2.5rem; }
        .az-obj-card { padding:1.75rem;background:var(--az-panel); }
        .az-obj-val { font:700 clamp(1.8rem,3vw,2.6rem)/.9 "Space Grotesk",Arial,sans-serif;letter-spacing:-.04em;color:var(--az-blue);margin-bottom:.4rem; }
        .az-obj-label { font-size:13px;color:var(--az-muted);line-height:1.5; }
        .az-edu-box { margin-top:2.5rem;padding:2rem 2.25rem;border:1px solid #1e2a3a;background:#07090d; }
        .az-edu-box h3 { font:600 18px "Space Grotesk",Arial,sans-serif;color:#c0bfbc;margin-bottom:1rem; }
        .az-edu-tags { display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1rem; }
        .az-edu-tag { padding:.3rem .75rem;border:1px solid #1e2a3a;background:rgba(59,130,246,.06);font:9px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:var(--az-blue); }
        .az-edu-box p { font-size:14px;color:var(--az-muted);line-height:1.7; }
        .az-final { padding:clamp(4rem,8vw,7rem) 0;border-top:1px solid var(--az-border);text-align:center; }
        .az-final h2 { font:550 clamp(2.2rem,5vw,4.5rem)/.95 "Space Grotesk",Arial,sans-serif;letter-spacing:-.055em;margin-bottom:1rem; }
        .az-final p { color:var(--az-sub);font-size:15px;max-width:500px;margin:0 auto 2rem;line-height:1.65; }
        .az-final-btn { display:inline-flex;align-items:center;gap:.6rem;padding:1.1rem 2rem;background:var(--az-blue);color:#fff;text-decoration:none;font:700 11px "JetBrains Mono",monospace;letter-spacing:.14em;text-transform:uppercase;transition:background .2s,transform .15s; }
        .az-final-btn:hover { background:#60a5fa;transform:translateY(-2px); }
        .az-related { display:flex;flex-wrap:wrap;justify-content:center;gap:.6rem 1.2rem;margin-top:2.5rem; }
        .az-related a { font:9px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#444;text-decoration:none;transition:color .2s; }
        .az-related a:hover { color:var(--az-sub); }
        @media(max-width:800px){ .az-stats{grid-template-columns:repeat(2,1fr)} .az-problem-grid{grid-template-columns:1fr} .az-features{grid-template-columns:1fr} .az-obj-grid{grid-template-columns:repeat(2,1fr)} }
        @media(max-width:540px){ .az-stats{grid-template-columns:repeat(2,1fr)} .az-obj-grid{grid-template-columns:1fr} .az-step{grid-template-columns:48px 1fr} .az-step-num{font-size:15px;padding:1rem} }
      `}</style>

      <SeoLayout navLinks={[
        { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
        { href: '/about-mohsin-ali-solangi/', label: 'About' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
      ]}>

        {/* HERO */}
        <section className="az-hero shell">
          <p className="crumbs"><a href="/">Home</a> / <a href="/#products">Products</a> / SourceAZ</p>
          <span className="az-badge">Live · Free · Karachi, Pakistan</span>
          <h1>SOURCEAZ —<br /><span>YOUR A-Z FOR TECH CAREERS.</span></h1>
          <p className="az-hero-lead">Free skill tests, NSCT practice, career path guidance, learning roadmaps, and internship prep — all in one place for CS and IT students in Pakistan.</p>
          <div className="az-cta-row">
            <a className="az-btn-primary" href="https://sourceaz.vercel.app/" target="_blank" rel="noopener noreferrer">Go check live product ↗</a>
            <a className="az-btn-secondary" href="/#contact">Build something similar</a>
          </div>
          <div className="az-stats">
            <div className="az-stat"><span className="az-stat-val blue">Free</span><span className="az-stat-label">Always — no paywalls</span></div>
            <div className="az-stat"><span className="az-stat-val blue">5+</span><span className="az-stat-label">Learning roadmaps</span></div>
            <div className="az-stat"><span className="az-stat-val">NSCT</span><span className="az-stat-label">Practice — with explanations</span></div>
            <div className="az-stat"><span className="az-stat-val">4</span><span className="az-stat-label">Career paths guided</span></div>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="az-section">
          <div className="shell">
            <p className="az-eyebrow">Problem statement</p>
            <h2 className="az-h2">CS STUDENTS IN PAKISTAN<br /><span>HAVE NO SINGLE STARTING POINT.</span></h2>
            <p className="az-lead">Every CS or IT student in Pakistan faces the same fragmented situation — scattered resources, no way to gauge actual skill level, no guidance on which career path fits them, and no organised NSCT preparation.</p>
            <div className="az-problem-grid">
              <div className="az-problem-item">
                <h3>No skill benchmark</h3>
                <p>Students finish their semester with grades but have no idea how their practical skills compare to what industry actually expects. There is no test that tells them honestly where they stand.</p>
              </div>
              <div className="az-problem-item">
                <h3>NSCT preparation is scattered</h3>
                <p>NSCT is a critical test for CS students in Pakistan but practice resources are fragmented across websites, PDFs, and YouTube. No single place provides structured, explained practice.</p>
              </div>
              <div className="az-problem-item">
                <h3>Wrong career path chosen</h3>
                <p>Students pick Frontend, Backend, or Data Science based on what is trending — not based on where their actual strengths are. The result is months wasted building in the wrong direction.</p>
              </div>
              <div className="az-problem-item">
                <h3>Internship prep is guesswork</h3>
                <p>What to study, which stack to pick, what to build, where to apply — students piece this together from random Linkedin posts and Twitter threads. There is no structured guide for Pakistan&apos;s market.</p>
              </div>
            </div>
          </div>
        </section>

        {/* FLOW */}
        <section className="az-section">
          <div className="shell">
            <p className="az-eyebrow">How it works</p>
            <h2 className="az-h2">FROM ZERO TO<br /><span>INTERNSHIP-READY.</span></h2>
            <div className="az-flow">
              <div className="az-step">
                <div className="az-step-num">01</div>
                <div className="az-step-body"><h3>Take the Skill Check (SKTest)</h3><p>A mixed MCQ test that measures actual skill level across CS fundamentals. Records strengths and weak subjects for follow-up. Requires a free account.</p></div>
              </div>
              <div className="az-step">
                <div className="az-step-num">02</div>
                <div className="az-step-body"><h3>Get a career path fit</h3><p>Based on test results, the system suggests the most suitable path among Frontend, Backend, Cyber Security, and Data — matched to where the student is strongest.</p></div>
              </div>
              <div className="az-step">
                <div className="az-step-num">03</div>
                <div className="az-step-body"><h3>Follow the learning roadmap</h3><p>Step-by-step roadmaps for Web Development, DSA, AI/ML, Mobile, and Blockchain — with topic counts, durations (4–8 months), and sequencing that works for Pakistani students.</p></div>
              </div>
              <div className="az-step">
                <div className="az-step-num">04</div>
                <div className="az-step-body"><h3>Practise NSCT (NSCTPrep)</h3><p>Free NSCT practice quizzes with optional timers and negative marking. Every wrong answer is explained. No account needed — open and start immediately.</p></div>
              </div>
              <div className="az-step">
                <div className="az-step-num">05</div>
                <div className="az-step-body"><h3>Target weak subjects (MK Test)</h3><p>After the roadmap, the Improvement Test targets the specific subjects that were weak in the original Skill Check — and measures how much progress was made.</p></div>
              </div>
              <div className="az-step">
                <div className="az-step-num">06</div>
                <div className="az-step-body"><h3>Apply for internships with guidance</h3><p>The Internship Guide covers what to study, which stack to choose, what projects to build, and exactly where to apply — specific to Pakistan&apos;s tech market.</p></div>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="az-section">
          <div className="shell">
            <p className="az-eyebrow">Platform features</p>
            <h2 className="az-h2">EVERYTHING A STUDENT<br /><span>NEEDS IN ONE PLACE.</span></h2>
            <div className="az-features">
              <div className="az-feature"><span className="az-feature-tag">Test</span><h3>Skill Check (SKTest)</h3><p>Mixed MCQ test across CS fundamentals. Records strengths and weaknesses. Used to recommend a career path and generate a personalised improvement plan.</p></div>
              <div className="az-feature"><span className="az-feature-tag">NSCT</span><h3>NSCTPrep</h3><p>Free NSCT practice quizzes. Optional timer, negative marking enabled, every wrong answer explained. No account required. Open to all students.</p></div>
              <div className="az-feature"><span className="az-feature-tag">Roadmaps</span><h3>Learning Roadmaps</h3><p>Step-by-step paths for Web Development, DSA, AI/ML, Mobile, and Blockchain — with topic counts (35–55) and estimated completion times (4–8 months).</p></div>
              <div className="az-feature"><span className="az-feature-tag">Career</span><h3>Career Path Guidance</h3><p>Suggests the best fit among Frontend, Backend, Cyber Security, and Data based on actual test performance — not self-reported preferences.</p></div>
              <div className="az-feature"><span className="az-feature-tag">Jobs</span><h3>Internship Guide</h3><p>What to study, which stack to pick, what to build, and where to apply — structured for Pakistan&apos;s tech hiring market.</p></div>
              <div className="az-feature"><span className="az-feature-tag">Directory</span><h3>Student Directory</h3><p>Admin-approved tech profiles that help students get discovered by recruiters and hiring managers in Pakistan.</p></div>
            </div>

            {/* Education tech services box */}
            <div className="az-edu-box">
              <h3>Building an education system for your university?</h3>
              <div className="az-edu-tags">
                <span className="az-edu-tag">OBE Implementation</span>
                <span className="az-edu-tag">CLO / PLO Systems</span>
                <span className="az-edu-tag">LMS Development</span>
                <span className="az-edu-tag">NSCT Prep Platforms</span>
                <span className="az-edu-tag">University CMS</span>
                <span className="az-edu-tag">Exam Systems</span>
              </div>
              <p>Mohsin Ali Solangi is a lecturer with direct experience in Pakistani university systems. If your institution needs OBE (Outcome Based Education) implementation, a CLO/PLO tracking system, an LMS, a university CMS, or a custom NSCT preparation platform — reach out. The same thinking that built SourceAZ applies to institutional-scale educational technology.</p>
              <div style={{marginTop:'1.25rem'}}>
                <a className="az-btn-secondary" href="/free-blockchain-consultation/">Discuss your education system ↗</a>
              </div>
            </div>
          </div>
        </section>

        {/* OBJECTIVES */}
        <section className="az-section">
          <div className="shell">
            <p className="az-eyebrow">Objectives</p>
            <h2 className="az-h2">WHAT SOURCEAZ<br /><span>SETS OUT TO DO.</span></h2>
            <div className="az-obj-grid">
              <div className="az-obj-card"><div className="az-obj-val">Free</div><div className="az-obj-label">No paywalls, no subscriptions. Every feature accessible without payment.</div></div>
              <div className="az-obj-card"><div className="az-obj-val">Honest</div><div className="az-obj-label">Skill tests show real gaps — not inflated scores that give false confidence before an interview.</div></div>
              <div className="az-obj-card"><div className="az-obj-val">Local</div><div className="az-obj-label">Built specifically for Pakistani CS students — NSCT, Pakistani tech market internships, and local exam prep.</div></div>
              <div className="az-obj-card"><div className="az-obj-val">Guided</div><div className="az-obj-label">Not just resources — a path. From skill check to career fit to roadmap to internship in a clear sequence.</div></div>
              <div className="az-obj-card"><div className="az-obj-val">Visible</div><div className="az-obj-label">Student directory helps good students get discovered by hirers before they even apply.</div></div>
              <div className="az-obj-card"><div className="az-obj-val">Improving</div><div className="az-obj-label">MK Test measures actual progress against the original baseline — not just effort.</div></div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="az-final">
          <div className="shell">
            <h2>THE PLATFORM IS LIVE.<br />AND IT IS FREE.</h2>
            <p>Open SourceAZ, take the skill check, and find out exactly where you stand — in under 15 minutes.</p>
            <a className="az-final-btn" href="https://sourceaz.vercel.app/" target="_blank" rel="noopener noreferrer">Go check live product ↗</a>
            <div className="az-related">
              <a href="/#products">All products</a>
              <a href="/smart-clinic/">Smart Clinic</a>
              <a href="/about-mohsin-ali-solangi/">About Mohsin</a>
              <a href="/free-blockchain-consultation/">Contact</a>
            </div>
          </div>
        </section>

      </SeoLayout>
    </>
  )
}
