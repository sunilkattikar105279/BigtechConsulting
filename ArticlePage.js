import Layout from '../../components/Layout'
import Link from 'next/link'

export default function ArticlePage({ title, description, category, catClass, date, readTime, children }) {
  return (
    <Layout title={title} description={description}>
      <section style={{paddingTop:130,paddingBottom:56}}>
        <div className="container">
          <div className="breadcrumb">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/blog">Insights</Link><span>/</span>
            <span>{category}</span>
          </div>
          <div style={{maxWidth:760}}>
            <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:20,flexWrap:'wrap'}}>
              <span className={`blog-cat ${catClass}`}>{category}</span>
              <span style={{fontSize:13,color:'var(--muted-2)'}}>{date} · {readTime} read</span>
            </div>
            <h1 style={{fontFamily:'Syne,sans-serif',fontSize:'clamp(28px,4vw,46px)',fontWeight:800,color:'var(--night)',letterSpacing:'-1.5px',lineHeight:1.08,marginBottom:18}}>{title}</h1>
            <p style={{fontSize:18,color:'var(--muted)',lineHeight:1.72,marginBottom:40}}>{description}</p>

            <div style={{fontSize:16,color:'var(--ink-2)',lineHeight:1.8}}>{children}</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding:'0 0 72px'}}>
        <div className="container">
          <div style={{background:'var(--night)',borderRadius:'var(--rl)',padding:40,maxWidth:760,display:'flex',alignItems:'center',justifyContent:'space-between',gap:24,flexWrap:'wrap'}}>
            <div>
              <div style={{fontFamily:'Syne,sans-serif',fontSize:20,fontWeight:800,color:'white',marginBottom:8}}>Take the Free AI Maturity Assessment</div>
              <p style={{fontSize:13,color:'rgba(255,255,255,.45)',maxWidth:400}}>8 minutes. Find out exactly where your AI program stands and get a personalised action plan.</p>
            </div>
            <Link href="/tools/ai-maturity-assessment" style={{background:'var(--amber)',color:'var(--night)',padding:'11px 22px',borderRadius:'var(--r)',fontSize:14,fontWeight:700,textDecoration:'none',whiteSpace:'nowrap'}}>Take Assessment →</Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
