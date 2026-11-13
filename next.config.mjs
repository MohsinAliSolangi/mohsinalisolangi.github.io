/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = [
  "default-src 'self'",
  // Next.js needs unsafe-inline for its inline scripts; unsafe-eval for GSAP/Three.js
  "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
  // Inline styles + Google Fonts
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  // Google Fonts files
  "font-src 'self' https://fonts.gstatic.com",
  // Images: self, data URIs, Vercel mshots (project screenshots), any HTTPS
  "img-src 'self' data: blob: https:",
  // Fetch/XHR: self + Vercel analytics + any HTTPS API calls
  "connect-src 'self' https:",
  // Prevents the page being embedded anywhere (clickjacking fix)
  "frame-ancestors 'none'",
  // No Flash/Java plugins
  "object-src 'none'",
  // Upgrade any accidental HTTP requests to HTTPS
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  // Prevents clickjacking (redundant with frame-ancestors but broader browser support)
  { key: 'X-Frame-Options', value: 'DENY' },
  // Stops browser from MIME-sniffing
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  // Isolates the top-level window from cross-origin popups
  { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
  // Controls how much referrer info is sent
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  // Disables unnecessary browser features
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()' },
  // HSTS: trust HTTPS for 1 year, include subdomains
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },
  // The main CSP
  { key: 'Content-Security-Policy', value: ContentSecurityPolicy },
]

const nextConfig = {
  cacheComponents: true,
  partialPrefetching: true,

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },

  async redirects() {
    return [
      { source: '/builds', destination: '/#products', permanent: false },
      { source: '/builds/', destination: '/#products', permanent: false },
      { source: '/builds/smart-clinic', destination: '/smart-clinic', permanent: true },
      { source: '/builds/smart-clinic/', destination: '/smart-clinic', permanent: true },
    ]
  },
};

export default nextConfig;
