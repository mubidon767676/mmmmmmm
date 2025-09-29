"use client";

import React from "react";
import Link from "next/link";
import "./Components.css";


export default function NewArrivals() {
  const newProducts = [
    {
      id: 1,
      name: "Premium Wool Blend Coat",
      category: "Outerwear",
      price: 189.99,
      image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isNew: true
    },
    {
      id: 2,
      name: "Designer Silk Dress",
      category: "Women's Dresses",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isNew: true
    },
    {
      id: 3,
      name: "Smart Casual Blazer",
      category: "Men's Formal",
      price: 159.99,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isNew: true
    },
    {
      id: 4,
      name: "Leather Crossbody Bag",
      category: "Accessories",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      isNew: true
    }
  ];

  return (
    <section className="new-arrivals-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">New Arrivals</h2>
          <p className="section-subtitle">Discover the latest additions to our collection</p>
          <Link href="/shop/all" className="view-all-btn">View All New Arrivals</Link>
        </div>

        <div className="new-arrivals-grid">
          {newProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                {product.isNew && <span className="new-badge">New</span>}
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">${product.price}</div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}