import { Gift } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="bg-gradient-to-r from-[#365ffa] to-[#007bff] py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Gift className="w-10 h-10 text-white" />
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Festive Season Sale!
          </h2>
        </div>
        <p className="text-xl text-white/90 mb-6">
          Up to 40% off on all accessories
        </p>
        <button className="px-8 py-3 bg-white text-[#365ffa] rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
          Shop Now
        </button>
      </div>
    </section>
  );
}
