import { ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#365ffa]">MOBILE BAZAR</h1>
        </div>

        <div className="flex items-center gap-4">
          
          <button className="flex items-center gap-2 px-4 py-2 bg-[#365ffa] text-white rounded-lg hover:bg-[#2a4dc8] transition-colors">
            <ShoppingCart size={20} />
            <span className="hidden sm:inline">Cart</span>
          </button>
        </div>
      </div>
    </header>
  );
}
