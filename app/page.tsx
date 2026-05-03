export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-sm font-medium px-3 py-1 rounded-full mb-6 border border-[#58a6ff]/20">
          AI-Powered SEO for Shopify
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Rank Higher on Google.<br />
          <span className="text-[#58a6ff]">Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your Shopify store and let our AI analyze and rewrite your product titles, descriptions, and meta tags — optimized for search engines in seconds.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Start Optimizing — $16/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🔍</div>
            <h3 className="font-semibold text-white mb-2">Deep Product Analysis</h3>
            <p className="text-sm text-[#8b949e]">Scans every product page for SEO gaps — missing keywords, weak titles, thin descriptions.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">✍️</div>
            <h3 className="font-semibold text-white mb-2">AI-Powered Rewrites</h3>
            <p className="text-sm text-[#8b949e]">Generates optimized titles, meta descriptions, and alt text tailored to your niche and audience.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-2xl mb-3">🚀</div>
            <h3 className="font-semibold text-white mb-2">One-Click Apply</h3>
            <p className="text-sm text-[#8b949e]">Push all changes directly to your Shopify store via API — no copy-pasting required.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</span>
          <h3 className="text-xl font-bold text-white mb-2">Pro Plan</h3>
          <div className="text-5xl font-bold text-[#58a6ff] mb-1">$16</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited product optimizations',
              'AI title & description rewrites',
              'Meta tag & alt text generation',
              'Direct Shopify API sync',
              'Keyword research built-in',
              'Priority email support'
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does it connect to my Shopify store?</h3>
            <p className="text-sm text-[#8b949e]">After subscribing, you'll install our Shopify app or enter your store credentials. We use the official Shopify Admin API to read and update your products securely.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Will the AI changes hurt my existing rankings?</h3>
            <p className="text-sm text-[#8b949e]">No. Every suggestion is previewed before applying. You stay in full control — approve, edit, or reject any change before it goes live.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-sm text-[#8b949e]">Yes. Cancel anytime from your billing dashboard. You keep access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-sm text-[#8b949e]">
        © {new Date().getFullYear()} Shopify Product SEO Optimizer. All rights reserved.
      </footer>
    </main>
  )
}
