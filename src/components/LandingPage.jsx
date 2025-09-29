"use client";

import React from "react";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section id="mainPage" className="landing-page">
      {/* Mubidon-style Hero Section */}
      <div className="mubidon-hero">
        <div className="mubidon-hero-content">
          <div className="mubidon-text-content">
            <span className="mubidon-badge">mubidon store</span>
            <h1 className="mubidon-hero-title">
              ELEVATE YOUR STYLE.
            </h1>
            <p className="mubidon-hero-subtitle">
              Discover premium clothing and accessories that blend comfort with sophistication. 
              From casual wear to statement pieces, Mubidon Store has everything to complete your look.
            </p>
            <div className="mubidon-cta-buttons">
              <a href="/shop" className="mubidon-btn mubidon-btn-primary">
                Shop Now
              </a>
              <a href="/membership" className="mubidon-btn mubidon-btn-secondary">
                Join Mubidon
              </a>
            </div>
          </div>
          
          <div className="mubidon-hero-image">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Mubidon Fashion Collection" 
              className="mubidon-fashion-image"
            />
          </div>
        </div>
        
        {/* Mubidon-style Scroll Indicator */}
        <div className="mubidon-scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-arrow"></div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="mubidon-featured">
        <div className="container">
          <h2 className="mubidon-section-title">Featured Collection</h2>
          <div className="mubidon-products-grid">
            <div className="mubidon-product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Premium T-Shirt" />
              </div>
              <div className="product-info">
                <h3>Premium Cotton T-Shirt</h3>
                <p>Classic fit, comfortable everyday wear</p>
                <span className="price">$29.99</span>
              </div>
            </div>
            
            <div className="mubidon-product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Designer Jacket" />
              </div>
              <div className="product-info">
                <h3>Designer Denim Jacket</h3>
                <p>Vintage style, modern comfort</p>
                <span className="price">$89.99</span>
              </div>
            </div>
            
            <div className="mubidon-product-card">
              <div className="product-image">
                <img src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Accessory Bag" />
              </div>
              <div className="product-info">
                <h3>Leather Crossbody Bag</h3>
                <p>Elegant and practical accessory</p>
                <span className="price">$59.99</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="mubidon-categories">
        <div className="container">
          <h2 className="mubidon-section-title">Shop by Category</h2>
          <div className="mubidon-categories-grid">
            <div className="mubidon-category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Men's Fashion" />
              </div>
              <div className="category-info">
                <h3>Men's Collection</h3>
                <p>Trendy and comfortable apparel</p>
                <a href="/mens" className="mubidon-btn mubidon-btn-outline">Shop Now</a>
              </div>
            </div>
            
            <div className="mubidon-category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Women's Fashion" />
              </div>
              <div className="category-info">
                <h3>Women's Collection</h3>
                <p>Elegant and stylish outfits</p>
                <a href="/womens" className="mubidon-btn mubidon-btn-outline">Shop Now</a>
              </div>
            </div>
            
            <div className="mubidon-category-card">
              <div className="category-image">
                <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Accessories" />
              </div>
              <div className="category-info">
                <h3>Accessories</h3>
                <p>Complete your look with style</p>
                <a href="/accessories" className="mubidon-btn mubidon-btn-outline">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Membership Section */}
      <div className="mubidon-membership">
        <div className="container">
          <div className="membership-content">
            <h2>JOIN THE MUBIDON FAMILY</h2>
            <p>Create your profile to get exclusive access to new collections, special promotions, and member-only discounts.</p>
            <a href="/join" className="mubidon-btn mubidon-btn-outline">Become a Member</a>
          </div>
        </div>
      </div>
    </section>
  );
}