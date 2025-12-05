import { Star } from 'lucide-react';

export interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  salePrice: number;
  discount: number;
  rating: number;
  quality: string;
  specs: string[];
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold">
            {product.discount}% OFF
          </div>
        )}
        <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
          {product.quality}
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        <div className="flex items-center gap-1 mb-2">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-xs text-gray-600">({product.rating})</span>
        </div>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-xl font-bold text-gray-900">₹{product.salePrice.toLocaleString()}</span>
          {product.originalPrice > product.salePrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>

        <div className="flex flex-wrap gap-1">
          {product.specs.map((spec, index) => (
            <span
              key={index}
              className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
