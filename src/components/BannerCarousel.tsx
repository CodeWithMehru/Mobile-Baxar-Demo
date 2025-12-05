import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const banners = [
  {
    id: 1,
    title: 'Upgrade your audio',
    subtitle: 'Premium headphones & speakers',
    image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'from-purple-600 to-blue-600'
  },
  {
    id: 2,
    title: 'Discover new watch',
    subtitle: 'Latest smartwatches collection',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'from-blue-600 to-cyan-600'
  },
  {
    id: 3,
    title: 'The new smartphones',
    subtitle: 'Explore latest mobile technology',
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'from-green-600 to-teal-600'
  },
  {
    id: 4,
    title: 'Upto 80% Off',
    subtitle: 'Amazing deals on electronics',
    image: 'https://images.pexels.com/photos/1619651/pexels-photo-1619651.jpeg?auto=compress&cs=tinysrgb&w=1200',
    color: 'from-orange-600 to-red-600'
  }
];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-[#EDF1FA] to-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${banner.color} opacity-90`} />
              <img
                src={banner.image}
                alt={banner.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
              />
              <div className="absolute inset-0 flex items-center justify-center text-center px-4">
                <div>
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                    {banner.title}
                  </h2>
                  <p className="text-lg sm:text-xl text-white/90">{banner.subtitle}</p>
                  <button className="mt-6 px-8 py-3 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            <ChevronLeft className="text-gray-900" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/80 hover:bg-white rounded-full transition-colors"
          >
            <ChevronRight className="text-gray-900" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
