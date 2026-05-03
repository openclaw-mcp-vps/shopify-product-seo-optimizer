import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Shopify Product SEO Optimizer',
  description: 'Automated Shopify product SEO optimization. Analyze and optimize titles, descriptions, and meta tags for better search rankings.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="0351dc7e-a1bf-4d37-968a-f008f343a836"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
