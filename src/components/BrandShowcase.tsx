import { Smartphone } from 'lucide-react';

const brands = [
  { name: 'Apple', logo: '🍎' },
  { name: 'Samsung', logo: '📱' },
  { name: 'OnePlus', logo: '1️⃣+' },
  { name: 'Pixel', logo: 'G' },
  { name: 'Vivo', logo: 'V' },
  { name: 'iQOO', logo: 'iQ' },
  { name: 'OPPO', logo: 'O' },
  { name: 'Realme', logo: 'R' }
];

export default function BrandShowcase() {
  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Brands</h2>
          <button className="text-[#365ffa] hover:text-[#2a4dc8] font-medium">View All</button>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-4 pb-2">
            {brands.map((brand) => (
              <button
                key={brand.name}
                className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-[#365ffa] hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center gap-2 group"
              >
                {brand.logo.startsWith('http') ? (
                  <img src={brand.logo} alt={brand.name} className="w-12 h-12 object-contain" />
                ) : (
                  <div className="w-12 h-12 flex items-center justify-center">
                    {brand.logo.includes('1️⃣') || brand.logo === '🍎' || brand.logo === '📱' ? (
                      <span className="text-3xl">{brand.logo}</span>
                    ) : (
                      <div className="w-12 h-12 bg-[#365ffa] rounded-full flex items-center justify-center text-white font-bold text-lg group-hover:scale-110 transition-transform">
                        {brand.logo}
                      </div>
                    )}
                  </div>
                )}
                <span className="text-xs font-medium text-gray-700">{brand.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
