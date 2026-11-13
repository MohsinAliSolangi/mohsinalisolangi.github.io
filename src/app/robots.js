export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      // AI search crawlers — explicit allow for AEO
      { userAgent: 'GPTBot',          allow: '/' },
      { userAgent: 'OAI-SearchBot',   allow: '/' },
      { userAgent: 'ChatGPT-User',    allow: '/' },
      { userAgent: 'PerplexityBot',   allow: '/' },
      { userAgent: 'ClaudeBot',       allow: '/' },
      { userAgent: 'anthropic-ai',    allow: '/' },
      { userAgent: 'Googlebot',       allow: '/' },
      { userAgent: 'Bingbot',         allow: '/' },
    ],
    sitemap: 'https://mohsinalisolangi.me/sitemap.xml',
    host: 'https://mohsinalisolangi.me',
  }
}
