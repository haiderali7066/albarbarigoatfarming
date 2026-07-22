export const SERVICES = [
  {
    id: 1,
    title: 'Data Platform & Engineering',
    slug: 'data-platform',
    description: 'Build scalable data infrastructure for modern analytics and AI applications.',
    icon: '🗄️',
    shortDescription: 'Enterprise data architecture and pipeline engineering',
    longDescription: 'Design and implement robust data platforms that enable real-time analytics, machine learning, and business intelligence across your organization.',
    useCases: [
      'Real-time analytics dashboards',
      'ETL/ELT pipeline automation',
      'Data warehouse modernization',
      'Stream processing systems',
      'Data lake architecture'
    ],
    techStack: ['Apache Spark', 'Airflow', 'Kafka', 'Snowflake', 'AWS Glue'],
  },
  {
    id: 2,
    title: 'AI & Intelligence',
    slug: 'ai-intelligence',
    description: 'Harness machine learning and AI to drive predictive insights and automation.',
    icon: '🧠',
    shortDescription: 'Custom machine learning and AI solutions',
    longDescription: 'Develop intelligent systems that learn from your data, predict future outcomes, and automate complex business processes.',
    useCases: [
      'Predictive analytics models',
      'NLP and text analysis',
      'Computer vision systems',
      'Recommendation engines',
      'Anomaly detection'
    ],
    techStack: ['TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI API', 'Hugging Face'],
  },
  {
    id: 3,
    title: 'Cloud Migration & Modernisation',
    slug: 'cloud-migration',
    description: 'Seamlessly migrate and modernize your applications to cloud platforms.',
    icon: '☁️',
    shortDescription: 'Cloud transformation and modernization services',
    longDescription: 'Plan and execute cloud migrations while modernizing your application architecture for scalability, reliability, and cost efficiency.',
    useCases: [
      'Legacy application modernization',
      'Lift and shift migrations',
      'Containerization and Kubernetes',
      'Serverless architecture',
      'Multi-cloud strategy'
    ],
    techStack: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
  },
  {
    id: 4,
    title: 'CRM & Business Applications',
    slug: 'crm-applications',
    description: 'Implement and customize business applications for customer and operations management.',
    icon: '💼',
    shortDescription: 'CRM and enterprise application solutions',
    longDescription: 'Deploy intelligent CRM and business applications that streamline customer interactions, sales processes, and operational efficiency.',
    useCases: [
      'Salesforce customization',
      'Customer journey optimization',
      'Sales automation',
      'Customer service platforms',
      'Workflow optimization'
    ],
    techStack: ['Salesforce', 'Microsoft Dynamics', 'SAP', 'Zapier', 'Power Platform'],
  },
  {
    id: 5,
    title: 'Analytics & Reporting',
    slug: 'analytics-reporting',
    description: 'Transform raw data into actionable business intelligence and insights.',
    icon: '📊',
    shortDescription: 'Advanced analytics and business intelligence',
    longDescription: 'Create comprehensive analytics solutions that provide real-time visibility into your business metrics and drive data-driven decision making.',
    useCases: [
      'Executive dashboards',
      'Customer analytics',
      'Financial analytics',
      'Operational metrics',
      'Custom reporting'
    ],
    techStack: ['Power BI', 'Tableau', 'Looker', 'Qlik', 'Google Data Studio'],
  },
  {
    id: 6,
    title: 'Data Governance & Compliance',
    slug: 'data-governance',
    description: 'Establish frameworks for data quality, security, and regulatory compliance.',
    icon: '🔐',
    shortDescription: 'Data governance and compliance management',
    longDescription: 'Implement governance frameworks that ensure data quality, security, privacy compliance, and effective data stewardship across your organization.',
    useCases: [
      'Data quality management',
      'GDPR and privacy compliance',
      'Data lineage tracking',
      'Security and access control',
      'Data cataloging'
    ],
    techStack: ['Collibra', 'Apache Atlas', 'Informatica', 'Alation', 'Varonis'],
  },
];

export const INDUSTRIES = [
  {
    id: 1,
    name: 'Financial Services',
    description: 'Risk assessment, fraud detection, algorithmic trading',
    icon: '💰',
  },
  {
    id: 2,
    name: 'Healthcare',
    description: 'Diagnostic assistance, patient outcomes prediction, drug discovery',
    icon: '🏥',
  },
  {
    id: 3,
    name: 'Manufacturing',
    description: 'Predictive maintenance, quality control, supply chain optimization',
    icon: '🏭',
  },
  {
    id: 4,
    name: 'Retail & E-commerce',
    description: 'Personalization, demand forecasting, inventory optimization',
    icon: '🛍️',
  },
  {
    id: 5,
    name: 'Energy & Utilities',
    description: 'Grid optimization, demand forecasting, equipment monitoring',
    icon: '⚡',
  },
  {
    id: 6,
    name: 'Technology',
    description: 'Software optimization, security threats detection, infrastructure automation',
    icon: '💻',
  },
];

export const CASE_STUDIES = [
  {
    id: 1,
    title: 'Fortune 500 Bank Fraud Detection',
    description: 'Implemented advanced ML model reducing fraudulent transactions by 94% and saving $50M annually.',
    result: '94% reduction in fraud',
    industry: 'Financial Services',
  },
  {
    id: 2,
    title: 'Healthcare Provider Diagnostic Support',
    description: 'AI-powered diagnostic assistant improving radiologist accuracy and reducing patient wait times.',
    result: '28% faster diagnosis',
    industry: 'Healthcare',
  },
  {
    id: 3,
    title: 'Global Manufacturer Predictive Maintenance',
    description: 'Predictive maintenance system reducing unexpected downtime and maintenance costs significantly.',
    result: '35% less downtime',
    industry: 'Manufacturing',
  },
  {
    id: 4,
    title: 'E-commerce Personalization Engine',
    description: 'Recommendation system increasing average order value and customer retention across product catalog.',
    result: '42% increase in AOV',
    industry: 'Retail & E-commerce',
  },
];

export const STATISTICS = [
  { id: 1, value: '500+', label: 'Projects Delivered', icon: '📦' },
  { id: 2, value: '150+', label: 'Enterprise Clients', icon: '🏢' },
  { id: 3, value: '$2.5B+', label: 'Value Created', icon: '💰' },
  { id: 4, value: '98%', label: 'Client Satisfaction', icon: '⭐' },
];

export const TRUSTED_TECH = [
  { id: 1, name: 'AWS', logo: '☁️' },
  { id: 2, name: 'Microsoft Azure', logo: '🔷' },
  { id: 3, name: 'Google Cloud', logo: '🎨' },
  { id: 4, name: 'OpenAI', logo: '🤖' },
  { id: 5, name: 'Salesforce', logo: '☁️' },
  { id: 6, name: 'Power BI', logo: '📊' },
];

export const PARTNERS = [
  { id: 1, name: 'TensorFlow', logo: '🔷' },
  { id: 2, name: 'PyTorch', logo: '🔶' },
  { id: 3, name: 'AWS', logo: '☁️' },
  { id: 4, name: 'Azure', logo: '⬜' },
  { id: 5, name: 'Google Cloud', logo: '🎨' },
  { id: 6, name: 'DataBricks', logo: '🧱' },
];

export const INSIGHTS = [
  {
    id: 1,
    title: 'The Future of Enterprise AI: 2024 Predictions',
    excerpt: 'Explore emerging trends in enterprise AI adoption, from generative AI to autonomous systems.',
    date: 'March 15, 2024',
    author: 'Dr. Sarah Chen',
  },
  {
    id: 2,
    title: 'Implementing AI Ethically in Your Organization',
    excerpt: 'Best practices for responsible AI deployment while maintaining compliance and stakeholder trust.',
    date: 'March 8, 2024',
    author: 'James Wilson',
  },
  {
    id: 3,
    title: 'AI Cost Optimization: Getting More Value for Less',
    excerpt: 'Strategic approaches to optimize your AI infrastructure spending and maximize ROI.',
    date: 'March 1, 2024',
    author: 'Dr. Raj Patel',
  },
];

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/industries', label: 'Industries' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
];
