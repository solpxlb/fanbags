'use client';

import { useState } from 'react';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);

    const handleContactClick = () => {
        setShowContactModal(true);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
                <div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 group cursor-pointer">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                            <span className="material-symbols-outlined text-xl">shopping_bag</span>
                        </div>
                        <span className="text-lg font-bold tracking-tight text-text-main">FanBags</span>
                        <span className="hidden sm:inline-flex items-center px-2 py-0.5 ml-1 rounded text-[10px] font-bold bg-gray-100 text-gray-500 border border-gray-200 uppercase tracking-wide">
                            Pitch Deck
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={handleContactClick}
                            className="hidden md:flex items-center justify-center h-9 px-4 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_12px_rgba(127,19,236,0.3)]"
                        >
                            Contact Us
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-text-main"
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4">
                        <div className="flex flex-col gap-4">
                            <button
                                onClick={handleContactClick}
                                className="h-9 px-4 text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary-dark transition-all"
                            >
                                Contact Us
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Contact Modal */}
            {showContactModal && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
                    onClick={() => setShowContactModal(false)}
                >
                    <div
                        className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-2xl font-bold text-text-main">Contact Us</h3>
                            <button
                                onClick={() => setShowContactModal(false)}
                                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <span className="material-symbols-outlined text-gray-500">close</span>
                            </button>
                        </div>

                        <p className="text-text-muted mb-6">Reach out to us on Twitter:</p>

                        <div className="space-y-4">
                            <a
                                href="https://x.com/pxlonchain"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-all group"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-text-main">Pixel</div>
                                    <div className="text-sm text-text-muted">@pxlonchain</div>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
                            </a>

                            <a
                                href="https://x.com/meltingsol"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 p-4 rounded-xl border border-gray-200 hover:border-primary/50 hover:bg-gray-50 transition-all group"
                            >
                                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined">person</span>
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-text-main">Meltingsol</div>
                                    <div className="text-sm text-text-muted">@meltingsol</div>
                                </div>
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary transition-colors">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
