import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import ProductCard from "@/components/Ui/ProductCard";


export default function ProductsPage() {
  const products = [
    { id: 1, name: "Smart Watch", price: "$199", image: "/watch.jpg" },
    { id: 2, name: "Wireless Earbuds", price: "$99", image: "/earbuds.jpg" },
    { id: 3, name: "Leather Backpack", price: "$149", image: "/backpack.jpg" },
    { id: 4, name: "Sneakers", price: "$129", image: "/sneakers.jpg" },
  ];

  return (
    
    <main>
      <Navbar />
      <section className="py-16 px-6">
        <h1 className="text-4xl font-bold text-center mb-10">Our Products</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
