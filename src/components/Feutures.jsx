import { Star, Truck, Shield } from "lucide-react";

const features = [
  { 
    icon: <Star className="w-10 h-10 text-yellow-500" />, 
    title: "Premium Quality", 
    desc: "Luxury products crafted with care." 
  },
  { 
    icon: <Truck className="w-10 h-10 text-blue-500" />, 
    title: "Fast Delivery", 
    desc: "Worldwide shipping in 3-5 days." 
  },
  { 
    icon: <Shield className="w-10 h-10 text-green-500" />, 
    title: "Secure Payment", 
    desc: "Trusted and safe transactions." 
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <h2 className="text-4xl font-extrabold text-center mb-16 tracking-tight">
        Why Shop With Us
      </h2>
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {features.map((f, i) => (
          <div 
            key={i} 
            className="bg-white border border-gray-100 shadow-lg rounded-2xl p-8 text-center 
                       transition-transform transform hover:scale-105 hover:shadow-2xl"
          >
            <div className="flex justify-center mb-6 animate-bounce">{f.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
