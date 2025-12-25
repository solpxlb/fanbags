export default function InsightSection() {
  return (
    <main id="insight" className="relative pt-24 pb-20 flex flex-col items-center bg-white">
      <div className="flex justify-center mb-8">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-50 border border-gray-100">
          <span className="text-primary text-xs font-bold tracking-wider uppercase">03 — The Insight</span>
        </div>
      </div>

      <section className="max-w-[960px] px-6 md:px-10 mb-20 text-center flex flex-col items-center gap-6">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-main max-w-4xl">
          <span className="text-text-muted/40 decoration-2 decoration-text-muted/30 line-through">Creators shouldn't make money by selling tokens.</span>
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-br from-text-main to-text-main/70">They should make money when their community is active.</span>
        </h1>
        <p className="text-lg md:text-xl text-text-muted max-w-2xl mt-4">
          Moving away from speculative bubbles towards sustainable, long-term value creation.
        </p>
      </section>

      <section className="w-full max-w-[1080px] px-6 md:px-10 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">payments</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-text-main">Fees, not allocations</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Revenue should come from genuine utility and usage, not by arbitrarily distributing supply to insiders.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">diversity_3</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-text-main">Engagement, not speculation</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Value is created by active users participating in the community, not by pump-and-dump market trading.
              </p>
            </div>
          </div>

          <div className="group relative flex flex-col gap-4 p-8 rounded-2xl bg-gray-50 border border-transparent hover:border-primary/10 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
            <div className="size-12 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm border border-gray-50 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">trending_up</span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-text-main">Ongoing participation</h3>
              <p className="text-text-muted text-sm leading-relaxed">
                Success is measured in years of sustained growth, not a single hype-driven drop day.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-16 w-px bg-gradient-to-b from-transparent via-primary/30 to-primary/60 mb-8"></div>

      <section className="max-w-[800px] px-6 text-center">
        <div className="bg-gray-50 rounded-3xl p-10 md:p-16 border border-gray-100 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col items-center gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-text-main tracking-tight">
              This is exactly what <span className="text-primary">Bags.fm</span> enables.
            </h2>
            <p className="text-text-muted max-w-md">
              Discover the platform built specifically for active communities to thrive together.
            </p>
            <button className="group flex items-center justify-center gap-2 bg-text-main text-white hover:bg-primary transition-all duration-300 px-8 py-3 rounded-full font-semib old shadow-lg shadow-black/5 hover:shadow-primary/25 mt-4">
              <span>Explore Bags.fm</span>
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">arrow_forward</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
