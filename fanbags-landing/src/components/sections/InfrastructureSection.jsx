export default function InfrastructureSection() {
    const layers = [
        { name: 'Social Layer', desc: 'X, Instagram, TikTok, Discord', icon: 'groups', color: 'bg-blue-50 text-blue-600' },
        { name: 'FanBags Protocol', desc: 'Tag-to-deploy automation', icon: 'construction', color: 'bg-primary/10 text-primary' },
        { name: 'Blockchain Layer', desc: 'Solana, Base, Ethereum', icon: 'link', color: 'bg-green-50 text-green-600' }
    ];

    return (
        <section id="infrastructure" className="py-16 md:py-24 px-6 bg-white">
            <div className="max-w-[1000px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase mb-3 block">07 — Architecture</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">Why Bags Is Core Infrastructure</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Bridging Web2 social platforms with Web3 financial rails seamlessly.
                    </p>
                </div>

                <div className="flex flex-col gap-4 mb-12">
                    {layers.map((layer, i) => (
                        <div
                            key={i}
                            className={`p-6 rounded-xl border-2 ${i === 1 ? 'border-primary bg-primary/5' : 'border-gray-200 bg-gray-50'}`}
                        >
                            <div className="flex items-center gap-4">
                                <div className={`size-14 rounded-lg ${layer.color} flex items-center justify-center`}>
                                    <span className="material-symbols-outlined text-3xl">{layer.icon}</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-text-main mb-1">{layer.name}</h3>
                                    <p className="text-gray-600">{layer.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                    <div className="flex items-start gap-4">
                        <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <span className="material-symbols-outlined text-2xl">verified_user</span>
                        </div>
                        <div>
                            <h4 className="font-bold text-lg text-text-main mb-2">Trustless & Permissionless</h4>
                            <p className="text-gray-600">
                                No central authority. Smart contracts handle verification, deployment, and fee distribution automatically.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
