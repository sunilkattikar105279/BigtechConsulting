import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children, title = 'BigtechConsulting', description = 'Enterprise AI transformation — strategy, governance, security, and execution. Powered by SIXXAB AI.' }) {
  return (
    <>
      <Head>
        <title>{title} — BigtechConsulting</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={`${title} — BigtechConsulting`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <nav className="nav">
        <div className="nav-inner">
          <Link href="/" className="nav-logo">
            <div className="nav-logo-mark">
              <svg viewBox="0 0 20 20"><path d="M10 2L2 8l8 4 8-4-8-6z"/><path d="M2 14l8 4 8-4"/><path d="M2 11l8 4 8-4"/></svg>
            </div>
            <span className="nav-brand">Bigtech<span>Consulting</span></span>
          </Link>
          <ul className="nav-links">
            <li><Link href="/#services">Services</Link></li>
            <li><Link href="/#verticals">Verticals</Link></li>
            <li><Link href="/blog">Insights</Link></li>
            <li><Link href="/tools/ai-maturity-assessment">Free Assessment</Link></li>
          </ul>
          <Link href="/#contact" className="nav-cta">Book a Call</Link>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="nav-brand" style={{color:'white'}}>Bigtech<span>Consulting</span></span>
              <p>Enterprise AI transformation specialists — strategy, governance, security, and execution. Powered by SIXXAB AI.</p>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <Link href="/services/ai-strategy">AI Strategy</Link>
              <Link href="/services/ai-governance">AI Governance</Link>
              <Link href="/services/ai-security">AI Security</Link>
              <Link href="/services/responsible-ai">Responsible AI</Link>
              <Link href="/services/agentic-platforms">Agentic Platforms</Link>
              <Link href="/services/ai-change-management">Change Management</Link>
            </div>
            <div className="footer-col">
              <h5>Verticals</h5>
              <Link href="/verticals/financial-services">Financial Services</Link>
              <Link href="/verticals/healthcare">Healthcare</Link>
              <Link href="/verticals/manufacturing">Manufacturing</Link>
            </div>
            <div className="footer-col">
              <h5>Resources</h5>
              <Link href="/blog">All Insights</Link>
              <Link href="/tools/ai-maturity-assessment">AI Maturity Assessment</Link>
              <a href="https://startupsinabox.com" target="_blank" rel="noreferrer">SIXXAB AI Platform</a>
              <Link href="/#contact">Contact</Link>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 BigtechConsulting. All rights reserved.</p>
            <p>Powered by <a href="https://startupsinabox.com" style={{color:'rgba(255,255,255,.5)'}}>SIXXAB AI</a></p>
          </div>
        </div>
      </footer>
    </>
  )
}
