export default function sitemap() {
  const base = 'https://mohsinalisolangi.me'
  const now = new Date().toISOString()

  const routes = [
    { url: base,                                           priority: 1.0,  changeFrequency: 'weekly' },
    { url: `${base}/blockchain-developer-pakistan/`,       priority: 0.95, changeFrequency: 'monthly' },
    { url: `${base}/about-mohsin-ali-solangi/`,           priority: 0.9,  changeFrequency: 'monthly' },
    { url: `${base}/free-blockchain-consultation/`,        priority: 0.95, changeFrequency: 'monthly' },
    { url: `${base}/smart-clinic/`,                        priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/sourceaz/`,                            priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/services/smart-contract-development/`, priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/services/web3-dapp-development/`,      priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/services/defi-token-development/`,     priority: 0.85, changeFrequency: 'monthly' },
    { url: `${base}/services/solana-development/`,         priority: 0.85, changeFrequency: 'monthly' },
  ]

  return routes.map(r => ({ ...r, lastModified: now }))
}
