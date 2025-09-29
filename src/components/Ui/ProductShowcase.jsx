// src/components/ProductShowcase.jsx
import ProductCard from "./ProductCard";

const products = [
  { id: "1", name: "RED STRAP CARTIER", price: 250, image: "/cartier.jpeg" },
  { id: "2", name: "Classic Bag", price: 180, image: "/bag1.jpg" },
  { id: "3", name: "Sneakers", price: 120, image: "/shoes1.jpg" },
];

export default function ProductShowcase() {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl font-extrabold mb-4 tracking-tight">
          Best Sellers
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our most popular products loved by our customers.
        </p>

        {/* Product Grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a
            href="/shop"
            className="inline-block bg-black text-white px-8 py-3 rounded-full text-lg font-medium tracking-wide hover:bg-gray-800 transition"
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
