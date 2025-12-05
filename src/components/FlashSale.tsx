import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

interface FlashSaleProps {
  products: Product[];
}

export default function FlashSale({ products }: FlashSaleProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          hours = 2;
          minutes = 15;
          seconds = 30;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <Clock className="w-8 h-8 text-white" />
              <div>
                <h2 className="text-2xl font-bold text-white">Flash Sale</h2>
                <p className="text-white/90 text-sm">Limited time offers</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-white text-sm font-medium">Ends in:</span>
              <div className="flex gap-2">
                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600">Hours</div>
                </div>
                <div className="flex items-center text-white text-2xl font-bold">:</div>
                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600">Mins</div>
                </div>
                <div className="flex items-center text-white text-2xl font-bold">:</div>
                <div className="bg-white rounded-lg px-3 py-2 min-w-[60px] text-center">
                  <div className="text-2xl font-bold text-gray-900">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs text-gray-600">Secs</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
