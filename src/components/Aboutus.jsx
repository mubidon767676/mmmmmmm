"use client";

import React from "react";
import Link from "next/link";
import { FaAward, FaShippingFast, FaHeadset, FaRecycle } from "react-icons/fa";
import "./Components.css";

export default function AboutUs() {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "With over 15 years in fashion retail, Sarah founded Mubidon to bring quality clothing to everyone."
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Michael brings innovative design concepts from his experience in European fashion houses."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      position: "Customer Experience Manager",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "Emily ensures every customer receives the exceptional service Mubidon is known for."
    },
    {
      id: 4,
      name: "David Kim",
      position: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      bio: "David leads our commitment to ethical sourcing and environmental responsibility."
    }
  ];

  const values = [
    {
      icon: <FaAward />,
      title: "Quality First",
      description: "We never compromise on the quality of our materials and craftsmanship."
    },
    {
      icon: <FaShippingFast />,
      title: "Fast Delivery",
      description: "Get your orders delivered quickly with our efficient shipping network."
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Support",
      description: "Our customer service team is always here to help you."
    },
    {
      icon: <FaRecycle />,
      title: "Sustainability",
      description: "Committed to eco-friendly practices and ethical manufacturing."
    }
  ];

  return (
    <section className="about-us-section">
      {/* Hero Section */}
      <div className="about-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Our Story</h1>
            <p>From a small boutique to a trusted fashion destination</p>
          </div>
        </div>
      </div>

      <div className="container">
        {/* Mission Section */}
        <div className="mission-section">
          <div className="mission-content">
            <div className="mission-text">
              <h2>Our Mission</h2>
              <p>
                At Mubidon Store, we believe that everyone deserves to wear clothing that makes them 
                feel confident and comfortable. Founded in 2015, we started with a simple goal: to 
                provide high-quality, affordable fashion without compromising on style or ethics.
              </p>
              <p>
                Today, we've grown into a community of fashion enthusiasts who value sustainability, 
                quality, and exceptional customer service. Each piece in our collection is carefully 
                curated to ensure it meets our high standards for design, comfort, and durability.
              </p>
              <div className="stats-grid">
                <div className="stat-item">
                  <span className="stat-number">50,000+</span>
                  <span className="stat-label">Happy Customers</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">8</span>
                  <span className="stat-label">Years in Business</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Brand Partners</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Customer Support</span>
                </div>
              </div>
            </div>
            <div className="mission-image">
              <img 
                src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Mubidon Store Interior" 
              />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <p className="team-subtitle">The passionate people behind Mubidon Store</p>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="position">{member.position}</span>
                  <p>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="sustainability-section">
          <div className="sustainability-content">
            <div className="sustainability-text">
              <h2>Our Commitment to Sustainability</h2>
              <p>
                We're dedicated to reducing our environmental footprint through responsible sourcing, 
                eco-friendly packaging, and supporting fair labor practices. Our sustainability 
                initiatives include:
              </p>
              <ul>
                <li>Using organic and recycled materials</li>
                <li>Reducing water consumption in production</li>
                <li>Implementing carbon-neutral shipping</li>
                <li>Supporting local communities</li>
              </ul>
              <Link href="/sustainability" className="learn-more-btn">
                Learn More About Our Initiatives
              </Link>
            </div>
            <div className="sustainability-image">
              <img 
                src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Sustainable Fashion" 
              />
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2>Join the Mubidon Family</h2>
          <p>Experience the difference that quality and care make in every piece we offer.</p>
          <div className="cta-buttons">
            <Link href="/shop" className="cta-btn primary">Start Shopping</Link>
            <Link href="/contact" className="cta-btn secondary">Get In Touch</Link>
          </div>
        </div>
      </div>
    </section>
  );
}