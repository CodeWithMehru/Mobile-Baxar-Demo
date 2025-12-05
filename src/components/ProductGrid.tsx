import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  title: string;
  products: Product[];
  showViewAll?: boolean;
}

export default function ProductGrid({ title, products, showViewAll = true }: ProductGridProps) {
  return (
    <section className="bg-[#EDF1FA] py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
          {showViewAll && (
            <button className="text-[#365ffa] hover:text-[#2a4dc8] font-medium">
              View All
            </button>
          )}
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
