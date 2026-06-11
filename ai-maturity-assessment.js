import { useState } from 'react'
import Layout from '../../components/Layout'
import Link from 'next/link'

const DIMS = [
  { id: 'strategy', name: 'AI Strategy & Leadership', color: '#1847F0' },
  { id: 'data',     name: 'Data & Infrastructure',   color: '#F0A028' },
  { id: 'governance',name: 'Governance & Ethics',    color: '#6B2E8A' },
  { id: 'talent',   name: 'Talent & Culture',        color: '#0B6E50' },
  { id: 'execution',name: 'Execution & Operations',  color: '#534AB7' },
]

const QS = [
  { dim:'strategy', q:"How would you describe your organisation's AI strategy?", opts:["No formal AI strategy yet","Some AI experiments but no unified strategy","Documented strategy but not fully resourced","Fully funded, board-approved AI transformation roadmap"] },
  { dim:'strategy', q:"How visible is AI at your executive leadership level?", opts:["Not regularly discussed","Comes up occasionally but not a strategic priority","On the executive agenda but no dedicated owner","Chief AI Officer or equivalent with board access"] },
  { dim:'strategy', q:"How do you identify and prioritise AI use cases?", opts:["No structured process — ideas emerge ad hoc","Individual teams propose ideas, no portfolio management","Use case review process but inconsistent prioritisation","Formal portfolio with ROI-based prioritisation and regular review"] },
  { dim:'strategy', q:"How would you rate your AI competitive positioning?", opts:["Significantly behind industry peers","Roughly on par with industry peers","Ahead in specific areas but not broadly","Recognised as an AI leader in our industry"] },
  { dim:'data', q:"How would you describe the quality and accessibility of your data?", opts:["Siloed, inconsistent, and difficult to access","Some centralised data but quality is inconsistent","Data platform with reasonable quality but coverage gaps","Comprehensive, high-quality, well-governed platform AI teams can access reliably"] },
  { dim:'data', q:"How mature is your data engineering and MLOps capability?", opts:["Minimal data engineering capability","Small team but lack standardised processes","Established practices and some MLOps tooling","Production-grade MLOps with CI/CD for models, monitoring, and automated retraining"] },
  { dim:'data', q:"How do you manage AI model performance in production?", opts:["No AI systems in production yet","Monitor manually and reactively","Some automated monitoring but coverage is incomplete","Comprehensive automated monitoring, drift detection, and incident response"] },
  { dim:'data', q:"What is your approach to AI infrastructure costs?", opts:["Do not track AI infrastructure costs","Aware of costs but do not actively optimise","Track costs and do periodic optimisation reviews","Dedicated AI FinOps practice with real-time visibility and automated optimisation"] },
  { dim:'governance', q:"How mature is your AI governance framework?", opts:["No AI-specific governance in place","Apply general IT governance to AI","AI governance policy but not consistently applied","Comprehensive AI governance including risk classification, audit trails, and ethics review"] },
  { dim:'governance', q:"How prepared are you for EU AI Act and other AI regulations?", opts:["Have not assessed regulatory exposure","Reviewed regulations but not started compliance work","Completed gap analysis and have a compliance roadmap","Active compliance programme with internal audits conducted"] },
  { dim:'governance', q:"How do you manage AI bias and fairness?", opts:["No systematic approach to AI bias","Aware of risks but lack formal testing","Test for bias on high-risk systems inconsistently","Systematic bias testing framework applied to all AI systems"] },
  { dim:'governance', q:"How is AI security managed?", opts:["AI security not specifically addressed","Apply general cybersecurity controls to AI","Some AI-specific security controls but gaps remain","Comprehensive AI security programme including prompt injection defense and supply chain controls"] },
  { dim:'talent', q:"How would you describe your AI talent landscape?", opts:["Very limited internal AI capability","Small team of practitioners but significant skill gaps","Capable AI team but struggle to retain senior talent","Strong AI team with systematic talent development and retention"] },
  { dim:'talent', q:"How AI-literate is your broader workforce?", opts:["Most employees have no practical AI skills","Some employees use AI tools but no systematic training","AI training programmes but uneven adoption","Role-specific AI training with measurable adoption rates"] },
  { dim:'talent', q:"How would you describe your cultural attitude toward AI?", opts:["Significant scepticism or fear about AI","Mixed — enthusiasm in some areas, resistance in others","Generally positive but adoption behaviour has not changed","AI-positive culture where employees actively use and advocate for AI"] },
  { dim:'talent', q:"How do you manage AI change management?", opts:["No structured approach","Communicate about AI changes but do not measure adoption","Change management plans for major deployments","Systematic programme with adoption metrics, champion networks, and feedback loops"] },
  { dim:'execution', q:"How many AI systems do you have in production?", opts:["None — all at proof-of-concept stage","1–3 AI systems in production","4–10 AI systems across multiple business units","10+ AI systems actively maintained and generating measurable value"] },
  { dim:'execution', q:"How do you measure the business impact of AI?", opts:["No systematic AI impact measurement","Track some metrics but not consistently","Defined KPIs for major initiatives reported regularly","Comprehensive value measurement framework with real-time dashboards"] },
  { dim:'execution', q:"How quickly can you go from AI idea to production?", opts:["No clear path from idea to deployment","12+ months from idea to production","3–6 months for typical use cases","4–8 weeks using standardised infrastructure and processes"] },
  { dim:'execution', q:"How does AI support your core business operations day-to-day?", opts:["AI not embedded in core operations","Used in isolated pockets, not integrated into core workflows","Supports several core workflows but significant gaps remain","AI deeply embedded across functions — backed by an autonomous business platform"] },
]

const LEVELS = [
  { min:0,  max:24, level:'Level 1 — AI Aware',    color:'#E24B4A', desc:'You understand AI is important but have not built the foundations for systematic transformation. The opportunity cost of delay is growing daily.' },
  { min:25, max:44, level:'Level 2 — AI Active',   color:'#F0A028', desc:'You have started your AI journey with real experiments and early deployments. The challenge is moving from isolated wins to systematic capability.' },
  { min:45, max:64, level:'Level 3 — AI Capable',  color:'#1847F0', desc:'You have meaningful AI capability across several dimensions. The gap to leaders is in scale, governance maturity, and speed of execution.' },
  { min:65, max:79, level:'Level 4 — AI Advanced',  color:'#0B6E50', desc:'You are in the top quartile of enterprise AI maturity. Focus on compound value — AI capabilities that reinforce each other and create defensible advantage.' },
  { min:80, max:100,level:'Level 5 — AI Native',   color:'#534AB7', desc:'You are operating at the frontier of enterprise AI maturity. Your challenge is sustaining this position as technology and competitive landscapes evolve.' },
]

const INSIGHTS = {
  strategy:{ low:'Define a formal AI strategy and appoint a single executive owner before your next fiscal planning cycle.', mid:'Strengthen your AI use case portfolio process and connect strategy to measurable business outcomes.', high:'Extend your advantage by focusing on agentic platforms and compound AI capabilities.' },
  data:{ low:'Prioritise data quality and accessibility — AI is only as good as the data it operates on.', mid:'Build toward production-grade MLOps infrastructure. Manual processes become bottlenecks at scale.', high:'Implement AI FinOps practices to sustain cost efficiency as your AI portfolio grows.' },
  governance:{ low:'EU AI Act enforcement is live. Start with a risk classification of your AI portfolio immediately.', mid:'Systematise bias testing and AI security controls. Inconsistent coverage creates unpredictable regulatory exposure.', high:'Publish your AI ethics framework externally — it is a competitive differentiator for enterprise sales and talent.' },
  talent:{ low:'Invest in organisation-wide AI literacy before deploying AI tools. Adoption without capability leads to unused licenses.', mid:'Build an AI champions network to accelerate adoption. Peer influence is more effective than top-down mandates.', high:'Systematise AI talent development to reduce dependency on external hiring in a constrained talent market.' },
  execution:{ low:'Get one AI system to production with measurable business impact. One real result is worth 100 PoC demonstrations.', mid:'Standardise your path from idea to deployment. Every week of unnecessary time is competitive disadvantage.', high:'Invest in agentic platform capabilities — the next wave of AI value comes from systems that operate autonomously.' },
}

export default function Assessment() {
  const [stage, setStage] = useState('intro') // intro | quiz | results
  const [current, setCurrent] = useState(0)
  const [answers, setAnswers] = useState(new Array(QS.length).fill(null))
  const [results, setResults] = useState(null)

  function selectOption(idx) {
    const next = [...answers]; next[current] = idx; setAnswers(next)
  }

  function goNext() {
    if (current === QS.length - 1) { calculateResults(); return }
    setCurrent(c => c + 1)
  }

  function goPrev() { if (current > 0) setCurrent(c => c - 1) }

  function calculateResults() {
    const dimScores = {}
    DIMS.forEach(d => { dimScores[d.id] = { total: 0, count: 0 } })
    QS.forEach((q, i) => {
      if (answers[i] !== null) {
        dimScores[q.dim].total += answers[i] + 1
        dimScores[q.dim].count++
      }
    })
    const dimNorm = {}
    DIMS.forEach(d => {
      const { total, count } = dimScores[d.id]
      dimNorm[d.id] = count > 0 ? Math.round((total / (count * 4)) * 20) : 0
    })
    const total = Object.values(dimNorm).reduce((a, b) => a + b, 0)
    const level = LEVELS.find(l => total >= l.min && total <= l.max) || LEVELS[0]
    setResults({ dimNorm, total, level })
    setStage('results')
  }

  const pct = Math.round((current / QS.length) * 100)
  const q = QS[current]
  const dimIdx = DIMS.findIndex(d => d.id === q?.dim)

  return (
    <Layout title="Free AI Maturity Assessment" description="Take BigtechConsulting's free 8-minute AI Maturity Assessment. Get a personalised score across 5 dimensions and a custom action plan.">
      <div style={{ paddingTop: 80, minHeight: '100vh', background: 'var(--chalk)' }}>

        {/* INTRO */}
        {stage === 'intro' && (
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px' }}>
            <div style={{ background: 'var(--night)', borderRadius: 'var(--rl)', padding: 48, marginBottom: 28, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -120, right: -120, width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle,rgba(240,160,40,.07),transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--amber)', marginBottom: 12 }}>Free · 8 Minutes · Instant Results</div>
                <h1 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(28px,4vw,44px)', fontWeight: 800, color: 'white', letterSpacing: '-1.5px', lineHeight: 1.08, marginBottom: 14 }}>AI Maturity Assessment</h1>
                <p style={{ fontSize: 16, color: 'rgba(255,255,255,.52)', lineHeight: 1.72, maxWidth: 500, marginBottom: 32 }}>Answer 20 questions across 5 dimensions of AI transformation readiness. Get a personalised maturity score, gap analysis, and prioritised action plan — instantly.</p>
                <div style={{ display: 'flex', gap: 32, marginBottom: 32, flexWrap: 'wrap' }}>
                  {[['20','Questions'],['5','Dimensions'],['8 min','Average time'],['Instant','Results']].map(([n, l]) => (
                    <div key={l}><div style={{ fontFamily: 'Syne,sans-serif', fontSize: 24, fontWeight: 800, color: 'white' }}>{n}</div><div style={{ fontSize: 12, color: 'rgba(255,255,255,.38)' }}>{l}</div></div>
                  ))}
                </div>
                <button onClick={() => setStage('quiz')} style={{ background: 'var(--amber)', color: 'var(--night)', padding: '13px 28px', borderRadius: 'var(--r)', fontSize: 15, fontWeight: 700, border: 'none', cursor: 'pointer' }}>Start Free Assessment →</button>
              </div>
            </div>
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: 24 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--night)', marginBottom: 14 }}>Five dimensions we measure</div>
              {DIMS.map(d => (
                <div key={d.id} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: d.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 14, color: 'var(--ink)' }}>{d.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* QUIZ */}
        {stage === 'quiz' && (
          <div style={{ maxWidth: 680, margin: '0 auto', padding: '40px 24px' }}>
            {/* Progress */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: '20px 24px', marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--night)' }}>Question {current + 1} of {QS.length}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--blue)' }}>{pct}%</span>
              </div>
              <div className="prog-track"><div className="prog-fill" style={{ width: `${Math.max(2, pct)}%` }} /></div>
              <div style={{ display: 'flex', gap: 6, marginTop: 10 }}>
                {DIMS.map((d, i) => {
                  const start = i * 4, end = start + 4
                  const cls = current >= end ? 'done' : current >= start ? 'active' : ''
                  return <div key={d.id} className={`dim-dot ${cls}`} style={cls === 'done' ? { background: d.color } : cls === 'active' ? { background: 'var(--amber)' } : {}} />
                })}
              </div>
            </div>

            {/* Question */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: 32, marginBottom: 14 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: 4 }}>{DIMS[dimIdx]?.name}</div>
              <div style={{ fontSize: 13, color: 'var(--muted-2)', marginBottom: 18 }}>Question {current + 1} of {QS.length}</div>
              <h2 style={{ fontFamily: 'Syne,sans-serif', fontSize: 'clamp(17px,2.5vw,22px)', fontWeight: 800, color: 'var(--night)', letterSpacing: '-.4px', lineHeight: 1.25, marginBottom: 24 }}>{q.q}</h2>
              {q.opts.map((opt, i) => (
                <div key={i} className={`option-row ${answers[current] === i ? 'selected' : ''}`} onClick={() => selectOption(i)}>
                  <div className="option-badge">{i + 1}</div>
                  <div className="option-text">{opt}</div>
                </div>
              ))}
            </div>

            {/* Nav */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <button onClick={goPrev} disabled={current === 0} style={{ background: 'white', border: '1.5px solid var(--border)', color: 'var(--muted)', padding: '11px 22px', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 600, cursor: current === 0 ? 'not-allowed' : 'pointer', opacity: current === 0 ? 0.4 : 1 }}>← Back</button>
              <button onClick={goNext} disabled={answers[current] === null} style={{ background: answers[current] === null ? 'var(--muted-2)' : current === QS.length - 1 ? 'var(--amber)' : 'var(--blue)', color: current === QS.length - 1 ? 'var(--night)' : 'white', padding: '11px 22px', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 600, cursor: answers[current] === null ? 'not-allowed' : 'pointer', border: 'none' }}>
                {current === QS.length - 1 ? 'See My Results →' : 'Next →'}
              </button>
            </div>
          </div>
        )}

        {/* RESULTS */}
        {stage === 'results' && results && (
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '40px 24px' }}>
            {/* Score hero */}
            <div style={{ background: 'var(--night)', borderRadius: 'var(--rl)', padding: 44, textAlign: 'center', marginBottom: 20, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%,rgba(240,160,40,.06),transparent 70%)' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: 110, height: 110, borderRadius: '50%', border: `4px solid ${results.level.color}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 34, fontWeight: 800, color: 'white', lineHeight: 1 }}>{results.total}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.38)' }}>/100</div>
                </div>
                <div style={{ fontFamily: 'Syne,sans-serif', fontSize: 22, fontWeight: 800, color: results.level.color, marginBottom: 8 }}>{results.level.level}</div>
                <p style={{ fontSize: 15, color: 'rgba(255,255,255,.5)', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>{results.level.desc}</p>
              </div>
            </div>

            {/* Dimension scores */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12, marginBottom: 20 }}>
              {DIMS.map(d => {
                const score = results.dimNorm[d.id]
                const p = Math.round((score / 20) * 100)
                const tier = p < 40 ? 'low' : p < 70 ? 'mid' : 'high'
                const barColor = p < 40 ? '#E24B4A' : p < 70 ? '#F0A028' : '#0B6E50'
                return (
                  <div key={d.id} style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: 20 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 700, color: 'var(--night)' }}>{d.name}</span>
                      <span style={{ fontFamily: 'Syne,sans-serif', fontSize: 18, fontWeight: 800, color: d.color }}>{score}/20</span>
                    </div>
                    <div style={{ height: 4, background: 'var(--chalk)', borderRadius: 2, overflow: 'hidden', marginBottom: 8 }}>
                      <div style={{ height: '100%', width: `${p}%`, background: barColor, borderRadius: 2 }} />
                    </div>
                    <p style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.5 }}>{INSIGHTS[d.id][tier]}</p>
                  </div>
                )
              })}
            </div>

            {/* Action plan */}
            <div style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--rl)', padding: 32, marginBottom: 20 }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 20, fontWeight: 800, color: 'var(--night)', marginBottom: 20 }}>Your Prioritised Action Plan</h3>
              {DIMS.map((d, i) => {
                const score = results.dimNorm[d.id]
                const p = Math.round((score / 20) * 100)
                const tier = p < 40 ? 'low' : p < 70 ? 'mid' : 'high'
                const sorted = [...DIMS].sort((a, b) => results.dimNorm[a.id] - results.dimNorm[b.id])
                const rank = sorted.findIndex(x => x.id === d.id)
                const priority = rank < 2 ? { label: 'NOW', bg: '#FCEBEB', color: '#A32D2D' } : rank < 4 ? { label: 'NEXT', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' } : { label: 'LATER', bg: 'var(--green-bg)', color: 'var(--green)' }
                return null // render in sorted order below
              })}
              {[...DIMS].sort((a, b) => results.dimNorm[a.id] - results.dimNorm[b.id]).map((d, rank) => {
                const score = results.dimNorm[d.id]
                const p = Math.round((score / 20) * 100)
                const tier = p < 40 ? 'low' : p < 70 ? 'mid' : 'high'
                const priority = rank < 2 ? { label: 'NOW', bg: '#FCEBEB', color: '#A32D2D' } : rank < 4 ? { label: 'NEXT', bg: 'var(--amber-bg)', color: 'var(--amber-dark)' } : { label: 'LATER', bg: 'var(--green-bg)', color: 'var(--green)' }
                return (
                  <div key={d.id} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: '1px solid var(--border)' }}>
                    <div style={{ width: 44, height: 36, borderRadius: 8, background: priority.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontWeight: 800, color: priority.color, flexShrink: 0 }}>{priority.label}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--night)', marginBottom: 3 }}>{d.name} — {score}/20</div>
                      <div style={{ fontSize: 13, color: 'var(--muted)', lineHeight: 1.55 }}>{INSIGHTS[d.id][tier]}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA */}
            <div style={{ background: 'var(--blue)', borderRadius: 'var(--rl)', padding: 36, textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'Syne,sans-serif', fontSize: 22, fontWeight: 800, color: 'white', marginBottom: 10 }}>Ready to move to the next level?</h3>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,.65)', marginBottom: 22 }}>BigtechConsulting can build a custom transformation roadmap based on your assessment results — typically a 2-week engagement.</p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/#contact" className="btn btn-white">Book a Free Strategy Call</Link>
                <a href="https://startupsinabox.com" target="_blank" rel="noreferrer" style={{ background: 'rgba(255,255,255,.1)', color: 'white', border: '1px solid rgba(255,255,255,.2)', padding: '13px 22px', borderRadius: 'var(--r)', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>Explore SIXXAB AI →</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}
