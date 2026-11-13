import '@/app/seo-pages.css'
import Link from 'next/link'

export default function SeoLayout({ children, navLinks }) {
  const links = navLinks || [
    { href: '/blockchain-developer-pakistan/', label: 'Pakistan' },
    { href: '/about-mohsin-ali-solangi/', label: 'About' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ]

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="shell nav">
        <Link className="brand" href="/">
          <img src="/mohsin-ali-solangi-logo.jpg" alt="" width="44" height="44" />
          <span>MOHSIN.SOLANGI</span>
        </Link>
        <nav className="navlinks">
          {links.map(l => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
      </header>
      <main id="main">{children}</main>
      <footer className="footer">
        <div className="shell">
          <nav className="footerlinks">
            <Link href="/">Portfolio</Link>
            <Link href="/builds/">Builds</Link>
            <Link href="/about-mohsin-ali-solangi/">About Mohsin</Link>
            <Link href="/llms.txt">AI-readable profile</Link>
            <a href="mailto:mohsinali.solangi789@gmail.com">Email Mohsin</a>
          </nav>
          <p>© 2026 Mohsin Ali Solangi · Pakistan-based blockchain and Web3 developer</p>
        </div>
      </footer>
    </>
  )
}
