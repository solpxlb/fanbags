export default function UtilitySection() {
    return (
        <main id="utility" className="layout-container flex grow flex-col items-center pt-12 pb-24 px-4 sm:px-6 lg:px-8 bg-white">
            {/* Headline Section */}
            <div className="max-w-[800px] w-full text-center mb-12">
                <h1 className="text-text-main tracking-tight text-3xl md:text-5xl font-bold leading-[1.15] mb-6">
                    FanBags provides plug-and-play infrastructure for creators to <span className="text-primary">reward holders.</span>
                </h1>
                <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
                    Transform passive holders into active participants with zero technical overhead.
                </p>
            </div>

            {/* Utility List Section */}
            <div className="w-full max-w-[720px] flex flex-col gap-3 mb-16">
                {/* Item 1: Burn -> Call */}
                <div className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-red-50 text-red-500 shrink-0">
                            <span className="material-symbols-outlined">local_fire_department</span>
                        </div>
                        <span className="text-gray-500 font-medium text-base sm:text-lg">Burn tokens</span>
                    </div>
                    <div className="shrink-0 px-2 sm:px-6 text-primary flex items-center">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                    <div className="flex items-center justify-end gap-4 flex-1 text-right">
                        <span className="text-text-main font-bold text-base sm:text-lg">Private call or chat</span>
                        <div className="hidden sm:flex items-center justify-center size-10 rounded-lg bg-green-50 text-green-600 shrink-0">
                            <span className="material-symbols-outlined">call</span>
                        </div>
                    </div>
                </div>

                {/* Item 2: Burn more -> Meetups */}
                <div className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-center gap-4 flex-1">
                        <div className="flex items-center justify-center size-10 rounded-lg bg-red-50 text-red-500 shrink-0">
                            <span className="material-symbols-outlined">hotel_class</span>
                        </div>
                        <span className="text-gray-500 font-medium text-base sm:text-lg">Burn more</span>
                    </div>
                    <div className="shrink-0 px-2 sm:px-6 text-primary flex items-center">
                        <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                    </div>
                    <div className="flex items-center justify-end gap-4 flex-1 text-right">
                        <span className="text-text-main font-bold text-base sm:text-lg">IRL meetups</span>
                        <div className="hidden sm:flex items-center justify-center size-10 rounded-lg bg-purple-50 text-purple-600 shrink-0">
                            <span className="material-symbols-outlined">groups</span>
                        </div>
                    </div>
                </div>

                {/* Spacer / Divider */}
                <div className="relative py-2 flex items-center justify-center">
                    <div className="h-px bg-gray-200 w-full absolute"></div>
                    <span className="bg-white px-3 text-xs font-semibold text-gray-400 uppercase tracking-widest relative z-10">Plus</span>
                </div>

                {/* Single Items Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center h-full hover:border-primary/30 hover:shadow-md transition-all">
                        <div className="mb-2 text-primary">
                            <span className="material-symbols-outlined">lock_open</span>
                        </div>
                        <span className="text-text-main font-semibold">Token-gated content</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center h-full hover:border-primary/30 hover:shadow-md transition-all">
                        <div className="mb-2 text-primary">
                            <span className="material-symbols-outlined">forum</span>
                        </div>
                        <span className="text-text-main font-semibold">Gated chat groups</span>
                    </div>
                    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl border border-gray-200 shadow-sm text-center h-full hover:border-primary/30 hover:shadow-md transition-all">
                        <div className="mb-2 text-primary">
                            <span className="material-symbols-outlined">stars</span>
                        </div>
                        <span className="text-text-main font-semibold">Custom perks</span>
                    </div>
                </div>
            </div>

            {/* Ease of Use Section */}
            <div className="w-full max-w-[800px] flex flex-wrap justify-center gap-4 mb-16">
                {['No code', 'No wallets', 'No operational headache'].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm">
                        <span className="material-symbols-outlined text-green-500 text-[20px]">check_circle</span>
                        <span className="text-sm font-semibold text-gray-700">{feature}</span>
                    </div>
                ))}
            </div>

            {/* Conclusion Banner */}
            <div className="w-full max-w-[720px] relative overflow-hidden rounded-2xl bg-text-main px-8 py-10 sm:px-12 sm:py-14 text-center shadow-xl">
                <div className="absolute top-0 right-0 -mt-10 -mr-10 size-64 bg-primary/40 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 size-64 bg-blue-500/30 rounded-full blur-[80px]"></div>
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm mb-2 border border-white/10">
                        <span className="material-symbols-outlined text-white">trending_up</span>
                    </div>
                    <h3 className="text-white text-2xl sm:text-3xl font-bold tracking-tight">
                        "This creates continuous demand, <br className="hidden sm:block" />not dead tokens."
                    </h3>
                </div>
            </div>
        </main>
    );
}
