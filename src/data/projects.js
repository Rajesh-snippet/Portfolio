export const projects = [
  {
    id: 'agrofarmer',
    title: 'AgroFarmer',
    date: '2026',
    status: null,
    description:
      'AI-powered smart agriculture advisor using YOLOv8 for rice leaf disease detection at 99.4% accuracy, combined with FastAPI and RAG to deliver actionable, knowledge-grounded treatment recommendations for farmers in Assam.',
    tags: ['YOLOv8', 'Computer Vision', 'FastAPI', 'RAG', 'Streamlit'],
    github: 'https://github.com/Rajesh-snippet/AgroFarmer',
    stats: [
      { label: 'Accuracy', value: '99.4%' },
      { label: 'Disease classes', value: '10' },
      { label: 'Crop', value: 'Rice' },
    ],
    theme: 'agro',
  },
  {
    id: 'researchflow',
    title: 'ResearchFlow',
    
    description:
      'Production-grade multi-agent AI application built with LangGraph that researches, plans, orchestrates, and generates citation-backed article through intelligent agent collaboration — powered entirely by free APIs.',
    tags: ['LangGraph', 'Multi-Agent', 'RAG', 'FastAPI', 'React'],
    github: 'https://github.com/Rajesh-snippet/ResearchFlow',
    stats: [
      { label: 'Agents', value: '6' },
      { label: 'Milestones', value: 'M1–M6' },
      { label: 'Output', value: 'Cited posts' },
    ],
    theme: 'research',
  },
  {
    id: 'evalloop',
    title: 'EvalLoop',
    date: '2026',
    status: null,
    description:
      'Production log-to-eval dataset builder for LLM systems — mines simulated production logs, clusters and samples them, auto-generates eval labels with LLM-judge confidence scoring, and routes low-confidence cases to human review to produce an approved, risk-weighted eval dataset.',
    tags: ['LLMOps', 'Evals', 'Human-in-the-Loop', 'Data flywheel', 'LLM-as-judge'],
    stats: [
      { label: 'Logs', value: '1000' },
      { label: 'Eval cases', value: '44+' },
      { label: 'Clusters', value: '8' },
      { label: 'Pipeline', value: '6 phases' },
    ],
    theme: 'eval',
    github: 'https://github.com/Rajesh-snippet/EvalLoop',
  },
]
