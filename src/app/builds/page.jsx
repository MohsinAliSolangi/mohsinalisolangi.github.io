import SeoLayout from '@/components/SeoLayout/SeoLayout'

export const metadata = {
  title: 'Builds | Mohsin Ali Solangi — Products in Progress',
  description: 'Products and systems designed and built by Mohsin Ali Solangi. Real problems, working solutions — from idea to deployed product.',
  alternates: { canonical: 'https://mohsinalisolangi.me/builds/' },
  openGraph: {
    title: 'Builds | Mohsin Ali Solangi',
    description: 'Products and systems in progress — real problems, working solutions.',
    url: 'https://mohsinalisolangi.me/builds/',
    type: 'website',
    images: [{ url: 'https://mohsinalisolangi.me/mohsin-ali-solangi-logo.jpg' }],
  },
}

export default function BuildsPage() {
  return (
    <>
      <style>{`
        .buildgrid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;margin-top:48px;border:1px solid #252525;background:#252525}
        .buildcard{background:#090909;padding:36px 32px;text-decoration:none;color:inherit;display:flex;flex-direction:column;gap:14px;transition:background .15s}
        .buildcard:hover{background:#111}
        .buildcard-status{display:inline-flex;align-items:center;gap:7px;font:10px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#aaa}
        .buildcard-status::before{content:"";width:7px;height:7px;border-radius:50%;background:#3a3a3a;flex-shrink:0}
        .buildcard-status.live::before{background:#22c55e;box-shadow:0 0 6px #22c55e88}
        .buildcard-status.building::before{background:#f59e0b;box-shadow:0 0 6px #f59e0b88}
        .buildcard h2{font:600 clamp(1.5rem,2.5vw,2.1rem)/.95 "Space Grotesk",Arial,sans-serif;letter-spacing:-.04em}
        .buildcard .problem{color:#888;font-size:14px;line-height:1.6;max-width:520px}
        .buildcard .buildchips{display:flex;flex-wrap:wrap;gap:7px;margin-top:4px}
        .buildcard .chip{font-size:9px;padding:4px 8px}
        .buildcard .arrow{margin-top:auto;padding-top:16px;font:700 10px "JetBrains Mono",monospace;letter-spacing:.1em;text-transform:uppercase;color:#555}
        .buildcard:hover .arrow{color:#f7f7f5}
        @media(max-width:800px){.buildgrid{grid-template-columns:1fr}}
      `}</style>
      <SeoLayout navLinks={[
        { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
        { href: '/about-mohsin-ali-solangi/', label: 'About' },
        { href: '/#projects', label: 'Projects' },
        { href: '/#contact', label: 'Contact' },
      ]}>
        <section className="shell hero">
          <div>
            <p className="crumbs"><a href="/">Home</a> / Builds</p>
            <p className="eyebrow">Products in progress</p>
            <h1>PROBLEMS WORTH<br /><span>BUILDING FOR.</span></h1>
            <p className="lede">These are real systems I am designing and shipping — not side-project experiments. Each one starts with a concrete problem and ends with a deployed product.</p>
          </div>
          <aside className="heroaside">
            <img src="/mohsin-ali-solangi-logo.jpg" alt="Mohsin Ali Solangi logo" />
            <p>Engineer and solution designer. I find the system problem first, then build the fix.</p>
          </aside>
        </section>

        <section className="section">
          <div className="shell">
            <p className="eyebrow">Active builds</p>
            <h2>WHAT IS BEING<br />SHIPPED.</h2>
            <div className="buildgrid">
              <a className="buildcard" href="/builds/smart-clinic/">
                <span className="buildcard-status live">Live — v1.0</span>
                <h2>Smart Clinic Solution</h2>
                <p className="problem">Private clinics promise appointment times they cannot keep. The fix is to promise a queue position and publish a live ETA — so the waiting room stays empty.</p>
                <div className="buildchips">
                  <span className="chip">NestJS</span>
                  <span className="chip">PostgreSQL</span>
                  <span className="chip">Redis</span>
                  <span className="chip">React Native</span>
                  <span className="chip">BullMQ</span>
                  <span className="chip">Socket.IO</span>
                </div>
                <span className="arrow">Read the build →</span>
              </a>
            </div>
          </div>
        </section>
      </SeoLayout>
    </>
  )
}
