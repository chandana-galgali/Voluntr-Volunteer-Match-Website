import React from 'react';
import '../styles/HomePage.css';
import heroImage from '../assets/hero-image.jpg'; 

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Welcome to Voluntr - Your Gateway to Community Service</h1>
      <p style={{ textAlign: 'center' }}>Connect with amazing volunteer opportunities and make a positive impact on your community.</p>
      <button className="explore-button">Explore Opportunities</button><br />
      <img
        src={heroImage}
        alt="Volunteer Hero"
        fetchpriority="high"
        decoding="async"
        width="1200"
        height="250"
      />
      <div className="about">
        <h2>What We Do?</h2>
        <p>At Voluntr, our mission is to bridge the gap between passionate individuals and organizations in need. We believe that everyone has the power to make a difference, and we provide the platform to make that happen. Whether you're interested in mentoring youth, supporting animal shelters, or participating in environmental cleanups, Voluntr offers a diverse range of opportunities to match your skills and interests. Our platform simplifies the process of finding and signing up for volunteer roles, making it easier than ever to contribute to your community and create lasting change. Join us today and become part of a network of dedicated volunteers committed to building a better world, one act of kindness at a time.</p>
      </div>
    </div>
  );
};

export default HomePage;