export default function AudienceSection() {
    return (
        <main id="audience" className="flex-1 bg-white">
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 px-4 overflow-hidden">
                {/* Background Decorative Gradients */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full opacity-30 pointer-events-none">
                    <div className="absolute top-10 left-10 w-72 h-72 bg-primary rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500 rounded-full blur-[100px] opacity-20"></div>
                </div>

                <div className="relative mx-auto max-w-[960px] text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-medium text-text-muted shadow-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Product Features
                    </div>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl">
                        Built for Everyone
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed">
                        A dual interface approach serving both retail users and professional traders.
                    </p>
                </div>
            </section>

            {/* Dual Interface Section */}
            <section className="px-4 pb-24">
                <div className="mx-auto max-w-[1100px]">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Simple Mode Card */}
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                            {/* Visual Header */}
                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(#7f13ec_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]"></div>
                                <div className="relative flex flex-col items-center gap-2 z-10">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg text-primary">
                                        <span className="material-symbols-outlined text-[32px]">smartphone</span>
                                    </div>
                                    <span className="text-sm font-semibold text-text-muted">Retail Interface</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-8">
                                <div className="mb-6">
                                    <h2 className="mb-2 text-2xl font-bold text-text-main">Simple Mode</h2>
                                    <p className="text-text-muted">
                                        Designed for mass adoption with zero friction.
                                    </p>
                                </div>

                                <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Feature 1 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">currency_exchange</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Buy / Sell</p>
                                            <p className="text-xs text-text-muted">Instant execution</p>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">credit_card</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Card / UPI / Wallet</p>
                                            <p className="text-xs text-text-muted">Easy payments</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">translate</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">No jargon</p>
                                            <p className="text-xs text-text-muted">Plain English</p>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">verified_user</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">No crypto knowledge</p>
                                            <p className="text-xs text-text-muted">Beginner friendly</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pro Trading Terminal Card */}
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                            {/* Visual Header */}
                            <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 p-6 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                                <div className="relative flex flex-col items-center gap-2 z-10">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg text-primary">
                                        <span className="material-symbols-outlined text-[32px]">candlestick_chart</span>
                                    </div>
                                    <span className="text-sm font-semibold text-text-muted">Pro Interface</span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-8">
                                <div className="mb-6">
                                    <h2 className="mb-2 text-2xl font-bold text-text-main">Pro Trading Terminal</h2>
                                    <p className="text-text-muted">
                                        The Pro Trading Terminal ensures sustained liquidity and efficient price discovery across FanBags markets.
                                    </p>
                                </div>

                                <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {/* Feature 1 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">monitoring</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Advanced charts</p>
                                            <p className="text-xs text-text-muted">Technical analysis</p>
                                        </div>
                                    </div>

                                    {/* Feature 2 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">bolt</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Fast execution</p>
                                            <p className="text-xs text-text-muted">Low latency</p>
                                        </div>
                                    </div>

                                    {/* Feature 3 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">history</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Depth & history</p>
                                            <p className="text-xs text-text-muted">Order book visibility</p>
                                        </div>
                                    </div>

                                    {/* Feature 4 */}
                                    <div className="flex items-start gap-3 rounded-lg bg-gray-50 p-3">
                                        <span className="material-symbols-outlined text-primary mt-0.5">lock_open</span>
                                        <div>
                                            <p className="font-semibold text-text-main text-sm">Exclusive access</p>
                                            <p className="text-xs text-text-muted">For FanBags tokens</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
