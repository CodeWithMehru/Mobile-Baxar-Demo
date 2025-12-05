import Header from './components/Header';
import BannerCarousel from './components/BannerCarousel';
import BrandShowcase from './components/BrandShowcase';
import ProductGrid from './components/ProductGrid';
import PromoBanner from './components/PromoBanner';
import FlashSale from './components/FlashSale';
import Footer from './components/Footer';
import BottomNav from './components/BottomNav';
import { topProducts, flashSaleProducts, bestSellers } from './data/products';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <BannerCarousel />
        <BrandShowcase />
        <ProductGrid title="Top Products" products={topProducts} />
        <PromoBanner />
        <FlashSale products={flashSaleProducts} />
        <ProductGrid title="Best Sellers" products={bestSellers} />
      </main>

      <Footer />
      <BottomNav />
    </div>
  );
}

export default App;
