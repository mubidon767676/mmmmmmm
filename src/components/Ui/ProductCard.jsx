"use client";
import Image from "next/image";
import Button from "./Button.jsx";

export default function ProductCard({ id, name, price, image }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition duration-300">
      {/* Product Image */}
      <div className="overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="rounded-t-2xl transform group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Content */}
      <div className="p-4 text-center">
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mt-1">${price}</p>

        {/* CTA Button */}
        <div className="mt-4">
          <Button
            label="Add to Cart"
            className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            onClick={() => console.log(`Added ${id}`)}
          />
        </div>
      </div>
    </div>
  );
}
