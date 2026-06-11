import Layout from '../../components/Layout'
import Link from 'next/link'

export default function Service() {
  return (
    <Layout title="AI Change Management" description="The people side of AI transformation — executive alignment, champion networks, role-based training, adoption measurement, and resistance management.">
      <section className="service-hero">
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/#services">Services</Link><span>/</span>
            <span>AI Change Management</span>
          </div>
          <span className="eyebrow">Enablement</span>
          <h1 className="h1" style={{marginBottom:20,maxWidth:760}}>AI Change Management</h1>
          <p className="lead" style={{marginBottom:36}}>The people side of AI transformation — executive alignment, champion networks, role-based training, adoption measurement, and resistance management.</p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn btn-blue">Book a Consultation</Link>
            <Link href="/tools/ai-maturity-assessment" className="btn btn-ghost">Free AI Maturity Assessment</Link>
          </div>
        </div>
      </section>

      <section className="section chalk-section">
        <div className="container">
          <span className="eyebrow">What We Deliver</span>
          <h2 className="h2" style={{marginBottom:40}}>What Is Included</h2>
          <div className="card-grid-3">
            {[
              ['Discovery & Assessment','Deep-dive into your current state, capability gaps, and strategic objectives. All findings documented with prioritised recommendations.','Week 1-2'],
              ['Strategy & Roadmap','Co-created transformation roadmap with clear milestones, ownership, dependencies, and success metrics. Board-ready presentation included.','Week 3-4'],
              ['Implementation Support','Hands-on delivery support through the first implementation sprint. We stay engaged until you have evidence the program is working.','Ongoing'],
            ].map(([h,p,t])=>(
              <div key={h} className="card">
                <h3>{h}</h3><p>{p}</p>
                <span className="card-tag tag-green">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <span className="eyebrow eyebrow-amber">Powered by SIXXAB AI</span>
          <h2 className="h2 h2-white" style={{marginBottom:16}}>Strategy meets <span style={{color:'var(--amber)'}}>execution.</span></h2>
          <p style={{fontSize:16,color:'rgba(255,255,255,.55)',maxWidth:540,lineHeight:1.72,marginBottom:28}}>Every BigtechConsulting engagement is backed by SIXXAB AI — the autonomous business platform at startupsinabox.com. Your strategy runs in your business from day one.</p>
          <a href="https://startupsinabox.com" target="_blank" rel="noreferrer" className="btn btn-amber">Explore SIXXAB AI →</a>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="h2 h2-white" style={{marginBottom:10}}>Ready to get started?</h2>
              <p style={{color:'rgba(255,255,255,.7)',fontSize:16,maxWidth:440}}>Book a 30-minute strategy call with a BigtechConsulting AI specialist.</p>
            </div>
            <Link href="/#contact" className="btn btn-white">Book a Call →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
