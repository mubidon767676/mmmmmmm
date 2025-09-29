"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Components.css";



export default function Women() {
  const [activeFilter, setActiveFilter] = useState("all");

  const womenProducts = [
    {
      id: 1,
      name: "Elegant Summer Dress",
      category: "Dresses",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["bestseller", "new"]
    },
    {
      id: 2,
      name: "Designer Handbag",
      category: "Accessories",
      price: 149.99,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["luxury"]
    },
    {
      id: 3,
      name: "Casual Blouse",
      category: "Tops",
      price: 45.99,
      image: "https://images.unsplash.com/photo-1485231183945-fffde14559c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["essential"]
    },
    {
      id: 4,
      name: "High-Waist Jeans",
      category: "Bottoms",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["popular"]
    }
  ];

  const categories = ["all", "dresses", "tops", "bottoms", "accessories", "footwear"];

  return (
    <section className="women-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Women's Collection</h1>
          <p className="page-subtitle">Discover fashion that celebrates your unique style</p>
        </div>

        <div className="collection-banners">
          <div className="banner">
            <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Casual Wear" />
            <div className="banner-content">
              <h3>Casual Collection</h3>
              <Link href="/women/casual" className="banner-btn">Shop Now</Link>
            </div>
          </div>
          <div className="banner">
            <img src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Formal Wear" />
            <div className="banner-content">
              <h3>Formal Collection</h3>
              <Link href="/women/formal" className="banner-btn">Shop Now</Link>
            </div>
          </div>
        </div>

        <div className="filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {womenProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="quick-view-btn">Quick View</button>
                  <button className="wishlist-btn">♡</button>
                </div>
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3 className="product-name">{product.name}</h3>
                <div className="product-price">${product.price}</div>
                <div className="product-actions">
                  <button className="add-to-cart-btn">Add to Cart</button>
                  <Link href={`/product/${product.id}`} className="view-details-btn">Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}