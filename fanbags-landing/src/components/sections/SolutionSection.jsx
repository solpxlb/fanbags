import Image from 'next/image';

export default function SolutionSection() {
    return (
        <main id="solution" className="flex-1 w-full px-4 py-8 lg:px-10 lg:py-12 bg-white">
            <div className="mx-auto max-w-5xl flex flex-col gap-12 lg:gap-20">
                {/* Page Heading */}
                <section className="flex flex-col gap-6 text-center lg:text-left lg:flex-row lg:justify-between lg:items-end">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 justify-center lg:justify-start">
                            <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Infrastructure</span>
                            <span className="text-gray-400 text-xs font-medium">Step 4 of 12</span>
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-black tracking-tight text-text-main leading-[1.1]">
                            The Solution
                        </h1>
                    </div>
                    <div className="max-w-xl">
                        <p className="text-xl lg:text-2xl font-medium leading-relaxed text-gray-600 text-balance">
                            <span className="text-primary font-bold">FanBags</span> turns every social platform into a token launch and trading surface.
                        </p>
                    </div>
                </section>

                <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                {/* Process & Features Layout */}
                <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
                    {/* Left Column: The 5-Step Process */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">Automated Workflow</h3>
                        <div className="relative flex flex-col pl-4">
                            {/* Step 01 */}
                            <div className="relative flex gap-6 pb-12 group">
                                <div className="absolute top-12 left-6 w-0.5 h-full bg-gray-200 -z-10"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[24px]">alternate_email</span>
                                    </div>
                                    <span className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">01</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">@fanbags launch</h4>
                                    <p className="text-sm text-gray-500">Creator simply tags the bot in a reply or post.</p>
                                </div>
                            </div>

                            {/* Step 02 */}
                            <div className="relative flex gap-6 pb-12 group">
                                <div className="absolute top-12 left-6 w-0.5 h-full bg-gray-200 -z-10"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[24px]">verified</span>
                                    </div>
                                    <span className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">02</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">Verified</h4>
                                    <p className="text-sm text-gray-500">Account ownership verified instantly via API.</p>
                                </div>
                            </div>

                            {/* Step 03 - Highlighted */}
                            <div className="relative flex gap-6 pb-12 group">
                                <div className="absolute top-12 left-6 w-0.5 h-full bg-gray-200 -z-10"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/5 text-primary shadow-inner">
                                        <span className="material-symbols-outlined text-[24px]">rocket_launch</span>
                                    </div>
                                    <span className="mt-2 text-[10px] font-bold text-primary uppercase tracking-widest">03</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-lg font-bold text-primary">Bags v2 Launch</h4>
                                    <p className="text-sm text-gray-500">Token contract deploys automatically on-chain.</p>
                                </div>
                            </div>

                            {/* Step 04 */}
                            <div className="relative flex gap-6 pb-12 group">
                                <div className="absolute top-12 left-6 w-0.5 h-full bg-gray-200 -z-10"></div>
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[24px]">local_gas_station</span>
                                    </div>
                                    <span className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">04</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">Gas Fee 0.00 SOL</h4>
                                    <p className="text-sm text-gray-500">All network fees covered by the protocol.</p>
                                </div>
                            </div>

                            {/* Step 05 */}
                            <div className="relative flex gap-6 group">
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white shadow-sm group-hover:border-primary group-hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-[24px]">candlestick_chart</span>
                                    </div>
                                    <span className="mt-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest">05</span>
                                </div>
                                <div className="flex flex-col pt-1">
                                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">Trading Live</h4>
                                    <p className="text-sm text-gray-500">Instant liquidity pool creation and market open.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Core Advantages Cards */}
                    <div className="lg:col-span-5 flex flex-col justify-center gap-6">
                        <div className="sticky top-24 flex flex-col gap-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Core Principles</h3>

                            {/* Card 1: Transparent Revenue */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100 text-green-600">
                                    <span className="material-symbols-outlined">monetization_on</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-gray-900">Transparent Revenue</h4>
                                    <p className="text-sm leading-relaxed text-gray-500">
                                        Creators earn only through fees. No hidden cuts, no pre-mines, no rugs. Pure alignment.
                                    </p>
                                </div>
                            </div>

                            {/* Card 2: Zero Crypto Friction */}
                            <div className="flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                                    <span className="material-symbols-outlined">bolt</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-lg font-bold text-gray-900">Zero Crypto Friction</h4>
                                    <p className="text-sm leading-relaxed text-gray-500">
                                        Fans trade instantly. Abstracted wallets and gasless experience remove all onboarding barriers.
                                    </p>
                                </div>
                            </div>

                            {/* Visual Decoration */}
                            <div className="mt-4 overflow-hidden rounded-xl bg-gray-50 border border-gray-200 p-4 h-[200px] relative">
                                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay">
                                    <Image
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfDJG1vORNv1CTsw7k4VMhm5zEKoxZMBfKRmriO21oJ8Yp1WsXHIuyxq5qip3E6WzZ-L8z-Y-eBMRqSWvCCwc6WlLpZi4BgWCLzD542CofBiyqBb9ePnIL_5lOn-QqelgzVjS46G2kp6EByonDWxkivXNwVaZFBkcyVVeKfY56xJXgTZ-sc-PPVfk20LZlm8s4mqlluHaZxQ4D-9zncSOrbriImXHXHtcjqYdMi1o96eSzuTY-XxsJpdkYk8G00OJs59W0QSQyehIP"
                                        alt="Abstract 3D network visualization"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="relative z-10 flex flex-col justify-end h-full">
                                    <span className="text-xs font-mono text-gray-400">NETWORK_STATUS: ACTIVE</span>
                                    <span className="text-xs font-mono text-primary font-bold">TPS: 4,500+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
