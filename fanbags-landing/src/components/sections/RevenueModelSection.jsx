export default function RevenueModelSection() {
    return (
        <main id="revenue" className="flex-grow flex flex-col items-center justify-center py-12 px-6 lg:px-10 bg-white">
            <div className="max-w-[1024px] w-full flex flex-col gap-12 lg:gap-20">
                {/* Header */}
                <div className="text-center space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-text-main">
                        <span className="gradient-text">Sustainable value capture</span><br className="hidden md:block" /> across the ecosystem.
                    </h1>
                    <div className="space-y-3 max-w-2xl mx-auto">
                        <p className="text-lg md:text-xl text-text-muted font-medium">
                            An infrastructure designed for recurring protocol revenue.
                        </p>
                        <p className="text-sm md:text-base text-primary font-mono tracking-wide uppercase font-semibold">
                            "As long as creators have audiences, FanBags captures fees."
                        </p>
                    </div>
                </div>

                {/* Main Grid Layout */}
                <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
                    {/* Left Column: Revenue Streams */}
                    <div className="lg:col-span-5 flex flex-col gap-6 relative z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="material-symbols-outlined text-primary text-[20px]">input</span>
                            <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Revenue Streams</h3>
                        </div>

                        {/* Trading Fees */}
                        <div className="glass-panel group p-5 rounded-xl hover:border-primary/30 transition-all duration-300 hover:bg-gray-50 hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">currency_exchange</span>
                                </div>
                                <div>
                                    <h4 className="text-text-main font-bold text-lg">Trading Fees</h4>
                                    <p className="text-text-muted text-sm mt-1 leading-relaxed">Small percentage captured on every buy/sell transaction across the network.</p>
                                </div>
                            </div>
                        </div>

                        {/* Creator Subscriptions */}
                        <div className="glass-panel group p-5 rounded-xl hover:border-primary/30 transition-all duration-300 hover:bg-gray-50 hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">verified_user</span>
                                </div>
                                <div>
                                    <h4 className="text-text-main font-bold text-lg">Creator Subscriptions</h4>
                                    <p className="text-text-muted text-sm mt-1 leading-relaxed">Recurring monthly SaaS revenue from pro creators using advanced tools.</p>
                                </div>
                            </div>
                        </div>

                        {/* Featured Discovery */}
                        <div className="glass-panel group p-5 rounded-xl hover:border-primary/30 transition-all duration-300 hover:bg-gray-50 hover:shadow-md">
                            <div className="flex items-start gap-4">
                                <div className="bg-primary/10 p-2.5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                                </div>
                                <div>
                                    <h4 className="text-text-main font-bold text-lg">Featured Discovery</h4>
                                    <p className="text-text-muted text-sm mt-1 leading-relaxed">Paid placement slots for high visibility on the explore page.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Column: Visual Connector */}
                    <div className="lg:col-span-2 hidden lg:flex flex-col items-center justify-center relative">
                        <svg className="absolute w-full h-full text-gray-300" preserveAspectRatio="none" viewBox="0 0 100 400">
                            <path d="M0,60 C50,60 50,200 100,200" fill="none" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2"></path>
                            <path d="M0,200 C30,200 70,200 100,200" fill="none" stroke="currentColor" strokeWidth="2"></path>
                            <path d="M0,340 C50,340 50,200 100,200" fill="none" stroke="currentColor" strokeDasharray="8 4" strokeWidth="2"></path>
                            <circle cx="100" cy="200" fill="#7f13ec" r="4"></circle>
                        </svg>
                        <div className="relative flex items-center justify-center size-12 rounded-full bg-white border border-gray-200 z-20 shadow-md">
                            <span className="material-symbols-outlined text-primary text-[24px]">sync_alt</span>
                        </div>
                    </div>

                    {/* Right Column: Impact & Outcome */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-8 relative z-10">
                        {/* Impact List */}
                        <div className="pl-0 lg:pl-6 space-y-5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-primary text-[20px]">equalizer</span>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-text-muted">Bags Impact List</h3>
                            </div>
                            <div className="space-y-3 bg-gray-50 p-6 rounded-xl border border-gray-200">
                                <div className="flex items-center gap-3 text-text-main">
                                    <span className="material-symbols-outlined text-green-600">trending_up</span>
                                    <span className="text-base font-medium">More launches</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-main">
                                    <span className="material-symbols-outlined text-green-600">trending_up</span>
                                    <span className="text-base font-medium">More volume</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-main">
                                    <span className="material-symbols-outlined text-green-600">trending_up</span>
                                    <span className="text-base font-medium">More lifetime fees</span>
                                </div>
                                <div className="flex items-center gap-3 text-text-main">
                                    <span className="material-symbols-outlined text-green-600">trending_up</span>
                                    <span className="text-base font-medium">More partner claims</span>
                                </div>
                            </div>
                        </div>

                        {/* Connector Line */}
                        <div className="pl-0 lg:pl-6">
                            <div className="h-8 w-px bg-gradient-to-b from-gray-300 to-primary ml-5"></div>
                        </div>

                        {/* Outcome Card with Gradient Border */}
                        <div className="ml-0 lg:ml-6 relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-primary-dark p-[1px] shadow-lg shadow-primary/20">
                            <div className="relative rounded-xl bg-white p-6 h-full flex flex-col items-start gap-3">
                                <div className="absolute top-0 right-0 p-4 opacity-5">
                                    <span className="material-symbols-outlined text-primary text-[80px]">savings</span>
                                </div>
                                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase tracking-wider">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                    Outcome
                                </div>
                                <h2 className="text-2xl font-bold text-text-main tracking-tight z-10">Recurring Protocol Revenue</h2>
                                <p className="text-text-muted text-sm z-10">Value accrual directly to the protocol treasury and token holders.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Analyst Note */}
                <div className="border-t border-gray-200 pt-8 text-center lg:text-left">
                    <p className="text-xs text-text-muted font-medium leading-relaxed max-w-3xl mx-auto lg:mx-0">
                        <span className="text-text-main font-bold uppercase tracking-wider mr-2">Analyst Note:</span>
                        Projections are based on current market rates for comparable protocols. Revenue capture mechanisms are subject to governance voting and may be adjusted quarterly to optimize ecosystem growth.
                    </p>
                </div>
            </div>
        </main>
    );
}
