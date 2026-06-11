import Layout from '../components/Layout'
import Link from 'next/link'

const SERVICES = [
  { icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5', title: 'AI Strategy', desc: 'Enterprise AI roadmaps aligned to measurable business outcomes. Phased transformation plans that connect vision to production.', tag: 'Foundation', tagClass: 'tag-blue' },
  { icon: 'M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z', title: 'AI Governance', desc: 'End-to-end governance frameworks aligned to EU AI Act, NIST RMF, and sector-specific regulatory requirements.', tag: 'Risk & Compliance', tagClass: 'tag-amber' },
  { icon: 'M13 2L3 14h9l-1 8 10-12h-9l1-8z', title: 'AI Transformation', desc: 'Full-lifecycle transformation programs — from pilot to production — embedding AI into workflows, culture, and operating models.', tag: 'Change Management', tagClass: 'tag-blue' },
  { icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z', title: 'AI Security', desc: 'Secure your AI supply chain: prompt injection defense, data poisoning prevention, model security, and red-team assessments.', tag: 'Cybersecurity', tagClass: 'tag-amber' },
  { icon: 'M12 2a10 10 0 1 0 10 10H12V2z', title: 'AI Architecture', desc: 'Reference architectures for production AI — data pipelines, RAG systems, vector stores, model serving, and LLMOps scaffolding.', tag: 'Technical', tagClass: 'tag-blue' },
  { icon: 'M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z', title: 'Agentic Platforms', desc: 'Design and deploy autonomous AI agent systems — multi-agent orchestration, tool-use, memory systems, and human-in-the-loop workflows.', tag: 'Emerging', tagClass: 'tag-green' },
  { icon: 'M22 12h-4l-3 9L9 3l-3 9H2', title: 'AI Ops', desc: 'Production-grade LLMOps: model monitoring, drift detection, automated retraining pipelines, and AI incident response playbooks.', tag: 'Operations', tagClass: 'tag-blue' },
  { icon: 'M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4', title: 'AI Cost Optimization', desc: 'Reduce AI inference spend by 40–60%: model right-sizing, caching, prompt compression, batching, and GPU resource management.', tag: 'FinOps', tagClass: 'tag-amber' },
  { icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', title: 'AI Change Management', desc: 'The people side of AI — executive alignment, champion networks, role-based training, adoption measurement, and resistance management.', tag: 'Enablement', tagClass: 'tag-green' },
]

const VERTICALS = ['Financial Services','Healthcare & Life Sciences','Retail & E-commerce','Manufacturing','Energy & Utilities','Logistics & Supply Chain','Government & Public Sector','Education & EdTech','Telecom & Media','Real Estate','Insurance','Legal & Compliance']

const TESTIMONIALS = [
  { q: '"BigtechConsulting moved us from a PoC graveyard to three live production AI systems in under six months. Their governance framework alone saved us two regulatory incidents."', name: 'James R.', role: 'CTO, Global Insurance Group', initials: 'JR' },
  { q: '"Their AI Cost Optimization practice cut our inference spend by 47% while improving latency. I did not expect consulting to deliver FinOps-level precision."', name: 'Maya K.', role: 'VP Engineering, Retail Platform', initials: 'MK' },
  { q: '"The agentic platform they designed for our ops team runs 24/7 with human escalation under 2%. ROI was evident in the first quarter of deployment."', name: 'David L.', role: 'COO, Logistics Enterprise', initials: 'DL' },
]

const STEPS = [
  { n: '01', title: 'Discover & Diagnose', body: 'Deep-dive into AI maturity, data assets, organisational readiness, and competitive landscape to find the highest-leverage transformation opportunities.' },
  { n: '02', title: 'Design & Architect', body: 'Co-create a bespoke AI architecture and governance framework aligned to your risk profile, compliance requirements, and technology landscape.' },
  { n: '03', title: 'Build & Pilot', body: 'Rapid prototyping in 4–6 week sprints with clear success metrics. De-risk transformation by proving value before full investment.' },
  { n: '04', title: 'Scale & Optimise', body: 'Production deployment, LLMOps instrumentation, cost optimisation, and continuous improvement loops — we stay engaged through sustained performance.' },
]

const BLOG_POSTS = [
  { href: '/blog/why-ai-projects-fail', cat: 'AI Strategy', catClass: 'bc-strategy', title: 'Why 68% of Enterprise AI Projects Never Reach Production', desc: 'We analysed 200+ programs to find the five failure patterns — and the SCALE framework that breaks them.', date: 'June 2026' },
  { href: '/blog/responsible-ai', cat: 'Responsible AI', catClass: 'bc-ethics', title: 'What the EU AI Act Actually Requires of Your Organisation in 2026', desc: 'A plain-English compliance guide with a 6-month roadmap for mid-size enterprises.', date: 'May 2026' },
  { href: '/blog/agentic-ai', cat: 'Agentic AI', catClass: 'bc-platform', title: 'Agentic AI Explained: What It Is and How to Deploy It This Quarter', desc: 'Agentic AI is a fundamentally different computing paradigm. Here is where it creates real enterprise value right now.', date: 'April 2026' },
]

export default function Home() {
  return (
    <Layout title="AI Business Transformation" description="BigtechConsulting delivers enterprise AI transformation — strategy, governance, security, architecture, and execution. Powered by SIXXAB AI.">

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" />
        <div className="container" style={{position:'relative',zIndex:1}}>
          <div style={{display:'inline-flex',alignItems:'center',gap:8,background:'var(--blue-bg)',border:'1px solid #C5D2FF',borderRadius:40,padding:'5px 14px',fontSize:12,fontWeight:700,color:'var(--blue)',marginBottom:22,letterSpacing:'.04em',textTransform:'uppercase'}}>
            <span style={{width:6,height:6,borderRadius:'50%',background:'var(--blue)',display:'inline-block'}}/>
            AI-First Business Transformation
          </div>
          <h1 className="h1" style={{marginBottom:20,maxWidth:820}}>
            Turn AI Strategy into<br/><em>Competitive Advantage</em>
          </h1>
          <p className="lead" style={{marginBottom:0}}>
            BigtechConsulting partners with enterprises to design, govern, and scale AI transformation — from architecture to agentic platforms, across every vertical. Powered by SIXXAB AI.
          </p>
          <div className="hero-actions">
            <Link href="/#contact" className="btn btn-blue">Start Your Transformation</Link>
            <Link href="/tools/ai-maturity-assessment" className="btn btn-ghost">Free AI Maturity Assessment</Link>
          </div>
          <div className="stat-row">
            {[['200+','Enterprises Transformed'],['14','Industry Verticals'],['$2.4B','Client Value Unlocked'],['98%','Client Retention']].map(([n,l])=>(
              <div key={l}><div className="stat-n">{n}</div><div className="stat-l">{l}</div></div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...VERTICALS,...VERTICALS].map((v,i)=><span key={i} className="marquee-item">{v}</span>)}
        </div>
      </div>

      {/* SERVICES */}
      <section className="section" id="services">
        <div className="container">
          <span className="eyebrow">Our Practice Areas</span>
          <h2 className="h2" style={{marginBottom:14}}>Every Dimension of<br/><em>Enterprise AI</em></h2>
          <p className="lead" style={{marginBottom:48}}>From strategy to execution — we cover the full AI transformation stack, ensuring your organisation builds AI that is powerful, trustworthy, and scalable.</p>
          <div className="card-grid-3">
            {SERVICES.map(s=>(
              <div key={s.title} className="card">
                <div className={`card-icon ${s.tagClass === 'tag-green' ? 'green' : s.tagClass === 'tag-amber' ? 'amber' : ''}`}>
                  <svg viewBox="0 0 24 24"><path d={s.icon}/></svg>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={`card-tag ${s.tagClass}`}>{s.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VERTICALS */}
      <section className="section dark-section" id="verticals">
        <div className="container">
          <span className="eyebrow eyebrow-amber">Industry Coverage</span>
          <h2 className="h2 h2-white" style={{marginBottom:14}}>Built for Your Industry</h2>
          <p style={{fontSize:16,color:'rgba(255,255,255,.5)',maxWidth:520,marginBottom:44,lineHeight:1.7}}>Deep vertical expertise means faster time-to-value. Pre-built frameworks, compliance templates, and use-case libraries for your sector.</p>
          <div className="vert-grid">
            {VERTICALS.map(v=>(
              <div key={v} className="vert-pill"><div className="vert-dot"/><span>{v}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="section chalk-section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:72,alignItems:'center'}}>
            <div>
              <span className="eyebrow">How We Work</span>
              <h2 className="h2" style={{marginBottom:28}}>A Methodology Built<br/><em>for Enterprise Scale</em></h2>
              {STEPS.map(s=>(
                <div key={s.n} className="approach-step">
                  <span className="step-n">{s.n}</span>
                  <div className="step-b"><h4>{s.title}</h4><p>{s.body}</p></div>
                </div>
              ))}
            </div>
            <div style={{background:'var(--night)',borderRadius:'var(--rl)',padding:44,aspectRatio:'1/1',display:'flex',flexDirection:'column',justifyContent:'flex-end',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',inset:0,backgroundImage:'linear-gradient(rgba(26,71,240,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(26,71,240,.07) 1px,transparent 1px)',backgroundSize:'40px 40px'}}/>
              <div style={{position:'absolute',top:28,right:28,background:'var(--blue)',color:'white',fontSize:11,fontWeight:700,borderRadius:8,padding:'7px 13px'}}>ISO 27001 Aligned</div>
              <div style={{fontFamily:'Syne, sans-serif',fontSize:28,fontWeight:800,color:'white',lineHeight:1.2,position:'relative',zIndex:1}}>
                From<br/><span style={{color:'var(--amber)'}}>Vision</span><br/>to<br/><span style={{color:'var(--amber)'}}>Value.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">Why BigtechConsulting</span>
          <h2 className="h2" style={{marginBottom:40}}>The Difference Is<br/><em>in the Depth</em></h2>
          <div className="why-grid">
            {[
              {c:'c-blue',n:'9+',h:'Years of AI Expertise',p:'Dedicated AI practice since the deep learning revolution — not a technology pivot.'},
              {c:'c-dark',n:'350+',h:'Certified AI Practitioners',p:'Every engagement led by practitioners with real production AI experience.'},
              {c:'c-amber',n:'4wk',h:'Rapid Time to Value',p:'Pre-built accelerators cut time-to-first-outcome by 60% vs traditional consulting.'},
              {c:'c-chalk',n:'100%',h:'Vendor Agnostic',p:'We recommend what is right for your business — not what earns the biggest referral fee.'},
            ].map(w=>(
              <div key={w.h} className={`why-card ${w.c}`}>
                <div className="why-num">{w.n}</div>
                <h4>{w.h}</h4>
                <p>{w.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section chalk-section">
        <div className="container">
          <span className="eyebrow">Client Stories</span>
          <h2 className="h2" style={{marginBottom:44}}>Real Outcomes,<br/><em>Real Enterprises</em></h2>
          <div className="card-grid-3">
            {TESTIMONIALS.map(t=>(
              <div key={t.name} className="tcard">
                <div className="tcard-stars">★★★★★</div>
                <p className="tcard-quote">{t.q}</p>
                <div className="tcard-author">
                  <div className="avatar">{t.initials}</div>
                  <div><div className="author-name">{t.name}</div><div className="author-role">{t.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIXXAB PARTNERSHIP */}
      <section className="section dark-section">
        <div className="container">
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:56,alignItems:'center'}}>
            <div>
              <span className="eyebrow eyebrow-amber">Powered by SIXXAB AI</span>
              <h2 className="h2 h2-white" style={{marginBottom:16}}>Strategy plus platform equals <em>transformation.</em></h2>
              <p style={{fontSize:16,color:'rgba(255,255,255,.5)',lineHeight:1.72,marginBottom:28}}>Every BigtechConsulting engagement is backed by SIXXAB AI — the autonomous business platform at StartupsinaBox.com. Your AI strategy does not live in a deck. It runs in your business from day one across all six phases: Validate, Launch, Optimise, Scale, Capitalise, and Global.</p>
              <a href="https://startupsinabox.com" target="_blank" rel="noreferrer" className="btn btn-amber">Explore SIXXAB AI →</a>
            </div>
            <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:12}}>
              {['Validate','Launch','Optimise','Scale','Capitalise','Global'].map((ph,i)=>(
                <div key={ph} style={{background:'rgba(255,255,255,.05)',border:'1px solid rgba(255,255,255,.09)',borderRadius:'var(--r)',padding:20}}>
                  <div style={{fontSize:11,fontWeight:700,color:'var(--amber)',letterSpacing:'.08em',textTransform:'uppercase',marginBottom:4}}>Phase {i+1}</div>
                  <div style={{fontSize:15,fontWeight:700,color:'white'}}>{ph}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="section">
        <div className="container">
          <div style={{display:'flex',alignItems:'flex-end',justifyContent:'space-between',marginBottom:40,flexWrap:'wrap',gap:16}}>
            <div>
              <span className="eyebrow">Latest Insights</span>
              <h2 className="h2">Practitioner Intelligence<br/><em>on AI Transformation</em></h2>
            </div>
            <Link href="/blog" className="btn btn-ghost">View all articles →</Link>
          </div>
          <div className="card-grid-3">
            {BLOG_POSTS.map(b=>(
              <Link key={b.href} href={b.href} className="blog-card">
                <span className={`blog-cat ${b.catClass}`}>{b.cat}</span>
                <div className="blog-date">{b.date}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
                <span className="read-more">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section cta-band" id="contact">
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 className="h2 h2-white" style={{marginBottom:12}}>Ready to lead your industry<br/>with AI?</h2>
              <p style={{fontSize:16,color:'rgba(255,255,255,.7)',maxWidth:460,lineHeight:1.7}}>30-minute strategy session with one of our AI transformation principals. No pitch decks — just an honest conversation about where AI can take you.</p>
            </div>
            <div style={{display:'flex',flexDirection:'column',gap:12,flexShrink:0}}>
              <a href="mailto:hello@bigtechconsulting.com" className="btn btn-white">Book a Strategy Call →</a>
              <Link href="/tools/ai-maturity-assessment" style={{color:'rgba(255,255,255,.7)',textAlign:'center',fontSize:13,fontWeight:500,textDecoration:'none'}}>Or take the free AI Assessment first</Link>
            </div>
          </div>
        </div>
      </section>

    </Layout>
  )
}
