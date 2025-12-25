export default function ComparisonSection() {
    return (
        <main id="comparison" className="flex-1 bg-white">
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
                        Incentive Design
                    </div>
                    <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-text-main sm:text-5xl md:text-6xl">
                        Why This Is Different
                    </h1>
                    <p className="mx-auto max-w-2xl text-lg text-text-muted md:text-xl leading-relaxed">
                        Moving from speculation to sustainable utility.
                    </p>
                </div>
            </section>

            {/* Comparison Cards Section */}
            <section className="px-4 pb-24">
                <div className="mx-auto max-w-[1100px]">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {/* Traditional Model Card */}
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                            {/* Visual Header */}
                            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-gray-50 to-stone-100 p-6 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(#808080_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]"></div>
                                <div className="relative flex items-center gap-3 z-10">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md text-text-muted">
                                        <span className="material-symbols-outlined text-[24px]">inventory_2</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main">Traditional Model</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <span className="material-symbols-outlined text-[20px]">remove_circle_outline</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Creator owns supply</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Founders hold majority tokens</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <span className="material-symbols-outlined text-[20px]">trending_down</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Dump risk</p>
                                            <p className="text-xs sm:text-sm text-text-muted">High volatility from whales</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <span className="material-symbols-outlined text-[20px]">flash_on</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">One-time hype</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Short-term pump cycles</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <span className="material-symbols-outlined text-[20px]">casino</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Speculative behavior</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Value detached from product</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-500">
                                            <span className="material-symbols-outlined text-[20px]">psychology_alt</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Complex onboarding</p>
                                            <p className="text-xs sm:text-sm text-text-muted">High friction for new users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* FanBags Protocol Card */}
                        <div className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-primary/20 bg-white shadow-lg transition-all">
                            {/* Visual Header */}
                            <div className="relative h-32 w-full overflow-hidden bg-gradient-to-br from-purple-50 to-blue-50 p-6 flex items-center justify-center">
                                <div className="absolute inset-0 bg-[radial-gradient(#7f13ec_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.05]"></div>
                                <div className="relative flex items-center gap-3 z-10">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                                        <span className="material-symbols-outlined text-[24px]">verified</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-text-main">FanBags Protocol</h3>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-6 sm:p-8">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">check_circle</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Creator owns 0% supply</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Fair launch mechanics</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">shield_lock</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">No dumping possible</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Algorithmic stability</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">all_inclusive</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Long-term engagement</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Sustainable growth loops</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">handshake</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Utility + participation</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Rewards for real usage</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <span className="material-symbols-outlined text-[20px]">bolt</span>
                                        </div>
                                        <div>
                                            <p className="font-bold text-text-main text-sm">Just tag & trade</p>
                                            <p className="text-xs sm:text-sm text-text-muted">Seamless UX integration</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Message */}
                    <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
                        <p className="text-xl font-bold text-text-main">This is fee-first creator monetization.</p>
                        <div className="inline-flex items-center gap-2 rounded-lg bg-green-100 px-3 py-1.5 text-sm font-semibold text-green-700">
                            <span className="material-symbols-outlined text-[18px]">verified_user</span>
                            Infrastructure Grade Audited
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
