export default function GrowthFlywheelSection() {
    return (
        <section id="growth" className="py-16 md:py-24 px-6 bg-gray-50">
            <div className="max-w-[1100px] mx-auto">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider text-xs uppercase mb-3 block">06 — Network Effects</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-main mb-4">Viral Growth Flywheel</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Each new creator brings their community, compounding network effects and liquidity.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                    {[
                        { step: '1', icon: 'person_add', title: 'Creator Joins', desc: 'Launches token with existing audience' },
                        { step: '2', icon: 'groups', title: 'Fans Onboard', desc: 'Community members buy and trade' },
                        { step: '3', icon: 'trending_up', title: 'Liquidity Grows', desc: 'More trading volume, better prices' },
                        { step: '4', icon: 'repeat', title: 'Network Effect', desc: 'Attracts more creators to platform' }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="size-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                    <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                                </div>
                                <span className="text-3xl font-bold text-gray-200">{item.step}</span>
                            </div>
                            <h3 className="font-bold text-lg text-text-main mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center p-8 bg-white rounded-2xl border border-gray-200">
                    <p className="text-xl font-semibold text-primary">
                        Exponential growth through composability and shared infrastructure.
                    </p>
                </div>
            </div>
        </section>
    );
}
