import Image from 'next/image';

export default function HeroSection() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden bg-white">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] mesh-gradient pointer-events-none -z-10 opacity-60"></div>

            <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/50 border border-gray-200 text-gray-600 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-gray-400"></span>
                    Pitch Deck (Not Live)
                </div>

                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-main mb-6 leading-[1.1] max-w-4xl">
                    Turn Social Attention into <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">On-Chain Fee Revenue</span>
                </h1>

                <p className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl leading-relaxed">
                    Just tag <span className="font-semibold text-text-main">@fanbags</span> — we cover the fees, your fan bag is live instantly. The simplest way to monetize your community on-chain.
                </p>

                {/* Mock Twitter Feed */}
                <div className="mt-8 w-full max-w-5xl relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-400 to-primary rounded-xl blur opacity-20 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-2xl bg-gray-50 flex flex-col items-center justify-center p-8 md:p-12 min-h-[500px]">
                        <div className="absolute inset-0 z-0 opacity-40" style={{ backgroundImage: 'radial-gradient(#a1a1aa 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 z-0"></div>

                        <div className="relative z-10 w-full max-w-2xl flex flex-col gap-5">
                            {/* Tweet 1 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow">
                                <div className="flex gap-4">
                                    <Image
                                        alt="Alex"
                                        className="w-12 h-12 rounded-full flex-shrink-0"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1oLx3KEGzPQUKVwx09dspdxVbPRiQaZQDAZlWkCy_EL4x-7Mc5dhExBJcpoJIWnf8GHnT8aS4stmbbE5vS4oujq_N3L4uzXebfnDxuiZ0H_o791pQq97AuVT_KL2LbQBXpLz5CtYH31L3Au3i__Vjddzoek4vUYGpnQR6tT5YRLkxb8EcJXtj3mZQ9mORKVZ7XOi77sBDK6_qOCG_xHyWXaVfyWimUemxjqso3p4M5WepxH9bT5BhehT5YXcOEQqkLDITbMgXcyvk"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="font-bold text-gray-900 text-[15px]">Alex Rivera</span>
                                            <span className="material-symbols-outlined text-[#1D9BF0] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <span className="text-gray-500 text-[15px]">@arivera • 2h</span>
                                        </div>
                                        <div className="text-[15px] text-gray-900 mt-1 leading-normal">
                                            Finally launching the community treasury. Let's build something huge. 🚀 <span className="text-primary font-medium hover:underline cursor-pointer">@fanbags</span>
                                        </div>
                                        <div className="flex justify-between mt-3 max-w-[320px] text-gray-500">
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 24</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#00BA7C] transition-colors"><span className="material-symbols-outlined text-[18px]">repeat</span> 12</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#F91880] transition-colors"><span className="material-symbols-outlined text-[18px]">favorite</span> 148</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">ios_share</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tweet 2 - Featured */}
                            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-lg relative z-10 scale-[1.02] border-l-4 border-l-primary">
                                <div className="flex gap-4">
                                    <Image
                                        alt="Sarah"
                                        className="w-12 h-12 rounded-full flex-shrink-0"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrRw2e8X62kyusn1i2yjk7kYf-0Vx-SSB33CwgaVOOevk27y9tcvk11tVBsY6zVgUbmjA3VmE_W9KyLMUCgVF4TuZKLMh0yWn_xvrFFgJl3yfb5Osz4vrEQYY0iGXpy_xDhPC_SD0qyCPJze7voSD1NwegUuTygb9RZL4SsfoMYIhSdeF5zlP-SDwAnYrJrNextrxClpBLI_bBgJiiKxCHTMwKF2dnQN_59e8uQen3qclxB04tSvw6ATmsh9Sgf-M7CzWWvJgbAm2"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="font-bold text-gray-900 text-[15px]">Sarah Chen</span>
                                            <span className="material-symbols-outlined text-[#1D9BF0] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <span className="text-gray-500 text-[15px]">@schen_tech • 5h</span>
                                        </div>
                                        <div className="text-[15px] text-gray-900 mt-1 leading-normal">
                                            Just set up my creator token in 30 seconds. The UX on <span className="text-primary font-medium hover:underline cursor-pointer">@fanbags</span> is insane. 🤯
                                        </div>
                                        <div className="mt-3 rounded-xl border border-gray-200 overflow-hidden cursor-pointer hover:bg-gray-50 transition-colors">
                                            <div className="h-32 w-full bg-gray-100 relative">
                                                <Image
                                                    alt="Token Art"
                                                    className="object-cover opacity-90"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlluFiC_kK4Vp0GmhNA2iQcFVbqzD06jTZI9jUPQwCt5hL4A6LYeGIOLsn41XXmjQa_e20HZQxtYa3XJ9S0qcPAax5UZg0nworHQnOpaAftNn2CCQWG65OHfCNO-2FwAT0YtZrb8276hpmK57EVbMsInyubp1e-qlBhySwU_OosEUBY_1VRIGdFso28IxYJIbGApMU0PusmgrQ2cIc0ssKi0T8jafXl9mmdNBY1NY6qD0RddMXPqWYBDsc6J1tprFLvW0fCeevosC1"
                                                    fill
                                                />
                                                <div className="absolute inset-0 bg-black/10"></div>
                                            </div>
                                            <div className="p-3">
                                                <div className="text-[15px] font-bold text-gray-900">$CHEN Token Launch</div>
                                                <div className="text-xs text-gray-500 mt-0.5">fanbags.fm</div>
                                            </div>
                                        </div>
                                        <div className="flex justify-between mt-3 max-w-[320px] text-gray-500">
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 156</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#00BA7C] transition-colors"><span className="material-symbols-outlined text-[18px]">repeat</span> 89</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#F91880] transition-colors"><span className="material-symbols-outlined text-[18px]">favorite</span> 856</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">ios_share</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Tweet 3 */}
                            <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow opacity-90">
                                <div className="flex gap-4">
                                    <Image
                                        alt="Marcus"
                                        className="w-12 h-12 rounded-full flex-shrink-0"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsSkQsJs7NyDhNzTZm84p2HWLl0PQE5PamIqtbCFdhrclK_NTlxOy0SAanzYlsfcyAGJo3uGszo1_CLaK7xFimIKQw5S25TvpykXOEQ4hrAOruAFdX2FcwO4G3wipT31eBMOwIM9tpS9kjzVf-D1M_8KUrC07Y9ijdJhy0H6gsSCou-4-cpMI_eoGakUwqrFQY1E5gcc8KEqzfzVUBpJxE2VIJULcqMMogRxOtYXfqh2mM6KwJ31wnRDd29DX0vIIxEgcPi1i88B8l"
                                        width={48}
                                        height={48}
                                    />
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center flex-wrap gap-1">
                                            <span className="font-bold text-gray-900 text-[15px]">Marcus J.</span>
                                            <span className="material-symbols-outlined text-[#1D9BF0] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                            <span className="text-gray-500 text-[15px]">@marcus_music • 6h</span>
                                        </div>
                                        <div className="text-[15px] text-gray-900 mt-1 leading-normal">
                                            Yo <span className="text-primary font-medium hover:underline cursor-pointer">@fanbags</span> check DMs. Ready to move my community on-chain. 💿
                                        </div>
                                        <div className="flex justify-between mt-3 max-w-[320px] text-gray-500">
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">chat_bubble</span> 8</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#00BA7C] transition-colors"><span className="material-symbols-outlined text-[18px]">repeat</span> 2</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#F91880] transition-colors"><span className="material-symbols-outlined text-[18px]">favorite</span> 45</div>
                                            <div className="flex items-center gap-1.5 text-xs group cursor-pointer hover:text-[#1D9BF0] transition-colors"><span className="material-symbols-outlined text-[18px]">ios_share</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
