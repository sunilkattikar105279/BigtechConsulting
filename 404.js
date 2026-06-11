import Layout from '../components/Layout'
import Link from 'next/link'

export default function NotFound() {
  return (
    <Layout title="Page Not Found">
      <div style={{ minHeight: '100vh', background: 'var(--night)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40, paddingTop: 100 }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(80px,15vw,140px)', fontWeight: 800, color: 'var(--blue)', letterSpacing: -6, lineHeight: 1, opacity: .28, marginBottom: 8 }}>404</div>
        <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 800, color: 'white', letterSpacing: -1, marginBottom: 12 }}>This page does not exist.</h1>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,.45)', maxWidth: 380, lineHeight: 1.7, marginBottom: 32 }}>The URL you followed may be broken, or the page may have been moved.</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link href="/" className="btn btn-blue">Back to Home</Link>
          <Link href="/blog" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', color: 'white', padding: '13px 22px', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>Read Insights</Link>
          <Link href="/tools/ai-maturity-assessment" style={{ background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.14)', color: 'white', padding: '13px 22px', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>AI Assessment</Link>
        </div>
      </div>
    </Layout>
  )
}
