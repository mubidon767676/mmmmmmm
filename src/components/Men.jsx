"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./Components.css";




export default function Men() {
  const [activeFilter, setActiveFilter] = useState("all");

  const menProducts = [
    {
      id: 1,
      name: "Classic Denim Jacket",
      category: "Jackets",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["bestseller"]
    },
    {
      id: 2,
      name: "Premium Cotton T-Shirt Pack",
      category: "T-Shirts",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["essential"]
    },
    {
      id: 3,
      name: "Slim Fit Chino Pants",
      category: "Pants",
      price: 59.99,
      image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["new"]
    },
    {
      id: 4,
      name: "Designer Leather Shoes",
      category: "Footwear",
      price: 129.99,
      image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      tags: ["premium"]
    }
  ];

  const categories = ["all", "t-shirts", "jackets", "pants", "footwear", "accessories"];

  return (
    <section className="men-section">
      <div className="container">
        <div className="section-header">
          <h1 className="page-title">Men's Collection</h1>
          <p className="page-subtitle">Stylish and comfortable clothing for the modern man</p>
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
          {menProducts.map((product) => (
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

        <div className="load-more-section">
          <button className="load-more-btn">Load More</button>
        </div>
      </div>
    </section>
  );
}