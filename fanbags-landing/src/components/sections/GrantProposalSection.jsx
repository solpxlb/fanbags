export default function GrantProposalSection() {
    return (
        <main id="grant" className="flex-1 flex flex-col items-center w-full px-4 sm:px-6 lg:px-8 py-10 max-w-[1200px] mx-auto bg-white">
            {/* Main Heading */}
            <div className="w-full mb-12 animate-fade-in">
                <h1 className="text-text-main tracking-tight text-3xl md:text-[40px] font-bold leading-tight text-center max-w-[960px] mx-auto">
                    <span className="text-text-muted">Grant capital directly reduces creator friction,</span> accelerating launches, <span className="text-primary">which compounds into long-term fee generation</span> for the Bags ecosystem.
                </h1>
            </div>

            {/* Two Column Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full">
                {/* Left Column: Capital Allocation */}
                <div className="lg:col-span-7 flex flex-col gap-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-200 mb-2">
                        <span className="material-symbols-outlined text-primary">account_balance</span>
                        <h2 className="text-text-main text-xl font-bold tracking-tight">Capital Allocation (Use of Funds)</h2>
                    </div>

                    {/* Allocation Items */}
                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm rounded-xl p-4 transition-all duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">confirmation_number</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-main text-base font-semibold">Subsidize creator launch fees</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex text-text-muted/40">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto pl-[64px] sm:pl-0">
                            <p className="text-text-muted text-sm font-medium">Reduced friction for new creators at scale</p>
                        </div>
                    </div>

                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm rounded-xl p-4 transition-all duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">account_balance_wallet</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-main text-base font-semibold">Wallet abstraction & Web2 rails</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex text-text-muted/40">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto pl-[64px] sm:pl-0">
                            <p className="text-text-muted text-sm font-medium">Seamless onboarding infrastructure</p>
                        </div>
                    </div>

                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm rounded-xl p-4 transition-all duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">terminal</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-main text-base font-semibold">Pro trading terminal</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex text-text-muted/40">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto pl-[64px] sm:pl-0">
                            <p className="text-text-muted text-sm font-medium">Advanced tools for liquidity providers</p>
                        </div>
                    </div>

                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm rounded-xl p-4 transition-all duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">loyalty</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-main text-base font-semibold">Benefits & utility infrastructure</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex text-text-muted/40">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto pl-[64px] sm:pl-0">
                            <p className="text-text-muted text-sm font-medium">Retention systems and rewards</p>
                        </div>
                    </div>

                    <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border border-gray-200 hover:border-primary/50 hover:shadow-sm rounded-xl p-4 transition-all duration-300">
                        <div className="flex items-center gap-4 flex-1">
                            <div className="text-primary flex items-center justify-center rounded-lg bg-primary/5 shrink-0 size-12 group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">verified_user</span>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-main text-base font-semibold">Safety, moderation, verification</p>
                            </div>
                        </div>
                        <div className="hidden sm:flex text-text-muted/40">
                            <span className="material-symbols-outlined">arrow_forward</span>
                        </div>
                        <div className="sm:text-right w-full sm:w-auto pl-[64px] sm:pl-0">
                            <p className="text-text-muted text-sm font-medium">Trust & safety layer implementation</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Impact Metrics */}
                <div className="lg:col-span-5 flex flex-col gap-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-gray-200 mb-2">
                        <span className="material-symbols-outlined text-primary">monitoring</span>
                        <h2 className="text-text-main text-xl font-bold tracking-tight">Impact Metrics (Key Outcomes)</h2>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex items-center gap-5 hover:border-primary/50 hover:shadow-sm transition-all group">
                            <div className="bg-white border border-gray-100 p-3 rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-colors">
                                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                            </div>
                            <div>
                                <h3 className="text-text-main font-bold text-lg">High-volume</h3>
                                <p className="text-text-muted text-sm">token launches</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex items-center gap-5 hover:border-primary/50 hover:shadow-sm transition-all group">
                            <div className="bg-white border border-gray-100 p-3 rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-colors">
                                <span className="material-symbols-outlined text-3xl">diversity_3</span>
                            </div>
                            <div>
                                <h3 className="text-text-main font-bold text-lg">Non-crypto</h3>
                                <p className="text-text-muted text-sm">user onboarding</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex items-center gap-5 hover:border-primary/50 hover:shadow-sm transition-all group">
                            <div className="bg-white border border-gray-100 p-3 rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-colors">
                                <span className="material-symbols-outlined text-3xl">timeline</span>
                            </div>
                            <div>
                                <h3 className="text-text-main font-bold text-lg">Sustained</h3>
                                <p className="text-text-muted text-sm">trading activity</p>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl flex items-center gap-5 hover:border-primary/50 hover:shadow-sm transition-all group">
                            <div className="bg-white border border-gray-100 p-3 rounded-full text-primary shadow-sm group-hover:bg-primary group-hover:text-white group-hover:border-transparent transition-colors">
                                <span className="material-symbols-outlined text-3xl">query_stats</span>
                            </div>
                            <div>
                                <h3 className="text-text-main font-bold text-lg">Measurable</h3>
                                <p className="text-text-muted text-sm">on-chain growth</p>
                            </div>
                        </div>
                    </div>

                    {/* Total Projected Impact Card */}
                    <div className="mt-4 rounded-xl h-24 w-full bg-gradient-to-r from-gray-50 to-primary/5 border border-gray-200 p-4 flex items-center justify-between relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-colors">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="z-10">
                            <p className="text-text-muted text-xs uppercase tracking-wider font-semibold">Total Projected Impact</p>
                            <p className="text-text-main font-bold text-xl mt-1">+240% Growth YoY</p>
                        </div>
                        <div className="z-10 bg-white border border-gray-100 shadow-sm p-2 rounded-lg">
                            <span className="material-symbols-outlined text-primary text-xl">trending_up</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
