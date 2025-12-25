export default function Footer() {
    return (
        <footer className="mt-auto py-8 border-t border-gray-100 bg-white">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center justify-center gap-2">
                <div className="flex items-center gap-2 text-text-muted hover:text-primary transition-colors cursor-pointer">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Powered by</span>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-sm">token</span>
                        <span className="text-sm font-bold text-gray-700">bags.fm</span>
                    </div>
                </div>
                <p className="text-xs text-gray-400 mt-2">© 2024 FanBags Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}
