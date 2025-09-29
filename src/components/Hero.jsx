import Button from "./Ui/Button";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-gray-50 via-white to-gray-100">
      {/* Heading with gradient text */}
      <h1 className="text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-black via-gray-800 to-gray-600 tracking-tight">
        Discover Luxury & Style
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
        Explore our exclusive collection of fashion, watches, and accessories designed 
        to inspire elegance and confidence.
      </p>

      {/* Buttons */}
      <div className="flex gap-4">
        <Button label="Shop Now" variant="primary" />
        <Button label="Explore Collection" variant="secondary" />
      </div>
    </section>
  );
}
