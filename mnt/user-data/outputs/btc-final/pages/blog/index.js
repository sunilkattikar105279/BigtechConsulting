import Layout from '../../components/Layout'
import Link from 'next/link'

const POSTS = [
  { href: '/blog/why-ai-projects-fail', cat: 'AI Strategy', catClass: 'bc-strategy', title: 'Why 68% of Enterprise AI Projects Never Reach Production — And the Framework That Fixes It', desc: 'We analysed 200+ enterprise AI programs to identify the five failure patterns keeping AI in the proof-of-concept graveyard — and the SCALE framework that breaks them.', date: 'June 2026', read: '12 min', featured: true },
  { href: '/blog/responsible-ai', cat: 'Responsible AI', catClass: 'bc-ethics', title: 'What the EU AI Act Actually Requires of Your Organisation in 2026', desc: 'A plain-English guide to EU AI Act compliance — what is required, what the fines look like, and a 6-month compliance roadmap for mid-size enterprises.', date: 'May 2026', read: '9 min' },
  { href: '/blog/agentic-ai', cat: 'Agentic AI', catClass: 'bc-platform', title: 'Agentic AI Explained: What It Is and How to Deploy It This Quarter', desc: 'Agentic AI is a fundamentally different computing paradigm — not just smarter chatbots. Here is what it means in practice and where it creates real enterprise value.', date: 'April 2026', read: '8 min' },
  { href: '/blog/ai-governance', cat: 'Governance', catClass: 'bc-gov', title: 'The Complete AI Governance Framework for Enterprise: From Policy to Practice', desc: 'A step-by-step guide to building AI governance that satisfies your board, regulator, and engineering team — without bureaucracy that kills velocity.', date: 'April 2026', read: '10 min' },
  { href: '/blog/ai-architecture', cat: 'AI Architecture', catClass: 'bc-strategy', title: 'The Enterprise AI Architecture Reference Guide 2026', desc: 'Reference architecture for production-grade enterprise AI — data ingestion, model serving, RAG pipelines, vector stores, and the LLMOps layer.', date: 'March 2026', read: '11 min' },
  { href: '/blog/ai-cost-optimization', cat: 'AI FinOps', catClass: 'bc-ops', title: 'How to Cut Your AI Inference Costs by 40–60% Without Sacrificing Quality', desc: 'Eight proven techniques: model right-sizing, caching strategies, prompt compression, and batching architectures — with real benchmark numbers.', date: 'March 2026', read: '8 min' },
  { href: '/blog/ai-security', cat: 'AI Security', catClass: 'bc-sec', title: 'AI Security in 2026: The Threat Landscape Every CTO Must Understand', desc: 'Prompt injection, data poisoning, model extraction, and supply chain attacks. A practical guide to the AI threat surface and the controls that work.', date: 'February 2026', read: '9 min' },
  { href: '/blog/sixxab-validate', cat: 'SIXXAB AI', catClass: 'bc-platform', title: 'Phase 1 Validate: Test Your Business Idea with AI Before Writing Code', desc: 'Use AI agents to validate market demand, interview customers at scale, and de-risk your business idea in under 2 weeks using SIXXAB AI.', date: 'February 2026', read: '6 min' },
  { href: '/blog/sixxab-launch', cat: 'SIXXAB AI', catClass: 'bc-platform', title: 'Phase 2 Launch: Build Your Go-to-Market Engine with SIXXAB AI in One Weekend', desc: 'Website, CRM, social media, lead generation, and email automation — all set up in 48 hours. A step-by-step walkthrough.', date: 'January 2026', read: '7 min' },
  { href: '/blog/ai-maturity-guide', cat: 'AI Strategy', catClass: 'bc-strategy', title: 'The 5-Level AI Maturity Model: Where Is Your Organisation Right Now?', desc: 'From AI-Aware to AI-Native — a diagnostic framework that tells you exactly where you sit and what to do next.', date: 'January 2026', read: '7 min' },
  { href: '/blog/ai-financial-services', cat: 'Financial Services', catClass: 'bc-strategy', title: 'AI in Financial Services: The Complete 2026 Guide to Regulatory-Safe Transformation', desc: 'How banks, insurers, and asset managers deploy AI while staying ahead of Basel IV, DORA, MiFID III, and the EU AI Act.', date: 'December 2025', read: '10 min' },
  { href: '/blog/vendor-landscape', cat: 'Vendor Guide', catClass: 'bc-platform', title: 'The Enterprise AI Vendor Landscape 2026: OpenAI vs Anthropic vs Google', desc: 'A vendor-agnostic breakdown of major LLM providers, vector databases, and MLOps platforms — what each is best for.', date: 'December 2025', read: '14 min' },
]

export default function Blog() {
  const featured = POSTS[0]
  const rest = POSTS.slice(1)
  return (
    <Layout title="Insights" description="Practitioner-written guides on enterprise AI transformation — strategy, governance, security, and operations.">
      <section style={{paddingTop:120,paddingBottom:48,background:'var(--chalk)'}}>
        <div className="container">
          <span className="eyebrow">Insights & Research</span>
          <h1 className="h1" style={{fontSize:'clamp(32px,4vw,52px)',marginBottom:12}}>AI Transformation<br/><em>Intelligence</em></h1>
          <p className="lead">Practitioner-written guides, research, and playbooks — no vendor agendas, no recycled LinkedIn wisdom.</p>
        </div>
      </section>

      <section className="section" style={{paddingTop:48}}>
        <div className="container">
          {/* Featured */}
          <Link href={featured.href} style={{display:'block',textDecoration:'none',background:'var(--night)',borderRadius:'var(--rl)',padding:44,marginBottom:32,position:'relative',overflow:'hidden'}}>
            <div style={{position:'absolute',top:-80,right:-80,width:360,height:360,borderRadius:'50%',background:'radial-gradient(circle,rgba(240,160,40,.08),transparent 70%)'}}/>
            <div style={{position:'relative',zIndex:1}}>
              <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:16,flexWrap:'wrap'}}>
                <span className={`blog-cat ${featured.catClass}`}>{featured.cat}</span>
                <span style={{fontSize:12,color:'rgba(255,255,255,.35)'}}>{featured.date} · {featured.read} read · Featured</span>
              </div>
              <h2 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(20px,2.8vw,34px)',fontWeight:800,color:'white',letterSpacing:'-1px',lineHeight:1.1,marginBottom:12}}>{featured.title}</h2>
              <p style={{fontSize:15,color:'rgba(255,255,255,.5)',lineHeight:1.7,maxWidth:580}}>{featured.desc}</p>
              <span style={{display:'inline-block',marginTop:18,fontSize:13,fontWeight:600,color:'var(--amber)'}}>Read the full analysis →</span>
            </div>
          </Link>

          {/* Grid */}
          <div className="card-grid-3">
            {rest.map(p=>(
              <Link key={p.href} href={p.href} className="blog-card">
                <span className={`blog-cat ${p.catClass}`}>{p.cat}</span>
                <div className="blog-date">{p.date} · {p.read} read</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <span className="read-more">Read article →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section style={{background:'var(--blue)',padding:'56px 0'}}>
        <div className="container">
          <div className="cta-inner">
            <div>
              <h2 style={{fontFamily:'Syne,sans-serif',fontSize:26,fontWeight:800,color:'white',marginBottom:8}}>Get new insights in your inbox.</h2>
              <p style={{color:'rgba(255,255,255,.7)',fontSize:15}}>Bi-weekly practitioner intelligence on AI transformation. No vendor content.</p>
            </div>
            <Link href="/#contact" className="btn btn-white">Subscribe to The Operator →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
