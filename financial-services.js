import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Vertical() {
  const usecases = ["Fraud Detection & AML", "Credit Risk & Underwriting AI", "Regulatory Compliance Automation", "Hyper-Personalised Customer Experience", "Algorithmic Trading & Risk", "AI-Powered Document Processing"]
  const compliance = ["Basel IV / BCBS 239", "DORA", "MiFID III", "CCAR / DFAST", "SR 11-7 Model Risk", "AML / BSA", "EU AI Act High-Risk", "GDPR Article 22"]
  return (
    <Layout title="Financial Services AI" description="AI transformation built for regulated finance — banks, insurers, and asset managers.">
      <section className="service-hero">
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/#verticals">Verticals</Link><span>/</span>
            <span>Financial Services AI</span>
          </div>
          <span className="eyebrow">Industry Vertical</span>
          <h1 className="h1" style={{marginBottom:20,maxWidth:760}}>Financial Services AI</h1>
          <p className="lead" style={{marginBottom:36}}>AI transformation built for regulated finance — banks, insurers, and asset managers.</p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn btn-blue">Talk to a Specialist</Link>
            <Link href="/tools/ai-maturity-assessment" className="btn btn-ghost">Free AI Assessment</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">High-Value Use Cases</span>
          <h2 className="h2" style={{marginBottom:40}}>Where We Deliver Results</h2>
          <div className="card-grid-3">
            {usecases.map(u=>(
              <div key={u} className="card"><h3>{u}</h3><p>Industry-specific AI solution with compliance-first architecture, full audit trails, and measurable business outcomes from deployment.</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section chalk-section">
        <div className="container">
          <span className="eyebrow">Regulatory Coverage</span>
          <h2 className="h2" style={{marginBottom:28}}>Compliance Built In</h2>
          <div style={{display:'flex',flexWrap:'wrap',gap:10}}>
            {compliance.map(c=>(
              <span key={c} style={{background:'white',border:'1px solid var(--border)',borderRadius:8,padding:'8px 16px',fontSize:13,fontWeight:600,color:'var(--ink)'}}>{}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="h2 h2-white" style={{marginBottom:10}}>Ready to lead your sector?</h2>
              <p style={{color:'rgba(255,255,255,.7)',fontSize:16,maxWidth:440}}>Talk to a BigtechConsulting specialist with deep industry AI experience.</p>
            </div>
            <Link href="/#contact" className="btn btn-white">Book a Sector Call →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
