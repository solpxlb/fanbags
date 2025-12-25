export default function VisionSection() {
    return (
        <div id="vision" className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white">
            <main className="flex-1 flex flex-col items-center justify-center relative px-4 py-12 md:px-6">
                {/* Glow Background */}
                <div className="absolute inset-0 pointer-events-none z-0" style={{
                    background: 'radial-gradient(circle at center, rgba(127, 19, 236, 0.03) 0%, transparent 60%)'
                }}></div>

                <div className="layout-content-container flex flex-col w-full max-w-4xl relative z-10">
                    {/* Heading */}
                    <div className="flex flex-col items-center text-center mb-12 animate-fade-in-up">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 leading-[1.1]">
                            <span className="text-gradient bg-gradient-to-br from-slate-900 to-slate-500 bg-clip-text text-transparent">
                                FanBags Is Not<br className="hidden md:block" /> a Launchpad.
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium text-slate-500 max-w-2xl">
                            It's something bigger.
                        </p>
                    </div>

                    {/* Grid of Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {/* Card 1 */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group bg-white border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">hub</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Distribution Layer</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">It's a distribution layer for Bags</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group bg-white border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Launch Surface</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Every social platform becomes a launch surface</p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group bg-white border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">handshake</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Creator Partners</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Every creator becomes a fee-earning partner</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="glass-panel p-6 rounded-xl flex flex-col gap-4 hover:border-primary/20 hover:shadow-lg transition-all duration-300 group bg-white border border-slate-200 shadow-sm">
                            <div className="size-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
                                <span className="material-symbols-outlined text-2xl">monetization_on</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 mb-1">Protocol Revenue</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">Every grant dollar compounds into protocol revenue</p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Badge */}
                    <div className="flex justify-center mb-16">
                        <div className="relative group cursor-default">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 via-purple-300/30 to-primary/10 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
                            <div className="relative px-8 py-4 bg-white ring-1 ring-slate-200 shadow-sm rounded-full flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">bolt</span>
                                <span className="text-lg md:text-xl font-bold text-slate-900">
                                    FanBags = Growth Engine for Bags
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
