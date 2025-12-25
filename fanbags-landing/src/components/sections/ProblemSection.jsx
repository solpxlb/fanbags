export default function ProblemSection() {
    return (
        <main id="problem" className="flex-1 flex flex-col items-center px-6 py-12 md:py-20 bg-white">
            <div className="w-full max-w-[1024px] flex flex-col gap-16">
                {/* Header Section */}
                <div className="flex flex-col gap-3 text-center">
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase">02 — The Landscape</span>
                    <h1 className="text-text-main tracking-tight text-4xl md:text-5xl font-bold leading-tight">
                        The Problem: Distribution Is Broken
                    </h1>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto mt-2">
                        A disconnect between where attention lives and where value is captured.
                    </p>
                </div>

                {/* Comparison Grid */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                    {/* Center Divider Visual (Desktop Only) */}
                    <div className="hidden md:flex absolute inset-0 justify-center items-center pointer-events-none">
                        <div className="h-full w-px border-l border-dashed border-gray-300"></div>
                        <div className="absolute bg-white p-2 rounded-full border border-gray-200 text-gray-400">
                            <span className="material-symbols-outlined text-[20px]">link_off</span>
                        </div>
                    </div>

                    {/* Column A: Creators */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <span className="material-symbols-outlined text-primary text-2xl">face</span>
                            <h3 className="text-text-main text-xl font-bold">Creators</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                                    <span className="material-symbols-outlined">trending_flat</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">Monetize via ads & brand deals</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Capped upside, reliant on algorithms.</p>
                                </div>
                            </div>
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500">
                                    <span className="material-symbols-outlined">warning</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">Meme coins</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Bad incentives, dump risk, bad optics.</p>
                                </div>
                            </div>
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500">
                                    <span className="material-symbols-outlined">extension_off</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">Crypto tools</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Too complex for average fans.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column B: Protocols */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                            <span className="material-symbols-outlined text-primary text-2xl">dns</span>
                            <h3 className="text-text-main text-xl font-bold">Protocols</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                                    <span className="material-symbols-outlined">precision_manufacturing</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">Great infrastructure</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Technologically sound, distribution-poor.</p>
                                </div>
                            </div>
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-purple-50 flex items-center justify-center text-purple-500">
                                    <span className="material-symbols-outlined">person_off</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">No consumer distribution</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Lacking frontend reach & UX.</p>
                                </div>
                            </div>
                            <div className="group flex gap-4 p-4 rounded-xl bg-white border border-transparent hover:border-gray-200 shadow-sm hover:shadow-md transition-all">
                                <div className="shrink-0 size-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-500">
                                    <span className="material-symbols-outlined">show_chart</span>
                                </div>
                                <div className="flex flex-col">
                                    <p className="text-text-main font-semibold text-sm">Shallow post-launch activity</p>
                                    <p className="text-gray-500 text-sm mt-0.5">Speculation drives initial volume only.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Synthesis Statement */}
                <div className="mt-8 rounded-2xl bg-white p-8 border border-gray-200 shadow-lg relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-primary"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none group-hover:bg-primary/20 transition-all duration-500"></div>
                    <div className="relative z-10 flex flex-col md:flex-row gap-6 md:items-center justify-between">
                        <div className="flex-1 space-y-4">
                            <h4 className="text-lg md:text-xl font-medium text-gray-600 leading-relaxed">
                                The bridge is broken. <span className="text-text-main font-semibold">Attention</span> lives on social platforms, while <span className="text-text-main font-semibold">value capture</span> is stranded on-chain.
                            </h4>
                            <p className="text-xl md:text-2xl font-bold text-primary leading-snug">
                                FanBags converts social engagement into recurring, on-chain transaction fees.
                            </p>
                        </div>
                        <div className="hidden md:flex shrink-0 items-center justify-center">
                            <div className="size-16 rounded-full bg-primary/10 flex items-center justify-center text-primary animate-pulse">
                                <span className="material-symbols-outlined text-[32px]">sync_alt</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
